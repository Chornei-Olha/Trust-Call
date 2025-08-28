import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '@/components/ui/Button';

interface PricingPlan {
  id: string;
  name: string;
  percentage: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

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
    buttonText: 'Підключити послугу',
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[55px] font-medium uppercase text-white leading-tight">
            ТАРИФНІ ПЛАНИ
          </h2>
        </div>

        {/* Mobile Swiper */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="pb-10"
          >
            {pricingPlans.map((plan) => (
              <SwiperSlide key={plan.id}>
                <PricingCard plan={plan} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== Карточка тарифа =====
const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  return (
    <div
      className={`relative rounded-[40px] overflow-hidden bg-gray-300 border border-white/10 p-8 flex flex-col h-full transition-transform ${
        plan.isPopular ? 'scale-105' : ''
      }`}
    >
      {/* Процент выбора */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black rounded-full w-[90px] h-[90px] flex items-center justify-center shadow-lg text-lg font-bold">
        {plan.percentage}
      </div>

      {/* Аватарки */}
      <div className="flex justify-center -space-x-2 mt-8 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <Image
            key={i}
            src={`/images/img_ellipse_${i}.png`}
            alt="client"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full border-2 border-white"
          />
        ))}
      </div>

      {/* Название */}
      <div className="text-center mb-6">
        <p className="text-[18px] font-bold text-white/40">пакет</p>
        <h3 className="text-[48px] sm:text-[56px] md:text-[64px] font-medium text-white leading-none">
          {plan.name}
        </h3>
      </div>

      {/* Список фич */}
      <div className="space-y-4 flex-1">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Image
              src="/images/img_svg_1127802375_5758.svg"
              alt="check"
              width={28}
              height={28}
              className="flex-shrink-0 mt-1"
            />
            <p className="text-[15px] sm:text-[17px] text-white/70 leading-relaxed">{feature}</p>
          </div>
        ))}
      </div>

      {/* Кнопка */}
      <div className="pt-6">
        <Button
          variant="default"
          size="lg"
          className="bg-black text-white hover:bg-gray-800 text-[16px] font-medium shadow-lg w-full rounded-xl py-6"
        >
          {plan.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PricingPlans;
