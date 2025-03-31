
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-[#e2caa7]'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <span className="font-script text-2xl text-wedding-charcoal">Invite</span>
          <span className="font-serif text-xl text-wedding-charcoal">Studio</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'after:w-full' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/browse" 
            className={`nav-link ${isActive('/browse') ? 'after:w-full' : ''}`}
          >
            Browse
          </Link>
          <Link 
            to="/customize" 
            className={`nav-link ${isActive('/customize') ? 'after:w-full' : ''}`}
          >
            Customize
          </Link>
          <Link 
            to="/pricing" 
            className={`nav-link ${isActive('/pricing') ? 'after:w-full' : ''}`}
          >
            Pricing
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'after:w-full' : ''}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/login" 
            className="text-black font-medium hover:text-gray-700 transition-colors"
          >
            Log in
          </Link>
          <Link 
            to="/signup" 
            className="px-4 py-2 bg-[#7c4525] text-wedding-cream rounded-md transition-all hover:bg-opacity-80"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-wedding-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <Link 
            to="/" 
            className="flex justify-between items-center text-lg font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home <ChevronRight size={18} />
          </Link>
          <Link 
            to="/browse" 
            className="flex justify-between items-center text-lg font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Browse <ChevronRight size={18} />
          </Link>
          <Link 
            to="/customize" 
            className="flex justify-between items-center text-lg font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Customize <ChevronRight size={18} />
          </Link>
          <Link 
            to="/pricing" 
            className="flex justify-between items-center text-lg font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing <ChevronRight size={18} />
          </Link>
          <Link 
            to="/contact" 
            className="flex justify-between items-center text-lg font-medium border-b border-gray-100 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact <ChevronRight size={18} />
          </Link>
          
          <div className="flex flex-col space-y-4 mt-6">
            <Link 
              to="/login" 
              className="w-full text-center py-3 border border-wedding-gold text-wedding-charcoal rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="w-full text-center py-3 bg-wedding-gold text-white rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
