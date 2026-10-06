import React from 'react';
import { WORK_PROCESS_STEPS } from '../data/firmData';
import { Layers, ShieldCheck, CheckCircle } from 'lucide-react';

interface WorkProcessProps {
  currentLang: 'ar' | 'en';
  onOpenConsultation: () => void;
}

export const WorkProcess: React.FC<WorkProcessProps> = ({ currentLang, onOpenConsultation }) => {
  const isAr = currentLang === 'ar';

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#B79255]/30 text-[#123D32] text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5 text-[#B79255]" />
            <span>{isAr ? 'منهجية العمل والتعاقد' : 'Engagement Framework'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2421] font-display-ar mb-4">
            {isAr ? (
              <>
                آلية عمل منظمة تبدأ <span className="text-[#123D32]">بالوضوح والشفافية</span>
              </>
            ) : (
              <>
                A Structured Process Founded on <span className="text-[#123D32]">Clarity</span>
              </>
            )}
          </h2>

          <p className="text-[#5F6C66] text-base sm:text-lg leading-relaxed font-body-ar">
            {isAr
              ? 'نحرص على أن يكون موكلنا على بينة تامة بكل مرحلة إجرائية، دون مفاجآت أو وعود غير واقعية.'
              : 'Ensuring every client has absolute visibility across each procedural phase, with realistic evaluations and principled commitment.'}
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-14 text-right">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-7 rounded-2xl bg-[#FAF8F5] border border-[#E8DEC8] hover:border-[#123D32] transition-all duration-300 relative group flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Step Number Top */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black text-[#123D32] font-display-ar">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EDF8F3] text-[#123D32] flex items-center justify-center text-xs font-bold border border-[#B3E3CC]">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#1A2421] mb-2.5 font-display-ar group-hover:text-[#123D32] transition-colors leading-snug">
                  {isAr ? step.title : step.titleEn}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#5F6C66] leading-relaxed font-body-ar">
                  {isAr ? step.desc : step.descEn}
                </p>
              </div>

              {/* Progress indicator */}
              <div className="mt-6 pt-4 border-t border-[#EFE8DC] flex items-center justify-between text-[11px] text-[#7A8881] font-semibold">
                <span>{isAr ? `المرحلة ${idx + 1} من 4` : `Phase ${idx + 1} of 4`}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#123D32]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl bg-[#F4EFE6] border border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-right">
            <ShieldCheck className="w-6 h-6 text-[#123D32] shrink-0" />
            <p className="text-xs sm:text-sm text-[#2C3E35] leading-relaxed">
              {isAr
                ? 'تقديم طلب الاستشارة المبدئي لا يُلزمكم بأي أتعاب حتى اعتماد العقد ونطاق العمل رسمياً.'
                : 'Initial intake does not incur any commitment until engagement scope and terms are mutually signed.'}
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#123D32] text-white hover:bg-[#0B2923] transition-all cursor-pointer"
          >
            {isAr ? 'ابدأ خطوتك الأولى' : 'Get Started'}
          </button>
        </div>

      </div>
    </section>
  );
};
