import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import bannerImage from './second.jpg';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

// Fix for image path - using proper Next.js public folder reference
const BANNER_IMAGE_PATH = "./banner.jpg"; 

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Split Screen Layout */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Image Panel (1/3) */}
          <div className="lg:w-1/3 bg-wedding-cream/10 relative">
            {/* Fixed image path using style attribute instead of className */}
            <div 
              style={{ backgroundImage: `url(${bannerImage})` }}
              className="h-64 lg:h-full w-full bg-cover bg-center"
            >
              <div className="absolute inset-0 bg-wedding-charcoal/30 mix-blend-multiply"></div>
            </div>
          </div>
          
          {/* Right Side - Content Panel (2/3) */}
          <div className="lg:w-2/3 pt-16 lg:pt-24 pb-16">
            {/* Page Header */}
            <div className="px-6 md:px-12 lg:px-16 mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-medium text-wedding-charcoal">
                Contact Us
              </h1>
              <div className="w-20 h-0.5 bg-wedding-gold my-6"></div>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Let us help you create the perfect digital invitation for your special day. We're here to answer your questions and guide you through the process.
              </p>
            </div>
            
            {/* Contact Content */}
            <div className="px-6 md:px-12 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                
                {/* Contact Form - 7 columns on lg screens */}
                <div className="lg:col-span-7">
                  <h2 className="text-2xl font-serif text-wedding-charcoal mb-6">
                    Start Your Journey With Us
                  </h2>
                  
                  <div className="border border-wedding-cream/50 rounded-lg p-6 shadow-sm">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium text-wedding-charcoal">
                            First Name
                          </label>
                          <Input 
                            id="firstName" 
                            placeholder="Enter your first name" 
                            className="border-wedding-cream focus:border-wedding-gold focus:ring-wedding-gold/20" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium text-wedding-charcoal">
                            Last Name
                          </label>
                          <Input 
                            id="lastName" 
                            placeholder="Enter your last name" 
                            className="border-wedding-cream focus:border-wedding-gold focus:ring-wedding-gold/20" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-wedding-charcoal">
                          Email Address
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="border-wedding-cream focus:border-wedding-gold focus:ring-wedding-gold/20" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="inquiryType" className="text-sm font-medium text-wedding-charcoal">
                          Inquiry Type
                        </label>
                        <Select>
                          <SelectTrigger className="border-wedding-cream focus:border-wedding-gold focus:ring-wedding-gold/20">
                            <SelectValue placeholder="Select the purpose of your inquiry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="custom">Custom Design Request</SelectItem>
                            <SelectItem value="packages">Information About Packages</SelectItem>
                            <SelectItem value="rush">Rush Order Inquiry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-wedding-charcoal">
                          Your Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your requirements or questions..." 
                          rows={5}
                          className="border-wedding-cream focus:border-wedding-gold focus:ring-wedding-gold/20" 
                        />
                      </div>
                      
                      <div className="pt-2">
                        <Button className="bg-wedding-gold hover:bg-wedding-gold/90 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2">
                          Send Message <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </div>
                  
                  {/* MOVED: What to Expect Section to the left column */}
                  <div className="border border-wedding-cream/50 rounded-lg shadow-sm p-6 mt-8">
                    <h3 className="font-medium text-lg text-wedding-charcoal mb-4">What to Expect</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex">
                        <span className="bg-wedding-cream/20 text-wedding-gold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                        <span>We'll respond to your inquiry within 24 hours</span>
                      </li>
                      <li className="flex">
                        <span className="bg-wedding-cream/20 text-wedding-gold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                        <span>Schedule a free consultation to discuss your vision</span>
                      </li>
                      <li className="flex">
                        <span className="bg-wedding-cream/20 text-wedding-gold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                        <span>Receive a custom proposal with design options</span>
                      </li>
                      <li className="flex">
                        <span className="bg-wedding-cream/20 text-wedding-gold h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                        <span>From approval to delivery in as little as 5 days</span>
                      </li>
                    </ol>
                  </div>
                </div>
                
                {/* Contact Information - 5 columns on lg screens */}
                <div className="lg:col-span-5 space-y-8">
                  <h2 className="text-2xl font-serif text-wedding-charcoal mb-6">
                    Connect With Us
                  </h2>
                  
                  {/* Contact Information - Phone & Email */}
                  <div className="border border-wedding-cream/50 rounded-lg shadow-sm p-6 space-y-6">
                    {/* Phone */}
                    <div className="flex items-start group">
                      <div className="mt-1 mr-4 bg-wedding-cream/20 p-3 rounded-full group-hover:bg-wedding-cream/30 transition-colors">
                        <Phone className="h-5 w-5 text-wedding-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-wedding-charcoal">Phone</h3>
                        <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground mt-1">Monday to Friday, 9am - 6pm EST</p>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start group pt-4 border-t border-wedding-cream/20">
                      <div className="mt-1 mr-4 bg-wedding-cream/20 p-3 rounded-full group-hover:bg-wedding-cream/30 transition-colors">
                        <Mail className="h-5 w-5 text-wedding-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-wedding-charcoal">Email</h3>
                        <p className="text-muted-foreground mt-1">hello@digitalinvites.com</p>
                        <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Studio Location - Fixed similar styling as phone and email */}
                  <div className="border border-wedding-cream/50 rounded-lg shadow-sm p-6">
                    <div className="flex items-start group">
                      <div className="mt-1 mr-4 bg-wedding-cream/20 p-3 rounded-full group-hover:bg-wedding-cream/30 transition-colors">
                        <MapPin className="h-5 w-5 text-wedding-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-wedding-charcoal">Our Studio</h3>
                        <p className="text-muted-foreground mt-1">
                          123 Elegance Avenue, Suite 405<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                        <Button variant="outline" className="mt-4 border-wedding-gold/50 text-wedding-gold hover:bg-wedding-gold/10 hover:border-wedding-gold">
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Business Hours - Fixed alignment */}
                  <div className="border border-wedding-cream/50 rounded-lg shadow-sm p-6">
                    <div className="flex items-start group">
                      <div className="mt-1 mr-4 bg-wedding-cream/20 p-3 rounded-full group-hover:bg-wedding-cream/30 transition-colors">
                        <Clock className="h-5 w-5 text-wedding-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-wedding-charcoal">Business Hours</h3>
                        <div className="text-muted-foreground mt-3 space-y-2">
                          {/* Fixed consistent alignment of hours */}
                          <div className="grid grid-cols-2 text-sm">
                            <span>Monday - Friday</span>
                            <span>9:00 AM - 6:00 PM EST</span>
                          </div>
                          <div className="grid grid-cols-2 text-sm">
                            <span>Saturday</span>
                            <span>10:00 AM - 4:00 PM EST</span>
                          </div>
                          <div className="grid grid-cols-2 text-sm">
                            <span>Sunday</span>
                            <span>Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Section - Kept as in original */}
              <div className="mt-16 md:mt-24">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-serif text-wedding-charcoal mb-4">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Find quick answers to common questions about our digital wedding invitations.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="border border-wedding-cream/50 rounded-lg shadow-sm p-6">
                    <h3 className="font-medium text-lg text-wedding-charcoal mb-2">How do digital invitations work?</h3>
                    <p className="text-muted-foreground">
                      After purchase, you'll receive a digital file that can be shared via email, social media, or messaging apps. We can also help you set up online RSVP tracking.
                    </p>
                  </div>
                  
                  <div className="border border-wedding-cream/50 rounded-lg shadow-sm p-6">
                    <h3 className="font-medium text-lg text-wedding-charcoal mb-2">Can I customize my invitation?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! All our designs can be customized with your names, date, venue details, and preferred colors to match your wedding theme.
                    </p>
                  </div>
                  
                  <div className="border border-wedding-cream/50 rounded-lg shadow-sm p-6">
                    <h3 className="font-medium text-lg text-wedding-charcoal mb-2">How long does the process take?</h3>
                    <p className="text-muted-foreground">
                      Standard orders are delivered within 3-5 business days. Rush orders can be completed within 48 hours for an additional fee.
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-10">
                  <Button variant="link" className="text-wedding-gold font-medium">
                    View All FAQs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;