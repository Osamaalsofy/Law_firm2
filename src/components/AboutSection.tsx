import React from 'react';
import consultationMeetingRoomImage from '../assets/images/consultation_meeting_room_1791295404708.jpg';
import { VALUES_PILLARS } from '../data/firmData';
import { Eye, Shield, Compass, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  currentLang: 'ar' | 'en';
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#B79255]/30 text-[#123D32] text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-[#B79255]" />
            <span>{isAr ? 'عن بصيرة ومنعة' : 'About Baseerah & Mana’ah'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2421] font-display-ar mb-4">
            {isAr ? (
              <>
                فلسفة العدالة في <span className="text-[#123D32]">البصيرة والمنعة</span>
              </>
            ) : (
              <>
                The Philosophy of Justice in <span className="text-[#123D32]">Insight & Fortitude</span>
              </>
            )}
          </h2>

          <p className="text-[#5F6C66] text-base sm:text-lg leading-relaxed font-body-ar">
            {isAr
              ? 'تأسست شركة بصيرة ومنعة للمحاماة والخدمات القانونية في جدة لتجسد تقاليد المهنية السعودية الراسخة، وتواكب مسيرة التطوير العدلي الشامل في المملكة.'
              : 'Established in Jeddah to embody deep-rooted Saudi professional traditions while keeping pace with the Kingdom’s comprehensive judicial modernization.'}
          </p>
        </div>

        {/* 2-Column Content: Meaning of Name + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column (Image) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8DEC8] shadow-md group bg-white p-2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-[400px]">
                <img
                  src={consultationMeetingRoomImage}
                  alt={isAr ? 'غرفة الاستشارات والاجتماعات القانونية' : 'Consultation Room'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 inset-x-5 text-right text-white">
                  <span className="text-xs text-[#DFC07C] font-bold block mb-1">
                    {isAr ? 'جلسات استشارية سرية ومغلقة' : 'Private & Confidential Consultations'}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-100 font-medium">
                    {isAr
                      ? 'نهيئ لموكلينا بيئة قانونية وقورة ترتكز على الاستماع الفاحص ووضوح الخطة.'
                      : 'We provide an esteemed legal environment focused on thorough intake and structured roadmaps.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Text & Dual Meaning) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-right">
            
            {/* Baseerah Block */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] hover:border-[#123D32]/40 transition-all shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#123D32] flex items-center justify-center shrink-0 text-[#DFC07C] shadow-xs">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A2421] font-display-ar mb-2">
                    {isAr ? 'البصيرة: عمق الرؤية واستشراف المسار' : 'Insight (البصيرة): Depth of Foresight'}
                  </h3>
                  <p className="text-[#5F6C66] text-sm leading-relaxed font-body-ar">
                    {isAr
                      ? 'البصيرة هي القدرة على استقراء الوقائع وتفكيك المستندات تحت مظلة الأنظمة السعودية المعاصرة. لا نكتفي بحل النزاع القائم، بل نستشرف آثاره المستقبلية ونحمي العميل من أي ثغرات أو تبعات غير محسوبة.'
                      : 'Insight is the acumen to dissect facts and documents under contemporary Saudi statutes, anticipating future outcomes to preempt vulnerabilities before disputes flare up.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Mana'ah Block */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] hover:border-[#123D32]/40 transition-all shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#B79255] flex items-center justify-center shrink-0 text-white shadow-xs">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A2421] font-display-ar mb-2">
                    {isAr ? 'المنعة: حصانة الموقف وصلابة الدفاع' : 'Fortitude (المنعة): Steadfast Defense'}
                  </h3>
                  <p className="text-[#5F6C66] text-sm leading-relaxed font-body-ar">
                    {isAr
                      ? 'المنعة هي الدرع القانوني الحصين الذي نمنحه لموكلينا. نصوغ عقوداً متينة تصمد أمام التحديات، ونترافع بحجج دامغة وبراهين قاطعة تحفظ مكتسباتكم وتعيد الحقوق لأصحابها.'
                      : 'Fortitude is the impenetrable shield we accord our clients—solid contracts that withstand dispute pressure and court representation built on decisive statutory proofs.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Advantages Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2C3E35]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#123D32] shrink-0" />
                <span>{isAr ? 'مواكبة كاملة لمنظومة التشريعات الجديدة' : 'Aligned with modern Saudi judicial codifications'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#123D32] shrink-0" />
                <span>{isAr ? 'إشراف مباشر من المحامي عبد العزيز' : 'Direct oversight by Advocate Abdulaziz'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#123D32] shrink-0" />
                <span>{isAr ? 'الشفافية التامة في تحديد الأتعاب' : 'Transparent, ethical fee structuring'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#123D32] shrink-0" />
                <span>{isAr ? 'سرية مهنية وأمانة ميثاقية مصانة' : 'Strict statutory confidentiality and ethics'}</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars Grid (Bright & Crisp) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] hover:border-[#123D32] transition-all text-right group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#F4EFE6] text-[#123D32] flex items-center justify-center font-bold text-xs mb-3 group-hover:bg-[#123D32] group-hover:text-white transition-colors">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-[#1A2421] mb-2 font-display-ar">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#5F6C66] leading-relaxed font-body-ar">
                {isAr ? pillar.desc : pillar.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
