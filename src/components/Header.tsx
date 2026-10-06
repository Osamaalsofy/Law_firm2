import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { FIRM_INFO } from '../data/firmData';
import { Phone, Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  currentLang: 'ar' | 'en';
  onToggleLang: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onToggleLang,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', labelAr: 'الرئيسية', labelEn: 'Home' },
    { href: '#about', labelAr: 'عن الشركة', labelEn: 'About' },
    { href: '#services', labelAr: 'مجالات العمل', labelEn: 'Practices' },
    { href: '#process', labelAr: 'آلية العمل', labelEn: 'Process' },
    { href: '#reviews', labelAr: 'آراء الموكلين', labelEn: 'Reviews' },
    { href: '#location-map', labelAr: 'الموقع والخريطة', labelEn: 'Location' },
  ];

  const isAr = currentLang === 'ar';

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      {/* Clean Minimalist Header Bar (Uncluttered, text-focused, Saudi elegance) */}
      <nav
        className={`transition-all duration-300 px-4 sm:px-8 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8DEC8] py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#EFE8DC] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 focus:outline-none">
            <BrandLogo variant="horizontal" size="md" />
          </a>

          {/* Clean Text Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#2C3E35] hover:text-[#123D32] text-sm font-semibold transition-colors relative py-1 group"
              >
                {isAr ? link.labelAr : link.labelEn}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#123D32] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Action Area: Direct Phone, Consultation Button & Lang Switch */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Clean Phone Text Link */}
            <a
              href={`tel:${FIRM_INFO.phoneClean}`}
              className="text-[#123D32] hover:text-[#0B2923] text-sm font-bold tracking-wide flex items-center gap-1.5 transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#B79255]" />
              <span>{FIRM_INFO.phoneDisplay}</span>
            </a>

            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="text-xs font-semibold text-[#5A6860] hover:text-[#123D32] px-2.5 py-1 rounded-md border border-[#DCD3C4] hover:border-[#123D32] transition-colors"
              title={isAr ? 'Switch to English' : 'التحويل للغة العربية'}
            >
              {isAr ? 'EN' : 'العربية'}
            </button>

            {/* Main Action: Consultation */}
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-lg text-sm font-bold bg-[#123D32] text-white hover:bg-[#0B2923] shadow-sm transition-all transform active:scale-95 cursor-pointer"
            >
              {isAr ? 'طلب استشارة' : 'Book Consultation'}
            </button>

          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold bg-[#123D32] text-white"
            >
              {isAr ? 'استشارة' : 'Consult'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#F3EDE2] text-[#123D32] hover:bg-[#EAE0D0]"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E8DEC8] pb-4 bg-white rounded-b-xl px-4 animate-in fade-in">
            <div className="flex flex-col gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#2C3E35] hover:text-[#123D32] text-sm font-semibold py-2 px-3 rounded-lg hover:bg-[#F7F4EE] transition-colors"
                >
                  {isAr ? link.labelAr : link.labelEn}
                </a>
              ))}
              <div className="pt-3 border-t border-[#EFE8DC] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 rounded-lg font-bold bg-[#123D32] text-white text-center text-sm"
                >
                  {isAr ? 'طلب استشارة قانونية' : 'Book Consultation'}
                </button>
                <div className="flex items-center justify-between pt-1 px-1">
                  <a
                    href={`tel:${FIRM_INFO.phoneClean}`}
                    className="text-sm font-bold text-[#123D32] flex items-center gap-1.5"
                    dir="ltr"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#B79255]" />
                    <span>{FIRM_INFO.phoneDisplay}</span>
                  </a>
                  <button
                    onClick={onToggleLang}
                    className="text-xs font-bold text-[#5A6860] px-2.5 py-1 rounded border border-[#DCD3C4]"
                  >
                    {isAr ? 'English' : 'العربية'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
