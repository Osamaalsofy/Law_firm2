import React from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  currentLang: 'ar' | 'en';
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenConsultation }) => {
  const isAr = currentLang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] pt-32 pb-20 lg:pt-36 lg:pb-24 flex items-center justify-start overflow-hidden"
    >
      {/* Cinematic Saudi Cultural Background Image (Clearer Opacity & High Definition) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/src/assets/images/saudi_hero_cinematic_1791299400406.jpg"
          alt={isAr ? 'خلفية معمارية وثقافية سعودية مهيبة' : 'Cinematic Saudi Cultural Architecture'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05] opacity-95 transition-all duration-700"
        />

        {/* Balanced Subtle Directional Scrim: Clear background with crystal-clear right-aligned text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/70 via-transparent to-[#FAF8F5]/40" />
      </div>

      {/* Decorative Traditional Border Trim Lines */}
      <div className="absolute top-24 right-8 w-24 h-24 border-t-2 border-r-2 border-[#B79255]/40 hidden lg:block pointer-events-none z-10" />
      <div className="absolute bottom-16 left-8 w-24 h-24 border-b-2 border-l-2 border-[#B79255]/40 hidden lg:block pointer-events-none z-10" />

      {/* Right-Aligned Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-right">
        
        <div className="max-w-3xl mr-0 ml-auto">
          {/* Regulatory Accreditation Ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#B79255]/40 text-[#123D32] text-xs sm:text-sm font-bold mb-6 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#123D32]" />
            <span>
              {isAr
                ? 'شركة مهنية مرخصة ومعتمدة من وزارة العدل • جدة، المملكة العربية السعودية'
                : 'Licensed Saudi Professional Law Firm by Ministry of Justice • Jeddah, KSA'}
            </span>
          </div>

          {/* Firm Title & Slogan */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A2421] leading-[1.25] tracking-tight font-display-ar mb-6">
            {isAr ? (
              <>
                <span className="block text-[#123D32] text-xl sm:text-3xl font-bold font-body-ar mb-3 tracking-normal">
                  شركة بصيرة ومنعة للمحاماة والخدمات القانونية
                </span>
                <span>حكمةٌ في المشورة..</span>{' '}
                <span className="text-[#B79255] inline-block">
                  ومنعةٌ في حماية الحقوق
                </span>
              </>
            ) : (
              <>
                <span className="block text-[#123D32] text-xl sm:text-3xl font-bold font-body-ar mb-3 tracking-normal">
                  Baseerah & Mana'ah Law Firm
                </span>
                <span>Wisdom in Counsel,</span>{' '}
                <span className="text-[#B79255] inline-block">
                  Fortitude in Defending Rights
                </span>
              </>
            )}
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-[#3F4E47] text-base sm:text-xl leading-relaxed mb-8 font-body-ar font-medium max-w-2xl bg-white/40 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-2 sm:p-0 rounded-lg">
            {isAr
              ? 'شريككم القانوني الاستراتيجي للأفراد والشركات في المملكة العربية السعودية. نجمع بين الفهم العميق للأنظمة السعودية الحديثة، وصلابة التمثيل القضائي، والأمانة المطلقة في رعاية مصالحكم.'
              : 'Your strategic legal partner for individuals and corporations across Saudi Arabia. Combining deep mastery of modern Saudi regulations, steadfast advocacy, and uncompromising fiduciary care.'}
          </p>

          {/* Primary Action Button (Only Consultation Button) */}
          <div className="flex items-center justify-start gap-4 mb-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl font-bold text-base bg-[#123D32] text-white hover:bg-[#0B2923] shadow-md hover:shadow-xl transition-all transform active:scale-95 flex items-center gap-3 cursor-pointer"
            >
              <span>{isAr ? 'حجز موعد استشارة قانونية' : 'Book Legal Consultation'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
