
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Edit3, Heart, Image, MessageSquare, Send } from "lucide-react";
import { invitations } from "@/lib/data";

const Index = () => {
  // Get featured invitations (3 most popular)
  const featuredInvitations = invitations
    .filter(inv => inv.popular)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <section className="bg-wedding-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h5 className="inline-block font-sans text-sm tracking-wider uppercase mb-3 px-3 py-1 bg-wedding-gold/10 rounded-full text-wedding-charcoal">
                How It Works
              </h5>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-4">
                Create Your Perfect Invitation in Three Simple Steps
              </h2>
              <p className="text-muted-foreground text-lg">
                From selecting the perfect design to customizing every detail, our streamlined process makes creating beautiful wedding invitations effortless.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-wedding-cream p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Image size={24} className="text-wedding-gold" />
                </div>
                <h3 className="text-xl font-medium text-wedding-charcoal mb-3">Browse & Select</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our collection of professionally designed wedding invitations and choose the one that matches your style.
                </p>
                <Link to="/browse" className="text-wedding-gold hover:text-wedding-charcoal transition-colors font-medium inline-flex items-center gap-1">
                  Browse Designs <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="bg-wedding-cream p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Edit3 size={24} className="text-wedding-gold" />
                </div>
                <h3 className="text-xl font-medium text-wedding-charcoal mb-3">Customize Details</h3>
                <p className="text-muted-foreground mb-4">
                  Personalize your invitation with names, dates, venue information, colors, fonts, and optional photos.
                </p>
                <Link to="/customize" className="text-wedding-gold hover:text-wedding-charcoal transition-colors font-medium inline-flex items-center gap-1">
                  Start Customizing <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="bg-wedding-cream p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-wedding-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Send size={24} className="text-wedding-gold" />
                </div>
                <h3 className="text-xl font-medium text-wedding-charcoal mb-3">Review & Share</h3>
                <p className="text-muted-foreground mb-4">
                  Approve your digital proof and receive a shareable link to send to your guests via email or social media.
                </p>
                <Link to="/pricing" className="text-wedding-gold hover:text-wedding-charcoal transition-colors font-medium inline-flex items-center gap-1">
                  View Pricing <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Invitations */}
        <section className="bg-wedding-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h5 className="inline-block font-sans text-sm tracking-wider uppercase mb-3 px-3 py-1 bg-wedding-gold/10 rounded-full text-wedding-charcoal">
                Featured Designs
              </h5>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-4">
                Our Most Popular Invitations
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover why these designs are loved by couples planning their perfect day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredInvitations.map((invitation) => (
                <div key={invitation.id} className="invite-card h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img 
                      src={`${invitation.image}?auto=format&fit=crop&w=600&h=400&q=80`}
                      alt={invitation.title} 
                      className="w-full aspect-[3/2] object-cover"
                    />
                    {invitation.popular && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-wedding-gold text-white text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <div className="p-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg font-medium text-wedding-charcoal">
                        {invitation.title}
                      </h3>
                      <span className="text-wedding-gold font-medium">${invitation.price}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {invitation.description}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        to={`/customize/${invitation.id}`}
                        className="group w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-wedding-charcoal border border-wedding-gold/50 rounded-md hover:bg-wedding-gold/10 transition-all"
                      >
                        Customize <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/browse" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90"
              >
                View All Designs <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-wedding-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h5 className="inline-block font-sans text-sm tracking-wider uppercase mb-3 px-3 py-1 bg-wedding-gold/10 rounded-full text-wedding-charcoal">
                  Why Choose Digital
                </h5>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-6">
                  The Benefits of Digital Wedding Invitations
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Modern couples are embracing digital invitations for their sustainability, convenience, and unique interactive features.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-wedding-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-wedding-charcoal">Eco-Friendly Choice</h3>
                      <p className="text-muted-foreground">Reduce paper waste and lower your wedding's environmental footprint.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-wedding-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-wedding-charcoal">Budget-Friendly</h3>
                      <p className="text-muted-foreground">Save on printing, postage, and addressing costs without sacrificing style.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-wedding-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-wedding-charcoal">Instant Delivery</h3>
                      <p className="text-muted-foreground">Send your invitations with a single click and reach guests anywhere instantly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-wedding-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-wedding-charcoal">Easy Updates</h3>
                      <p className="text-muted-foreground">Modify details or send updates to all guests without reprinting.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel p-6 md:p-8">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=1000&q=80" 
                    alt="Digital wedding invitation on a phone" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="bg-wedding-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h5 className="inline-block font-sans text-sm tracking-wider uppercase mb-3 px-3 py-1 bg-wedding-gold/10 rounded-full text-wedding-charcoal">
                Testimonials
              </h5>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-4">
                What Our Happy Couples Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Read about the experiences of couples who chose Invite Studio for their special day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[bg-wedding-cream] p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} size={16} className="text-wedding-gold" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-wedding-charcoal mb-6">
                  "The customization options were amazing! We were able to match our invitation perfectly to our wedding colors. The process was so simple, and we received many compliments from our guests."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-wedding-gold/20 flex-shrink-0 flex items-center justify-center">
                    <span className="text-wedding-gold font-medium">EJ</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-wedding-charcoal">Emma & James</h4>
                    <p className="text-sm text-muted-foreground">Married June 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[bg-wedding-cream] p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} size={16} className="text-wedding-gold" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-wedding-charcoal mb-6">
                  "We were planning our wedding on a tight timeline, and Invite Studio was a lifesaver! We had our digital invitations ready to send in just days, and the design was absolutely stunning."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-wedding-gold/20 flex-shrink-0 flex items-center justify-center">
                    <span className="text-wedding-gold font-medium">SM</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-wedding-charcoal">Sarah & Michael</h4>
                    <p className="text-sm text-muted-foreground">Married April 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[bg-wedding-cream] p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} size={16} className="text-wedding-gold" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-wedding-charcoal mb-6">
                  "We loved being able to add our engagement photos to our invitation. The whole process was seamless, and the customer service team was incredibly helpful with our questions."
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-wedding-gold/20 flex-shrink-0 flex items-center justify-center">
                    <span className="text-wedding-gold font-medium">LA</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-wedding-charcoal">Lisa & Alex</h4>
                    <p className="text-sm text-muted-foreground">Married September 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[bg-wedding-cream] py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-wedding-blush/40 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-wedding-gold/20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h5 className="inline-block font-sans text-sm tracking-wider uppercase mb-3 px-3 py-1 bg-wedding-gold/10 rounded-full text-wedding-charcoal">
                Get Started Today
              </h5>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-6">
                Ready to Create Your Perfect Wedding Invitation?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join thousands of happy couples who have chosen Invite Studio for their special day.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/browse" 
                  className="w-full sm:w-auto px-8 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90"
                >
                  Browse Designs
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-8 py-3 border border-wedding-gold text-wedding-charcoal rounded-md font-medium transition-all hover:bg-wedding-gold/10 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
