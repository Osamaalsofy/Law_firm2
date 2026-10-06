import React, { useState } from 'react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';
import { ServiceModal } from './ServiceModal';
import { 
  Building2, 
  Scale, 
  FileText, 
  Briefcase, 
  Coins, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

interface PracticeAreasProps {
  currentLang: 'ar' | 'en';
  onSelectServiceForConsultation: (serviceTitle: string) => void;
  onOpenConsultation: () => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  currentLang,
  onSelectServiceForConsultation,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<PracticeArea | null>(null);

  const isAr = currentLang === 'ar';
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const categories = [
    { id: 'all', labelAr: 'كافة المجالات', labelEn: 'All Practices' },
    { id: 'corporate', labelAr: 'الشركات والامتثال', labelEn: 'Corporate & Compliance' },
    { id: 'litigation', labelAr: 'الترافع والتقاضي', labelEn: 'Litigation & Courts' },
    { id: 'contracts', labelAr: 'العقود والاتفاقيات', labelEn: 'Contracts & Drafting' },
    { id: 'individuals', labelAr: 'التركات والمدنية', labelEn: 'Estates & Civil' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? PRACTICE_AREAS
    : PRACTICE_AREAS.filter((s) => s.category === selectedCategory);

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#123D32]' };
    switch (iconName) {
      case 'Building2': return <Building2 {...props} />;
      case 'Scale': return <Scale {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Coins': return <Coins {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Scale {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#B79255]/30 text-[#123D32] text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5 text-[#B79255]" />
            <span>{isAr ? 'مجالات العمل والاختصاص' : 'Practice Areas'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2421] font-display-ar mb-4">
            {isAr ? (
              <>
                خدمات قانونية متخصصة تبنى على <span className="text-[#123D32]">الدقة والمنعة</span>
              </>
            ) : (
              <>
                Specialized Legal Services Anchored in <span className="text-[#123D32]">Mastery</span>
              </>
            )}
          </h2>

          <p className="text-[#5F6C66] text-base sm:text-lg leading-relaxed font-body-ar">
            {isAr
              ? 'نقدم منظومة متكاملة من الخدمات القانونية وفق أحدث الأنظمة القضائية والتجارية في المملكة العربية السعودية.'
              : 'Delivering comprehensive legal services tailored to Saudi Arabia’s judicial, commercial, and administrative landscape.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#123D32] text-white shadow-xs font-bold'
                    : 'bg-white text-[#4E5C55] hover:text-[#123D32] hover:bg-[#F3EDE2] border border-[#E8DEC8]'
                }`}
              >
                {isAr ? cat.labelAr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Practice Areas Grid (Bright White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-right">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#123D32]/50 p-7 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8DEC8] flex items-center justify-center group-hover:bg-[#EDF8F3] group-hover:border-[#B3E3CC] transition-all">
                    {renderIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#5F6C66] px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EFE8DC]">
                    {service.category === 'corporate'
                      ? isAr ? 'شركات' : 'Corporate'
                      : service.category === 'litigation'
                      ? isAr ? 'تقاضي' : 'Litigation'
                      : service.category === 'contracts'
                      ? isAr ? 'عقود' : 'Contracts'
                      : isAr ? 'تركات ومدني' : 'Civil'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A2421] mb-2.5 font-display-ar group-hover:text-[#123D32] transition-colors leading-snug">
                  {isAr ? service.title : service.titleEn}
                </h3>

                {/* Short Desc */}
                <p className="text-sm text-[#5F6C66] leading-relaxed mb-6 font-body-ar">
                  {isAr ? service.shortDesc : service.shortDescEn}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#EFE8DC]">
                  {(isAr ? service.scope : service.scopeEn).slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#4E5C55]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#123D32] shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-[#EFE8DC] flex items-center justify-between">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold text-[#123D32] hover:text-[#0B2923] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{isAr ? 'عرض التفاصيل والإجراءات' : 'View Details & Scope'}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForConsultation(isAr ? service.title : service.titleEn)}
                  className="text-xs px-3.5 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#123D32] text-[#123D32] hover:text-white font-bold border border-[#E8DEC8] hover:border-[#123D32] transition-all cursor-pointer"
                >
                  {isAr ? 'حجز موعد' : 'Book'}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Retainers Callout Banner (Saudi Deep Green Elegant Accent) */}
        <div className="rounded-2xl p-8 sm:p-10 bg-[#123D32] border border-[#0B2923] relative overflow-hidden shadow-lg text-white">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-right">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DFC07C] text-xs font-bold mb-3 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#DFC07C]" />
                <span>{isAr ? 'باقات الاستشارات السنوية للمنشآت والشركات' : 'Annual Corporate Legal Retainers'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display-ar">
                {isAr ? 'إدارة قانونية متكاملة تواكب أعمالك وتدرأ المخاطر' : 'An Integrated In-House Legal Shield for Your Enterprise'}
              </h3>
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-body-ar">
                {isAr
                  ? 'وفّر لمنشأتك مستشاراً قانونياً دائماً يفحص العقود اليومية، يراجع اللوائح التنظيمية، ويقدم الحلول الفورية لقرارات الإدارة التنفيذية.'
                  : 'Equip your business with continuous legal counsel reviewing contracts, employee policies, and executive business resolutions.'}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-[#123D32] hover:bg-[#FAF8F5] shadow-md transition-all text-center cursor-pointer"
              >
                {isAr ? 'ناقش باقة منشأتك الآن' : 'Discuss Corporate Retainer'}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceModal
        service={activeModalService}
        isOpen={!!activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForConsultation={onSelectServiceForConsultation}
        currentLang={currentLang}
      />
    </section>
  );
};
