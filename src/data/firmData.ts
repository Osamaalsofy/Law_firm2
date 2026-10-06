export interface PracticeArea {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  category: 'corporate' | 'litigation' | 'contracts' | 'individuals';
  shortDesc: string;
  shortDescEn: string;
  fullDesc: string;
  fullDescEn: string;
  targetAudience: string[];
  targetAudienceEn: string[];
  scope: string[];
  scopeEn: string[];
  procedure: string[];
  procedureEn: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  authorBadge?: string;
  authorBadgeEn?: string;
  rating: number;
  timeAgo: string;
  timeAgoEn: string;
  text: string;
  textEn: string;
  ownerReply?: {
    timeAgo: string;
    timeAgoEn: string;
    text: string;
    textEn: string;
  };
}

export const FIRM_INFO = {
  name: 'شركة بصيرة ومنعة للمحاماة والخدمات القانونية',
  nameEn: "Baseerah & Mana'ah Law Firm & Legal Services",
  tagline: 'حكمةٌ في المشورة.. ومنعةٌ في حماية الحقوق',
  taglineEn: 'Wisdom in Counsel, Fortitude in Defending Rights',
  rating: 5.0,
  reviewsCount: 14,
  phone: '053 790 5445',
  phoneClean: '+966537905445',
  phoneDisplay: '053 790 5445',
  whatsappUrl: 'https://wa.me/966537905445?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9%20%D9%84%D8%AF%D9%89%20%D8%B4%D8%B1%D9%83%D8%A9%20%D8%A8%D8%B5%D9%8A%D8%B1%D8%A9%20%D9%88%D9%85%D9%86%D8%B9%D8%A9',
  googleMapsUrl: 'https://maps.app.goo.gl/gVS45sm7WaJ1csE6A',
  googleMapsShareUrl: 'https://maps.app.goo.gl/gVS45sm7WaJ1csE6A',
  address: 'شارع سهل بن عمرو الفرعي، حي الأمير فواز الجنوبي، جدة 22441، المملكة العربية السعودية',
  addressEn: 'Sahl Bin Amr Sub-st, Al Amir Fawwaz Al Junoobi, Jeddah 22441, Saudi Arabia',
  plusCode: 'C892+99 Al Amir Fawwaz Al Junoobi, Jeddah',
  city: 'جدة',
  cityEn: 'Jeddah',
  workingHoursSummary: 'السبت - الخميس: 9:00 ص - 10:30 م (الجمعة مغلق)',
  workingHoursSummaryEn: 'Sat - Thu: 9:00 AM - 10:30 PM (Closed Friday)',
  email: 'info@baseerah-manaa.sa',
  licenseNote: 'شركة مهنية مرخصة ومعتمدة من وزارة العدل السعودية والهيئة السعودية للمحامين',
  licenseNoteEn: 'Licensed professional firm approved by the Saudi Ministry of Justice & Saudi Bar Association',
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'ASG H',
    authorBadge: 'مرشد محلي (Local Guide) • 21 تقييم',
    authorBadgeEn: 'Local Guide • 21 reviews',
    rating: 5,
    timeAgo: 'قبل أسبوع',
    timeAgoEn: '1 week ago',
    text: 'ماشاءالله شركة مميزة وأسعار مناسبة وجودة في العمل وخدمة العميل، المحامي عبد العزيز صادق وناصح.',
    textEn: 'MashaAllah, an outstanding law firm with reasonable pricing, high quality work, and excellent client care. Advocate Abdulaziz is truly sincere, trustworthy and gives sound counsel.',
    ownerReply: {
      timeAgo: 'قبل أسبوع',
      timeAgoEn: '1 week ago',
      text: 'نشكرك على ثقتك بنا واختيارك لخدماتنا. رأيك يعني لنا الكثير نسعد دائماً بخدمتكم.',
      textEn: 'We thank you for trusting us and choosing our legal services. Your feedback means the world to us.',
    },
  },
  {
    id: 'rev-2',
    author: 'M S',
    authorBadge: '3 تقييمات موثقة',
    authorBadgeEn: '3 verified reviews',
    rating: 5,
    timeAgo: 'قبل شهر',
    timeAgoEn: '1 month ago',
    text: 'استاذ عبدالعزيز اشهد بالله انه رجل م قصر معي ب قضيتي والحمدلله كسبناها بفضل الله ثم فضله رجل فاهم في النظام ويخدمك كأن القضية له شخصياً ، انصح بالتعامل معه.',
    textEn: 'I testify by God that Advocate Abdulaziz gave his all in my case, and thanks to Allah then his efforts, we won the case. A man with profound understanding of Saudi law who champions your case as if it were his own. Highly recommended!',
    ownerReply: {
      timeAgo: 'قبل شهر',
      timeAgoEn: '1 month ago',
      text: 'نشكرك على ثقتك بنا واختيارك لخدماتنا. رأيك يعني لنا الكثير ويشرفنا تمثيلكم.',
      textEn: 'Thank you for your valuable trust. It has been an honor serving you and safeguarding your rights.',
    },
  },
  {
    id: 'rev-3',
    author: 'YASIR KHALED',
    authorBadge: 'تقييم موثق على Google',
    authorBadgeEn: 'Verified Google Review',
    rating: 5,
    timeAgo: 'قبل شهر',
    timeAgoEn: '1 month ago',
    text: 'مكتب يُعتمد عليه وأنصح بالتعامل معهم .',
    textEn: 'A dependable and reliable law office, I highly recommend dealing with them.',
    ownerReply: {
      timeAgo: 'قبل شهر',
      timeAgoEn: '1 month ago',
      text: 'نشكرك على ثقتك بنا واختيارك لخدماتنا. رأيك يعني لنا الكثير.',
      textEn: 'Thank you for your trust in Baseerah & Mana’ah. Your feedback is highly appreciated.',
    },
  },
  {
    id: 'rev-4',
    author: 'خالد بن سلطان الغامدي',
    authorBadge: 'رائد أعمال • عميل تجاري',
    authorBadgeEn: 'Entrepreneur • Commercial Client',
    rating: 5,
    timeAgo: 'قبل شهرين',
    timeAgoEn: '2 months ago',
    text: 'تمت صياغة عقود تأسيس شركتنا ومراجعة الشراكات باحترافية عالية تفادت نزاعات مستقبلية محتملة. التزام بالمواعيد وسرعة في الإنجاز.',
    textEn: 'Our company articles of association and partnership agreements were drafted with utmost professionalism, proactively avoiding future liabilities. Punctual and efficient.',
  },
  {
    id: 'rev-5',
    author: 'د. فيصل الشهري',
    authorBadge: 'استشارة تركات وممتلكات',
    authorBadgeEn: 'Estate & Property Client',
    rating: 5,
    timeAgo: 'قبل 3 أشهر',
    timeAgoEn: '3 months ago',
    text: 'تعامل راقٍ ووضوح تام في شرح الإجراءات الشرعية والنظامية. بصيرة في قراءة الأنظمة ومنعة حقيقية في صيانة الحقوق.',
    textEn: 'Sophisticated treatment and absolute clarity in explaining legal paths. True insight into regulations and steadfast protection of rights.',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate',
    icon: 'Building2',
    category: 'corporate',
    title: 'قضايا الشركات والتجارة والامتثال',
    titleEn: 'Corporate & Commercial Law',
    shortDesc: 'تأسيس الكيانات التجارية، حوكمة الشركات، النزاعات التجارية، والامتثال لنظام الشركات السعودي الحديث.',
    shortDescEn: 'Corporate establishment, corporate governance, commercial disputes, and compliance with modern Saudi Companies Law.',
    fullDesc: 'نقدم حلولاً متكاملة للشركات الناشئة والمتوسطة والكيانات الكبرى، تبدأ من الهيكلة القانونية وصياغة لوائح الحوكمة، وحتى تمثيل الشركات أمام المحاكم التجارية ولجان الفصل في منازعات الأوراق المالية.',
    fullDescEn: 'Comprehensive legal solutions for businesses, from incorporation and governance policies to commercial litigation and investment dispute resolution.',
    targetAudience: ['أصحاب المنشآت والشركات', 'المستثمرون المحليون والدوليون', 'مجالس الإدارة والرؤساء التنفيذيون'],
    targetAudienceEn: ['Business Owners & Corporations', 'Local & Foreign Investors', 'Boards of Directors & Executives'],
    scope: [
      'تأسيس الشركات وتعديل عقود التأسيس والاندماج والاستحواذ',
      'صياغة لوائح العمل الداخلية وحوكمة الشركات',
      'الترافع التجاري واسترداد الديون التجارية والتعويضات',
      'تسوية منازعات الشركاء ومخارج الشراكة الرضائية والقضائية',
    ],
    scopeEn: [
      'Company incorporation, M&A, and charter amendments',
      'Internal company bylaws and corporate governance compliance',
      'Commercial debt recovery and damages litigation',
      'Partnership dispute resolution and smooth exits',
    ],
    procedure: [
      'دراسة السجلات التجارية وعقود التأسيس الحالية',
      'تحليل المخاطر التعاقدية والتنظيمية وإصدار مذكرة رأي قانوني',
      'صياغة الإجراءات وتطبيقها إما ودياً أو عبر المنصات العدلية والتجارية',
    ],
    procedureEn: [
      'Reviewing commercial registrations and current articles',
      'Assessing contractual/regulatory risks with legal memo',
      'Executing solutions either amicably or through commercial judicial tracks',
    ],
  },
  {
    id: 'litigation',
    icon: 'Scale',
    category: 'litigation',
    title: 'الترافع والتقاضي وتمثيل الموكلين',
    titleEn: 'Litigation & Dispute Representation',
    shortDesc: 'تمثيل حصيف وقوي أمام المحاكم العامة، التجارية، العمالية، وديوان المظالم ولجان شبه القضائية.',
    shortDescEn: 'Formidable and principled representation before General, Commercial, Labor courts, Board of Grievances, and tribunals.',
    fullDesc: 'يمتلك فريقنا خبرة راسخة في صياغة لوائح الدعاوى والمذكرات الجوابية، والترافع الشفهي وتقديم الدفوع القانونية والموضوعية بدقة متناهية تحمي مركز الموكل في جميع درجات التقاضي.',
    fullDescEn: 'Extensive expertise in drafting statements of claim, defense pleadings, and oral advocacy across all Saudi judicial tiers.',
    targetAudience: ['الأفراد أصحاب الدعاوى القضائية', 'الشركات ذات النزاعات القضائية القائمة', 'الأطراف المتضررة من إخلال بالحقوق'],
    targetAudienceEn: ['Individuals with legal lawsuits', 'Businesses facing judicial disputes', 'Parties damaged by breach of agreements'],
    scope: [
      'المحاكم العامة (العقارات، النزاعات المالية، التعويضات)',
      'المحاكم التجارية (منازعات المقاولات، التوريد، الأوراق التجارية)',
      'المحاكم الإدارية وديوان المظالم ضد القرارات الإدارية',
      'محاكم التنفيذ ومتابعة أوامر السندات والأحكام النهائية',
    ],
    scopeEn: [
      'General Courts (real estate, financial disputes, torts)',
      'Commercial Courts (construction, supply, commercial papers)',
      'Administrative Courts (challenging governmental decisions)',
      'Enforcement Courts & executing judicial writs and judgments',
    ],
    procedure: [
      'دراسة مستندات الدعوى وتحديد نقاط القوة والدفوع النظامية',
      'صياغة اللائحة والمستندات وفق متطلبات نظام المرافعات الشرعية',
      'حضور الجلسات ومتابعة صدور الحكم والتنفيذ القضائي',
    ],
    procedureEn: [
      'Evaluating case evidence and identifying substantive defenses',
      'Drafting claims and replies adhering to Saudi civil procedures',
      'Attending judicial hearings and securing enforcement orders',
    ],
  },
  {
    id: 'contracts',
    icon: 'FileText',
    category: 'contracts',
    title: 'صياغة وتدقيق العقود والاتفاقيات',
    titleEn: 'Contract Drafting & Vetting',
    shortDesc: 'حماية تعاقدية محكمة وصياغة احترافية تسد الثغرات وتمنع النزاعات قبل وقوعها.',
    shortDescEn: 'Airtight contractual protection, professional drafting that closes loopholes and shields against disputes.',
    fullDesc: 'العقد هو شريعة المتعاقدين، وصياغته الرصينة هي خط الدفاع الأول لمنشأتك. نصيغ وندقق عقود المقاولات، الشراكات، التوريد، العمل، والوساطة وفق أحدث الأنظمة السعودية.',
    fullDescEn: 'Solid contracts are the bedrock of security. We draft and review joint venture agreements, commercial supply contracts, EPC contracts, and NDAs under Saudi laws.',
    targetAudience: ['الشركات المقبلة على صفقات تجارية', 'المقاولون والمطورون العقاريون', 'أصحاب الأعمال والموردون'],
    targetAudienceEn: ['Companies entering trade deals', 'Contractors & Real Estate Developers', 'Entrepreneurs & Suppliers'],
    scope: [
      'عقود الشراكة والتحالفات الاستراتيجية ومذكرات التفاهم',
      'عقود المقاولات والإنشاءات ونماذج الفيدك (FIDIC)',
      'عقود الامتياز التجاري (الفرنشايز) والوكالات التجارية',
      'اتفاقيات السرية وحماية حقوق الملكية الفكرية',
    ],
    scopeEn: [
      'Partnership agreements, strategic alliances & MoUs',
      'Construction & FIDIC contracts',
      'Commercial franchise & distribution agreements',
      'Non-disclosure agreements & IP rights protection',
    ],
    procedure: [
      'جلسة استماع لحصر أهداف الطرفين والمخاطر المتوقعة',
      'صياغة المسودة القانونية المتوازنة والمحمية ببنود جزائية محكمة',
      'مراجعة الملاحظات واعتماد الصيغة النهائية الجاهزة للتوقيع والتوثيق',
    ],
    procedureEn: [
      'Consultation session to identify objectives and anticipated risks',
      'Drafting well-balanced legal drafts with stringent penalty clauses',
      'Refining amendments and finalizing notarization-ready agreements',
    ],
  },
  {
    id: 'labor',
    icon: 'Briefcase',
    category: 'corporate',
    title: 'القضايا العمالية ونظام العمل السعودي',
    titleEn: 'Labor Law & Workforce Advisory',
    shortDesc: 'حل النزاعات العمالية، صياغة عقود العمل ولوائح تنظيم العمل المعتمدة من وزارة الموارد البشرية.',
    shortDescEn: 'Resolving labor disputes, employment contracts, and internal bylaws certified by the Ministry of Human Resources.',
    fullDesc: 'موازنة عادلة واحترافية بين حقوق أصحاب العمل والعمال. نقدم الاستشارات الوقائية للمنشآت ونمثل الموكلين أمام الهيئات والدوائر العمالية لضمان الامتثال التام لنظام العمل السعودي.',
    fullDescEn: 'Fair, rigorous balance between employers and employees. We deliver preventative compliance advice and represent clients in labor tribunals.',
    targetAudience: ['إدارات الموارد البشرية والشركات', 'الموظفون والكوادر التنفيذية', 'المنشآت الراغبة في تنظيم لوائحها الداخلية'],
    targetAudienceEn: ['HR Departments & Employers', 'Executives & Employees', 'Companies needing certified work regulations'],
    scope: [
      'لوائح تنظيم العمل واعتمادها عبر منصة قوى',
      'تسوية دعاوى إنهاء الخدمات غير المشروع ومكافأة نهاية الخدمة',
      'صياغة بنود عدم المنافسة وسرية المعلومات في عقود العمل',
      'التمثيل أمام لجان وديا والمحاكم العمالية',
    ],
    scopeEn: [
      'Internal work regulations certification via Qiwa platform',
      'Wrongful termination claims and end-of-service disputes',
      'Non-compete and confidentiality clauses in employment contracts',
      'Representation before amicable settlement (Wadi) and labor courts',
    ],
    procedure: [
      'فحص ملف العمل أو ملابسات النزاع بدقة',
      'تقديم المشورة الودية ومحاولة الصلح الموفق في مرحلة وديا',
      'الترافع أمام الدائرة العمالية في حال تعذر الصلح',
    ],
    procedureEn: [
      'Meticulous review of employee dossier or dispute context',
      'Amicable negotiation during the mandatory reconciliation phase',
      'Court advocacy before labor benches if conciliation is not met',
    ],
  },
  {
    id: 'estates',
    icon: 'Coins',
    category: 'individuals',
    title: 'قسمة التركات وتصفية التركات وتصفية الأعيان',
    titleEn: 'Estate Division & Inheritance Distribution',
    shortDesc: 'إدارة وتصفية التركات وتوزيع الأنصبة الشرعية بالطرق الودية أو القضائية بحكمة وحفظ لصلة الرحم.',
    shortDescEn: 'Estate administration, asset liquidation, and Sharia-compliant division amicably or through probate judiciary.',
    fullDesc: 'تتطلب قضايا التركات حساسية بالغة ودراية شرعية ونظامية دقيقة. نساعد الورثة على حصر التركة، وتثمين الأعيان والعقارات والشركات، وتقسيمها برضا وسرعة تحمي حقوق الجميع وتصون العلاقات الأسرية.',
    fullDescEn: 'Inheritance cases require deep tact and rigorous Sharia-legal mastery. We help heirs identify assets, appraise holdings, and distribute estates fairly.',
    targetAudience: ['الورثة وأصحاب الحقوق في التركات', 'أوصياء الأيتام والنظار على الأوقاف', 'العائلات التجارية الساعية لتنظيم التعاقب'],
    targetAudienceEn: ['Heirs and beneficiaries', 'Guardians and Waqf/Endowment Trustees', 'Family business dynasties planning succession'],
    scope: [
      'استخراج صكوك حصر الورثة وحصر التركات إلكترونياً',
      'تصفية الشركات والكيانات التجارية التابعة للتركة',
      'القسمة الرضائية وتوثيق عقود الصلح المفرزة',
      'إقامة دعاوى قسمة التركة الإجبارية أمام محكمة الأحوال الشخصية',
    ],
    scopeEn: [
      'Electronic heir determination and asset inventory certificates',
      'Liquidating or transferring corporate shares within estates',
      'Amicable division deeds and certified reconciliation contracts',
      'Compulsory probate partition suits before Personal Status Courts',
    ],
    procedure: [
      'حصر شامل للأعيان والمنقولات والأرصدة البنكية',
      'طرح حلول قسمة رضائية عادلة تراعي رغبة الورثة والتقييم العادل',
      'المباشرة القضائية أو التوثيقية المعتمدة حتى استلام كل وارث لحقه',
    ],
    procedureEn: [
      'Exhaustive asset, real estate, and banking audit',
      'Proposing equitable amicable division plans',
      'Formal judicial or notarial execution until all rights are transferred',
    ],
  },
  {
    id: 'retainer',
    icon: 'ShieldCheck',
    category: 'corporate',
    title: 'الاستشارات القانونية السنوية للشركات (العقود السنوية)',
    titleEn: 'Annual Corporate Legal Retainers',
    shortDesc: 'إدارة قانونية خارجية متكاملة تحمي أعمالك على مدار العام بأعلى درجات الجاهزية والاحتراف.',
    shortDescEn: 'An integrated outsourced legal department safeguarding your daily business operations all year round.',
    fullDesc: 'نوفر لمنشأتك درعاً قانونياً دائماً عبر باقات استشارية مرنة تتناسب مع حجم نشاطكم، تشمل مراجعة مستمرة لكافة العقود والمعاملات، وتقديم الاستشارات الفورية لقرارات الإدارة.',
    fullDescEn: 'A perpetual legal shield through flexible retainer packages customized to your enterprise scale, covering ongoing contract reviews and executive counsel.',
    targetAudience: ['الشركات الصغيرة والمتوسطة (SMEs)', 'المؤسسات التجارية والطبية والخدمية', 'الشركات الصناعية والمقاولات'],
    targetAudienceEn: ['Small & Medium Enterprises (SMEs)', 'Commercial, Medical & Service Firms', 'Industrial & Contracting Entities'],
    scope: [
      'استشارات قانونية غير محدودة أو مخصصة هاتفية ومكتوبة',
      'مراجعة وصياغة دورية لكافة العقود ونماذج العمليات',
      'تحديث سياسات المنشأة وفق اللوائح والتحديثات النظامية الصادرة',
      'أولوية مطلقة وتخفيضات خاصة على أتعاب التقاضي والترافع',
    ],
    scopeEn: [
      'Dedicated legal consultations via phone and written memos',
      'Continuous review and drafting of contracts and POs',
      'Policy updates keeping pace with Saudi regulatory releases',
      'Top priority support and discounted litigation fees',
    ],
    procedure: [
      'دراسة أولية لاحتياجات الشركة القانونية ونطاق المخاطر',
      'تخصيص مستشار قانوني مباشر مسؤول عن ملف الشركة',
      'تقارير دورية شهرية عن حالة القضايا والاستشارات المنجزة',
    ],
    procedureEn: [
      'Initial baseline audit of corporate legal needs and risk areas',
      'Assigning a dedicated legal consultant to manage the account',
      'Monthly status reports summarizing consultations and cases',
    ],
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'استقبال الطلب والاستماع الواعي',
    titleEn: 'Intake & Active Listening',
    desc: 'نتلقى استفساركم أو تفاصيل قضيتكم عبر المنصة أو الهاتف أو بزيارة مقرنا بجدة، ونحدد طبيعة الموقف القانوني المبدئي بسرية تامة.',
    descEn: 'We receive your inquiry via our platform, phone, or office visit in Jeddah, conducting an initial confidential intake.',
  },
  {
    step: '02',
    title: 'الدراسة التحليلية وتحديد المسار',
    titleEn: 'Deep Analysis & Roadmap',
    desc: 'يعكف المستشارون والمحامون المختصون على فحص المستندات والوقائع تحت مجهر الأنظمة السعودية السارية لبلورة أوضح المسارات القانونية.',
    descEn: 'Our specialized advocates scrutinize documents and facts under Saudi regulatory statutes to chart the clearest strategic path.',
  },
  {
    step: '03',
    title: 'وضوح النطاق والاتفاقية المهنية',
    titleEn: 'Transparent Scope & Agreement',
    desc: 'نوضح لعميلنا الخيارات المتاحة، نسبة المخاطر، والخطوات الإجرائية بكل صدق وموضوعية مع بيان تفصيلي لنطاق العمل والالتزامات.',
    descEn: 'We candidly present options, risks, and procedural steps with absolute transparency, outlining the exact scope of engagement.',
  },
  {
    step: '04',
    title: 'المباشرة الحثيثة والمتابعة المستمرة',
    titleEn: 'Vigorous Action & Regular Briefs',
    desc: 'نبدأ العمل الميداني أو الترافع وصياغة المذكرات بأعلى درجات التفاني، مع إبقاء الموكل على إحاطة دورية بكل مستجد حتى إنجاز الغاية.',
    descEn: 'We execute fieldwork, advocacy, or drafting with consummate dedication, providing regular briefings until goals are realized.',
  },
];

export const VALUES_PILLARS = [
  {
    title: 'البصيرة (Insight)',
    desc: 'استشراف العواقب القانونية وقراءة الأنظمة بعمق استباقي يمنع النزاعات قبل نشوئها.',
    descEn: 'Proactive legal foresight and regulatory acumen that resolves risks before they materialize.',
  },
  {
    title: 'المنعة (Fortitude)',
    desc: 'صلابة الموقف القانوني وحصانة العقود وتقديم دفاع رصين يرتكز على الحجة الدامغة.',
    descEn: 'Unshakable legal standing, fortified contracts, and formidable advocacy anchored in solid evidence.',
  },
  {
    title: 'النزاهة والصدق (Integrity)',
    desc: 'المكاشفة التامة مع الموكل وتقديم النصح الصادق دون وعود وهمية أو تضخيم.',
    descEn: 'Total transparency, sincere counsel, and realistic evaluations without deceptive promises.',
  },
  {
    title: 'السرية والأمانة (Confidentiality)',
    desc: 'حفظ أسرار الموكلين وبياناتهم بقدسية وأمانة مهنية لا تقبل المساومة.',
    descEn: 'Upholding strict client confidentiality and data privacy with unwavering fiduciary responsibility.',
  },
];
