import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { PracticeAreas } from './components/PracticeAreas';
import { WorkProcess } from './components/WorkProcess';
import { ReviewsSection } from './components/ReviewsSection';
import { ConsultationForm } from './components/ConsultationForm';
import { LocationMapSection } from './components/LocationMapSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { X, Calendar } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'ar' | 'en'>('ar');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  useEffect(() => {
    // Sync document direction and language attribute
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPrefilledService(serviceTitle);
    }
    setIsConsultationModalOpen(true);
  };

  const isAr = currentLang === 'ar';

  return (
    <div
      className={`min-h-screen bg-[#FAF8F5] text-[#1A2421] selection:bg-[#123D32] selection:text-white ${
        isAr ? 'font-body-ar' : 'font-sans'
      }`}
    >
      {/* Clean & Elegant Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content */}
      <main>
        {/* 1. Bright Saudi Cultural Hero Section (Right-Aligned, Clear Background, Single Consultation CTA) */}
        <Hero
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 2. Dedicated Trust & Accreditation Bar (Rating 5.0, Advocate Abdulaziz, Operating Hours) */}
        <TrustBar currentLang={currentLang} />

        {/* 3. Firm Philosophy & About */}
        <AboutSection
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 4. Practice Areas & Specialized Services */}
        <PracticeAreas
          currentLang={currentLang}
          onSelectServiceForConsultation={(serviceTitle) => handleOpenConsultation(serviceTitle)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 5. Engagement Framework / Work Mechanism */}
        <WorkProcess
          currentLang={currentLang}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 6. Verified Client Reviews (5.0 ★ Google Maps) */}
        <ReviewsSection currentLang={currentLang} />

        {/* 7. Embedded In-Page Consultation Section (Bright Theme) */}
        <section id="consultation-section" className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-t border-[#EFE8DC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-[#123D32] text-xs font-semibold mb-3 border border-[#B79255]/30">
                <Calendar className="w-3.5 h-3.5 text-[#B79255]" />
                <span>{isAr ? 'حجز مباشر وسري' : 'Direct & Confidential Booking'}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#1A2421] font-display-ar mb-3">
                {isAr ? (
                  <>
                    ناقش موقفك القانوني مع <span className="text-[#123D32]">فريق بصيرة ومنعة</span>
                  </>
                ) : (
                  <>
                    Discuss Your Legal Matter with <span className="text-[#123D32]">Our Advocates</span>
                  </>
                )}
              </h2>
              <p className="text-[#5F6C66] text-sm max-w-xl mx-auto">
                {isAr
                  ? 'اختر الموعد وطريقة الحضور المناسبة لك، وسيقوم فريق العمل بالتنسيق المباشر معكم.'
                  : 'Select your preferred appointment mode and our legal team will coordinate with you promptly.'}
              </p>
            </div>

            <ConsultationForm
              currentLang={currentLang}
              prefilledService={prefilledService}
            />
          </div>
        </section>

        {/* 8. Location, Address & Interactive Google Map (End of website as requested) */}
        <LocationMapSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        currentLang={currentLang}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Pop-up Consultation Modal (Triggered by Buttons across the site) */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsConsultationModalOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-xl my-8">
            <button
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute top-4 left-4 z-20 p-2 rounded-lg bg-[#FAF8F5] text-[#5F6C66] hover:text-[#1A2421] hover:bg-[#F3EDE2] border border-[#E8DEC8] transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <ConsultationForm
              currentLang={currentLang}
              prefilledService={prefilledService}
              onCloseModal={() => setIsConsultationModalOpen(false)}
              isModal={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
