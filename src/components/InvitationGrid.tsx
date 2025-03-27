
import { useState } from 'react';
import { invitations, InvitationType } from '@/lib/data';
import InvitationCard from './InvitationCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

type FilterOptions = {
  style: string[];
  price: [number, number] | null;
  search: string;
  sortBy: 'price_asc' | 'price_desc' | 'newest' | 'popularity';
};

const InvitationGrid = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    style: [],
    price: null,
    search: '',
    sortBy: 'popularity',
  });

  // Filter and sort invitations
  const filteredInvitations = invitations.filter((invitation) => {
    // Search filter
    if (filters.search && !invitation.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !invitation.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Style filter
    if (filters.style.length > 0 && !filters.style.includes(invitation.style)) {
      return false;
    }
    
    // Price filter
    if (filters.price && (invitation.price < filters.price[0] || invitation.price > filters.price[1])) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'newest':
        return a.new === b.new ? 0 : a.new ? -1 : 1;
      case 'popularity':
      default:
        return a.popular === b.popular ? 0 : a.popular ? -1 : 1;
    }
  });

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      style: [],
      price: null,
      search: '',
      sortBy: 'popularity',
    });
  };

  const handleStyleFilter = (style: string) => {
    if (filters.style.includes(style)) {
      updateFilter('style', filters.style.filter(s => s !== style));
    } else {
      updateFilter('style', [...filters.style, style]);
    }
  };

  return (
    <div className="w-full">
      {/* Search and Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search invitations..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
          />
        </div>
        
        <div className="flex gap-4">
          <button
            className="px-4 py-2 border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <SlidersHorizontal size={18} />
            Filter
          </button>
          
          <select
            className="px-4 py-2 border border-gray-200 rounded-lg appearance-none bg-right bg-no-repeat pr-10 focus:outline-none focus:ring-2 focus:ring-wedding-gold/30"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundPosition: "right 0.5rem center", backgroundSize: "1.5em 1.5em" }}
            value={filters.sortBy}
            onChange={(e) => updateFilter('sortBy', e.target.value)}
          >
            <option value="popularity">Sort by: Popularity</option>
            <option value="price_asc">Sort by: Price (Low to High)</option>
            <option value="price_desc">Sort by: Price (High to Low)</option>
            <option value="newest">Sort by: Newest</option>
          </select>
        </div>
      </div>
      
      {/* Filter Panel */}
      {filterOpen && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Filters</h3>
            <button onClick={() => setFilterOpen(false)} className="text-muted-foreground hover:text-wedding-charcoal">
              <X size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Style</h4>
              <div className="flex flex-wrap gap-2">
                {['Elegant', 'Modern', 'Rustic', 'Minimalist'].map((style) => (
                  <button
                    key={style}
                    className={`px-3 py-1.5 rounded-full text-sm ${
                      filters.style.includes(style)
                        ? 'bg-wedding-gold text-white'
                        : 'bg-gray-100 text-wedding-charcoal hover:bg-gray-200'
                    } transition-colors`}
                    onClick={() => handleStyleFilter(style)}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="flex items-center gap-4">
                <button
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    filters.price && filters.price[1] <= 30
                      ? 'bg-wedding-gold text-white'
                      : 'bg-gray-100 text-wedding-charcoal hover:bg-gray-200'
                  } transition-colors`}
                  onClick={() => updateFilter('price', [0, 30])}
                >
                  Under $30
                </button>
                <button
                  className={`px-3 py-1.5 rounded-full text-sm ${
                    filters.price && filters.price[0] >= 30
                      ? 'bg-wedding-gold text-white'
                      : 'bg-gray-100 text-wedding-charcoal hover:bg-gray-200'
                  } transition-colors`}
                  onClick={() => updateFilter('price', [30, 100])}
                >
                  $30+
                </button>
                <button
                  className="px-3 py-1.5 text-sm text-muted-foreground hover:text-wedding-charcoal"
                  onClick={() => updateFilter('price', null)}
                >
                  Any price
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button
              className="text-sm text-wedding-charcoal hover:text-wedding-gold"
              onClick={clearFilters}
            >
              Clear all filters
            </button>
          </div>
        </div>
      )}
      
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredInvitations.length} {filteredInvitations.length === 1 ? 'invitation' : 'invitations'}
        </p>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInvitations.map((invitation) => (
          <InvitationCard key={invitation.id} invitation={invitation} />
        ))}
      </div>
      
      {/* Empty State */}
      {filteredInvitations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">No invitations match your filters</p>
          <button
            className="px-4 py-2 text-wedding-gold hover:text-wedding-charcoal"
            onClick={clearFilters}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default InvitationGrid;
