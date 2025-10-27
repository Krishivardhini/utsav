import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Sparkles, Users, Utensils, Music, Camera, Palette, Home } from "lucide-react";

const BudgetPlanner = () => {
  const [totalBudget, setTotalBudget] = useState(1000000);
  const [guests, setGuests] = useState(200);

  const budgetCategories = [
    { icon: Home, name: "Venue", percentage: 25, color: "text-primary" },
    { icon: Utensils, name: "Catering", percentage: 20, color: "text-accent" },
    { icon: Palette, name: "Decor", percentage: 15, color: "text-festive" },
    { icon: Camera, name: "Photography", percentage: 10, color: "text-royal" },
    { icon: Music, name: "Entertainment", percentage: 10, color: "text-primary" },
    { icon: Sparkles, name: "Other Services", percentage: 20, color: "text-accent" },
  ];

  const calculateAmount = (percentage: number) => {
    return (totalBudget * percentage) / 100;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Budget Planner
            </h1>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan your celebration budget wisely with our interactive budget calculator
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Input Section */}
            <div className="lg:col-span-1">
              <Card className="border-border shadow-elegant sticky top-24">
                <CardHeader>
                  <CardTitle className="font-playfair">Event Details</CardTitle>
                  <CardDescription className="font-poppins">
                    Enter your event information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select>
                      <SelectTrigger id="eventType">
                        <SelectValue placeholder="Select event" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="engagement">Engagement</SelectItem>
                        <SelectItem value="reception">Reception</SelectItem>
                        <SelectItem value="baby">Baby Shower</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="guests">Number of Guests: {guests}</Label>
                    <Slider
                      id="guests"
                      min={50}
                      max={1000}
                      step={10}
                      value={[guests]}
                      onValueChange={(value) => setGuests(value[0])}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget">Total Budget: {formatCurrency(totalBudget)}</Label>
                    <Slider
                      id="budget"
                      min={100000}
                      max={10000000}
                      step={50000}
                      value={[totalBudget]}
                      onValueChange={(value) => setTotalBudget(value[0])}
                      className="mt-2"
                    />
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-poppins text-sm text-muted-foreground">Per Guest</span>
                      <span className="font-poppins font-semibold">
                        {formatCurrency(totalBudget / guests)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Budget Breakdown Section */}
            <div className="lg:col-span-2">
              <Card className="border-border shadow-elegant mb-8">
                <CardHeader>
                  <CardTitle className="font-playfair">Budget Breakdown</CardTitle>
                  <CardDescription className="font-poppins">
                    Recommended allocation across different categories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {budgetCategories.map((category, index) => (
                      <div
                        key={index}
                        className="animate-scale-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center`}>
                              <category.icon className={`w-5 h-5 ${category.color}`} />
                            </div>
                            <div>
                              <p className="font-poppins font-semibold text-foreground">
                                {category.name}
                              </p>
                              <p className="font-poppins text-sm text-muted-foreground">
                                {category.percentage}% of budget
                              </p>
                            </div>
                          </div>
                          <p className="font-poppins font-bold text-lg">
                            {formatCurrency(calculateAmount(category.percentage))}
                          </p>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-gradient-festive h-2 rounded-full transition-all duration-500"
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tips Section */}
              <Card className="border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-playfair">Budget Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 font-poppins text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                      <span>Book vendors 6-12 months in advance for better rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                      <span>Consider off-season dates for significant venue discounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                      <span>Allocate 10-15% extra for unexpected expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                      <span>DIY decor elements can save 20-30% on decoration costs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-festive text-white rounded-lg p-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Need Help Planning Your Budget?
            </h2>
            <p className="font-poppins text-lg mb-6 max-w-2xl mx-auto">
              Our experts can help you optimize your budget and get the best value
            </p>
            <Button variant="gold" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BudgetPlanner;
