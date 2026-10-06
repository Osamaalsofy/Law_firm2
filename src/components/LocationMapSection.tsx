import React, { useState } from 'react';
import { FIRM_INFO } from '../data/firmData';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink,
  Compass,
  Film,
  Sparkles
} from 'lucide-react';

interface LocationMapSectionProps {
  currentLang: 'ar' | 'en';
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const [copied, setCopied] = useState(false);
  const [isCinematicBW, setIsCinematicBW] = useState(true);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(FIRM_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: FIRM_INFO.name,
          text: `${FIRM_INFO.name} - ${FIRM_INFO.address}`,
          url: FIRM_INFO.googleMapsUrl,
        });
      } catch {
        // Fallback
      }
    } else {
      handleCopyAddress();
    }
  };

  return (
    <section id="location-map" className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#B79255]/30 text-[#123D32] text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#B79255]" />
            <span>{isAr ? 'الموقع الجغرافي والزيارات' : 'Firm Location & Directions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2421] font-display-ar mb-4">
            {isAr ? (
              <>
                نسعد باستقبالكم في <span className="text-[#123D32]">مقرنا بجدة</span>
              </>
            ) : (
              <>
                Welcoming You at Our <span className="text-[#123D32]">Jeddah Headquarters</span>
              </>
            )}
          </h2>

          <p className="text-[#5F6C66] text-base sm:text-lg leading-relaxed font-body-ar">
            {isAr
              ? 'مقر استشاري هادئ ومجهز لاستقبالكم ومناقشة قضاياكم بأعلى درجات الخصوصية والراحة المهنية.'
              : 'A serene and discreet legal environment situated in Jeddah to host our clients and examine legal proceedings.'}
          </p>
        </div>

        {/* Grid: Details Card + Map View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card Info Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] p-7 sm:p-8 shadow-xs text-right">
            
            <div>
              {/* Firm Name & Rating Header */}
              <div className="mb-6 pb-6 border-b border-[#EFE8DC]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#123D32] bg-[#EDF8F3] px-2.5 py-0.5 rounded-full border border-[#B3E3CC]">
                    {isAr ? 'شركة محاماة معتمدة' : 'Licensed Law Firm'}
                  </span>
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span>{isAr ? 'مفتوح حتى 10:30 م' : 'Closes 10:30 PM'}</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#1A2421] font-display-ar mb-2">
                  {isAr ? FIRM_INFO.name : FIRM_INFO.nameEn}
                </h3>

                <div className="flex items-center gap-2 text-sm text-[#B79255]">
                  <span className="font-black text-[#1A2421] text-base">5.0</span>
                  <div className="flex text-[#B79255]">{'★★★★★'}</div>
                  <span className="text-xs text-[#5F6C66]">
                    ({FIRM_INFO.reviewsCount} {isAr ? 'تقييم على Google' : 'reviews on Google'})
                  </span>
                </div>
              </div>

              {/* Physical Address Block */}
              <div className="space-y-4 mb-8">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF3E6] border border-[#E8DEC8] flex items-center justify-center shrink-0 text-[#B79255]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5F6C66] block mb-0.5">
                      {isAr ? 'العنوان الوطني / المقر:' : 'Physical Address:'}
                    </span>
                    <p className="text-sm font-semibold text-[#1A2421] leading-relaxed">
                      {isAr ? FIRM_INFO.address : FIRM_INFO.addressEn}
                    </p>
                    <span className="inline-block mt-1 font-mono text-xs text-[#123D32] bg-[#F4EFE6] px-2 py-0.5 rounded border border-[#E8DEC8]">
                      {FIRM_INFO.plusCode}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F4EFE6] border border-[#E8DEC8] flex items-center justify-center shrink-0 text-[#123D32]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5F6C66] block mb-0.5">
                      {isAr ? 'مواعيد الاستقبال والعمل:' : 'Operating Hours:'}
                    </span>
                    <p className="text-sm font-semibold text-[#1A2421]">
                      {isAr ? 'السبت - الخميس: 9:00 ص - 10:30 م' : 'Saturday - Thursday: 9:00 AM - 10:30 PM'}
                    </p>
                    <p className="text-xs text-[#5F6C66]">
                      {isAr ? 'الجمعة: مغلق (للحالات الطارئة عبر الواتساب)' : 'Friday: Closed (Emergency via WhatsApp)'}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#F4EFE6] border border-[#E8DEC8] flex items-center justify-center shrink-0 text-[#123D32]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#5F6C66] block mb-0.5">
                      {isAr ? 'الاتصال المباشر:' : 'Direct Phone:'}
                    </span>
                    <a
                      href={`tel:${FIRM_INFO.phoneClean}`}
                      className="text-base font-bold text-[#123D32] hover:text-[#0B2923] transition-colors"
                      dir="ltr"
                    >
                      {FIRM_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons for Location */}
            <div className="space-y-2.5 pt-6 border-t border-[#EFE8DC]">
              <a
                href={FIRM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-[#123D32] text-white hover:bg-[#0B2923] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>{isAr ? 'فتح الاتجاهات في خرائط Google' : 'Open in Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="py-2.5 px-3 rounded-lg text-xs font-semibold bg-white hover:bg-[#FAF8F5] text-[#2C3E35] flex items-center justify-center gap-1.5 border border-[#E8DEC8] transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#B79255]" />}
                  <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ العنوان' : 'Copy Address')}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="py-2.5 px-3 rounded-lg text-xs font-semibold bg-white hover:bg-[#FAF8F5] text-[#2C3E35] flex items-center justify-center gap-1.5 border border-[#E8DEC8] transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-[#B79255]" />
                  <span>{isAr ? 'مشاركة الموقع' : 'Share Location'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Interactive Map Frame Column with Black & White Cinematic Vibe & Animation (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-[#1A2421]/15 shadow-xl relative min-h-[480px] bg-[#0E151E] flex flex-col group">
            
            {/* Top Bar for Cinematic Map */}
            <div className="bg-[#141C26] px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs text-neutral-300 z-20">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DFC07C]" />
                <span className="font-semibold text-white">
                  {isAr ? 'خريطة الموقع السينمائية • جدة' : 'Cinematic Location Map • Jeddah'}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-[#DFC07C] border border-[#DFC07C]/30">
                  <Film className="w-3 h-3" />
                  {isCinematicBW
                    ? isAr ? 'أبيض وأسود سينمائي' : 'B&W Cinematic'
                    : isAr ? 'ألوان واقعية' : 'Full Color'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Cinematic Mode Animation Toggle */}
                <button
                  onClick={() => setIsCinematicBW(!isCinematicBW)}
                  className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#DFC07C] transition-all cursor-pointer border border-white/15"
                  title={isAr ? 'تبديل التأثير السينمائي' : 'Toggle Cinematic Effect'}
                >
                  <Sparkles className="w-3 h-3 text-[#DFC07C]" />
                  <span>{isCinematicBW ? (isAr ? 'إظهار الألوان' : 'Color Mode') : (isAr ? 'أبيض وأسود' : 'B&W Mode')}</span>
                </button>

                <a
                  href={FIRM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#DFC07C] flex items-center gap-1 font-bold transition-colors ml-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map with Smooth Black & White Cinematic Animation */}
            <div className="relative flex-1 w-full h-full min-h-[420px] overflow-hidden">
              <iframe
                title={isAr ? 'موقع شركة بصيرة ومنعة للمحاماة' : 'Baseerah & Manaah Law Firm Location'}
                src="https://maps.google.com/maps?q=21.4363,39.2785&hl=ar&z=15&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '420px',
                  filter: isCinematicBW
                    ? 'grayscale(100%) contrast(125%) brightness(88%)'
                    : 'grayscale(0%) contrast(100%) brightness(100%)',
                  transition: 'filter 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Cinematic Vignette Shadow Overlay */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                  isCinematicBW
                    ? 'bg-gradient-to-t from-black/60 via-transparent to-black/30 ring-1 ring-inset ring-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]'
                    : 'bg-transparent'
                }`}
              />

              {/* Cinematic Radar Ping Target Marker on Map */}
              <div className="absolute top-6 left-6 pointer-events-none flex items-center gap-2 bg-[#0F1722]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white shadow-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFC07C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DFC07C]"></span>
                </span>
                <span className="text-[11px] font-mono tracking-wider font-semibold">
                  21.4363° N, 39.2785° E
                </span>
              </div>

              {/* Floating Pin Card on the Map */}
              <div className="absolute bottom-5 right-5 bg-[#0F1722]/95 backdrop-blur-md border border-[#DFC07C]/40 p-4 rounded-xl shadow-2xl max-w-xs text-right text-white transition-all transform group-hover:scale-102">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-bold text-white font-display-ar">
                    {isAr ? 'مقر شركة بصيرة ومنعة' : 'Baseerah & Manaah HQ'}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 leading-snug">
                  {isAr ? 'شارع سهل بن عمرو الفرعي، الأمير فواز الجنوبي' : 'Sahl Bin Amr Sub-st, Al Amir Fawwaz'}
                </p>
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
                  <span className="text-[#DFC07C] font-mono font-bold">C892+99 جدة</span>
                  <a
                    href={FIRM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#DFC07C] underline font-bold"
                  >
                    {isAr ? 'فتح في تطبيق الخرائط' : 'Open Directions'}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
