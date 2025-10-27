import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-festive relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Celebrate Together
          </h2>
          <p className="font-poppins text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Ready to plan your special celebration? Share your vision with us and let's create unforgettable moments rooted in tradition.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Mail className="w-8 h-8 text-white mb-3" />
              <h3 className="font-playfair font-semibold text-white mb-2">Email</h3>
              <p className="font-poppins text-sm text-white/90">hello@utsavcelebrations.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <Phone className="w-8 h-8 text-white mb-3" />
              <h3 className="font-playfair font-semibold text-white mb-2">Phone</h3>
              <p className="font-poppins text-sm text-white/90">+91 9059250377</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <MapPin className="w-8 h-8 text-white mb-3" />
              <h3 className="font-playfair font-semibold text-white mb-2">Location</h3>
              <p className="font-poppins text-sm text-white/90">MRUH,Hyderabad</p>
            </div>
          </div>
          
          <Link to="/consultation">
            <Button variant="gold" size="lg" className="shadow-festive">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
