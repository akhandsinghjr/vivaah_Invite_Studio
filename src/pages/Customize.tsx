import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomizationForm from "@/components/CustomizationForm";
import CustomizeIntro from "@/components/CustomizeIntro";
import { useParams } from "react-router-dom";
import { Check, IndianRupee, Plus } from "lucide-react";

// Wedding function types with pricing
const weddingFunctions = [
  { 
    id: 'haldi', 
    name: 'Haldi Ceremony', 
    price: 999, 
    description: 'Pre-wedding turmeric ceremony',
    image: 'https://www.ruraltreasures.com/cdn/shop/articles/the-traditional-significance-of-haldi-ceremony.jpg?v=1644061950'
  },
  { 
    id: 'mehendi', 
    name: 'Mehendi', 
    price: 999, 
    description: 'Traditional henna application ceremony',
    image: 'https://cdn0.weddingwire.in/article-real-wedding-o/5918/3_2/960/jpg/15_48195.jpeg'
  },
  { 
    id: 'sangeet', 
    name: 'Sangeet', 
    price: 1299, 
    description: 'Musical evening celebration',
    image: 'https://media-api.xogrp.com/images/0990bf67-cb5d-4f68-8a21-48c8c3cbe386~rs_768.h'
  },
  { 
    id: 'wedding', 
    name: 'Wedding Ceremony', 
    price: 1499, 
    description: 'Main wedding ceremony',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=500&h=350&q=80'
  },
  { 
    id: 'reception', 
    name: 'Reception', 
    price: 1499, 
    description: 'Post-wedding celebration',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=500&h=350&q=80'
  },
  { 
    id: 'sufi', 
    name: 'Sufi Night', 
    price: 1199, 
    description: 'Spiritual music night',
    image: 'https://www.bollywoodshaadis.com/img/article-20221234312454545945000.jpg'
  },
  { 
    id: 'cocktail', 
    name: 'Cocktail Party', 
    price: 1299, 
    description: 'Pre-wedding celebration',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=500&h=350&q=80'
  },
];

const Customize = () => {
  const { id } = useParams<{ id: string }>();
  
  // State for tracking selected functions
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
  const [functionSelectionComplete, setFunctionSelectionComplete] = useState(false);
  
  // Find the minimum package price
  const getMinimumPackagePrice = () => {
    // Find the cheapest function
    return weddingFunctions.reduce((min, func) => 
      func.price < min ? func.price : min, 
      weddingFunctions[0]?.price || 999
    );
  };
  
  // Toggle function selection
  const toggleFunctionSelection = (functionId: string) => {
    setSelectedFunctions(prev => {
      if (prev.includes(functionId)) {
        return prev.filter(id => id !== functionId);
      } else {
        return [...prev, functionId];
      }
    });
  };
  
  // Continue to customization form
  const proceedToCustomization = () => {
    if (selectedFunctions.length === 0) {
      alert("Please select at least one wedding function");
      return;
    }
    
    setFunctionSelectionComplete(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="bg-wedding-cream py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-4">
              {id ? 'Customize Your Invitation' : 
                functionSelectionComplete ? 'Create Your Wedding Package' : 'Select Wedding Functions'}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {id 
                ? 'Personalize every detail to make your invitation truly unique.' 
                : functionSelectionComplete 
                  ? 'Customize your invitations for each selected function.'
                  : 'Choose which wedding functions you want to create invitations for.'}
            </p>
          </div>
        </div>
        
        {/* Customization Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {id ? (
              <CustomizationForm />
            ) : functionSelectionComplete ? (
              <CustomizationForm selectedFunctions={selectedFunctions} />
            ) : (
              <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-medium text-wedding-charcoal mb-4">
                    Select Wedding Functions
                  </h2>
                  <p className="text-muted-foreground">
                    Choose the functions you want to include in your wedding invitation package. You can select multiple functions.
                  </p>
                  <p className="mt-2 text-wedding-gold font-medium">
                    Packages start from <span className="inline-flex items-center"><IndianRupee size={16} className="mr-0.5" />{getMinimumPackagePrice()}</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {weddingFunctions.map((func) => (
                    <div 
                      key={func.id} 
                      className={`overflow-hidden rounded-lg border transition-all ${
                        selectedFunctions.includes(func.id) 
                          ? 'border-wedding-gold shadow-md' 
                          : 'border-gray-200 hover:border-wedding-gold/50'
                      }`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={func.image} 
                          alt={func.name} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                        {selectedFunctions.includes(func.id) && (
                          <div className="absolute top-2 right-2 bg-wedding-gold text-white w-8 h-8 rounded-full flex items-center justify-center">
                            <Check size={16} />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-wedding-charcoal">{func.name}</h3>
                          <span className="text-wedding-gold font-medium text-sm">
                            Starts from <span className="flex items-center">
                              <IndianRupee size={14} className="mr-0.5" />
                              {func.price}
                            </span>
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          {func.description}
                        </p>
                        
                        <button
                          type="button"
                          onClick={() => toggleFunctionSelection(func.id)}
                          className={`w-full py-2 rounded-md transition-colors flex items-center justify-center gap-2 ${
                            selectedFunctions.includes(func.id)
                              ? 'bg-wedding-gold/10 text-wedding-gold border border-wedding-gold'
                              : 'bg-gray-50 text-wedding-charcoal border border-gray-200 hover:bg-wedding-gold/5 hover:border-wedding-gold/30'
                          }`}
                        >
                          {selectedFunctions.includes(func.id) ? (
                            <>Selected</>
                          ) : (
                            <>
                              <Plus size={16} />
                              Add to Package
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {selectedFunctions.length > 0 && (
                  <div className="bg-wedding-cream/40 p-5 rounded-lg mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <div>
                        <p className="font-medium text-wedding-charcoal mb-1">
                          Selected Functions: {selectedFunctions.length}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedFunctions.map(funcId => {
                            const func = weddingFunctions.find(f => f.id === funcId);
                            return func ? (
                              <span 
                                key={func.id} 
                                className="inline-block text-xs bg-wedding-gold/10 text-wedding-charcoal px-2 py-1 rounded-full"
                              >
                                {func.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                      
                      {/* We're removing the total price display here */}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={proceedToCustomization}
                    disabled={selectedFunctions.length === 0}
                    className={`px-6 py-3 rounded-md font-medium transition-all ${
                      selectedFunctions.length === 0
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-wedding-gold text-white hover:bg-opacity-90'
                    }`}
                  >
                    Continue to Customization
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Customize;
