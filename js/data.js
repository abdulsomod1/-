const SITE_CONFIG = {
  instituteArabic: 'معهد أصول اللغة العربية الإسلامي',
  instituteEnglish: 'MAHID FOUNTAIN FOR ARABIC & ISLAMIC STUDIES',
  location: 'IBADAN, NIGERIA',
  mottoArabic: 'العلم والإيمان والتقوى',
  mottoEnglish: 'KNOWLEDGE, FAITH & PIETY',
  academicYear: '١٤٤٨هـ / ٢٠٢٦م',
  date: 'ربيع الثاني ١٤٤٨هـ / سبتمبر ٢٠٢٦م',
  logo: 'assets/logo.jpeg'
};

// Demo records only. Replace these records with verified institute data later.
const researches = [
  { id: 1, title: 'الإنسانُ المُعَاصِرُ بين الحاجة إلى المال و فَقَدَانِ القيم', titleEnglish: '', author: 'فواز قمر الدين أيوميدي', authorEnglish: '', supervisor: 'غير مضاف', category: 'الدراسات الإسلامية', hijriYear: '١٤٤٨هـ', gregorianYear: '٢٠٢٦م', date: SITE_CONFIG.date, cover: 'assets/covers/demo-1.svg', pdf: null, description: 'سيُضاف ملخص البحث هنا عند تزويده.', keywords: ['الإنسان المعاصر', 'المال', 'القيم'] },
  { id: 2, title: 'الشباب المسلم بين الأمس واليوم', titleEnglish: '', author: 'عبد القدوس بن سليمان أولا ليكن', authorEnglish: '', supervisor: 'غير مضاف', category: 'الدراسات الإسلامية', hijriYear: '١٤٤٨هـ', gregorianYear: '٢٠٢٦م', date: SITE_CONFIG.date, cover: 'assets/covers/demo-2.svg', pdf: null, description: 'سيُضاف ملخص البحث هنا عند تزويده.', keywords: ['الشباب المسلم', 'الأمس', 'اليوم'] },
  { id: 3, title: 'أخطاء الوالدين في تربية الأبناء في العصر الحديث وحلولها', titleEnglish: '', author: 'عبد الصمد حبيب الله تينيفايو', authorEnglish: '', supervisor: 'غير مضاف', category: 'الأخلاق الإسلامية', hijriYear: '١٤٤٨هـ', gregorianYear: '٢٠٢٦م', date: SITE_CONFIG.date, cover: 'assets/covers/demo-3.svg', pdf: null, description: 'سيُضاف ملخص البحث هنا عند تزويده.', keywords: ['الوالدان', 'تربية الأبناء', 'العصر الحديث'] },
  { id: 4, title: 'الفقر والغني وأثرهما علي المجتمع', titleEnglish: '', author: 'عبد القيوم ييى أولا ميليكن', authorEnglish: '', supervisor: 'غير مضاف', category: 'الدراسات الإسلامية', hijriYear: '١٤٤٨هـ', gregorianYear: '٢٠٢٦م', date: SITE_CONFIG.date, cover: 'assets/covers/demo-4.svg', pdf: null, description: 'سيُضاف ملخص البحث هنا عند تزويده.', keywords: ['الفقر', 'الغنى', 'المجتمع'] },
  { id: 5, title: 'القلم', titleEnglish: '', author: 'يوسف عبد الفتاح بابا تندی', authorEnglish: '', supervisor: 'غير مضاف', category: 'اللغة العربية', hijriYear: '١٤٤٨هـ', gregorianYear: '٢٠٢٦م', date: SITE_CONFIG.date, cover: 'assets/covers/demo-5.svg', pdf: null, description: 'سيُضاف ملخص البحث هنا عند تزويده.', keywords: ['القلم'] },
  { id: 6, title: 'سد الذرائع وتطبيقاته في الفقة الإسلامي', titleEnglish: '', author: 'فاتح بن يوسف أدينتي', authorEnglish: '', supervisor: 'غير مضاف', category: 'أصول الفقه', hijriYear: '١٤٤٨هـ', gregorianYear: '٢٠٢٦م', date: SITE_CONFIG.date, cover: 'assets/covers/demo-6.svg', pdf: null, description: 'سيُضاف ملخص البحث هنا عند تزويده.', keywords: ['سد الذرائع', 'تطبيقاته', 'الفقه الإسلامي'] },
  { id: 7, title: 'حكم إستخدام الجوال على ضوء الكتاب والسنة', titleEnglish: '', author: 'عبد الباسط بن حبيب الله أيوميدي (الندوي )', authorEnglish: '', supervisor: 'غير مضاف', category: 'الدراسات الإسلامية', hijriYear: '١٤٤٨هـ', gregorianYear: '٢٠٢٦م', date: SITE_CONFIG.date, cover: 'assets/covers/demo-7.svg', pdf: null, description: 'سيُضاف ملخص البحث هنا عند تزويده.', keywords: ['الجوال', 'الكتاب والسنة', 'الحكم'] }
];

const graduands = [
  ['فواز قمر الدين أيوميدي', ''],
  ['عبد القدوس بن سليمان أولا ليكن', ''],
  ['عبد القيوم ييى أولا ميليكن', ''],
  ['عبد الباسط بن حبيب الله أيوميدي (الندوي )', ''],
  ['يوسف عبد الفتاح بابا تندی', ''],
  ['عبد الصمد حبيب الله تينيفايو', ''],
  ['فاتح بن يوسف أدينتي', '']
].map(([arabicName, englishName], index) => ({ id: index + 1, arabicName, englishName, hijriYear: '١٤٤٨هـ', gregorianYear: '٢٠٢٦م', image: `assets/graduands/demo-${index + 1}.svg`, researchId: index + 1 }));

const categories = ['علوم القرآن', 'الحديث وعلومه', 'العقيدة', 'الفقه', 'أصول الفقه', 'السيرة النبوية', 'اللغة العربية', 'النحو', 'الصرف', 'البلاغة', 'الدعوة', 'الأخلاق الإسلامية', 'الدراسات الإسلامية'];
const years = [
  { hijri: '١٤٤٨هـ', gregorian: '٢٠٢٦م', current: true },
  { hijri: '١٤٤٧هـ', gregorian: '٢٠٢٥م' },
  { hijri: '١٤٤٦هـ', gregorian: '٢٠٢٤م' },
  { hijri: '١٤٤٥هـ', gregorian: '٢٠٢٣م' },
  { hijri: '١٤٤٤هـ', gregorian: '٢٠٢٢م' }
];
