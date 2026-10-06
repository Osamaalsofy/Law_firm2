import React from 'react';
import { PracticeArea } from '../data/firmData';
import { X, CheckCircle2, Shield, Calendar } from 'lucide-react';

interface ServiceModalProps {
  service: PracticeArea | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
  currentLang: 'ar' | 'en';
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onSelectForConsultation,
  currentLang,
}) => {
  if (!isOpen || !service) return null;

  const isAr = currentLang === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card (Bright White Theme) */}
      <div className="relative bg-white border border-[#E8DEC8] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 my-8 text-right max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-lg bg-[#FAF8F5] text-[#5F6C66] hover:text-[#1A2421] hover:bg-[#F3EDE2] transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#123D32] text-xs font-semibold mb-3 border border-[#B79255]/30">
            <Shield className="w-3.5 h-3.5 text-[#B79255]" />
            <span>{isAr ? 'مجال اختصاص معتمد' : 'Practice Specialty'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A2421] font-display-ar">
            {isAr ? service.title : service.titleEn}
          </h3>
        </div>

        {/* Full Description */}
        <p className="text-[#4E5C55] text-sm sm:text-base leading-relaxed mb-6 font-body-ar pb-6 border-b border-[#EFE8DC]">
          {isAr ? service.fullDesc : service.fullDescEn}
        </p>

        {/* Target Audience */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[#123D32] mb-3 flex items-center gap-2">
            <span>{isAr ? 'من يستفيد من هذه الخدمة؟' : 'Who is this for?'}</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {(isAr ? service.targetAudience : service.targetAudienceEn).map((audience, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#FAF8F5] text-[#2C3E35] border border-[#E8DEC8]"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        {/* Scope of Legal Representation */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[#1A2421] mb-3">
            {isAr ? 'نطاق العمل والتمثيل القانوني:' : 'Scope of Representation:'}
          </h4>
          <ul className="space-y-2.5">
            {(isAr ? service.scope : service.scopeEn).map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4E5C55]">
                <CheckCircle2 className="w-4 h-4 text-[#123D32] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Procedure Roadmap */}
        <div className="mb-8 p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DEC8]">
          <h4 className="text-sm font-bold text-[#1A2421] mb-3">
            {isAr ? 'خطوات السير في الإجراء:' : 'Action Steps:'}
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-[#4E5C55]">
            {(isAr ? service.procedure : service.procedureEn).map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#123D32] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#EFE8DC]">
          <button
            onClick={() => {
              onSelectForConsultation(isAr ? service.title : service.titleEn);
              onClose();
            }}
            className="w-full sm:flex-1 py-3 px-6 rounded-xl font-bold text-sm bg-[#123D32] text-white hover:bg-[#0B2923] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>{isAr ? 'طلب استشارة في هذا المجال' : 'Request Consultation on This'}</span>
          </button>
          
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-5 rounded-xl font-medium text-sm bg-[#FAF8F5] text-[#5F6C66] hover:text-[#1A2421] hover:bg-[#F3EDE2] border border-[#E8DEC8] transition-colors"
          >
            {isAr ? 'إغلاق النافذة' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
