'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

const GAP = 100; // расстояние между карточками в финальной раскладке (px)

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
    image: '/images/forCard1.jpeg',
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
    image: '/images/forCard2.jpeg',
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
    image: '/images/forCard3.jpeg',
    deco: '/images/img_pawn_right.svg',
    align: 'right',
  },
];

export default function WhyTrustCall() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardHeights, setCardHeights] = useState<number[]>([]);
  const [vh, setVh] = useState<number>(0);

  // Прогресс скролла по секции: 0 — начало, 1 — конец
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Измеряем высоты карточек после монтирования/ресайза
  useLayoutEffect(() => {
    const measure = () => {
      const hs = cardRefs.current.map((el) =>
        el ? Math.ceil(el.getBoundingClientRect().height) : 0
      );
      setCardHeights(hs);
    };
    measure();

    // пересчитываем при ресайзе
    const ro = new ResizeObserver(measure);
    cardRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, []);

  // сохраняем высоту вьюпорта (для расчёта общей высоты области прокрутки)
  useEffect(() => {
    const upd = () => setVh(window.innerHeight || 0);
    upd();
    window.addEventListener('resize', upd);
    return () => window.removeEventListener('resize', upd);
  }, []);

  // финальные смещения по оси Y для каждой карточки (чтобы стали одна под другой)
  const targetY = useMemo(() => {
    const arr: number[] = [];
    let acc = 0;
    for (let i = 0; i < features.length; i++) {
      arr.push(acc * 1.3);
      const h = cardHeights[i] || 0;
      acc += h + GAP;
    }
    return arr; // [0, h0+GAP, h0+h1+2*GAP, ...]
  }, [cardHeights]);

  // общая высота "стопки" в разложенном виде + небольшой запас прокрутки
  const stackHeight = useMemo(() => {
    if (!cardHeights.length) return 2000; // запас до измерения
    const total = targetY[targetY.length - 1] + (cardHeights.at(-1) || 0);
    // добавим половину вьюпорта, чтобы было куда доскроллить
    return total + Math.max(0, Math.round(vh * 0.15));
  }, [cardHeights, targetY, vh]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-black pt-14 sm:pt-16 md:pt-20 lg:pt-24 relative"
    >
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
            <Image
              src="/images/img_image.svg"
              alt="decoration"
              width={260}
              height={74}
              className="inline-block mx-4 w-[180px] sm:w-[220px] md:w-[260px] h-auto"
            />
            <span className="text-[#005eff]">trust-call</span>
          </h2>
          <p className="text-[20px] sm:text-[28px] md:text-[32px] font-light font-unbounded text-white">
            Твій найкращий помічник для товарного бізнесу
          </p>
        </div>

        {/* Зона анимации: сначала стопка, потом раскладка */}
        <div className="relative" style={{ height: stackHeight }}>
          {features.map((f, i) => {
            // Для плавности можно добавить лёгкую задержку для каждой карты
            // через диапазоны преобразования прогресса.
            // Например, карта i начнёт сильнее двигаться чуть позже:
            const start = 0 + i * 0.06; // чем больше i, тем позже
            const end = Math.min(1, 0.6 + i * 0.06);

            const y = useTransform(
              scrollYProgress,
              [0, start, end, 1],
              [0, 0, targetY[i] || 0, targetY[i] || 0]
            );

            const scale = useTransform(
              scrollYProgress,
              [0, start, end],
              [1 - i * 0.03, 1 - i * 0.01, 1] // слегка «расплющены» в стопке → 1
            );

            const shadowOpacity = 0.25 - i * 0.05;

            return (
              <motion.div
                key={f.id}
                style={{ y, scale, zIndex: features.length - i }}
                className="absolute top-0 left-0 right-0 mx-auto max-w-5xl will-change-transform"
              >
                {/* Карточка */}
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="relative bg-[#000000] border border-white/40 rounded-[32px] sm:rounded-[40px] md:rounded-[48px] p-6 sm:p-8 md:p-12"
                  style={{
                    boxShadow: `0 8px 24px rgba(81,203,238,${Math.max(0, shadowOpacity)})`,
                    backdropFilter: 'blur(2px)',
                  }}
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

                  <h4 className="mb-5 font-unbounded font-medium text-[20px] uppercase">
                    {f.title}
                  </h4>

                  {/* Фоновая иконка справа сверху */}
                  <div className="absolute top-4 right-4 w-[20%] h-auto z-0">
                    <Image
                      src="/images/blackBg.png"
                      alt="icon"
                      width={1009}
                      height={766}
                      className="hidden sm:block max-w-[80px] sm:max-w-[150px] lg:max-w-[200px] w-auto h-auto object-contain"
                    />
                  </div>

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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
