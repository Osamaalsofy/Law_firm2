import React from 'react';
import { BrandLogo } from './BrandLogo';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';
import { Phone, MessageCircle, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: 'ar' | 'en';
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenConsultation }) => {
  const isAr = currentLang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#5F6C66] border-t border-[#E8DEC8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#EFE8DC]">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 text-right">
            <div className="mb-5">
              <BrandLogo variant="horizontal" size="lg" />
            </div>

            <p className="text-sm text-[#4E5C55] leading-relaxed mb-6 font-body-ar max-w-md">
              {isAr
                ? 'شركة بصيرة ومنعة للمحاماة والخدمات القانونية بجدة. صرح قانوني يرتكز على عمق دراسة الأنظمة السعودية الحديثة وحصانة التمثيل القضائي وحماية حقوق الموكلين.'
                : 'Baseerah & Mana’ah Law Firm in Jeddah. Founded on profound mastery of modern Saudi regulations and steadfast judicial advocacy protecting client rights.'}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E8DEC8] text-xs text-[#123D32] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#123D32] shrink-0" />
              <span>{isAr ? FIRM_INFO.licenseNote : FIRM_INFO.licenseNoteEn}</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 text-right">
            <h4 className="text-sm font-bold text-[#1A2421] mb-4 font-display-ar">
              {isAr ? 'روابط سريعة' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-[#123D32] transition-colors">
                  {isAr ? 'الرئيسية' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#123D32] transition-colors">
                  {isAr ? 'عن الشركة' : 'About Firm'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#123D32] transition-colors">
                  {isAr ? 'مجالات العمل' : 'Practice Areas'}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#123D32] transition-colors">
                  {isAr ? 'آلية العمل' : 'Our Process'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#123D32] transition-colors">
                  {isAr ? 'آراء الموكلين (5.0 ★)' : 'Reviews (5.0 ★)'}
                </a>
              </li>
              <li>
                <a href="#location-map" className="hover:text-[#123D32] transition-colors">
                  {isAr ? 'الموقع والخريطة' : 'Location & Map'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practices (2 cols) */}
          <div className="lg:col-span-2 text-right">
            <h4 className="text-sm font-bold text-[#1A2421] mb-4 font-display-ar">
              {isAr ? 'مجالات العمل' : 'Practices'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {PRACTICE_AREAS.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <a href="#services" className="hover:text-[#123D32] transition-colors line-clamp-1">
                    {isAr ? p.title : p.titleEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 text-right">
            <h4 className="text-sm font-bold text-[#1A2421] mb-4 font-display-ar">
              {isAr ? 'بيانات التواصل والمقر' : 'Direct Contact'}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B79255] shrink-0 mt-0.5" />
                <span className="text-[#3E4D46]">
                  {isAr ? FIRM_INFO.address : FIRM_INFO.addressEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#123D32] shrink-0" />
                <a
                  href={`tel:${FIRM_INFO.phoneClean}`}
                  className="font-bold text-[#1A2421] hover:text-[#123D32] transition-colors"
                  dir="ltr"
                >
                  {FIRM_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#0E7048] shrink-0" />
                <a
                  href={FIRM_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0E7048] hover:underline font-semibold"
                >
                  {isAr ? 'محادثة واتساب مباشرة' : 'Direct WhatsApp'}
                </a>
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-lg text-xs font-bold bg-[#123D32] text-white hover:bg-[#0B2923] transition-all cursor-pointer shadow-xs"
                >
                  {isAr ? 'حجز موعد استشارة' : 'Book Consultation'}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7A8881]">
          <p className="text-center md:text-right">
            {isAr
              ? `جميع الحقوق محفوظة © ${new Date().getFullYear()} شركة بصيرة ومنعة للمحاماة والخدمات القانونية.`
              : `All rights reserved © ${new Date().getFullYear()} Baseerah & Mana’ah Law Firm & Legal Services.`}
          </p>

          <p className="text-center md:text-left text-[11px] text-[#7A8881] max-w-md">
            {isAr
              ? 'تنويه: المحتوى الوارد في هذا الموقع لأغراض التعريف المهني العام ولا يعتبر استشارة قانونية قائمة بحد ذاته دون عقد توكيل معتمد.'
              : 'Notice: Website content is for informative purposes and does not establish formal legal counsel without an executed engagement contract.'}
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-white hover:bg-[#FAF8F5] text-[#123D32] transition-colors border border-[#E8DEC8] shadow-xs"
            aria-label="العودة للأعلى"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
