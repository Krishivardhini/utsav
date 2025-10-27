import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    event: "Wedding",
    text: "Utsav made our three-day wedding celebration absolutely magical. Every ritual was beautifully planned and executed.",
    rating: 5,
  },
  {
    name: "Anjali & Vikram Patel",
    event: "Baby Naming Ceremony",
    text: "The naming ceremony was perfect! They understood the religious significance and made it truly special for our family.",
    rating: 5,
  },
  {
    name: "Meera Gupta",
    event: "Diwali Celebration",
    text: "Our community Diwali event was spectacular. The decor, food, and entertainment were all top-notch.",
    rating: 5,
  },
  {
    name: "Rohan & Kavya Singh",
    event: "Griha Pravesh",
    text: "They organized our house warming ceremony with such care. Every traditional detail was handled perfectly.",
    rating: 5,
  },
  {
    name: "Deepak & Sunita Reddy",
    event: "25th Anniversary",
    text: "Our silver jubilee celebration was beyond our dreams. They blended tradition with modern elegance beautifully.",
    rating: 5,
  },
  {
    name: "Aisha & Arjun Mehta",
    event: "Engagement Ceremony",
    text: "From Sangeet to engagement, every function was flawlessly planned. Highly recommend their services!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Celebration Stories
          </h2>
          <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from families who celebrated with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border bg-card hover:shadow-soft transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-poppins text-foreground/80 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-playfair font-semibold text-foreground">
                  — {testimonial.name}
                </p>
                <p className="font-poppins text-sm text-muted-foreground mt-1">
                  {testimonial.event}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
