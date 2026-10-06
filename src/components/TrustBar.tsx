import React from 'react';
import { Star, Scale, Clock, ShieldCheck } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

interface TrustBarProps {
  currentLang: 'ar' | 'en';
}

export const TrustBar: React.FC<TrustBarProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';

  return (
    <section className="relative z-20 -mt-8 mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white border border-[#E8DEC8] p-5 sm:p-6 shadow-md grid grid-cols-1 sm:grid-cols-3 gap-6 text-right">
        
        {/* Badge 1: Google Rating */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#FAF3E6] border border-[#E8DEC8] flex items-center justify-center shrink-0">
            <Star className="w-6 h-6 text-[#B79255] fill-[#B79255]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-[#1A2421] text-base">
              <span className="text-lg">5.0</span>
              <div className="flex text-[#B79255] text-xs">
                {'★★★★★'}
              </div>
            </div>
            <div className="text-xs text-[#5F6C66] mt-0.5">
              {isAr ? '14 تقييم موثق على Google Maps' : '14 Verified Google Reviews'}
            </div>
          </div>
        </div>

        {/* Badge 2: Lead Advocate & Counsel */}
        <div className="flex items-center gap-3.5 sm:border-r border-[#EFE8DC] sm:pr-6">
          <div className="w-12 h-12 rounded-xl bg-[#EDF8F3] border border-[#B3E3CC] flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6 text-[#123D32]" />
          </div>
          <div>
            <div className="font-bold text-[#1A2421] text-base">
              {isAr ? 'المحامي عبد العزيز' : 'Advocate Abdulaziz'}
            </div>
            <div className="text-xs text-[#5F6C66] mt-0.5">
              {isAr ? 'ونخبة المستشارين المعتمدين بجدة' : '& Certified Legal Counsel'}
            </div>
          </div>
        </div>

        {/* Badge 3: Operating Hours */}
        <div className="flex items-center gap-3.5 sm:border-r border-[#EFE8DC] sm:pr-6">
          <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8DEC8] flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 text-[#123D32]" />
          </div>
          <div>
            <div className="font-bold text-[#123D32] text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>{isAr ? 'مفتوح حتى 10:30 م' : 'Open Until 10:30 PM'}</span>
            </div>
            <div className="text-xs text-[#5F6C66] mt-0.5">
              {isAr ? 'السبت - الخميس دوام يومي' : 'Saturday - Thursday Daily'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
