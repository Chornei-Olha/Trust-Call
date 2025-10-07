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
    image: '/images/forCard2.png',
    deco: '/images/img_pawn_left.svg',
    align: 'right',
  },
  {
    id: 2,
    title: (
      <>
        <span className="text-[#1663d3]">Збільшимо допродажі</span>
        <br />
        <span className="text-white">та середній чек</span>
      </>
    ),
    text: `Завдяки унікальним скриптам під кожен товар, ми маємо найкращі показники
    серед конкурентів щодо відсотка та середнього чека з допродажів товарів.`,
    image: '/images/forCard3.png',
    deco: '/images/img_pawn_left.svg',
    align: 'left',
  },
  {
    id: 3,
    title: (
      <>
        <span className="text-white">Звільняємо ваш час від рутини та </span>
        <br />
        <span className="text-[#1663d3]">гарантовано примножуємо ваш прибуток</span>
      </>
    ),
    text: `В команді Trust-call, тільки професійні менеджери, які чудово знають свою справу!
    Витрачайте свій дорогоцінний час на оптимізацію та масштабування власного бізнесу.
    Найголовніше для нас – це довгострокові відносини з партнерами.`,
    image: '/images/forCard1.png',
    deco: '/images/img_pawn_right.svg',
    align: 'right',
  },
];

export default function WhyTrustCall() {
  return (
    <section className="w-full bg-black pt-14 sm:pt-16 md:pt-20 lg:pt-24 relative">
      {/* Телеграм-иконка */}
      <Image
        src="/images/telegram-right.svg"
        alt="telegram"
        width={400}
        height={800}
        className="absolute top-16 left-0 w-[100px] sm:w-[300px] h-auto animate-float"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-[40px] sm:text-[50px] md:text-[64px] font-semibold font-unbounded uppercase leading-tight mb-4">
            <span className="text-white">Чому саме </span>
            <span className="text-[#005eff]">trust-call</span>
          </h2>
          <p className="text-[20px] sm:text-[28px] md:text-[32px] font-light font-unbounded text-white">
            Твій найкращий помічник для товарного бізнесу
          </p>
        </div>

        {/* Карточки */}
        <div className="flex flex-col gap-10">
          {features.map((f) => (
            <motion.div
              key={f.id}
              className="relative bg-[#000000] border border-white/40 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-6 sm:p-8 md:p-12 perspective-1000"
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ amount: 0.5, once: false }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Декоративная пешка */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 hidden md:block ${
                  f.align === 'left' ? '-left-32' : '-right-32'
                } opacity-80`}
                aria-hidden
              >
                <Image src={f.deco} alt="" width={204} height={204} />
              </div>

              {/* Фоновая иконка */}
              <div className="absolute top-4 right-4 w-[20%] h-auto z-0">
                <Image
                  src="/images/blackBg.png"
                  alt="icon"
                  width={1009}
                  height={766}
                  className="hidden sm:block max-w-[80px] sm:max-w-[150px] lg:max-w-[200px] w-auto h-auto object-contain"
                />
              </div>

              <h4 className="mb-5 font-unbounded font-medium text-[20px] uppercase relative z-10">
                {f.title}
              </h4>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <Image
                    src={f.image}
                    alt="feature image"
                    width={852}
                    height={722}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className={`${f.align === 'right' ? 'lg:order-1' : ''}`}>
                  <p className="text-[15px] sm:text-[17px] font-inter font-regular text-white/70 leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
