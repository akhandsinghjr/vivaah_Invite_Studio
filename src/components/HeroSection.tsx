
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-wedding-cream">
      {/* Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-wedding-blush/40 blur-3xl"></div>
      <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-wedding-sage/30 blur-3xl"></div>
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-wedding-gold/20 blur-3xl"></div>
      
      <div className="container px-4 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h5 className="inline-block font-sans text-sm tracking-wider uppercase mb-3 px-3 py-1 bg-wedding-gold/10 rounded-full text-wedding-charcoal animate-fade-in">
            Digital Wedding Invitations
          </h5>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-wedding-charcoal mb-6 animate-slide-in" style={{ transitionDelay: '200ms' }}>
            <span className="font-script text-wedding-gold">Beautiful</span> Wedding Invitations Made Simple
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slide-in" style={{ transitionDelay: '400ms' }}>
            Personalize stunning digital invitations for your special day. Browse designs, customize details, and share with your guests in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ transitionDelay: '600ms' }}>
            <Link to="/browse" className="w-full sm:w-auto px-8 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90 flex items-center justify-center gap-2 hover:gap-3">
              Browse Designs <ArrowRight size={18} />
            </Link>
            <Link to="/customize" className="w-full sm:w-auto px-8 py-3 border border-wedding-gold text-wedding-charcoal rounded-md font-medium transition-all hover:bg-wedding-gold/10">
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
