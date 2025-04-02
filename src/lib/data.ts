export type InvitationType = {
  id: string;
  title: string;
  description: string;
  image: string;
  style: 'Elegant' | 'Modern' | 'Rustic' | 'Minimalist';
  price: number;
  popular: boolean;
  new: boolean;
  customizable: {
    colors: boolean;
    fonts: boolean;
    text: boolean;
    images: boolean;
  };
};

export const invitations: InvitationType[] = [
  {
    id: '1',
    title: 'Floral Elegance',
    description: 'Delicate floral border design with elegant script font.',
    image: 'src/components/invite.png',
    style: 'Elegant',
    price: 29.99,
    popular: true,
    new: false,
    customizable: {
      colors: true,
      fonts: true,
      text: true,
      images: true,
    },
  },
  {
    id: '2',
    title: 'Modern Minimalist',
    description: 'Clean, simple design with modern typography and ample white space.',
    image: 'src/components/invite.png',
    style: 'Minimalist',
    price: 24.99,
    popular: false,
    new: true,
    customizable: {
      colors: true,
      fonts: true,
      text: true,
      images: false,
    },
  },
  {
    id: '3',
    title: 'Rustic Charm',
    description: 'Wooden texture background with vintage elements and handwritten style font.',
    image: 'src/components/invite.png',
    style: 'Rustic',
    price: 27.99,
    popular: true,
    new: false,
    customizable: {
      colors: false,
      fonts: true,
      text: true,
      images: true,
    },
  },
  {
    id: '4',
    title: 'Golden Frames',
    description: 'Luxurious design with golden frames and elegant typography.',
    image: 'src/components/invite.png',
    style: 'Elegant',
    price: 34.99,
    popular: false,
    new: true,
    customizable: {
      colors: true,
      fonts: true,
      text: true,
      images: true,
    },
  },
  {
    id: '5',
    title: 'Botanical Dreams',
    description: 'Lush greenery and botanical illustrations for a natural feel.',
    image: 'src/components/invite.png',
    style: 'Modern',
    price: 29.99,
    popular: true,
    new: false,
    customizable: {
      colors: true,
      fonts: true,
      text: true,
      images: false,
    },
  },
  {
    id: '6',
    title: 'Watercolor Sunset',
    description: 'Soft watercolor background with gradient colors reminiscent of a sunset.',
    image: 'src/components/invite.png',
    style: 'Modern',
    price: 31.99,
    popular: false,
    new: true,
    customizable: {
      colors: true,
      fonts: true,
      text: true,
      images: true,
    },
  },
  // HALDI CEREMONY DESIGNS
  {
    id: "haldi-classic-01",
    title: "Traditional Haldi Elegance",
    description: "Classic yellow-themed invitation with traditional motifs",
    price: 999,
    popular: true,
    tags: ["haldi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "haldi-modern-01",
    title: "Contemporary Haldi",
    description: "Modern design with elegant yellow and gold accents",
    price: 1099,
    popular: false,
    tags: ["haldi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "haldi-floral-01",
    title: "Marigold Haldi",
    description: "Bright marigold-themed invitation for your Haldi ceremony",
    price: 899,
    popular: false,
    tags: ["haldi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  
  // MEHENDI CEREMONY DESIGNS
  {
    id: "mehendi-traditional-01",
    title: "Traditional Mehendi Invite",
    description: "Beautiful henna patterns with rich green tones",
    price: 999,
    popular: true,
    tags: ["mehendi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "mehendi-contemporary-01",
    title: "Modern Mehendi Celebration",
    description: "Stylish invitation with intricate henna designs",
    price: 1099,
    popular: false,
    tags: ["mehendi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "mehendi-fusion-01",
    title: "Fusion Mehendi Magic",
    description: "Contemporary design with traditional henna elements",
    price: 1199,
    popular: false,
    tags: ["mehendi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  
  // SANGEET CEREMONY DESIGNS
  {
    id: "sangeet-musical-01",
    title: "Musical Night Sangeet",
    description: "Vibrant invitation with musical instruments and dancing silhouettes",
    price: 1299,
    popular: true,
    tags: ["sangeet"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "sangeet-colorful-01",
    title: "Colorful Sangeet Celebration",
    description: "Bold and colorful design for a fun-filled sangeet night",
    price: 1199,
    popular: false,
    tags: ["sangeet"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "sangeet-elegant-01",
    title: "Elegant Sangeet Evening",
    description: "Sophisticated design with subtle musical elements",
    price: 1399,
    popular: false,
    tags: ["sangeet"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  
  // WEDDING CEREMONY DESIGNS
  {
    id: "wedding-traditional-01",
    title: "Traditional Wedding Elegance",
    description: "Classic and timeless wedding invitation with traditional motifs",
    price: 1499,
    popular: true,
    tags: ["wedding"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "wedding-royal-01",
    title: "Royal Wedding Affair",
    description: "Luxurious design with royal elements and rich colors",
    price: 1699,
    popular: false,
    tags: ["wedding"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "wedding-minimalist-01",
    title: "Modern Minimalist Wedding",
    description: "Clean, contemporary design with elegant typography",
    price: 1399,
    popular: false,
    tags: ["wedding"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  
  // RECEPTION DESIGNS
  {
    id: "reception-elegant-01",
    title: "Elegant Evening Reception",
    description: "Sophisticated design for an elegant reception celebration",
    price: 1499,
    popular: true,
    tags: ["reception"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "reception-modern-01",
    title: "Contemporary Dinner Reception",
    description: "Modern design with sophisticated elements for your reception",
    price: 1599,
    popular: false,
    tags: ["reception"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "reception-classic-01",
    title: "Classic Reception Invitation",
    description: "Timeless design for a memorable reception celebration",
    price: 1399,
    popular: false,
    tags: ["reception"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  
  // SUFI NIGHT DESIGNS
  {
    id: "sufi-mystical-01",
    title: "Mystical Sufi Night",
    description: "Spiritual and mystical design for a soulful sufi celebration",
    price: 1199,
    popular: true,
    tags: ["sufi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "sufi-elegant-01",
    title: "Elegant Sufi Evening",
    description: "Sophisticated design for a spiritual musical night",
    price: 1299,
    popular: false,
    tags: ["sufi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "sufi-contemporary-01",
    title: "Contemporary Sufi Celebration",
    description: "Modern design with traditional sufi elements",
    price: 1199,
    popular: false,
    tags: ["sufi"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  
  // COCKTAIL PARTY DESIGNS
  {
    id: "cocktail-glamorous-01",
    title: "Glamorous Cocktail Party",
    description: "Chic and stylish invitation for your cocktail celebration",
    price: 1299,
    popular: true,
    tags: ["cocktail"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "cocktail-elegant-01",
    title: "Elegant Cocktail Evening",
    description: "Sophisticated design for a pre-wedding cocktail party",
    price: 1399,
    popular: false,
    tags: ["cocktail"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  },
  {
    id: "cocktail-modern-01",
    title: "Modern Cocktail Celebration",
    description: "Contemporary design for a stylish cocktail event",
    price: 1299,
    popular: false,
    tags: ["cocktail"],
    image: "src/components/invite.png",
    coverImage: "src/components/invite.png",
    customizable: {
      colors: true,
      fonts: true,
      images: true
    }
  }
];

export const customizationOptions = {
  fonts: [
    { id: 'playfair', name: 'Playfair Display', category: 'Serif' },
    { id: 'greatVibes', name: 'Great Vibes', category: 'Script' },
    { id: 'inter', name: 'Inter', category: 'Sans Serif' },
    { id: 'roboto', name: 'Roboto', category: 'Sans Serif' },
    { id: 'montserrat', name: 'Montserrat', category: 'Sans Serif' },
    { id: 'lora', name: 'Lora', category: 'Serif' },
  ],
  colors: [
    { id: 'gold', name: 'Gold', hex: '#D4B78F' },
    { id: 'blush', name: 'Blush', hex: '#F8E1E4' },
    { id: 'sage', name: 'Sage', hex: '#D1D9CE' },
    { id: 'navy', name: 'Navy', hex: '#18374F' },
    { id: 'burgundy', name: 'Burgundy', hex: '#722F37' },
    { id: 'charcoal', name: 'Charcoal', hex: '#3A3F42' },
    { id: 'lavender', name: 'Lavender', hex: '#B5A6D9' },
    { id: 'champagne', name: 'Champagne', hex: '#F7E7CE' },
  ],
};
