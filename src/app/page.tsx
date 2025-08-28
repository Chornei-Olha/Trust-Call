'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Footer from '../components/ui/Footer';
import FinalCTA from '../components/ui/FinalCTA';
import QualityAssessment from '../components/ui/QualityAssessment';
import TestimonialsCarousel from '../components/ui/TestimonialsCarousel';
import ClientReviews from '../components/ui/ClientReviews';
import CaseStudiesSection from '../components/ui/CaseStudiesSection';
import { CaseStudy } from '../components/ui/CaseStudyCard';
import PricingPlans from '../components/ui/PricingPlans';

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
      title: 'Продаж комплектів постільної білизни',
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
      {/* Scrolling Text Banner */}
      <div className="w-full bg-black py-2 overflow-hidden">
        <div className="animate-pulse">
          <p className="text-[20px] sm:text-[25px] md:text-[31px] font-medium uppercase text-white text-center tracking-wider">
            TRUST-CALL • TRUST-CALL • TRUST-CALL • TRUST-CALL • TRUST-CALL • TRUST-CALL
          </p>
        </div>
      </div>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/img__0x0.png')" }}
      >
        {/* Header */}
        <header className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center">
            <div className="text-[20px] sm:text-[24px] md:text-[30px] font-medium text-white uppercase tracking-wider">
              TRUST-CALL
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="brand"
                size="sm"
                className="text-[8px] font-bold uppercase tracking-wider px-3 py-3"
              >
                отримати консультацію
              </Button>
              <Image
                src="/images/img_klipartz_24.png"
                alt="decoration"
                width={160}
                height={18}
                className="w-[80px] sm:w-[120px] md:w-[160px] h-auto"
              />
            </div>
          </div>
        </header>
        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 md:pt-24 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8 md:space-y-12">
              <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-medium uppercase leading-tight">
                <span className="text-white">Аутсорсинговий </span>
                <span className="text-[#005eff]">
                  кол-центр
                  <br />
                  TRUST-CALL для товарного
                  <br />
                  бізнесу
                </span>
              </h1>
              <p className="text-[18px] sm:text-[24px] md:text-[30px] font-light leading-relaxed text-white max-w-4xl">
                <span>
                  Тестовий період перед підключенням - ми обробимо
                  <br />
                  ваші перші 50 лідів{' '}
                </span>
                <span className="font-medium">АБСОЛЮТНО БЕЗКОШТОВНО</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-[16px] sm:text-[20px] font-medium px-6 sm:px-8 py-4 sm:py-6"
                >
                  Отримати консультацію
                </Button>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    <Image
                      src="/images/img_ellipse_1_54x54.png"
                      alt="client"
                      width={54}
                      height={54}
                      className="w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/img_ellipse_2_54x54.png"
                      alt="client"
                      width={54}
                      height={54}
                      className="w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/img_ellipse_3_54x54.png"
                      alt="client"
                      width={54}
                      height={54}
                      className="w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/img_ellipse_4_54x54.png"
                      alt="client"
                      width={54}
                      height={54}
                      className="w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Content - Decorative Elements */}
            <div className="lg:col-span-4 relative">
              <div className="relative">
                <Image
                  src="/images/img_object1_png.png"
                  alt="Trust-call platform"
                  width={266}
                  height={266}
                  className="w-full max-w-[200px] sm:max-w-[266px] h-auto mx-auto"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-[62px] h-[62px] bg-[#0000000c] rounded-lg shadow-lg border border-white/20"></div>
                <div className="absolute top-8 -left-4 w-[62px] h-[62px] bg-[#0000000c] rounded-lg shadow-lg border border-white/20"></div>
                <div className="absolute -bottom-4 right-8 w-[62px] h-[62px] bg-[#0000000c] rounded-lg shadow-lg border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Partner Logos */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 opacity-80">
            <Image
              src="/images/img_lp_crm_1_svg.png"
              alt="LP CRM"
              width={170}
              height={90}
              className="h-[60px] sm:h-[70px] md:h-[90px] w-auto"
            />
            <Image
              src="/images/img_png_webp.png"
              alt="Partner"
              width={200}
              height={52}
              className="h-[40px] sm:h-[45px] md:h-[52px] w-auto"
            />
            <Image
              src="/images/img_nextel_png_webp.png"
              alt="Nextel"
              width={200}
              height={52}
              className="h-[40px] sm:h-[45px] md:h-[52px] w-auto"
            />
            <Image
              src="/images/img_binotel_png_webp.png"
              alt="Binotel"
              width={200}
              height={70}
              className="h-[50px] sm:h-[60px] md:h-[70px] w-auto"
            />
            <Image
              src="/images/img_photo_png_webp.png"
              alt="Partner"
              width={200}
              height={52}
              className="h-[40px] sm:h-[45px] md:h-[52px] w-auto"
            />
            <Image
              src="/images/img_png_webp_70x200.png"
              alt="Partner"
              width={200}
              height={70}
              className="h-[50px] sm:h-[60px] md:h-[70px] w-auto"
            />
          </div>
        </div>
      </section>
      {/* Why Trust-Call Section */}
      <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-[40px] sm:text-[50px] md:text-[64px] font-normal uppercase leading-tight mb-4">
              <span className="text-white">Чому саме </span>
              <Image
                src="/images/img_image.png"
                alt="decoration"
                width={260}
                height={74}
                className="inline-block mx-4 w-[180px] sm:w-[220px] md:w-[260px] h-auto"
              />
              <span className="text-[#005eff]">trust-call</span>
            </h2>
            <p className="text-[24px] sm:text-[28px] md:text-[32px] font-light text-white">
              Твій найкращий помічник для товарного бізнесу
            </p>
          </div>
          {/* Features Grid */}
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {/* Feature 1 */}
            <div className="relative">
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-6 sm:p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold uppercase leading-tight">
                      <span className="text-white">Швидко </span>
                      <span className="text-[#1663d3]">обробимо ваші ліди</span>
                    </h3>
                    <Image
                      src="/images/img_67b722e8ef105f2.png"
                      alt="Fast processing"
                      width={552}
                      height={322}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-[#2c2c2c] to-[#0a0a0a] border border-white/5 rounded-[22px] p-6 sm:p-8">
                    <p className="text-[16px] sm:text-[18px] text-white/50 leading-relaxed">
                      Швидкість прийому заявки не більше 5 хвилин! Кожна заявка проходить весь цикл
                      продзвону та додаткових методів опрацювання для отримання максимального
                      показника апруву.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="relative">
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-6 sm:p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-6 order-2 lg:order-1">
                    <div className="bg-gradient-to-r from-[#2c2c2c] to-[#0a0a0a] border border-white/5 rounded-[22px] p-6 sm:p-8">
                      <p className="text-[16px] sm:text-[18px] text-white/50 leading-relaxed">
                        Завдяки унікальним скриптам під кожен товар, ми маємо найкращі показники
                        серед конкурентів щодо відсотка та середнього чека з допродажів товарів.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold uppercase leading-tight text-white">
                      Збільшимо допродажі
                      <br />
                      та середній чек
                    </h3>
                    <Image
                      src="/images/img_67b722e9f65e8ef.png"
                      alt="Increase sales"
                      width={552}
                      height={322}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="relative">
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-6 sm:p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold uppercase leading-tight">
                      <span className="text-white">Звільняємо ваш час від рутини та </span>
                      <span className="text-[#1663d3]">гарантовано примножуємо ваш прибуток</span>
                    </h3>
                    <Image
                      src="/images/img_67b722e807a93ac.png"
                      alt="Free your time"
                      width={552}
                      height={322}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-[#2c2c2c] to-[#0a0a0a] border border-white/5 rounded-[22px] p-6 sm:p-8">
                    <p className="text-[15px] sm:text-[17px] text-white/50 leading-relaxed">
                      В команді Trust-call, тільки професійні менеджери, які чудово знають свою
                      справу! Витрачайте свій дорогоцінний час на оптимізацію та масштабування
                      власного бізнесу. Найголовніше для нас – це довгострокові відносини з
                      партнерами.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How to Start Section */}
      <section className="w-full bg-[#0a0a0a] py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium uppercase text-white leading-tight">
              Як почати співпрацювати
              <br />з нами?
            </h2>
          </div>
          <div className="relative bg-black rounded-[24px] p-6 sm:p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-[18px] h-[18px] rounded-full bg-white"></div>
                  <span className="text-[16px] font-medium text-white">Співпраця</span>
                </div>
                <p className="text-[16px] text-white/50 leading-relaxed">(01)</p>
                <p className="text-[14px] font-bold text-white/50 leading-relaxed max-w-md">
                  Ми блискавично вам телефонуємо та даємо покрокову інструкцію, аби ви могли
                  максимально швидко делегувати на нас всю рутинну роботу із продзвоном ваших
                  замовлень
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/img_rectangle_85.png"
                  alt="Consultation"
                  width={398}
                  height={242}
                  className="w-full h-auto rounded-[18px]"
                />
              </div>
            </div>
            {/* Process Steps */}
            <div className="mt-12 space-y-6">
              <Image
                src="/images/img_desktop_open.svg"
                alt="Process visualization"
                width={1308}
                height={236}
                className="w-full h-auto"
              />
              <div className="space-y-5">
                <div className="flex items-center justify-between p-4 bg-transparent">
                  <span className="text-[16px] font-medium text-white/60">(02)</span>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white flex-1 text-center">
                    Консультуємо та допомогаємо в налаштуванні CRM
                  </h3>
                  <Image
                    src="/images/img_button.svg"
                    alt="expand"
                    width={46}
                    height={46}
                    className="w-[46px] h-[46px]"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-transparent">
                  <span className="text-[16px] font-medium text-white/60">(03)</span>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white flex-1 text-center">
                    Обробляємо ліди без вихідних
                  </h3>
                  <Image
                    src="/images/img_button.svg"
                    alt="expand"
                    width={46}
                    height={46}
                    className="w-[46px] h-[46px]"
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-transparent">
                  <span className="text-[16px] font-medium text-white/60">(04)</span>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white flex-1 text-center">
                    Оплата тільки за підтверджені замовлення
                  </h3>
                  <Image
                    src="/images/img_button.svg"
                    alt="expand"
                    width={46}
                    height={46}
                    className="w-[46px] h-[46px]"
                  />
                </div>
              </div>
            </div>
            {/* CTA Section */}
            <div className="mt-12 text-center">
              <div className="bg-white rounded-[32px] px-8 py-6 inline-block">
                <h3 className="text-[18px] sm:text-[20px] font-medium uppercase text-black">
                  Ви залишаєте заявку
                </h3>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-black rounded-[24px] p-6 sm:p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-[24px] sm:text-[30px] font-bold uppercase text-white mb-6">
                ЗБІЛЬШУЮ СВІЙ ПРИБУТОК ВЖЕ СЬОГОДНІ !
              </h3>
            </div>
            <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[16px] font-semibold text-white mb-2">
                    Як до вас звертатися?
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-5 py-6 bg-white border border-[#e1e1e1] rounded-[32px] text-[14px] text-[#202020] focus:outline-none focus:ring-2 focus:ring-[#1663d3]"
                    placeholder="Олексій"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-semibold text-white mb-2">
                    Ваш номер телефону
                  </label>
                  <div className="relative">
                    <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                      <Image
                        src="/images/img_image_background_shadow.png"
                        alt="flag"
                        width={18}
                        height={12}
                        className="w-[18px] h-[12px]"
                      />
                      <span className="text-[14px] text-[#202020]">+380</span>
                    </div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-20 pr-5 py-6 bg-white border border-[#e1e1e1] rounded-[32px] text-[14px] text-[#202020] focus:outline-none focus:ring-2 focus:ring-[#1663d3]"
                      placeholder="(99) 999-99-99"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center justify-between">
                <div className="bg-white rounded-[22px] px-6 py-2">
                  <span className="text-[24px] sm:text-[27px] font-semibold text-black">
                    Знижка 10%
                  </span>
                  <span className="text-[24px] sm:text-[27px] font-semibold text-white ml-2">
                    на перший рахунок для нових клієнтів
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    className="text-[16px] font-medium uppercase px-8 py-4 shadow-2xl"
                  >
                    Замовити консультацію
                  </Button>
                  <Image
                    src="/images/img_klipartz_24.png"
                    alt="decoration"
                    width={160}
                    height={18}
                    className="w-[120px] sm:w-[160px] h-auto mt-2"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[32px] sm:text-[40px] font-medium uppercase text-white leading-tight mb-8">
              <span className="text-white">Яку </span>
              <span className="text-[#1663d3]">вигоду ви отримаєте</span>
              <span className="text-white">
                {' '}
                від
                <br />
                плідної роботи з TRUST-CALL
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Benefit 1 */}
            <div className="relative">
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white underline">
                    Старт проєкту в роботу
                    <br />
                    за 24 години
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed">
                    Ми забезпечуємо повний цикл підготовки проєкту, від технічної інтеграції до
                    навчання персоналу, всього за добу. Швидкість і якість – наші пріоритети.
                  </p>
                </div>
              </div>
            </div>
            {/* Benefit 2 */}
            <div className="relative">
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white underline">
                    Прибуток зросте мінімум
                    <br />у 2 рази
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed">
                    Використовуючи інноваційні стратегії up-sell і cross-sell, ми не лише подвоюємо
                    середній чек, а й створюємо стабільний прибуток.
                  </p>
                </div>
              </div>
            </div>
            {/* Benefit 3 */}
            <div className="relative">
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white underline">
                    Ефективний дожим до
                    <br />
                    викупу
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed">
                    Наші дожимні скрипти та SMS-розсилки ефективно завершують угоди, перетворюючи
                    "незабори" на накладені платежі. Без додаткових витрат для вас.
                  </p>
                </div>
              </div>
            </div>
            {/* Benefit 4 */}
            <div className="relative">
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white underline">
                    Аналітика та прозорість
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed">
                    Надаємо детальні звіти та записи дзвінків для повного розуміння процесів. Ви
                    отримуєте цінні інсайти для покращення вашого бізнесу.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Autonomous Work Section */}
          <div
            className="rounded-[24px] p-6 sm:p-8 md:p-12 bg-cover"
            style={{ backgroundImage: "url('/images/bgStarlink.png')" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-[28px] sm:text-[32px] md:text-[37px] font-bold text-black leading-tight">
                  <span className="text-black">TRUST-CALL</span>
                  <span className="text-black font-normal">
                    {' '}
                    ПРАЦЮЄ
                    <br />
                    АВТОНОМНО!
                  </span>
                </h3>
                <p className="text-[14px] text-black/50 leading-relaxed">
                  Завдяки наявному генератору та старлінку, ми працюємо у повному автономному
                  режимі, і навіть під час повного блек-ауту зможемо обробляти ліди. Ми на зв'язку
                  24/7 та завжди виконуємо своєї обов'язки у повному обсязі!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-center">
                <div className="bg-[#1663d3] rounded-[22px] px-6 py-3">
                  <span className="text-[17px] font-semibold text-white">Starlink</span>
                </div>
                <div className="bg-white rounded-[22px] px-4 py-2 text-black font-semibold">+</div>
                <div className="bg-[#1663d3] rounded-[22px] px-6 py-3">
                  <span className="text-[17px] font-semibold text-white">Генератор</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
