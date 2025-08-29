'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: (
      <>
        <span className="text-white">Швидко </span>
        <span className="text-[#1663d3]">обробимо ваші ліди</span>
      </>
    ),
    text: `Швидкість прийому заявки не більше 5 хвилин! Кожна заявка проходить весь цикл
    продзвону та додаткових методів опрацювання для отримання максимального показника апруву.`,
    image: '/images/img_67b722e8ef105f2.png',
    deco: '/images/img_pawn.png',
    align: 'left',
  },
  {
    id: 2,
    title: (
      <>
        <span className="text-white">Збільшимо допродажі</span>
        <br />
        <span className="text-white">та середній чек</span>
      </>
    ),
    text: `Завдяки унікальним скриптам під кожен товар, ми маємо найкращі показники
    серед конкурентів щодо відсотка та середнього чека з допродажів товарів.`,
    image: '/images/img_67b722e9f65e8ef.png',
    deco: '/images/img_pawn.png',
    align: 'right',
  },
  {
    id: 3,
    title: (
      <>
        <span className="text-white">Звільняємо ваш час від рутини та </span>
        <span className="text-[#1663d3]">гарантовано примножуємо ваш прибуток</span>
      </>
    ),
    text: `В команді Trust-call, тільки професійні менеджери, які чудово знають свою справу!
    Витрачайте свій дорогоцінний час на оптимізацію та масштабування власного бізнесу.
    Найголовніше для нас – це довгострокові відносини з партнерами.`,
    image: '/images/img_67b722e807a93ac.png',
    deco: '/images/img_pawn.png',
    align: 'left',
  },
];

export default function WhyTrustCall() {
  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-visible">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
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

        {/* Features */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {features.map((f, i) => (
            <div key={f.id} className="relative">
              {/* Декоративная пешка */}
              <motion.div
                initial={{ opacity: 0, x: f.align === 'left' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`absolute top-1/2 -translate-y-1/2 hidden md:block ${
                  f.align === 'left' ? '-left-10' : '-right-10'
                }`}
              >
                <Image src={f.deco} alt="deco" width={60} height={60} className="opacity-80" />
              </motion.div>

              {/* Карточка */}
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-6 sm:p-8 md:p-12 shadow-2xl">
                <div className="absolute top-4 right-4 w-12 h-12">
                  <Image
                    src="/images/small_icon.png"
                    alt="icon"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Картинка */}
                  <div>
                    <Image
                      src={f.image}
                      alt="feature image"
                      width={552}
                      height={322}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* Текст */}
                  <div
                    className={`bg-gradient-to-r from-[#2c2c2c] to-[#0a0a0a] border border-white/5 rounded-[22px] p-6 sm:p-8 ${f.align === 'right' ? 'lg:order-1' : ''}`}
                  >
                    <p className="text-[15px] sm:text-[17px] text-white/50 leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
