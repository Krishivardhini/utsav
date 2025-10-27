import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, CalendarHeart, Palette, Users, Utensils, Music } from "lucide-react";

const services = [
  {
    icon: CalendarHeart,
    title: "Full Event Planning",
    description: "End-to-end planning for all Indian ceremonies and celebrations with attention to cultural traditions.",
  },
  {
    icon: Palette,
    title: "Decor & Styling",
    description: "Traditional and contemporary decor with authentic Indian elements, colors, and themes.",
  },
  {
    icon: Users,
    title: "Vendor Coordination",
    description: "Connect with trusted pandits, caterers, decorators, and photographers from our network.",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Authentic Indian cuisine with regional specialties and custom menu planning.",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Traditional music, DJs, performers, and cultural entertainment for your event.",
  },
  {
    icon: Sparkles,
    title: "Day-Of Coordination",
    description: "Seamless execution on your special day while you focus on creating memories.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive planning services rooted in Indian traditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-elegant transition-all duration-300 animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-poppins text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
