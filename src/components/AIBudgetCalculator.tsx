import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Calculator, MapPin, Users, Calendar, DollarSign } from 'lucide-react';

interface BudgetBreakdown {
  venue: number;
  catering: number;
  photography: number;
  attire: number;
  music: number;
  transportation: number;
  miscellaneous: number;
  total: number;
}

const AIBudgetCalculator = () => {
  const { t } = useTranslation();
  const [totalBudget, setTotalBudget] = useState<number>(500000);
  const [guestCount, setGuestCount] = useState<number>(100);
  const [location, setLocation] = useState<string>('metro');
  const [weddingType, setWeddingType] = useState<string>('traditional');

  const calculateBudget = (): BudgetBreakdown => {
    let baseMultiplier = 1;
    
    // Location multiplier
    switch (location) {
      case 'metro':
        baseMultiplier = 1.2;
        break;
      case 'tier2':
        baseMultiplier = 1;
        break;
      case 'tier3':
        baseMultiplier = 0.8;
        break;
      case 'destination':
        baseMultiplier = 1.5;
        break;
    }

    // Wedding type multiplier
    switch (weddingType) {
      case 'luxury':
        baseMultiplier *= 1.5;
        break;
      case 'traditional':
        baseMultiplier *= 1;
        break;
      case 'modern':
        baseMultiplier *= 1.1;
        break;
      case 'minimalist':
        baseMultiplier *= 0.7;
        break;
    }

    const adjustedBudget = totalBudget * baseMultiplier;

    return {
      venue: Math.round(adjustedBudget * 0.45),
      catering: Math.round(adjustedBudget * 0.22),
      photography: Math.round(adjustedBudget * 0.12),
      attire: Math.round(adjustedBudget * 0.10),
      music: Math.round(adjustedBudget * 0.06),
      transportation: Math.round(adjustedBudget * 0.03),
      miscellaneous: Math.round(adjustedBudget * 0.02),
      total: Math.round(adjustedBudget)
    };
  };

  const budget = calculateBudget();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getLocationName = (loc: string) => {
    switch (loc) {
      case 'metro': return 'Metro Cities (Mumbai, Delhi, Bangalore)';
      case 'tier2': return 'Tier-2 Cities';
      case 'tier3': return 'Tier-3 Cities';
      case 'destination': return 'Destination Wedding';
      default: return 'Metro Cities';
    }
  };

  const getWeddingTypeName = (type: string) => {
    switch (type) {
      case 'luxury': return 'Luxury Wedding';
      case 'traditional': return 'Traditional Wedding';
      case 'modern': return 'Modern Wedding';
      case 'minimalist': return 'Minimalist Wedding';
      default: return 'Traditional Wedding';
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          AI Budget Calculator
        </CardTitle>
        <CardDescription>
          Get personalized budget breakdown based on your preferences and location
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Input Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="budget" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Total Budget (₹)
              </Label>
              <div className="mt-2">
                <Slider
                  value={[totalBudget]}
                  onValueChange={(value) => setTotalBudget(value[0])}
                  min={100000}
                  max={5000000}
                  step={50000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>₹1L</span>
                  <span className="font-medium">{formatCurrency(totalBudget)}</span>
                  <span>₹50L</span>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="guests" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Guest Count
              </Label>
              <div className="mt-2">
                <Slider
                  value={[guestCount]}
                  onValueChange={(value) => setGuestCount(value[0])}
                  min={50}
                  max={1000}
                  step={25}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>50</span>
                  <span className="font-medium">{guestCount} guests</span>
                  <span>1000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="metro">Metro Cities (Mumbai, Delhi, Bangalore)</SelectItem>
                  <SelectItem value="tier2">Tier-2 Cities</SelectItem>
                  <SelectItem value="tier3">Tier-3 Cities</SelectItem>
                  <SelectItem value="destination">Destination Wedding</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="type" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Wedding Type
              </Label>
              <Select value={weddingType} onValueChange={setWeddingType}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="luxury">Luxury Wedding</SelectItem>
                  <SelectItem value="traditional">Traditional Wedding</SelectItem>
                  <SelectItem value="modern">Modern Wedding</SelectItem>
                  <SelectItem value="minimalist">Minimalist Wedding</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Budget Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <span className="font-medium">Venue & Decorations</span>
                <span className="font-bold text-orange-600 dark:text-orange-400">{formatCurrency(budget.venue)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="font-medium">Catering & Food</span>
                <span className="font-bold text-green-600 dark:text-green-400">{formatCurrency(budget.catering)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <span className="font-medium">Photography & Videography</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{formatCurrency(budget.photography)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <span className="font-medium">Attire & Jewelry</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">{formatCurrency(budget.attire)}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <span className="font-medium">Music & Entertainment</span>
                <span className="font-bold text-pink-600 dark:text-pink-400">{formatCurrency(budget.music)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <span className="font-medium">Transportation</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{formatCurrency(budget.transportation)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <span className="font-medium">Miscellaneous</span>
                <span className="font-bold text-gray-600 dark:text-gray-400">{formatCurrency(budget.miscellaneous)}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border-2 border-primary/20">
                <span className="font-bold text-lg">Total Budget</span>
                <span className="font-bold text-2xl text-primary">{formatCurrency(budget.total)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Your Wedding Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Wedding Type:</span>
              <span className="ml-2 font-medium">{getWeddingTypeName(weddingType)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Location:</span>
              <span className="ml-2 font-medium">{getLocationName(location)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Guest Count:</span>
              <span className="ml-2 font-medium">{guestCount} guests</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex-1">
            Save Budget Plan
          </Button>
          <Button variant="outline" className="flex-1">
            Get AI Recommendations
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIBudgetCalculator;
