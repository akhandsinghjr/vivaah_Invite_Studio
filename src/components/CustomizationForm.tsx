
import { useState } from 'react';
import { customizationOptions, invitations } from '@/lib/data';
import { ArrowLeft, ArrowRight, CheckCircle, Upload } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

type FormData = {
  brideFirstName: string;
  brideLastName: string;
  groomFirstName: string;
  groomLastName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  venueAddress: string;
  additionalDetails: string;
  color: string;
  font: string;
  image: File | null;
};

const initialFormData: FormData = {
  brideFirstName: '',
  brideLastName: '',
  groomFirstName: '',
  groomLastName: '',
  weddingDate: '',
  weddingTime: '',
  venue: '',
  venueAddress: '',
  additionalDetails: '',
  color: 'gold',
  font: 'playfair',
  image: null,
};

const CustomizationForm = () => {
  const { id } = useParams<{ id: string }>();
  const invitation = id ? invitations.find(inv => inv.id === id) : null;
  
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [step, setStep] = useState(1);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, image: file }));
    
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to the server
    console.log('Form submitted:', formData);
    setStep(3); // Move to confirmation step
  };
  
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  // Calculate completion percentage
  const getCompletionPercentage = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(value => 
      value !== '' && value !== null
    ).length;
    
    return Math.round((filledFields / totalFields) * 100);
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-muted-foreground">{step === 3 ? 'Complete' : `Step ${step} of 2`}</span>
          <span className="text-sm text-wedding-charcoal font-medium">{getCompletionPercentage()}% complete</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-wedding-gold transition-all duration-500 ease-out"
            style={{ width: `${getCompletionPercentage()}%` }}
          ></div>
        </div>
      </div>
      
      {step === 1 && (
        <div className="animate-fade-in">
          <h2 className="text-2xl font-serif font-medium text-wedding-charcoal mb-6">Wedding Details</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Bride's First Name</label>
                <input
                  type="text"
                  name="brideFirstName"
                  value={formData.brideFirstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  placeholder="e.g. Emma"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Bride's Last Name</label>
                <input
                  type="text"
                  name="brideLastName"
                  value={formData.brideLastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  placeholder="e.g. Johnson"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Groom's First Name</label>
                <input
                  type="text"
                  name="groomFirstName"
                  value={formData.groomFirstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  placeholder="e.g. Michael"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Groom's Last Name</label>
                <input
                  type="text"
                  name="groomLastName"
                  value={formData.groomLastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                  placeholder="e.g. Smith"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Wedding Date</label>
                <input
                  type="date"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Wedding Time</label>
                <input
                  type="time"
                  name="weddingTime"
                  value={formData.weddingTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-wedding-charcoal mb-1">Venue Name</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                placeholder="e.g. The Grand Ballroom"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-wedding-charcoal mb-1">Venue Address</label>
              <input
                type="text"
                name="venueAddress"
                value={formData.venueAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
                placeholder="e.g. 123 Wedding Lane, Reception City, NY 10001"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-wedding-charcoal mb-1">Additional Details (Optional)</label>
              <textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30 min-h-[100px]"
                placeholder="e.g. Black tie optional. Dinner and dancing to follow ceremony."
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90 flex items-center gap-2"
              >
                Next: Design Options <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
      
      {step === 2 && (
        <div className="animate-fade-in">
          <div className="flex items-center mb-6">
            <button 
              className="mr-4 text-wedding-charcoal hover:text-wedding-gold transition-colors"
              onClick={prevStep}
            >
              <ArrowLeft size={20} />
            </button>
            <h2 className="text-2xl font-serif font-medium text-wedding-charcoal">Design Customization</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Color Theme</label>
                <div className="grid grid-cols-4 gap-3">
                  {customizationOptions.colors.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      className={`w-full aspect-square rounded-md relative border-2 transition-all ${
                        formData.color === color.id
                          ? 'border-wedding-gold scale-110 shadow-md'
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setFormData(prev => ({ ...prev, color: color.id }))}
                    >
                      {formData.color === color.id && (
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                          <CheckCircle size={16} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Selected: {customizationOptions.colors.find(c => c.id === formData.color)?.name || 'None'}
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-wedding-charcoal mb-1">Font Style</label>
                <select
                  name="font"
                  value={formData.font}
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
            
            {invitation?.customizable.images && (
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
                          setFormData(prev => ({ ...prev, image: null }));
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
            )}
            
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border border-wedding-gold text-wedding-charcoal rounded-md font-medium transition-all hover:bg-wedding-gold/10"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90"
              >
                Submit Customization
              </button>
            </div>
          </form>
        </div>
      )}
      
      {step === 3 && (
        <div className="text-center py-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          
          <h2 className="text-2xl font-serif font-medium text-wedding-charcoal mb-3">
            Customization Submitted!
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Your invitation customization has been received. We'll prepare a proof and get back to you within 24-48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/browse"
              className="w-full sm:w-auto px-6 py-3 border border-wedding-gold text-wedding-charcoal rounded-md font-medium transition-all hover:bg-wedding-gold/10"
            >
              Browse More Designs
            </Link>
            <Link
              to="/"
              className="w-full sm:w-auto px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90"
            >
              Return Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizationForm;
