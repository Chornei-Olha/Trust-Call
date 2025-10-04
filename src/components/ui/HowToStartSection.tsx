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
    title: 'Ви залишаєте заявку',
    description:
      "Директор зв'язується з Вами на протязі 30 хвилин для обговорення деталей співпраці",
    imgSrc: '/images/faq.png',
  },
  {
    id: 2,
    title: 'Інтегруємось з вашою CRM',
    description: 'Ми завжди орієнтовані на наших клієнтів, працюємо з будь-якою CRM системою',
    imgSrc: '/images/faq2.webp',
  },
  {
    id: 3,
    title: 'Ми обробляємо заявки 24/7',
    description: 'Наші оператори підтверджують замовлення кожен день з 08:30 до 21:00',
    imgSrc: '/images/faq3.webp',
  },
  {
    id: 4,
    title: 'Оплата за замовлення',
    description: 'Ми записуємо розмови з кожним лідом, звітуємо та надаємо аудит',
    imgSrc: '/images/faq4.webp',
  },
];

export default function HowToStartSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStep = (id: number) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <section className="relative w-full bg-[#000000] py-14 sm:py-16 md:py-20 lg:py-24">
      <Image
        src="/images/telegram-icon.png"
        alt="telegram"
        width={400}
        height={800}
        className="absolute -top-16 right-0 w-[120px] sm:w-[200px] h-auto animate-float"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[55px] font-semibold font-unbounded uppercase text-white leading-tight">
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
                <h3 className="text-[20px] sm:text-[24px] font-bold text-white flex-1 text-center">
                  {step.title}
                </h3>
                <div className="w-[46px] h-[46px] flex items-center justify-center text-white text-2xl font-bold bg-gray-800 rounded-full">
                  {activeStep === step.id ? '−' : '+'}
                </div>
              </div>

              {activeStep === step.id && (
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 items-start">
                  <p className="text-[18px] font-bold text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="relative w-full h-[150px] lg:h-[180px]">
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
