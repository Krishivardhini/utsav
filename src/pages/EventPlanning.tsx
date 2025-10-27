import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Baby, Cake, Home, Calendar, Flower } from "lucide-react";

const eventTypes = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Complete wedding planning from Roka to Reception, including all traditional ceremonies",
    ceremonies: ["Roka", "Engagement", "Mehendi", "Haldi", "Sangeet", "Wedding", "Reception"],
  },
  {
    icon: Sparkles,
    title: "Pre-Wedding Ceremonies",
    description: "Specialized planning for Mehendi, Haldi, Sangeet, and engagement celebrations",
    ceremonies: ["Mehendi Ceremony", "Haldi Ceremony", "Sangeet Night", "Ring Ceremony"],
  },
  {
    icon: Baby,
    title: "Baby Celebrations",
    description: "Godh Bharai, Namkaran, Mundan, and first birthday celebrations",
    ceremonies: ["Godh Bharai", "Namkaran", "Mundan", "Annaprashan"],
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description: "Traditional and modern birthday parties for all ages",
    ceremonies: ["Theme Parties", "Traditional Style", "Milestone Birthdays"],
  },
  {
    icon: Flower,
    title: "Festival Celebrations",
    description: "Diwali, Holi, Navratri, and other festival event planning",
    ceremonies: ["Diwali Party", "Holi Celebration", "Navratri Event", "Puja Ceremonies"],
  },
  {
    icon: Home,
    title: "Griha Pravesh",
    description: "Traditional housewarming ceremonies and celebrations",
    ceremonies: ["Vastu Puja", "Housewarming Party", "Traditional Rituals"],
  },
];

const EventPlanning = () => {
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
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Event Planning Services
            </h1>
            <p className="font-poppins text-xl max-w-3xl mx-auto mb-8 animate-fade-in">
              From intimate family gatherings to grand celebrations, we plan every detail with care and cultural authenticity
            </p>
            <Link to="/consultation">
              <Button variant="gold" size="lg" className="animate-scale-in">
                Plan Your Event
              </Button>
            </Link>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventTypes.map((event, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <event.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-playfair text-2xl">{event.title}</CardTitle>
                    <CardDescription className="font-poppins">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-poppins font-semibold text-sm text-foreground mb-2">We handle:</p>
                      <ul className="space-y-1">
                        {event.ceremonies.map((ceremony, idx) => (
                          <li key={idx} className="font-poppins text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {ceremony}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Planning Process
              </h2>
              <p className="font-poppins text-lg text-muted-foreground">
                A seamless journey from consultation to celebration
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "01", title: "Consultation", desc: "Understand your vision and requirements" },
                { step: "02", title: "Planning", desc: "Create detailed timeline and vendor selection" },
                { step: "03", title: "Coordination", desc: "Manage all logistics and preparations" },
                { step: "04", title: "Execution", desc: "Flawless event day management" },
              ].map((item, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-playfair text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="font-poppins text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-festive text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="font-poppins text-lg mb-8 max-w-2xl mx-auto">
              Let's create an unforgettable celebration that honors your traditions
            </p>
            <Link to="/consultation">
              <Button variant="gold" size="lg">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventPlanning;
