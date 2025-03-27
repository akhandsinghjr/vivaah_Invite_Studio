
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { invitations } from '@/lib/data';

const CustomizeIntro = () => {
  const [hoverCard, setHoverCard] = useState<string | null>(null);
  
  // Get the first 3 invitations for the selection cards
  const featuredInvitations = invitations.slice(0, 3);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-medium text-wedding-charcoal mb-4">
          Start Customizing Your Invitation
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose from our beautiful designs or start from scratch to create the perfect invitation for your special day.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {featuredInvitations.map(invitation => (
          <Link 
            key={invitation.id}
            to={`/customize/${invitation.id}`} 
            className="group block"
            onMouseEnter={() => setHoverCard(invitation.id)}
            onMouseLeave={() => setHoverCard(null)}
          >
            <div className={`h-full invite-card transition-all duration-300 ${
              hoverCard === invitation.id ? 'ring-2 ring-wedding-gold shadow-lg -translate-y-2' : ''
            }`}>
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={`${invitation.image}?auto=format&fit=crop&w=600&h=400&q=80`}
                  alt={invitation.title} 
                  className={`w-full aspect-[3/2] object-cover transition-transform duration-700 ${
                    hoverCard === invitation.id ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-serif text-lg font-medium text-wedding-charcoal mb-1">
                  {invitation.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {invitation.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-wedding-gold font-medium">${invitation.price}</span>
                  <span className="text-sm text-wedding-charcoal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Select <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="text-center">
        <div className="py-4 px-6 bg-wedding-cream rounded-lg mb-6 inline-block">
          <p className="text-wedding-charcoal">
            Want to see more options?
          </p>
        </div>
        <Link 
          to="/browse" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-wedding-gold text-white rounded-md font-medium transition-all hover:bg-opacity-90"
        >
          Browse All Designs <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default CustomizeIntro;
