import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Baby, Cake, Sparkles, Home, CalendarDays, Flower, Users } from "lucide-react";

const categories = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Complete wedding planning from Mehendi to Reception",
    color: "text-deep-red",
  },
  {
    icon: Flower,
    title: "Pre-Wedding",
    description: "Engagement, Sangeet, Mehendi & Haldi ceremonies",
    color: "text-primary",
  },
  {
    icon: Baby,
    title: "Baby Ceremonies",
    description: "Baby shower, Naming ceremony, Annaprashan & more",
    color: "text-secondary",
  },
  {
    icon: Cake,
    title: "Birthdays",
    description: "Milestone birthdays and themed celebrations",
    color: "text-accent",
  },
  {
    icon: Sparkles,
    title: "Festivals",
    description: "Diwali, Holi, Navratri & traditional celebrations",
    color: "text-gold",
  },
  {
    icon: Home,
    title: "Griha Pravesh",
    description: "House warming & new home blessings",
    color: "text-saffron",
  },
  {
    icon: CalendarDays,
    title: "Anniversaries",
    description: "Marriage anniversaries & milestone celebrations",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Religious Ceremonies",
    description: "Pujas, Katha, Bhajans & spiritual gatherings",
    color: "text-royal-blue",
  },
];

export const EventCategories = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Celebrations We Create
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Every occasion deserves to be celebrated with tradition, love, and joy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-elegant transition-all duration-300 animate-scale-in hover:scale-105 hover:border-primary/50 group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-gradient-festive/10 flex items-center justify-center mb-4 group-hover:bg-gradient-festive/20 transition-all">
                  <category.icon className={`w-7 h-7 ${category.color}`} />
                </div>
                <CardTitle className="font-playfair text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-poppins text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
