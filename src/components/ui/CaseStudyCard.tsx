'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  beforeStats: {
    approval: string;
    upsell: string;
    averageCheck: string;
    buyout: string;
  };
  afterStats: {
    approval: string;
    upsell: string;
    averageCheck: string;
    buyout: string;
  };
  results: {
    profitIncrease: string;
    dailyEarnings: string;
    monthlyProfit: string;
  };
  text: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHeight, setCardHeight] = useState<number | 'auto'>('auto');

  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  // 👇 вимірюємо висоту поточної сторони
  useEffect(() => {
    const current = isFlipped ? backRef.current : frontRef.current;
    if (current) {
      setCardHeight(current.scrollHeight);
    }
  }, [isFlipped]);

  return (
    <div
      className="relative w-full transition-[height] duration-500 ease-in-out [perspective:1000px] cursor-pointer"
      style={{ height: cardHeight === 'auto' ? 'auto' : `${cardHeight}px` }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT */}
        <div ref={frontRef} className="absolute inset-0 [backface-visibility:hidden]">
          <div className="bg-gradient-to-b from-[#1663d3] to-[#f0f0f0] rounded-[10px] overflow-hidden">
            <div className="p-6 space-y-4">
              <Image
                src={study.image}
                alt={study.title}
                width={778}
                height={564}
                className="w-full h-[150px] sm:h-[200px] md:h-[300px] object-cover rounded-lg"
              />

              <div className="text-center space-y-2">
                <h3 className="text-[18px] font-semibold text-[#fff]">{study.title}</h3>
                <p className="text-[14px] text-[#404040]">{study.category}</p>
              </div>

              {/* Таблиця показників */}
              <div className="space-y-0">
                <div className="bg-white rounded-[10px] px-6 py-3">
                  <div className="flex justify-between items-center text-[14px] text-black font-medium">
                    <span>Показник</span>
                    <span>До</span>
                    <span className="text-[#0066FF] animate-pulseStrong">Після</span>
                  </div>
                </div>

                <div className="bg-[#efeae4] rounded-[10px] p-3 space-y-3">
                  {[
                    ['Апрув', study.beforeStats.approval, study.afterStats.approval],
                    ['Upsell', study.beforeStats.upsell, study.afterStats.upsell],
                    ['Викуп', study.beforeStats.buyout, study.afterStats.buyout],
                    ['Середній чек', study.beforeStats.averageCheck, study.afterStats.averageCheck],
                  ].map(([label, before, after]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-[14px] text-black">{label}</span>
                      <span className="text-[14px] font-bold text-black">{before}</span>
                      <span className="text-[14px] font-bold text-[#0066FF] drop-shadow-[0_0_6px_rgba(0,102,255,0.4)]">
                        {after}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="brand"
                  size="lg"
                  fullWidth
                  className="text-[18px] font-bold text-white"
                >
                  РАЗОМ
                </Button>

                <div className="text-left space-y-1 px-3 py-5">
                  <p className="text-[14px] text-[#404040] font-medium">
                    <span>Збільшили чистий прибуток: </span>
                    <span className="text-[#0066FF] drop-shadow-[0_0_6px_rgba(0,102,255,0.4)] font-semibold">
                      {study.results.profitIncrease}
                    </span>
                  </p>
                  <p className="text-[14px] text-[#404040] font-medium">
                    <span>Додатковий заробіток: </span>
                    <span className="text-[#0066FF] drop-shadow-[0_0_6px_rgba(0,102,255,0.4)] font-semibold">
                      {study.results.dailyEarnings}
                    </span>
                  </p>
                  <p className="text-[14px] text-[#404040] font-medium">
                    <span>Додатковий прибуток: </span>
                    <span className="text-[#0066FF] drop-shadow-[0_0_6px_rgba(0,102,255,0.4)] font-semibold">
                      {study.results.monthlyProfit}
                    </span>
                  </p>
                </div>

                <div className="text-center pt-2">
                  <Image
                    src="/images/img_symbol.svg"
                    alt="expand"
                    width={18}
                    height={22}
                    className="mx-auto"
                  />
                  <p className="text-[12px] text-black mt-1">Перегорнути</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          ref={backRef}
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div className="bg-gradient-to-b from-[#1663d3] to-[#f0f0f0] rounded-[10px] overflow-hidden">
            <div className="p-6 flex flex-col">
              <h3 className="text-[18px] font-semibold text-[#fff] text-center mb-4">
                {study.title} — інші результати
              </h3>

              <div className="bg-[#efeae4] rounded-[10px] p-3 space-y-2 mb-4">
                <p className="text-[14px] text-black">
                  Апрув після оптимізації:{' '}
                  <span className="font-bold">{study.afterStats.approval}</span>
                </p>
                <p className="text-[14px] text-black">
                  Upsell: <span className="font-bold">{study.afterStats.upsell}</span>
                </p>
                <p className="text-[14px] text-black">
                  Викуп: <span className="font-bold">{study.afterStats.buyout}</span>
                </p>
                <p className="text-[14px] text-black">
                  Середній чек: <span className="font-bold">{study.afterStats.averageCheck}</span>
                </p>
              </div>

              <div className="bg-[#efeae4] rounded-[10px] text-left p-3 space-y-2 mb-4">
                <p className="text-[14px] font-medium text-black">
                  <span>Збільшили чистий прибуток: </span>
                  <span className="text-[#1663d3] font-semibold">
                    {study.results.profitIncrease}
                  </span>
                </p>
                <p className="text-[14px] font-medium text-black">
                  <span>Додатковий заробіток: </span>
                  <span className="text-[#1663d3] font-semibold">
                    {study.results.dailyEarnings}
                  </span>
                </p>
                <p className="text-[14px] font-medium text-black">
                  <span>Додатковий прибуток: </span>
                  <span className="text-[#1663d3] font-semibold">
                    {study.results.monthlyProfit}
                  </span>
                </p>

                <div
                  className="text-[14px] text-black leading-relaxed mt-3"
                  dangerouslySetInnerHTML={{ __html: study.text }}
                />
              </div>

              <div className="text-center mt-4">
                <Image
                  src="/images/img_symbol.svg"
                  alt="expand"
                  width={18}
                  height={22}
                  className="mx-auto"
                />
                <p className="text-[12px] text-black mt-1">Назад</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
