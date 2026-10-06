import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'horizontal' | 'compact' | 'emblem-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  inverted = false,
}) => {
  const sizeMap = {
    sm: { emblem: 'w-8 h-8', textTitle: 'text-base', textSub: 'text-[10px]' },
    md: { emblem: 'w-10 h-10', textTitle: 'text-xl', textSub: 'text-xs' },
    lg: { emblem: 'w-14 h-14', textTitle: 'text-2xl', textSub: 'text-sm' },
    xl: { emblem: 'w-20 h-20', textTitle: 'text-3xl', textSub: 'text-base' },
  };

  const currentSize = sizeMap[size];

  // The stylized golden emblem mirroring the law firm's official brand mark
  const EmblemSvg = () => (
    <div
      className={`relative flex items-center justify-center shrink-0 ${currentSize.emblem} rounded-lg ${
        inverted
          ? 'bg-[#123D32] border border-[#B79255]/40 shadow-sm'
          : 'bg-[#123D32] border border-[#B79255]/40 shadow-sm'
      } p-1.5 transition-all`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* Upper geometric crown & loop */}
        <path
          d="M20 28H44C47.3137 28 50 30.6863 50 34V36C50 39.3137 47.3137 42 44 42H20V28Z"
          fill="#DFBF7A"
        />
        <path
          d="M56 28H80V42H56C52.6863 42 50 39.3137 50 36V34C50 30.6863 52.6863 28 56 28Z"
          fill="#C5A059"
        />
        <rect x="34" y="33" width="12" height="4" rx="2" fill="#123D32" />
        <rect x="54" y="33" width="12" height="4" rx="2" fill="#123D32" />

        {/* Middle tier - stylized wings & balance bar */}
        <path
          d="M26 49C26 47.8954 26.8954 47 28 47H72C73.1046 47 74 47.8954 74 49V53C74 54.1046 73.1046 55 72 55H60L50 63L40 55H28C26.8954 55 26 54.1046 26 53V49Z"
          fill="#E5C786"
        />

        {/* Lower tier - chevron layers */}
        <path
          d="M36 61L50 71L64 61L50 65L36 61Z"
          fill="#DFBF7A"
        />
        <path
          d="M40 70L50 78L60 70L50 73L40 70Z"
          fill="#B79255"
        />

        {/* Base Diamond Dot Accent (Nuqta / Base Point) */}
        <path
          d="M50 82L54 86L50 90L46 86L50 82Z"
          fill="#DFBF7A"
        />
      </svg>
    </div>
  );

  if (variant === 'emblem-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <EmblemSvg />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="mb-2.5">
          <EmblemSvg />
        </div>
        <span
          className={`font-black tracking-tight ${currentSize.textTitle} font-display-ar ${
            inverted ? 'text-white' : 'text-[#123D32]'
          }`}
        >
          بصيرة ومنعة
        </span>
        <span
          className={`font-medium tracking-wide ${currentSize.textSub} font-body-ar ${
            inverted ? 'text-[#DFC07C]' : 'text-[#957338]'
          }`}
        >
          للمحاماة والخدمات القانونية
        </span>
      </div>
    );
  }

  // Default 'horizontal'
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <EmblemSvg />
      <div className="flex flex-col text-right">
        <span
          className={`font-black tracking-tight ${currentSize.textTitle} font-display-ar leading-snug transition-colors ${
            inverted ? 'text-white' : 'text-[#123D32] group-hover:text-[#0B2923]'
          }`}
        >
          بصيرة ومنعة
        </span>
        <span
          className={`font-medium ${currentSize.textSub} font-body-ar transition-colors ${
            inverted ? 'text-[#DFC07C]' : 'text-[#957338] group-hover:text-[#7A5B28]'
          }`}
        >
          للمحاماة والخدمات القانونية
        </span>
      </div>
    </div>
  );
};
