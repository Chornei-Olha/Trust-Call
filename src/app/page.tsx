'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../components/ui/Footer';
import FinalCTA from '../components/ui/FinalCTA';
import QualityAssessment from '../components/ui/QualityAssessment';
import ClientReviews from '../components/ui/ClientReviews';
import CaseStudiesSection from '../components/ui/CaseStudiesSection';
import { CaseStudy } from '../components/ui/CaseStudyCard';
import PricingPlans from '../components/ui/PricingPlans';
import BenefitsSection from '../components/ui/BenefitsSection';
import ProfitForm from '../components/ui/ProfitForm';
import WhyTrustCall from '../components/ui/WhyTrustCall';
import HowToStartSection from '../components/ui/HowToStartSection';
import HeroSection from '../components/ui/HeroSection';
import ReviewsCarousel from '../components/ui/ReviewsCarousel';

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
  leadCount: string;
  rating: number;
  avatar: string;
  socialHandle: string;
  videoUrl: string;
}

const TrustCallLandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cooperation');
  const [formData, setFormData] = useState({
    name: 'Імя',
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
      id: 'appliances',
      title: 'Насіння квітів, овочів, фруктів',
      category: '(Інтернет-магазин)',
      image: '/images/case1.webp',

      beforeStats: {
        approval: '150%',
        upsell: '30%',
        averageCheck: '200 грн',
        buyout: '59%',
      },
      afterStats: {
        approval: '240%',
        upsell: '95%',
        averageCheck: '450 грн',
        buyout: '82%',
      },
      results: {
        profitIncrease: 'в 2.5 рази',
        dailyEarnings: '2000 грн на день',
        monthlyProfit: '60 000 грн на місяць',
      },
    },
    {
      id: 'appliances',
      title: 'Парфумерія та косметика',
      category: '(Інтернет-магазин)',
      image: '/images/card3.png',

      beforeStats: {
        approval: '67%',
        upsell: '25%',
        averageCheck: '449 грн',
        buyout: '65%',
      },
      afterStats: {
        approval: '95%',
        upsell: '85%',
        averageCheck: '897 грн',
        buyout: '84%',
      },
      results: {
        profitIncrease: 'в 3 рази',
        dailyEarnings: '13 780 грн на день',
        monthlyProfit: '304 560 грн на місяць',
      },
    },
    {
      id: 'appliances',
      title: 'Садженці троянди',
      category: '(Інтернет-магазин)',
      image: '/images/case3.webp',

      beforeStats: {
        approval: '50%',
        upsell: '46%',
        averageCheck: '380 грн',
        buyout: '65%',
      },
      afterStats: {
        approval: '89%',
        upsell: '73%',
        averageCheck: '574 грн',
        buyout: '84%',
      },
      results: {
        profitIncrease: 'в 1.5 рази',
        dailyEarnings: '12 900 грн на день',
        monthlyProfit: '10 300 грн / 100 замовлень',
      },
    },
    {
      id: 'clothing',
      title: 'Жіночі костюми',
      category: '(Інтернет-магазин)',
      image: '/images/case4.webp',

      beforeStats: {
        approval: '43%',
        upsell: '38%',
        averageCheck: '980 грн',
        buyout: '73%',
      },
      afterStats: {
        approval: '85%',
        upsell: '83%',
        averageCheck: '1380 грн',
        buyout: '80%',
      },
      results: {
        profitIncrease: '85%',
        dailyEarnings: '6 850 грн на день',
        monthlyProfit: '205 500 грн на місяць',
      },
    },
    {
      id: 'bedding',
      title: 'Текстильні вироби',
      category: '(Інтернет-магазин)',
      image: '/images/case5.webp',

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
        dailyEarnings: '4 500 грн на день',
        monthlyProfit: '135 000 грн на місяць',
      },
    },
    {
      id: 'appliances',
      title: 'Дрібна побутова техніка',
      category: '(Інтернет-магазин)',
      image: '/images/card1.webp',

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
        buyout: '86%',
      },
      results: {
        profitIncrease: '43%',
        dailyEarnings: '3 700 грн на день',
        monthlyProfit: '111 000 грн на місяць',
      },
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
      <ClientReviews />
      <ReviewsCarousel />
      <QualityAssessment />
      <FinalCTA />
      <Footer />
    </div>
  );
};
export default TrustCallLandingPage;
