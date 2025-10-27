import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EventCategories } from "@/components/EventCategories";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Star, Sparkles, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Decorative background pattern */}
      <div className="fixed inset-0 ethnic-pattern opacity-30 pointer-events-none"></div>
      
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-16 h-16 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-xl floating-element pointer-events-none"></div>
      <div className="fixed top-40 right-20 w-24 h-24 bg-gradient-to-br from-yellow-200/15 to-orange-200/15 rounded-full blur-2xl floating-element pointer-events-none"></div>
      <div className="fixed bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-rose-200/20 to-red-200/20 rounded-full blur-xl floating-element pointer-events-none"></div>
      <div className="fixed bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-amber-200/15 to-yellow-200/15 rounded-full blur-2xl floating-element pointer-events-none"></div>
      
      <Navbar />
      <Hero />
      
      {/* Decorative separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <Star className="w-4 h-4 text-orange-400 animate-pulse" />
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            <Sparkles className="w-6 h-6 text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            <Heart className="w-4 h-4 text-rose-400 animate-bounce" />
          </div>
        </div>
      </div>
      
      <EventCategories />
      
      {/* Decorative separator */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
