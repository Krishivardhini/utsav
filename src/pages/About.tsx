import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Events Planned" },
    { number: "50+", label: "Trusted Vendors" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Happy Clients" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Cultural Authenticity",
      description: "We honor and celebrate Indian traditions in every event we plan",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Every celebration is unique, and we treat it with personalized care",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every detail of your special day",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Blending traditional values with contemporary celebration styles",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-festive text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-40 h-40 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-white rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
                About Utsav
              </h1>
              <p className="font-poppins text-xl leading-relaxed">
                We are passionate celebration planners dedicated to bringing your Indian traditions to life with elegance, authenticity, and joy.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-poppins text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-12">
                Our Story
              </h2>
              <div className="space-y-6 font-poppins text-lg text-muted-foreground leading-relaxed">
                <p>
                  Utsav was born from a deep love for Indian celebrations and a vision to preserve our rich cultural traditions while embracing modern elegance. Founded in 2014, we started with a simple mission: to make every Indian celebration unforgettable.
                </p>
                <p>
                  Over the years, we've had the privilege of planning hundreds of weddings, baby showers, festivals, and family celebrations across India. Each event has taught us something new, and each family has become part of our extended Utsav family.
                </p>
                <p>
                  What sets us apart is our deep understanding of Indian traditions, combined with contemporary planning expertise. We work closely with traditional pandits, skilled artisans, and modern vendors to create celebrations that honor your heritage while reflecting your unique style.
                </p>
                <p>
                  Today, Utsav is proud to be one of India's most trusted names in cultural event planning, with a team of dedicated professionals who treat every event as their own celebration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-border text-center hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-festive text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="font-poppins text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of families who trusted us with their special moments
            </p>
            <Link to="/consultation">
              <Button variant="gold" size="lg">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
