import React, { useState, useEffect } from 'react';
import { FIRM_INFO } from '../data/firmData';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';

interface FloatingActionsProps {
  currentLang: 'ar' | 'en';
  onOpenConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  currentLang,
  onOpenConsultation,
}) => {
  const isAr = currentLang === 'ar';
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Bottom Quick Contact Buttons (Mobile & Desktop) */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* WhatsApp Fast Button */}
        <a
          href={FIRM_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all group relative cursor-pointer"
          aria-label="تواصل عبر الواتساب"
          title="تواصل مباشر عبر الواتساب"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute left-14 bg-[#1A2421] text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            {isAr ? 'محادثة واتساب سريعة' : 'WhatsApp Chat'}
          </span>
        </a>

        {/* Call Fast Button */}
        <a
          href={`tel:${FIRM_INFO.phoneClean}`}
          className="w-12 h-12 rounded-full bg-[#123D32] hover:bg-[#0B2923] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all group relative cursor-pointer"
          aria-label="اتصال هاتفي"
          title="اتصال هاتفي مباشر"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute left-14 bg-[#1A2421] text-white text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            {isAr ? `اتصال: ${FIRM_INFO.phoneDisplay}` : `Call: ${FIRM_INFO.phoneDisplay}`}
          </span>
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-[#123D32] border border-[#E8DEC8] hover:bg-[#FAF8F5] flex items-center justify-center shadow-md transition-all mx-auto cursor-pointer"
            aria-label="للأعلى"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Floating Bottom Bar on Mobile for Quick Booking */}
      <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E8DEC8] p-2.5 flex items-center justify-between gap-2 shadow-lg">
        <a
          href={`tel:${FIRM_INFO.phoneClean}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#FAF8F5] text-[#123D32] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#E8DEC8]"
        >
          <Phone className="w-3.5 h-3.5 text-[#B79255]" />
          <span>{isAr ? 'اتصال' : 'Call'}</span>
        </a>

        <a
          href={FIRM_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#EDF8F3] text-[#0E7048] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#B3E3CC]"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>{isAr ? 'واتساب' : 'WhatsApp'}</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-[1.5] py-2.5 px-3 rounded-xl bg-[#123D32] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>{isAr ? 'حجز استشارة' : 'Book'}</span>
        </button>
      </div>
    </>
  );
};
