import React, { useState, useEffect } from 'react';
import { FIRM_INFO, PRACTICE_AREAS } from '../data/firmData';
import { 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ShieldAlert, 
  Phone, 
  User
} from 'lucide-react';

interface ConsultationFormProps {
  currentLang: 'ar' | 'en';
  prefilledService?: string;
  onCloseModal?: () => void;
  isModal?: boolean;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  currentLang,
  prefilledService,
  onCloseModal,
  isModal = false,
}) => {
  const isAr = currentLang === 'ar';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: prefilledService || '',
    consultationType: 'office', // 'office' | 'phone' | 'video'
    preferredDate: '',
    preferredTime: 'morning', // 'morning' | 'evening'
    message: '',
    agreeConfidentiality: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg(isAr ? 'يرجى كتابة الاسم الكريم' : 'Please enter your full name');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg(isAr ? 'يرجى إدخال رقم جوال صحيح للتواصل' : 'Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `BM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg(isAr ? 'يرجى إدخال الاسم ورقم الجوال أولاً' : 'Please fill your name and phone number first');
      return;
    }

    const typeLabel = formData.consultationType === 'office'
      ? (isAr ? 'حضوري بمقر الشركة بجدة' : 'In-Office at Jeddah HQ')
      : formData.consultationType === 'phone'
      ? (isAr ? 'استشارة هاتفية' : 'Phone Call')
      : (isAr ? 'اجتماع مرئي أونلاين' : 'Online Video');

    const msg = isAr
      ? `السلام عليكم ورحمة الله،\nأود حجز استشارة قانونية لدى شركة بصيرة ومنعة للمحاماة.\n\nالاسم: ${formData.fullName}\nالجوال: ${formData.phone}\nالخدمة: ${formData.service || 'عام'}\nالصيغة: ${typeLabel}\nالموضوع: ${formData.message || 'استشارة عامة'}`
      : `Hello, I would like to book a legal consultation with Baseerah & Manaah Law Firm.\nName: ${formData.fullName}\nPhone: ${formData.phone}\nPractice: ${formData.service || 'General'}\nFormat: ${typeLabel}\nDetails: ${formData.message || 'General'}`;

    const url = `https://wa.me/966537905445?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  if (submittedRef) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8DEC8] text-center max-w-xl mx-auto shadow-xl">
        <div className="w-14 h-14 rounded-full bg-[#EDF8F3] text-[#123D32] flex items-center justify-center mx-auto mb-4 border border-[#B3E3CC]">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <h3 className="text-2xl font-bold text-[#1A2421] font-display-ar mb-2">
          {isAr ? 'تم استلام طلبكم بنجاح' : 'Consultation Request Received'}
        </h3>

        <p className="text-sm text-[#5F6C66] leading-relaxed mb-6 font-body-ar">
          {isAr
            ? 'سيتواصل معكم فريق المحامي عبد العزيز لتأكيد موعد الجلسة الاستشارية ومراجعة الموقف الأولي.'
            : 'Advocate Abdulaziz and our legal team will contact you promptly to confirm the appointment.'}
        </p>

        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DEC8] mb-6 text-sm">
          <span className="text-[#5F6C66] text-xs block mb-1">
            {isAr ? 'رقم القيد المرجعي:' : 'Reference Number:'}
          </span>
          <span className="font-mono text-lg font-bold text-[#123D32] tracking-wider">
            {submittedRef}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              setSubmittedRef(null);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                service: '',
                consultationType: 'office',
                preferredDate: '',
                preferredTime: 'morning',
                message: '',
                agreeConfidentiality: true,
              });
              if (onCloseModal) onCloseModal();
            }}
            className="px-6 py-2.5 rounded-xl font-bold text-sm bg-[#123D32] text-white hover:bg-[#0B2923] transition-colors"
          >
            {isAr ? 'حجز موعد آخر' : 'Book Another'}
          </button>

          <a
            href={FIRM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl font-bold text-sm bg-[#EDF8F3] text-[#0E7048] border border-[#B3E3CC] flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAr ? 'متابعة عبر الواتساب' : 'Track on WhatsApp'}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-white border border-[#E8DEC8] p-6 sm:p-8 shadow-sm text-right ${isModal ? 'max-w-xl mx-auto shadow-2xl' : ''}`}>
      
      {/* Title */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#1A2421] font-display-ar mb-1.5 flex items-center gap-2">
          <span>{isAr ? 'طلب استشارة قانونية متخصصة' : 'Book Legal Consultation'}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#5F6C66] font-body-ar">
          {isAr
            ? 'املأ النموذج وسيقوم المستشار المختص بمراجعة طلبكم والتواصل معكم خلال ساعات العمل (السبت - الخميس حتى 10:30 م).'
            : 'Fill the form and our legal counsel will review your matter and contact you within operating hours.'}
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#2C3E35] mb-1.5">
              {isAr ? 'الاسم الكامل *' : 'Full Name *'}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder={isAr ? 'مثال: عبد الله محمد' : 'e.g. Abdullah Mohammed'}
                className="w-full bg-[#FAF8F5] border border-[#DCD3C4] rounded-xl px-4 py-2.5 text-sm text-[#1A2421] placeholder-[#8A9790] focus:outline-none focus:border-[#123D32] transition-colors"
              />
              <User className="w-4 h-4 text-[#8A9790] absolute left-3 top-3 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2C3E35] mb-1.5">
              {isAr ? 'رقم الجوال للتواصل *' : 'Mobile Phone *'}
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                dir="ltr"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="05xxxxxxxx"
                className="w-full bg-[#FAF8F5] border border-[#DCD3C4] rounded-xl px-4 py-2.5 text-sm text-[#1A2421] placeholder-[#8A9790] focus:outline-none focus:border-[#123D32] transition-colors text-right"
              />
              <Phone className="w-4 h-4 text-[#8A9790] absolute left-3 top-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Row 2: Service & Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#2C3E35] mb-1.5">
              {isAr ? 'مجال الاستشارة / الخدمة' : 'Practice Area'}
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-[#FAF8F5] border border-[#DCD3C4] rounded-xl px-4 py-2.5 text-sm text-[#1A2421] focus:outline-none focus:border-[#123D32] transition-colors"
            >
              <option value="">{isAr ? '-- اختر مجال القضية --' : '-- Select Practice --'}</option>
              {PRACTICE_AREAS.map((p) => (
                <option key={p.id} value={isAr ? p.title : p.titleEn}>
                  {isAr ? p.title : p.titleEn}
                </option>
              ))}
              <option value="استشارة عامة">{isAr ? 'استشارة قانونية عامة' : 'General Legal Counsel'}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2C3E35] mb-1.5">
              {isAr ? 'صيغة الاستشارة المفضلة' : 'Consultation Format'}
            </label>
            <select
              value={formData.consultationType}
              onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
              className="w-full bg-[#FAF8F5] border border-[#DCD3C4] rounded-xl px-4 py-2.5 text-sm text-[#1A2421] focus:outline-none focus:border-[#123D32] transition-colors"
            >
              <option value="office">{isAr ? 'حضوري بمقر الشركة بجدة' : 'In-Office (Jeddah HQ)'}</option>
              <option value="phone">{isAr ? 'اتصال هاتفي مباشر' : 'Direct Phone Call'}</option>
              <option value="video">{isAr ? 'جلسة مرئية عن بُعد (أونلاين)' : 'Online Video Conference'}</option>
            </select>
          </div>
        </div>

        {/* Row 3: Preferred Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#2C3E35] mb-1.5">
              {isAr ? 'اليوم المفضل (السبت - الخميس)' : 'Preferred Day'}
            </label>
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full bg-[#FAF8F5] border border-[#DCD3C4] rounded-xl px-4 py-2.5 text-sm text-[#1A2421] focus:outline-none focus:border-[#123D32] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2C3E35] mb-1.5">
              {isAr ? 'الفترة الزمنية المفضلة' : 'Preferred Period'}
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full bg-[#FAF8F5] border border-[#DCD3C4] rounded-xl px-4 py-2.5 text-sm text-[#1A2421] focus:outline-none focus:border-[#123D32] transition-colors"
            >
              <option value="morning">{isAr ? 'صباحية (9:00 ص - 1:00 م)' : 'Morning (9:00 AM - 1:00 PM)'}</option>
              <option value="evening">{isAr ? 'مسائية (4:30 م - 10:30 م)' : 'Evening (4:30 PM - 10:30 PM)'}</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-[#2C3E35] mb-1.5">
            {isAr ? 'وصف عام لموضوع الاستشارة (اختياري)' : 'Brief Case Description (Optional)'}
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={
              isAr
                ? 'يرجى تدوين وصف عام وموجز للاستشارة دون إرفاق أسرار تجارية حساسة عبر هذا النموذج.'
                : 'Please provide a general overview without disclosing sensitive documents here.'
            }
            className="w-full bg-[#FAF8F5] border border-[#DCD3C4] rounded-xl px-4 py-2.5 text-sm text-[#1A2421] placeholder-[#8A9790] focus:outline-none focus:border-[#123D32] transition-colors resize-none"
          />
        </div>

        {/* Confidentiality Checkbox */}
        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            id="confidentiality"
            checked={formData.agreeConfidentiality}
            onChange={(e) => setFormData({ ...formData, agreeConfidentiality: e.target.checked })}
            className="mt-1 rounded bg-[#FAF8F5] border-[#DCD3C4] text-[#123D32] focus:ring-[#123D32]"
          />
          <label htmlFor="confidentiality" className="text-xs text-[#5F6C66] leading-normal">
            {isAr
              ? 'أفهم أن هذا النموذج مخصص لتحديد موعد مبدئي واستكشاف نطاق العمل ولا ينشئ بمفرده علاقة توكيل رسمية.'
              : 'I understand this form is for initial intake and does not constitute formal attorney-client engagement.'}
          </label>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:flex-1 py-3 px-6 rounded-xl font-bold text-sm bg-[#123D32] text-white hover:bg-[#0B2923] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? (isAr ? 'جارٍ الإرسال...' : 'Sending...') : (isAr ? 'إرسال طلب الاستشارة' : 'Submit Request')}</span>
          </button>

          <button
            type="button"
            onClick={handleSendViaWhatsApp}
            className="w-full sm:w-auto py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-[#EDF8F3] hover:bg-[#E1F3EA] text-[#0E7048] border border-[#B3E3CC] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isAr ? 'إرسال عبر الواتساب' : 'Via WhatsApp'}</span>
          </button>
        </div>

      </form>
    </div>
  );
};
