
import { useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InvitationType } from '@/lib/data';

type InvitationCardProps = {
  invitation: InvitationType;
};

const InvitationCard = ({ invitation }: InvitationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="invite-card h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border-2 border-wedding-gold/30 border-t-wedding-gold animate-spin"></div>
          </div>
        )}
        <img 
          src={`${invitation.image}?auto=format&fit=crop&w=600&h=400&q=80`}
          alt={invitation.title} 
          className={`w-full aspect-[3/2] object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {invitation.new && (
            <span className="px-2 py-1 bg-wedding-blush text-wedding-charcoal text-xs font-medium rounded-full">
              New
            </span>
          )}
          {invitation.popular && (
            <span className="px-2 py-1 bg-wedding-gold text-white text-xs font-medium rounded-full">
              Popular
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button 
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorited 
              ? 'bg-white text-red-500' 
              : 'bg-black/20 text-white hover:bg-white hover:text-wedding-charcoal'
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
        >
          <Heart size={16} fill={isFavorited ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Content */}
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
        
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-1 bg-wedding-cream text-xs text-wedding-charcoal rounded-full">
            {invitation.style}
          </span>
        </div>

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
  );
};

export default InvitationCard;
