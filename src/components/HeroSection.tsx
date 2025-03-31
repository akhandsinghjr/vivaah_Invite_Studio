
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#571239]">
      {/* Background Elements */}
      {/* <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-wedding-blush/40 blur-3xl"></div> */}
      {/* <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-wedding-sage/30 blur-3xl"></div> 
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-wedding-gold/20 blur-3xl"></div> */}
      
      <div className="container px-4 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h5 className="inline-block font-sans text-sm tracking-wider uppercase mt-3 mb-7 px-3 py-1 bg-[#EAD8C0] rounded-full text-[#5C2A2D] animate-fade-in">
            Digital Wedding Invitations
          </h5>
          
          <h1 className="font-serif text-5xl md:text-5xl lg:text-6xl text-[#F5F5DC] mb-6 animate-slide-in" style={{ transitionDelay: '200ms' }}>
            <span className="font-script text-4xl md:text-5xl lg:text-7xl text-[#F5F5DC]">Beautiful Wedding Invitations Made Simple</span> 
          </h1>
          
          <p className=" text-[#D0D0D6] text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-in" style={{ transitionDelay: '400ms' }}>
            Personalize stunning digital invitations for your special day. Browse designs, customize details, and share with your guests in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ transitionDelay: '600ms' }}>
            <Link to="/browse" className="w-full sm:w-auto px-8 py-3 bg-[#C19A49] bg-opacity-90 text-white rounded-md font-medium transition-all hover:bg-opacity-80 flex items-center justify-center gap-2 hover:gap-3">
              Browse Designs <ArrowRight size={18} />
            </Link>
            <Link to="/customize" className="w-full sm:w-auto px-8 py-3 border border-[#C19A49] text-[#C19A49] rounded-md font-medium transition-all hover:bg-wedding-gold/10">
              Customize Your Own
            </Link>
          </div>
        </div>
        
        <div className="mt-12 md:mt-20 glass-panel p-6 md:p-8 max-w-5xl mx-auto animate-zoom-in" style={{ transitionDelay: '800ms' }}>
          <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&h=675&q=80" 
              alt="Wedding invitation preview" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
