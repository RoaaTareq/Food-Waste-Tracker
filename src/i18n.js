// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18next
i18n
  .use(LanguageDetector)  // Optional: Automatically detect language from browser or URL
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',  // Default language
    debug: true,
    resources: {
      en: {
        translation: {
          home: 'Home',
          more: 'More',
          contact: 'Contact',
          help: 'Help',
          what:"What you get with Waste Track?",
          real:"Real-time insights",
          track:"Track food waste as it happens",
          reco:"Data-driven recommendations",
          recoone:"AI-powered insights that help you reduce waste",
          reduce:"Reduce food waste",
          reduceone:"Save up to 6% on food costs",
          uncover:"Uncover inefficiencies",
          uncoverone:"Optimize inventory and purchasing",
          main:"Tracking Food Waste System",
          text:" Empowering organizations to contribute to building a sustainable food system for everyone."

        },
      },
      ar: {
        translation: {
          home: 'الرئيسية',
          more: 'المزيد',
          contact: 'اتصال',
          help: 'مساعدة',
          what:"ما الذي تحصل عليه مع معنا؟",
          real:"رؤى في الوقت الحقيقي",
          track:"تتبع هدر الطعام أثناء حدوثه",
          reco:"التوصيات المستندة إلى البيانات",
          recoone:"رؤى مدعومة بالذكاء الاصطناعي تساعدك على تقليل النفايات",
          reduce:"تقليل هدر الطعام",
          reduceone:"وفر ما يصل إلى 6% على تكاليف الطعام",
          uncover:"كشف عدم الكفاءة",
          uncoverone:"تحسين المخزون والشراء",
          main:"نظام تتبع هدر الغذاء",
          text:"تمكين المنظمات من المساهمة في بناء نظام غذائي مستدام للجميع."
        },
      },
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false,  // Avoid React Suspense issues (optional)
    },
  });

export default i18n;
