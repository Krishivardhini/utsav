import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-indian-celebration.jpg";

export const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text content */}
          <div className="text-center md:text-left animate-fade-in">
            <div className="flex justify-center md:justify-start mb-6">
              <Sparkles className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="font-poppins text-lg md:text-xl text-foreground/90 max-w-2xl md:max-w-none mx-auto md:mx-0 mb-10">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/consultation">
                <Button variant="festive" size="lg" className="group">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/ai-tools">
                <Button variant="outline" size="lg" className="group">
                  {t('hero.consultation')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Image on the side */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-orange-200/40 blur-2xl" />
            <img
              src={heroImage}
              alt="Indian celebration"
              className="relative w-full h-[340px] md:h-[520px] object-cover rounded-3xl shadow-elegant ring-1 ring-orange-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
