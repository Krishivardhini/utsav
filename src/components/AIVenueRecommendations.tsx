import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, DollarSign, Star, Phone, Globe } from 'lucide-react';

interface Venue {
  id: string;
  name: string;
  location: string;
  capacity: number;
  priceRange: string;
  type: string;
  rating: number;
  features: string[];
  description: string;
  contact: string;
  website: string;
  image: string;
}

const AIVenueRecommendations = () => {
  const { t } = useTranslation();
  const [searchCriteria, setSearchCriteria] = useState({
    location: '',
    guestCount: 100,
    budget: 'medium',
    venueType: 'all',
    features: [] as string[]
  });

  const [recommendations, setRecommendations] = useState<Venue[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample venue data (in a real app, this would come from an API)
  const sampleVenues: Venue[] = [
    {
      id: '1',
      name: 'Taj Palace Hotel',
      location: 'Mumbai, Maharashtra',
      capacity: 500,
      priceRange: '₹2L - ₹5L',
      type: 'Luxury Hotel',
      rating: 4.8,
      features: ['Air Conditioning', 'Parking', 'Catering', 'Accommodation', 'Garden'],
      description: 'Luxurious 5-star hotel with grand ballrooms and beautiful gardens. Perfect for traditional and modern weddings.',
      contact: '+91 22 6665 3366',
      website: 'www.tajhotels.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: '2',
      name: 'ITC Maratha',
      location: 'Mumbai, Maharashtra',
      capacity: 300,
      priceRange: '₹1.5L - ₹3L',
      type: 'Heritage Hotel',
      rating: 4.6,
      features: ['Air Conditioning', 'Parking', 'Catering', 'Accommodation', 'Spa'],
      description: 'Heritage hotel with traditional Indian architecture and modern amenities. Ideal for cultural celebrations.',
      contact: '+91 22 2410 1010',
      website: 'www.itchotels.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: '3',
      name: 'The Leela Palace',
      location: 'Bangalore, Karnataka',
      capacity: 400,
      priceRange: '₹2L - ₹4L',
      type: 'Luxury Hotel',
      rating: 4.7,
      features: ['Air Conditioning', 'Parking', 'Catering', 'Accommodation', 'Pool'],
      description: 'Palatial luxury hotel with stunning architecture and world-class facilities.',
      contact: '+91 80 2521 1234',
      website: 'www.theleela.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: '4',
      name: 'Garden Venue Resort',
      location: 'Pune, Maharashtra',
      capacity: 200,
      priceRange: '₹80K - ₹2L',
      type: 'Garden Venue',
      rating: 4.4,
      features: ['Garden', 'Parking', 'Catering', 'Outdoor', 'Natural'],
      description: 'Beautiful garden venue with natural surroundings. Perfect for outdoor ceremonies.',
      contact: '+91 20 2567 8901',
      website: 'www.gardenvenue.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: '5',
      name: 'Heritage Palace',
      location: 'Jaipur, Rajasthan',
      capacity: 600,
      priceRange: '₹3L - ₹8L',
      type: 'Palace',
      rating: 4.9,
      features: ['Heritage', 'Parking', 'Catering', 'Accommodation', 'Royal'],
      description: 'Royal palace with traditional Rajasthani architecture. Perfect for grand celebrations.',
      contact: '+91 141 238 5555',
      website: 'www.heritagepalace.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: '6',
      name: 'Beach Resort Goa',
      location: 'Goa',
      capacity: 150,
      priceRange: '₹1L - ₹2.5L',
      type: 'Beach Resort',
      rating: 4.5,
      features: ['Beach', 'Parking', 'Catering', 'Accommodation', 'Water Sports'],
      description: 'Stunning beachfront resort with ocean views. Ideal for destination weddings.',
      contact: '+91 832 246 7777',
      website: 'www.beachresortgoa.com',
      image: '/api/placeholder/400/300'
    }
  ];

  const searchVenues = () => {
    setIsSearching(true);
    
    // Simulate API call delay
    setTimeout(() => {
      let filteredVenues = sampleVenues.filter(venue => {
        // Filter by location
        if (searchCriteria.location && 
            !venue.location.toLowerCase().includes(searchCriteria.location.toLowerCase())) {
          return false;
        }
        
        // Filter by capacity
        if (venue.capacity < searchCriteria.guestCount) {
          return false;
        }
        
        // Filter by venue type
        if (searchCriteria.venueType !== 'all' && 
            !venue.type.toLowerCase().includes(searchCriteria.venueType.toLowerCase())) {
          return false;
        }
        
        return true;
      });
      
      // Sort by rating (highest first)
      filteredVenues.sort((a, b) => b.rating - a.rating);
      
      setRecommendations(filteredVenues);
      setIsSearching(false);
    }, 1500);
  };

  const getPriceRangeColor = (priceRange: string) => {
    if (priceRange.includes('₹80K') || priceRange.includes('₹1L')) return 'bg-green-100 text-green-800';
    if (priceRange.includes('₹2L') || priceRange.includes('₹3L')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            AI Venue Recommendations
          </CardTitle>
          <CardDescription>
            Find the perfect venue based on your preferences and requirements
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g., Mumbai, Delhi, Bangalore"
                value={searchCriteria.location}
                onChange={(e) => setSearchCriteria(prev => ({ ...prev, location: e.target.value }))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="guests">Guest Count</Label>
              <Input
                id="guests"
                type="number"
                placeholder="100"
                value={searchCriteria.guestCount}
                onChange={(e) => setSearchCriteria(prev => ({ ...prev, guestCount: parseInt(e.target.value) || 100 }))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={searchCriteria.budget} onValueChange={(value) => setSearchCriteria(prev => ({ ...prev, budget: value }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">₹50K - ₹1L</SelectItem>
                  <SelectItem value="medium">₹1L - ₹3L</SelectItem>
                  <SelectItem value="high">₹3L - ₹5L</SelectItem>
                  <SelectItem value="luxury">₹5L+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="type">Venue Type</Label>
              <Select value={searchCriteria.venueType} onValueChange={(value) => setSearchCriteria(prev => ({ ...prev, venueType: value }))}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="hotel">Hotels</SelectItem>
                  <SelectItem value="palace">Palaces</SelectItem>
                  <SelectItem value="garden">Garden Venues</SelectItem>
                  <SelectItem value="beach">Beach Resorts</SelectItem>
                  <SelectItem value="heritage">Heritage Venues</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-6">
            <Button onClick={searchVenues} disabled={isSearching} className="w-full md:w-auto">
              {isSearching ? 'Searching...' : 'Find Venues'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {recommendations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            Found {recommendations.length} venues matching your criteria
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((venue) => (
              <Card key={venue.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/30 dark:to-primary/20 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-primary/50 dark:text-primary/60" />
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-lg">{venue.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {venue.location}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{venue.rating}</span>
                      </div>
                      <Badge className={getPriceRangeColor(venue.priceRange)}>
                        {venue.priceRange}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {venue.capacity} guests
                      </span>
                      <span>{venue.type}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {venue.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {venue.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {venue.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{venue.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {recommendations.length === 0 && !isSearching && (
        <Card>
          <CardContent className="p-8 text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No venues found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria to find more venues
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIVenueRecommendations;
