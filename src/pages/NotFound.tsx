import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import designImage from '@/pages/banner.png'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-19">
        {/* Page Header */}
        <div className="bg-[#571239] py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif pt-14 font-medium text-[#F5F5DC] mb-4">
              Contact Us
            </h1>
            <p className="text-wedding-cream text-lg max-w-2xl mx-auto">
              Let us help you create the perfect digital invitation for your special day. We're here to answer your questions and guide you through the process.
            </p>
          </div>
        </div>
        
        {/* Contact Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-wedding-charcoal mb-6">Send Us a Message</h2>
                <Card className="border border-wedding-cream/50 shadow-sm">
                  <CardContent className="p-6">
                    <form>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium text-wedding-charcoal">
                              First Name
                            </label>
                            <Input 
                              id="firstName" 
                              placeholder="Enter your first name" 
                              className="border-wedding-cream/60 focus:border-wedding-gold focus:ring-wedding-gold/20" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium text-wedding-charcoal">
                              Last Name
                            </label>
                            <Input 
                              id="lastName" 
                              placeholder="Enter your last name" 
                              className="border-wedding-cream/60 focus:border-wedding-gold focus:ring-wedding-gold/20" 
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
                            className="border-wedding-cream/60 focus:border-wedding-gold focus:ring-wedding-gold/20" 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium text-wedding-charcoal">
                            Subject
                          </label>
                          <Input 
                            id="subject" 
                            placeholder="What is your message about?" 
                            className="border-wedding-cream/60 focus:border-wedding-gold focus:ring-wedding-gold/20" 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-wedding-charcoal">
                            Your Message
                          </label>
                          <Textarea 
                            id="message" 
                            placeholder="Tell us about your requirements or questions..." 
                            rows={6}
                            className="border-wedding-cream/60 focus:border-wedding-gold focus:ring-wedding-gold/20" 
                          />
                        </div>
                        
                        <Button className="bg-wedding-gold hover:bg-wedding-gold/90 text-white font-medium py-2 px-6 rounded-md transition-colors w-full md:w-auto">
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif text-wedding-charcoal mb-6">Get in Touch</h2>
                <div className="prose prose-slate max-w-none mb-8">
                  <p className="text-muted-foreground">
                    We pride ourselves on providing exceptional customer service. If you have any questions about our digital invitations, custom designs, or the ordering process, please don't hesitate to contact us.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <Card className="border border-wedding-cream/50 shadow-sm overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 border-b md:border-b-0 md:border-r border-wedding-cream/30">
                          <div className="flex items-start">
                            <div className="mt-1 mr-4 bg-wedding-cream/20 p-2 rounded-full">
                              <Phone className="h-5 w-5 text-wedding-gold" />
                            </div>
                            <div>
                              <h3 className="font-medium text-wedding-charcoal">Phone</h3>
                              <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                              <p className="text-xs text-muted-foreground mt-1">Monday to Friday, 9am - 6pm EST</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start">
                            <div className="mt-1 mr-4 bg-wedding-cream/20 p-2 rounded-full">
                              <Mail className="h-5 w-5 text-wedding-gold" />
                            </div>
                            <div>
                              <h3 className="font-medium text-wedding-charcoal">Email</h3>
                              <p className="text-muted-foreground mt-1">hello@digitalinvites.com</p>
                              <p className="text-xs text-muted-foreground mt-1">We'll respond within 24 hours</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-wedding-cream/50 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mt-1 mr-4 bg-wedding-cream/20 p-2 rounded-full">
                          <Clock className="h-5 w-5 text-wedding-gold" />
                        </div>
                        <div>
                          <h3 className="font-medium text-wedding-charcoal">Business Hours</h3>
                          <div className="text-muted-foreground mt-3 space-y-1">
                            <div className="flex justify-between">
                              <span>Monday - Friday:</span>
                              <span>9:00 AM - 6:00 PM EST</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Saturday:</span>
                              <span>10:00 AM - 4:00 PM EST</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sunday:</span>
                              <span>Closed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-wedding-cream/50 shadow-sm bg-wedding-cream/5">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mt-1 mr-4 bg-wedding-cream/20 p-2 rounded-full">
                          <MapPin className="h-5 w-5 text-wedding-gold" />
                        </div>
                        <div>
                          <h3 className="font-medium text-wedding-charcoal">Our Studio</h3>
                          <p className="text-muted-foreground mt-1">
                            123 Elegance Avenue, Suite 405<br />
                            New York, NY 10001<br />
                            United States
                          </p>
                          <Button variant="outline" className="mt-4 border-wedding-gold text-wedding-gold hover:bg-wedding-gold/10">
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
            </div>
            
            {/* FAQ Section */}
            <div className="mt-16 md:mt-24">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-serif text-wedding-charcoal mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Find quick answers to common questions about our digital wedding invitations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border border-wedding-cream/50 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg text-wedding-charcoal mb-2">How do digital invitations work?</h3>
                    <p className="text-muted-foreground">
                      After purchase, you'll receive a digital file that can be shared via email, social media, or messaging apps. We can also help you set up online RSVP tracking.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border border-wedding-cream/50 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg text-wedding-charcoal mb-2">Can I customize my invitation?</h3>
                    <p className="text-muted-foreground">
                      Absolutely! All our designs can be customized with your names, date, venue details, and preferred colors to match your wedding theme.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border border-wedding-cream/50 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg text-wedding-charcoal mb-2">How long does the process take?</h3>
                    <p className="text-muted-foreground">
                      Standard orders are delivered within 3-5 business days. Rush orders can be completed within 48 hours for an additional fee.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-10">
                <Button variant="link" className="text-wedding-gold font-medium">
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;