'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../components/ui/Footer';
import FinalCTA from '../components/ui/FinalCTA';
import QualityAssessment from '../components/ui/QualityAssessment';
import TestimonialsCarousel from '../components/ui/TestimonialsCarousel';
import ClientReviews from '../components/ui/ClientReviews';
import CaseStudiesSection from '../components/ui/CaseStudiesSection';
import { CaseStudy } from '../components/ui/CaseStudyCard';
import PricingPlans from '../components/ui/PricingPlans';
import BenefitsSection from '../components/ui/BenefitsSection';
import ProfitForm from '../components/ui/ProfitForm';
import WhyTrustCall from '../components/ui/WhyTrustCall';
import HowToStartSection from '../components/ui/HowToStartSection';
import HeroSection from '../components/ui/HeroSection';

interface PricingPlan {
  id: string;
  name: string;
  percentage: string;
  features: string[];
  price: string;
  buttonText: string;
  isPopular?: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  niche: string;
  content: string;
  leadCount: string;
  rating: number;
  avatar: string;
  socialHandle: string;
}
interface TeamMember {
  id: string;
  name: string;
  role: string;
  content: string;
  leadCount: string;
  rating: number;
  avatar: string;
  socialHandle: string;
}
const TrustCallLandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cooperation');
  const [formData, setFormData] = useState({
    name: 'Олексій',
    phone: '(99) 999-99-99',
    contactMethod: 'call',
  });
  const [currentTime, setCurrentTime] = useState<string>('');
  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString());
  }, []);
  const pricingPlans: PricingPlan[] = [
    {
      id: 'start',
      name: 'Start',
      percentage: '31%',
      features: [
        'Кількість лідів на день: 30–50',
        'Персональний менеджер: 24/7',
        'Унікальні скрипти продажу під ваші оффери',
        'Дожим замовлення до викупу: безкоштовно',
        'Підтверджене замовлення: 22 грн',
        'Допродаж (Upsell, Cross-sell): 25%',
      ],
      price: 'Підключити послугу',
      buttonText: 'Підключити послугу',
    },
    {
      id: 'company',
      name: 'Company',
      percentage: '62%',
      features: [
        'Кількість лідів на день: 50–100',
        'Персональний менеджер: 24/7',
        'Унікальні скрипти продажу під ваші оффери',
        'Дожим замовлення до викупу: безкоштовно',
        'Підтверджене замовлення: 20 грн',
        'Допродаж (Upsell, Cross-sell): 22%',
      ],
      price: 'Підключити послугу',
      buttonText: 'Підключити послугу',
      isPopular: true,
    },
    {
      id: 'business',
      name: 'Business',
      percentage: '10%',
      features: [
        'Кількість лідів на день: 100+',
        'Персональний менеджер: 24/7',
        'Унікальні скрипти продажу під ваші оффери',
        'Дожим замовлення до викупу: безкоштовно',
        'Підтверджене замовлення: 18 грн',
        'Допродаж (Upsell, Cross-sell): 22%',
      ],
      price: 'Підключити послугу',
      buttonText: 'Підключити послугу',
    },
  ];
  const caseStudies: CaseStudy[] = [
    {
      id: 'bedding',
      title: 'Продаж постільної білизни',
      category: '(Інтернет-магазин)',
      beforeStats: {
        approval: '72%',
        upsell: '65%',
        averageCheck: '780 грн',
        buyout: '71%',
      },
      afterStats: {
        approval: '60%',
        upsell: '65%',
        averageCheck: '1150 грн',
        buyout: '65%',
      },
      results: {
        profitIncrease: 'X3',
        dailyEarnings: '4500 грн на день',
        monthlyProfit: '135 000 грн на місяць',
      },
    },
    {
      id: 'appliances',
      title: 'Дрібна побутова техніка',
      category: '(Інтернет-магазин)',
      beforeStats: {
        approval: '23%',
        upsell: '12%',
        averageCheck: '650 грн',
        buyout: '63%',
      },
      afterStats: {
        approval: '88%',
        upsell: '80%',
        averageCheck: '980 грн',
        buyout: '99%',
      },
      results: {
        profitIncrease: '43%',
        dailyEarnings: '3700 грн на день',
        monthlyProfit: '111 000 грн на місяць',
      },
    },
    {
      id: 'clothing',
      title: 'Жіночий одяг',
      category: '(Інтернет-магазин)',
      beforeStats: {
        approval: '43%',
        upsell: '38%',
        averageCheck: '980 грн',
        buyout: '73%',
      },
      afterStats: {
        approval: '95%',
        upsell: '90%',
        averageCheck: '1380 грн',
        buyout: '95%',
      },
      results: {
        profitIncrease: '85%',
        dailyEarnings: '6 850 грн на день',
        monthlyProfit: '205 500 грн на місяць',
      },
    },
  ];
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Максим Ліповський',
      niche: 'Власник інтернет магазину',
      content:
        'Наша компанія займається вирощуванням та продажем саджанців, і для нас важливо було знайти команду, яка допоможе якісно працювати з клієнтами. Оператори завжди швидко реагують на звернення, надають детальні консультації та допомагають нашим покупцям зробити правильний вибір. Це співробітництво значно підвищило довіру клієнтів і дало змогу нам розвиватися швидше.',
      leadCount: 'К-сть лідів 300',
      rating: 5,
      avatar: '/images/img_img_58x58.png',
      socialHandle: '@Maxx_0001',
    },
    {
      id: '2',
      name: 'Анатолій Соколов',
      niche: 'Продаж товарів через односторінкові сайти',
      content:
        'Ми працюємо в сегменті жіночого одягу, і для нас особливо важливо, щоб клієнт завжди отримував вчасну та якісну консультацію. Команда операторів чудово справляється із цим завданням — вони ввічливі, уважні й завжди готові допомогти підібрати потрібний варіант. Завдяки такій співпраці нам вдалося підвищити довіру покупців і збільшити кількість повторних замовлень',
      leadCount: 'К-сть лідів 150+',
      rating: 5,
      avatar: '/images/img_img_2.png',
      socialHandle: '@a_ssokolov',
    },
    {
      id: '3',
      name: 'Вадим Попазов',
      niche: 'Продажі електроніки через односторінкові сайти',
      content:
        'Наша компанія спеціалізується на продажі господарських товарів, і якісний сервіс для клієнтів завжди був у пріоритеті. Завдяки співпраці з Trust-call ми отримали можливість швидко обробляти замовлення та відповідати на всі запитання покупців. Це суттєво зменшило кількість відмов і допомогло збільшити обсяги продажів.',
      leadCount: 'К-сть лідів 500+',
      rating: 5,
      avatar: '/images/img_img_3.png',
      socialHandle: '@popazov_vadim',
    },
    {
      id: '4',
      name: 'Вадим Попазов',
      niche: 'Продажі електроніки через односторінкові сайти',
      content:
        'Наша компанія спеціалізується на продажі господарських товарів, і якісний сервіс для клієнтів завжди був у пріоритеті. Завдяки співпраці з Trust-call ми отримали можливість швидко обробляти замовлення та відповідати на всі запитання покупців. Це суттєво зменшило кількість відмов і допомогло збільшити обсяги продажів.',
      leadCount: 'К-сть лідів 500+',
      rating: 5,
      avatar: '/images/img_img_3.png',
      socialHandle: '@popazov_vadim',
    },
  ];
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <HeroSection />
      <WhyTrustCall />
      <HowToStartSection />
      <ProfitForm />
      <BenefitsSection />
      <PricingPlans />
      <CaseStudiesSection caseStudies={caseStudies} />
      <ClientReviews testimonials={testimonials} />
      <TestimonialsCarousel testimonials={testimonials} />
      <QualityAssessment />
      <FinalCTA />
      <Footer />
    </div>
  );
};
export default TrustCallLandingPage;
