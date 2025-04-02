import { useState } from 'react';
import { customizationOptions, invitations } from '@/lib/data';
import { ArrowLeft, ArrowRight, CheckCircle, Upload, IndianRupee, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

// Wedding function types with pricing
const weddingFunctions = [
  { id: 'haldi', name: 'Haldi Ceremony', price: 999, description: 'Pre-wedding turmeric ceremony' },
  { id: 'mehendi', name: 'Mehendi', price: 999, description: 'Traditional henna application ceremony' },
  { id: 'sangeet', name: 'Sangeet', price: 1299, description: 'Musical evening celebration' },
  { id: 'wedding', name: 'Wedding Ceremony', price: 1499, description: 'Main wedding ceremony' },
  { id: 'reception', name: 'Reception', price: 1499, description: 'Post-wedding celebration' },
  { id: 'sufi', name: 'Sufi Night', price: 1199, description: 'Spiritual music night' },
  { id: 'cocktail', name: 'Cocktail Party', price: 1299, description: 'Pre-wedding celebration' },
];

type DesignSelection = {
  functionId: string;
  designId: string;
};

type FunctionData = {
  functionType: string;
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
  date: string;
  time: string;
  venue: string;
  venueAddress: string;
  additionalDetails: string;
  color: string;
  font: string;
  image: File | null;
};

const initialFunctionData: FunctionData = {
  functionType: '',
  brideFirstName: '',
  brideLastName: '',
  groomFirstName: '',
  groomLastName: '',
  date: '',
  time: '',
  venue: '',
  venueAddress: '',
  additionalDetails: '',
  color: 'gold',
  font: 'playfair',
  image: null,
};

type CustomizationFormProps = {
  selectedFunctions?: string[];
};

const CustomizationForm = ({ selectedFunctions = [] }: CustomizationFormProps) => {
  const { id } = useParams<{ id: string }>();
  const invitation = id ? invitations.find(inv => inv.id === id) : null;
  
  // Phases: 1 = design selection, 2 = details entry, 3 = summary
  const [phase, setPhase] = useState(1);
  
  // Current function index (for design selection phase)
  const [currentFunctionIndex, setCurrentFunctionIndex] = useState(0);
  
  // Designs selected for each function
  const [selectedDesigns, setSelectedDesigns] = useState<DesignSelection[]>([]);
  
  // State for all functions data (for details phase)
  const [functionsData, setFunctionsData] = useState<Record<string, FunctionData>>({});
  
  // Current function data being edited (for details phase)
  const [currentFunction, setCurrentFunction] = useState<string>('');
  const [currentFunctionData, setCurrentFunctionData] = useState<FunctionData>(initialFunctionData);
  
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  // If using a specific invitation design (from URL param)
  const usingSingleDesign = !!id;
  
  // Functions to customize (either from props or just the one from URL)
  const functionsToCustomize = usingSingleDesign 
    ? ['wedding'] // If URL has an ID, we're just customizing one function
    : selectedFunctions;
  
  // Calculate total price
  const calculateTotalPrice = () => {
    return functionsToCustomize.reduce((total, functionId) => {
      const func = weddingFunctions.find(f => f.id === functionId);
      return total + (func?.price || 0);
    }, 0);
  };
  
  // Get function details by ID
  const getFunctionDetails = (functionId: string) => {
    return weddingFunctions.find(f => f.id === functionId) || 
      { id: 'custom', name: 'Custom Function', price: 0, description: 'Custom function description' };
  };
  
  // Get current function details
  const getCurrentFunction = () => {
    if (currentFunctionIndex >= 0 && currentFunctionIndex < functionsToCustomize.length) {
      return getFunctionDetails(functionsToCustomize[currentFunctionIndex]);
    }
    return null;
  };
  
  // Handle design selection for current function
  const handleDesignSelection = (designId: string) => {
    const functionId = functionsToCustomize[currentFunctionIndex];
    
    setSelectedDesigns(prev => {
      // Remove any existing design selection for this function
      const filtered = prev.filter(item => item.functionId !== functionId);
      // Add the new selection
      return [...filtered, { functionId, designId }];
    });
  };
  
  // Move to next function in design selection phase
  const nextFunction = () => {
    // Check if design is selected for current function
    const functionId = functionsToCustomize[currentFunctionIndex];
    const hasSelectedDesign = selectedDesigns.some(item => item.functionId === functionId);
    
    if (!hasSelectedDesign) {
      alert("Please select a design for this function");
      return;
    }
    
    // If more functions to customize
    if (currentFunctionIndex < functionsToCustomize.length - 1) {
      setCurrentFunctionIndex(prev => prev + 1);
    } else {
      // All designs selected, move to details phase
      setPhase(2);
      
      // Initialize with first function's details
      if (functionsToCustomize.length > 0) {
        const firstFunction = functionsToCustomize[0];
        setCurrentFunction(firstFunction);
        setCurrentFunctionData({
          ...initialFunctionData,
          functionType: firstFunction
        });
      }
    }
  };
  
  // Go back to previous function in design selection phase
  const prevFunction = () => {
    if (currentFunctionIndex > 0) {
      setCurrentFunctionIndex(prev => prev - 1);
    }
  };
  
  // Handle input changes in details phase
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentFunctionData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle file changes in details phase
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCurrentFunctionData(prev => ({ ...prev, image: file }));
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };
  
  // Save current function details and move to next function
  const saveAndNext = () => {
    // Validate required fields
    if (!currentFunctionData.brideFirstName || !currentFunctionData.groomFirstName || 
        !currentFunctionData.date || !currentFunctionData.venue) {
      alert("Please fill in all required fields");
      return;
    }
    
    // Save current function data
    setFunctionsData(prev => ({
      ...prev,
      [currentFunction]: currentFunctionData
    }));
    
    // Find next function that hasn't been detailed yet
    const nextFunctionIndex = functionsToCustomize.findIndex(
      (func, index) => 
        index > functionsToCustomize.indexOf(currentFunction) && 
        !functionsData[func]
    );
    
    if (nextFunctionIndex !== -1) {
      // Move to next function
      const nextFunction = functionsToCustomize[nextFunctionIndex];
      setCurrentFunction(nextFunction);
      
      // Pre-fill with current data for convenience
      setCurrentFunctionData({
        ...currentFunctionData,
        functionType: nextFunction,
        additionalDetails: '', // Reset some fields
      });
      
      setPreviewUrl(null); // Reset image preview
    } else {
      // All functions detailed, move to summary
      setPhase(3);
    }
  };
  
  // Go back to previous function in details phase
  const prevDetails = () => {
    // Find previous function that has been detailed
    const prevFunctionIndex = [...functionsToCustomize].reverse().findIndex(
      func => func !== currentFunction && functionsData[func]
    );
    
    if (prevFunctionIndex !== -1) {
      const actualIndex = functionsToCustomize.length - 1 - prevFunctionIndex;
      const prevFunction = functionsToCustomize[actualIndex];
      setCurrentFunction(prevFunction);
      setCurrentFunctionData(functionsData[prevFunction]);
      
      // Set preview URL if there was an image
      if (functionsData[prevFunction].image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(functionsData[prevFunction].image as File);
      } else {
        setPreviewUrl(null);
      }
    } else if (phase === 2) {
      // If no previous detailed function, go back to design selection
      setPhase(1);
    }
  };
  
  // If no functions selected and no ID provided, show message
  if (functionsToCustomize.length === 0 && !id) {
    return (
      <div className="text-center py-8">
        <p className="text-wedding-charcoal mb-4">Please select at least one wedding function to customize.</p>
        <Link 
          to="/customize" 
          className="px-4 py-2 bg-wedding-gold text-white rounded-md"
        >
          Go Back
        </Link>
      </div>
    );
  }
  
  // Calculate overall progress
  const calculateProgress = () => {
    if (phase === 3) return 100;
    
    if (phase === 1) {
      // Design selection phase
      return Math.round(((currentFunctionIndex + 1) / functionsToCustomize.length) * 33);
    } else if (phase === 2) {
      // Details phase
      const completedFunctions = Object.keys(functionsData).length;
      const totalFunctions = functionsToCustomize.length;
      return 33 + Math.round((completedFunctions / totalFunctions) * 67);
    }
    
    return 0;
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            {phase === 1 && `Selecting Designs (${currentFunctionIndex + 1}/${functionsToCustomize.length})`}
            {phase === 2 && `Entering Details (${Object.keys(functionsData).length + 1}/${functionsToCustomize.length})`}
            {phase === 3 && 'Review & Checkout'}
          </span>
          <span className="text-sm text-wedding-charcoal font-medium">{calculateProgress()}% complete</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-wedding-gold transition-all duration-500 ease-out"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>
      
      {/* PHASE 1: Design Selection */}
      {phase === 1 && (
        <div className="animate-fade-in">
          <div className="flex items-center mb-6">
            {currentFunctionIndex > 0 && (
              <button 
                className="mr-4 text-wedding-charcoal hover:text-wedding-gold transition-colors"
                onClick={prevFunction}
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h2 className="text-2xl font-serif font-medium text-wedding-charcoal">
              Select a Design for {getCurrentFunction()?.name}
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Choose your favorite design for this function. You'll customize the details later.
          </p>
          
          {/* Design Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* If specific design ID is provided, only show that design */}
            {id ? (
              invitation && (
                <div 
                  className="border rounded-lg overflow-hidden border-wedding-gold ring-2 ring-wedding-gold/30"
                >
                  <img 
                    src={invitation.coverImage || invitation.image} 
                    alt={invitation.title} 
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium">{invitation.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{invitation.description}</p>
                    <div className="mt-3 flex justify-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-wedding-gold/20 text-wedding-gold rounded-full text-sm">
                        <Check size={16} /> Selected
                      </span>
                    </div>
                  </div>
                </div>
              )
            ) : (
              // Otherwise show all designs that match the current function
              invitations
                .filter(inv => {
                  const currentFunctionId = functionsToCustomize[currentFunctionIndex];
                  // Add null check for tags property to avoid "undefined.includes" error
                  return Array.isArray(inv.tags) && inv.tags.includes(currentFunctionId);
                })
                .map((design) => {
                  const isSelected = selectedDesigns.some(
                    item => 
                      item.functionId === functionsToCustomize[currentFunctionIndex] && 
                      item.designId === design.id
                  );
                  
                  return (
                    <div 
                      key={design.id}
                      className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                        isSelected 
                          ? 'border-wedding-gold ring-2 ring-wedding-gold/30' 
                          : 'border-gray-200 hover:border-wedding-gold/50'
                      }`}
                      onClick={() => handleDesignSelection(design.id)}
                    >
                      <div className="relative">
                        <img 
                          src={design.coverImage || design.image} 
                          alt={design.title} 
                          className="w-full aspect-[3/4] object-cover"
                        />
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-wedding-gold text-white w-8 h-8 rounded-full flex items-center justify-center">
                            <Check size={16} />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{design.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{design.description}</p>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-wedding-gold font-medium flex items-center">
                            <IndianRupee size={14} className="mr-0.5" />
                            {design.price}
                          </span>
                          {isSelected && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-wedding-gold/20 text-wedding-gold rounded-full text-sm">
                              Selected
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
            )}
          </div>
          
          <div className="flex justify-between mt-8">
            {currentFunctionIndex > 0 ? (
              <button
                type="button"
                onClick={prevFunction}
                className="px-6 py-3 border border-wedding-gold text-wedding-charcoal rounded-md font-medium transition-all hover:bg-wedding-gold/10"
              >
                Previous Function
              </button>
            ) : (
              <div></div> // Empty div to maintain the flex layout
            )}
            
            <button
              type="button"
              onClick={nextFunction}
              className="px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90 flex items-center gap-2"
            >
              {currentFunctionIndex < functionsToCustomize.length - 1 
                ? 'Next Function' 
                : 'Continue to Details'}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
      
      {/* PHASE 2: Enter Details */}
      {phase === 2 && (
        <div className="animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div className="flex items-center">
              <button 
                className="mr-4 text-wedding-charcoal hover:text-wedding-gold transition-colors"
                onClick={prevDetails}
              >
                <ArrowLeft size={20} />
              </button>
              <h2 className="text-2xl font-serif font-medium text-wedding-charcoal">
                {getFunctionDetails(currentFunction).name} Details
              </h2>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <div className="flex flex-wrap gap-2">
                {functionsToCustomize.map((func, index) => {
                  const isActive = func === currentFunction;
                  const isCompleted = !!functionsData[func];
                  
                  return (
                    <button
                      key={func}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                        ${isActive 
                          ? 'bg-wedding-gold text-white' 
                          : isCompleted 
                            ? 'bg-wedding-gold/20 text-wedding-gold' 
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      onClick={() => {
                        // Save current data before switching
                        if (currentFunction) {
                          setFunctionsData(prev => ({
                            ...prev,
                            [currentFunction]: currentFunctionData
                          }));
                        }
                        
                        // Switch to the clicked function
                        setCurrentFunction(func);
                        
                        // Load existing data or create new
                        if (functionsData[func]) {
                          setCurrentFunctionData(functionsData[func]);
                        } else {
                          setCurrentFunctionData({
                            ...initialFunctionData, 
                            functionType: func,
                            // Copy some fields from current data for convenience
                            brideFirstName: currentFunctionData.brideFirstName || '',
                            brideLastName: currentFunctionData.brideLastName || '',
                            groomFirstName: currentFunctionData.groomFirstName || '',
                            groomLastName: currentFunctionData.groomLastName || '',
                          });
                        }
                        
                        setPreviewUrl(null);
                      }}
                    >
                      {isCompleted ? <Check size={16} /> : index + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="bg-wedding-cream/20 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-4">
              {/* Show selected design thumbnail */}
              {selectedDesigns.some(d => d.functionId === currentFunction) && (
                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                  {(() => {
                    const selection = selectedDesigns.find(d => d.functionId === currentFunction);
                    if (selection) {
                      const design = invitations.find(inv => inv.id === selection.designId);
                      if (design) {
                        return (
                          <img 
                            src={design.coverImage || design.image} 
                            alt={design.title} 
                            className="w-full h-full object-cover"
                          />
                        );
                      }
                    }
                    return null;
                  })()}
                </div>
              )}
              
              <div>
                <p className="text-sm text-muted-foreground">Selected Design:</p>
                <p className="font-medium">
                  {(() => {
                    const selection = selectedDesigns.find(d => d.functionId === currentFunction);
                    if (selection) {
                      const design = invitations.find(inv => inv.id === selection.designId);
                      return design ? design.title : 'Unknown Design';
                    }
                    return 'None selected';
                  })()}
                </p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Bride's First Name*</label>
                <input
                  type="text"
                  name="brideFirstName"
                  value={currentFunctionData.brideFirstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  placeholder="e.g. Emma"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Bride's Last Name</label>
                <input
                  type="text"
                  name="brideLastName"
                  value={currentFunctionData.brideLastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  placeholder="e.g. Johnson"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Groom's First Name*</label>
                <input
                  type="text"
                  name="groomFirstName"
                  value={currentFunctionData.groomFirstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  placeholder="e.g. Michael"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Groom's Last Name</label>
                <input
                  type="text"
                  name="groomLastName"
                  value={currentFunctionData.groomLastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  placeholder="e.g. Smith"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Date*</label>
                <input
                  type="date"
                  name="date"
                  value={currentFunctionData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Time</label>
                <input
                  type="time"
                  name="time"
                  value={currentFunctionData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-wedding-charcoal mb-1">Venue Name*</label>
              <input
                type="text"
                name="venue"
                value={currentFunctionData.venue}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                placeholder="e.g. The Grand Ballroom"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-wedding-charcoal mb-1">Venue Address</label>
              <input
                type="text"
                name="venueAddress"
                value={currentFunctionData.venueAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                placeholder="e.g. 123 Wedding Lane, Reception City, NY 10001"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-wedding-charcoal mb-1">Additional Details (Optional)</label>
              <textarea
                name="additionalDetails"
                value={currentFunctionData.additionalDetails}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30 min-h-[100px]"
                placeholder="e.g. Traditional attire preferred. Dinner will be served."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Color Theme</label>
                <div className="grid grid-cols-4 gap-3">
                  {customizationOptions.colors.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      className={`w-full aspect-square rounded-md relative border-2 transition-all ${
                        currentFunctionData.color === color.id
                          ? 'border-wedding-gold scale-110 shadow-md'
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setCurrentFunctionData(prev => ({ ...prev, color: color.id }))}
                    >
                      {currentFunctionData.color === color.id && (
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                          <CheckCircle size={16} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Selected: {customizationOptions.colors.find(c => c.id === currentFunctionData.color)?.name || 'None'}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Font Style</label>
                <select
                  name="font"
                  value={currentFunctionData.font}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                >
                  {customizationOptions.fonts.map((font) => (
                    <option key={font.id} value={font.id}>
                      {font.name} ({font.category})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-muted-foreground mt-2">
                  This will affect the main text on your invitation
                </p>
              </div>
            </div>
            
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-wedding-charcoal mb-1">Upload Image (Optional)</label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                {previewUrl ? (
                  <div className="relative">
                    <img src={previewUrl} alt="Preview" className="max-h-64 mx-auto rounded-md" />
                    <button
                      type="button"
                      className="mt-4 text-sm text-red-500 hover:text-red-700"
                      onClick={() => {
                        setCurrentFunctionData(prev => ({ ...prev, image: null }));
                        setPreviewUrl(null);
                      }}
                    >
                      Remove image
                    </button>
                  </div>
                ) : (
                  <div className="py-8">
                    <Upload size={36} className="mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-4">
                      Drag and drop an image, or click to browse
                    </p>
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="image-upload"
                      className="px-4 py-2 bg-wedding-cream text-wedding-charcoal rounded-md font-medium cursor-pointer hover:bg-wedding-cream/70 transition-colors"
                    >
                      Browse Files
                    </label>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Recommended image size: 1200x800 pixels (3:2 ratio)
              </p>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevDetails}
                className="px-6 py-3 border border-wedding-gold text-wedding-charcoal rounded-md font-medium transition-all hover:bg-wedding-gold/10"
              >
                Back
              </button>
              
              <button
                type="button"
                onClick={saveAndNext}
                className="px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90"
              >
                {Object.keys(functionsData).length < functionsToCustomize.length - 1 
                  ? 'Save & Next Function' 
                  : 'Save & View Summary'}
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* PHASE 3: Summary and Checkout */}
      {phase === 3 && (
        <div className="animate-fade-in">
          <h2 className="text-2xl font-serif font-medium text-wedding-charcoal mb-6">
            Your Wedding Invitation Package
          </h2>
          
          <div className="bg-wedding-cream/30 rounded-lg p-6 mb-6">
            <h3 className="font-medium text-lg mb-4">Selected Designs & Details</h3>
            
            <div className="space-y-4 mb-6">
              {functionsToCustomize.map((functionId) => {
                const functionDetails = getFunctionDetails(functionId);
                const designSelection = selectedDesigns.find(d => d.functionId === functionId);
                const design = designSelection 
                  ? invitations.find(inv => inv.id === designSelection.designId) 
                  : null;
                const detailsData = functionsData[functionId];
                
                return (
                  <div key={functionId} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      {design && (
                        <div className="w-full md:w-1/4">
                          <img 
                            src={design.coverImage || design.image} 
                            alt={design.title} 
                            className="w-full h-32 object-cover rounded-md" 
                          />
                        </div>
                      )}
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">{functionDetails?.name || 'Custom Function'}</h4>
                          <span className="font-medium flex items-center">
                            <IndianRupee size={14} className="mr-1" />
                            {functionDetails?.price || 0}
                          </span>
                        </div>
                        
                        {detailsData && (
                          <div className="mt-2 text-sm">
                            <p>
                              <span className="text-muted-foreground">Couple: </span>
                              {detailsData.brideFirstName} {detailsData.brideLastName} & {detailsData.groomFirstName} {detailsData.groomLastName}
                            </p>
                            <p>
                              <span className="text-muted-foreground">Date: </span>
                              {detailsData.date ? new Date(detailsData.date).toLocaleDateString() : 'Not specified'}
                            </p>
                            <p>
                              <span className="text-muted-foreground">Venue: </span>
                              {detailsData.venue || 'Not specified'}
                            </p>
                            <p>
                              <span className="text-muted-foreground">Design: </span>
                              {design?.title || 'Not selected'}
                            </p>
                          </div>
                        )}
                        
                        <div className="flex gap-2 mt-2">
                          <button
                            type="button"
                            className="text-xs text-wedding-gold hover:underline"
                            onClick={() => {
                              // Switch to design selection for this function
                              setPhase(1);
                              const index = functionsToCustomize.findIndex(id => id === functionId);
                              setCurrentFunctionIndex(index);
                            }}
                          >
                            Edit Design
                          </button>
                          <button
                            type="button"
                            className="text-xs text-wedding-gold hover:underline"
                            onClick={() => {
                              // Switch to details for this function
                              setPhase(2);
                              setCurrentFunction(functionId);
                              setCurrentFunctionData(functionsData[functionId]);
                            }}
                          >
                            Edit Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span className="flex items-center">
                  <IndianRupee size={18} className="mr-1" />
                  {calculateTotalPrice()}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground mt-2">
                All prices are inclusive of taxes and include digital invitation delivery
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => {
                // Go back to last function's details
                setPhase(2);
                const lastFunction = functionsToCustomize[functionsToCustomize.length - 1];
                setCurrentFunction(lastFunction);
                setCurrentFunctionData(functionsData[lastFunction]);
              }}
              className="w-full sm:w-auto px-6 py-3 border border-wedding-gold text-wedding-charcoal rounded-md font-medium transition-all hover:bg-wedding-gold/10"
            >
              Go Back
            </button>
            
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90"
              onClick={() => {
                // In a real app, this would process the order
                alert('Your order has been received! We will process it and get back to you shortly.');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizationForm;
