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
  icon: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'start',
    name: 'Start',
    icon: '/images/vr-1.png',
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
    icon: '/images/vr-2.png',
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
    icon: '/images/vr-3.png',
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
      className={`relative rounded-[40px] bg-white border border-white/10 p-8 flex flex-col h-full transition-transform`}
    >
      {/* Процент выбора */}
      <div className="absolute -top-16 left-1/4 translate-x-1/2 w-[200px] h-[auto] flex items-center justify-center">
        <Image
          src={plan.icon}
          alt={plan.name}
          width={117}
          height={117}
          className="object-contain"
        />
      </div>

      <div className="bg-black rounded-[44px]">
        {/* Аватарки */}
        <div className="flex justify-left -space-x-2 mt-8 mb-6 pl-5">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src={`/images/img_ellipse_${i}.png`}
              alt="client"
              width={36}
              height={36}
              className="w-10 h-10 rounded-full border-2 border-white"
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
      </div>

      {/* Кнопка */}
      <div className="py-6">
        <Button
          variant="default"
          size="lg"
          className="bg-black text-white hover:bg-gray-800 text-[16px] font-medium shadow-lg w-full rounded-xl py-6"
        >
          {plan.buttonText}
        </Button>
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
            <p className="text-[15px] sm:text-[17px] text-black/50 leading-relaxed">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
