'use client';

import { useState } from 'react';
import Image from 'next/image';

type Step = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: 'Співпраця',
    description:
      'Ми блискавично вам телефонуємо та даємо покрокову інструкцію, аби ви могли максимально швидко делегувати на нас всю рутинну роботу із продзвоном ваших замовлень',
    imgSrc: '/images/faq.png',
  },
  {
    id: 2,
    title: 'Консультуємо та допомогаємо в налаштуванні CRM',
    description: 'Пояснення та деталі про настройку CRM.',
    imgSrc: '/images/faq.png',
  },
  {
    id: 3,
    title: 'Обробляємо ліди без вихідних',
    description: 'Весь процес обробки лідів описан здесь.',
    imgSrc: '/images/faq.png',
  },
  {
    id: 4,
    title: 'Оплата тільки за підтверджені замовлення',
    description: 'Оплата відбувається лише за підтверджені замовлення.',
    imgSrc: '/images/faq.png',
  },
];

export default function HowToStartSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#0a0a0a] pb-16 sm:pb-20 md:pb-24 lg:pb-32">
      <Image
        src="/images/telegram-icon.png"
        alt="telegram"
        width={400}
        height={800}
        className="absolute -top-16 right-0 w-[200px] h-auto animate-float"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium uppercase text-white leading-tight">
            Як почати співпрацювати
            <br />з нами?
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-black rounded-[24px] p-6 sm:p-8 md:p-12">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleStep(step.id)}
              >
                <span className="text-[16px] font-medium text-white/60">
                  ({step.id < 10 ? `0${step.id}` : step.id})
                </span>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white flex-1 text-center">
                  {step.title}
                </h3>
                <div className="w-[46px] h-[46px] flex items-center justify-center text-white text-2xl font-bold bg-gray-800 rounded-full">
                  {activeStep === step.id ? '−' : '+'}
                </div>
              </div>

              {activeStep === step.id && (
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 items-start">
                  <p className="text-[14px] font-medium text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="relative w-full h-[180px] lg:h-[242px]">
                    <Image
                      src={step.imgSrc}
                      alt={step.title}
                      fill
                      className="object-cover rounded-[18px]"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
