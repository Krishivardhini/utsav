import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.eventPlanning"), path: "/event-planning" },
    { name: t("nav.budgetPlanner"), path: "/budget-planner" },
    { name: "AI Tools", path: "/ai-tools" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-amber-50/95 via-orange-50/95 to-rose-50/95 backdrop-blur-md border-b border-orange-200/50 sticky top-0 z-50 shadow-lg shadow-orange-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <span className="font-playfair text-3xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:via-red-600 group-hover:to-pink-700 transition-all duration-300">
              Utsav
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-poppins text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Link to="/consultation">
              <Button variant="festive" size="sm">
                {t("nav.consultation")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 font-poppins text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="py-3 space-y-3">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
            <Link to="/consultation" onClick={() => setIsOpen(false)}>
              <Button variant="festive" size="sm" className="w-full mt-4">
                {t("nav.consultation")}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
