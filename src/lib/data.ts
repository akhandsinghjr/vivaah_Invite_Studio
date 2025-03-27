
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
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
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
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
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
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
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
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
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
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
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
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
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
