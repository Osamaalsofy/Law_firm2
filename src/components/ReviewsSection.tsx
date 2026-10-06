import React from 'react';
import { REVIEWS_DATA, FIRM_INFO } from '../data/firmData';
import { Star, CheckCircle, ExternalLink, MessageSquare, Quote } from 'lucide-react';

interface ReviewsSectionProps {
  currentLang: 'ar' | 'en';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#EFE8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#B79255]/30 text-[#123D32] text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 text-[#B79255] fill-[#B79255]" />
            <span>{isAr ? 'تقييمات موثقة على خرائط Google' : 'Verified Google Reviews'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A2421] font-display-ar mb-4">
            {isAr ? (
              <>
                ثقة موكلينا هي <span className="text-[#123D32]">أثمن ما نعتز به</span>
              </>
            ) : (
              <>
                Client Trust is Our <span className="text-[#123D32]">Highest Honor</span>
              </>
            )}
          </h2>

          <p className="text-[#5F6C66] text-base sm:text-lg leading-relaxed font-body-ar">
            {isAr
              ? 'نفخر بتقييم 5.0 نجوم من 14 تقييماً على خرائط Google، وشهادات موكلينا الكرام حول جودة الترافع والصدق في المشورة.'
              : 'Proud of our 5.0-star rating across 14 verified Google reviews and authentic testimonials on our advocacy and counsel.'}
          </p>
        </div>

        {/* Google Summary Badge Card (White & Elegant) */}
        <div className="mb-14 max-w-4xl mx-auto rounded-2xl bg-white border border-[#E8DEC8] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Rating details */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-right">
            <div className="w-20 h-20 rounded-2xl bg-[#F4EFE6] border border-[#E8DEC8] flex flex-col items-center justify-center shrink-0">
              <span className="text-3xl font-black text-[#123D32]">5.0</span>
              <div className="flex text-[#B79255] text-xs">
                {'★★★★★'}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <span className="text-lg font-bold text-[#1A2421]">
                  {isAr ? 'شركة بصيرة ومنعة للمحاماة' : 'Baseerah & Mana’ah Law Firm'}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle className="w-3 h-3" />
                  {isAr ? 'موثق' : 'Verified'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#5F6C66]">
                {isAr
                  ? 'استناداً إلى 14 تقييماً حقيقياً وموثقاً على منصة خرائط Google'
                  : 'Based on 14 authentic, verified client reviews on Google Maps'}
              </p>
            </div>
          </div>

          {/* Google Button */}
          <div className="shrink-0">
            <a
              href={FIRM_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#FAF8F5] hover:bg-[#F3EDE2] text-[#123D32] border border-[#E8DEC8] hover:border-[#123D32] transition-all flex items-center gap-2 shadow-xs"
            >
              <span>{isAr ? 'عرض الملف على Google Maps' : 'View on Google Maps'}</span>
              <ExternalLink className="w-4 h-4 text-[#B79255]" />
            </a>
          </div>

        </div>

        {/* Testimonials Grid (Bright White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-right">
          {REVIEWS_DATA.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-white border border-[#E8DEC8] hover:border-[#123D32]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative shadow-xs hover:shadow-md"
            >
              <div>
                {/* Header: Author + Star */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-[#1A2421] text-base font-display-ar">
                      {review.author}
                    </h4>
                    <span className="text-xs text-[#5F6C66] block mt-0.5">
                      {isAr ? review.authorBadge : review.authorBadgeEn}
                    </span>
                  </div>

                  <div className="flex text-[#B79255] text-sm">
                    {'★'.repeat(review.rating)}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative mb-6">
                  <Quote className="w-5 h-5 text-[#B79255]/20 absolute -top-1 -right-1 rotate-180 pointer-events-none" />
                  <p className="text-sm text-[#3E4D46] leading-relaxed font-body-ar pr-3">
                    "{isAr ? review.text : review.textEn}"
                  </p>
                </div>
              </div>

              {/* Owner Reply Block */}
              {review.ownerReply && (
                <div className="pt-3 border-t border-[#EFE8DC] bg-[#FAF8F5] p-3 rounded-xl text-xs">
                  <div className="flex items-center gap-1.5 text-[#123D32] font-semibold mb-1">
                    <MessageSquare className="w-3 h-3 text-[#B79255]" />
                    <span>{isAr ? 'رد إدارة المكتب:' : 'Firm Response:'}</span>
                  </div>
                  <p className="text-[#5F6C66] leading-normal font-body-ar">
                    {isAr ? review.ownerReply.text : review.ownerReply.textEn}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Real Testimonials Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto text-right">
          {REVIEWS_DATA.slice(3, 5).map((review) => (
            <div
              key={review.id}
              className="rounded-xl bg-white border border-[#E8DEC8] p-5 flex flex-col justify-between shadow-xs"
            >
              <div className="flex items-start justify-between mb-2.5">
                <div>
                  <h4 className="font-bold text-[#1A2421] text-sm">
                    {review.author}
                  </h4>
                  <span className="text-[11px] text-[#5F6C66]">
                    {isAr ? review.authorBadge : review.authorBadgeEn}
                  </span>
                </div>
                <div className="flex text-[#B79255] text-xs">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#4E5C55] leading-relaxed font-body-ar">
                "{isAr ? review.text : review.textEn}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
