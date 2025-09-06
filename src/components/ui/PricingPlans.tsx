'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '@/components/ui/Button';
import { useInView } from 'react-intersection-observer';

interface PricingPlan {
  id: string;
  name: string;
  icon: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  percent?: number;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'start',
    name: 'Start',
    icon: '/images/vr-1.png',
    percent: 31,
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
    percent: 45,
    buttonText: 'Підключити послугу',
    isPopular: true,
    features: [
      'Кількість лідів на день: 50–100',
      'Персональний менеджер: 24/7',
      'Унікальні скрипти продажу під ваші оффери',
      'Дожим замовлення до викупу: безкоштовно',
      'Підтверджене замовлення: 20 грн',
      'Допродаж (Upsell, Cross-sell): 22%',
    ],
  },
  {
    id: 'business',
    name: 'Business',
    icon: '/images/vr-3.png',
    percent: 24,
    buttonText: 'Підключити послугу',
    features: [
      'Кількість лідів на день: 100+',
      'Персональний менеджер: 24/7',
      'Унікальні скрипти продажу під ваші оффери',
      'Дожим замовлення до викупу: безкоштовно',
      'Підтверджене замовлення: 18 грн',
      'Допродаж (Upsell, Cross-sell): 22%',
    ],
  },
];

const PricingPlans: React.FC = () => {
  return (
    <section id="pricing" className="w-full bg-black py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-32">
          <h2 className="text-[30px] sm:text-[48px] md:text-[55px] font-medium font-unbounded uppercase text-white leading-tight">
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
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 }); // 👈
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!plan.percent) return;
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setProgress(current);
        if (current >= plan.percent) clearInterval(interval);
      }, 25);
      return () => clearInterval(interval);
    } else {
      // сброс, чтобы при повторном появлении снова анимировалось
      setProgress(0);
    }
  }, [inView, plan.percent]);

  const radius = 48;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={ref}
      className="relative rounded-[40px] bg-white border border-white/10 mt-20 p-8 flex flex-col h-full transition-transform"
    >
      {/* Процент выбора */}
      {plan.percent ? (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <div className="relative w-[120px] h-[120px] flex items-center justify-center bg-white rounded-full">
            <svg width="120" height="120" className="transform -rotate-90">
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
                fill="transparent"
              />
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#1f23f0"
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center font-inter">
              <p className="text-2xl font-bold text-[20px] sm:text-[30px] text-black">
                {progress}%
              </p>
              <p className="text-xs font-regular text-[11px] text-gray-500">
                обирають наші клієнти
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <Image
            src={plan.icon}
            alt={plan.name}
            width={117}
            height={117}
            className="object-contain"
          />
        </div>
      )}

      <div className="bg-black rounded-[44px] hover:bg-[#1663D3]">
        {/* Аватарки */}
        <div className="flex justify-left -space-x-2 mt-20 mb-6 pl-5">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src={`/images/img_ellipse_${i}.png`}
              alt="client"
              width={336}
              height={336}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>

        {/* Название */}
        <div className="text-center mb-6">
          <p className="text-[18px] sm:text-[20px] font-bold font-inter text-white/40">пакет</p>
          <h3 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[69px] font-regular font-inter text-white leading-none">
            {plan.name}
          </h3>
        </div>
      </div>

      {/* Кнопка */}
      <div className="py-6">
        <Button
          variant="default"
          size="lg"
          className="bg-black text-white hover:bg-gray-800 text-[16px] font-medium font-inter shadow-lg w-full rounded-xl py-6"
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
            <p className="text-[15px] sm:text-[17px] font-regular font-inter text-black/50 leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
