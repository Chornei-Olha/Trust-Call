'use client';

import { useState } from 'react';
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
}

interface CaseStudyCardProps {
  study: CaseStudy; // 👈 одна карточка
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[850px] [perspective:1000px] cursor-pointer" // 👈 фиксированная высота
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="bg-gradient-to-b from-[#1663d3] to-[#f0f0f0] rounded-[10px] overflow-hidden h-full">
            <div className="p-6 space-y-4">
              <Image
                src={study.image}
                alt={study.title}
                width={778}
                height={564}
                className="w-full h-[150px] sm:h-[200px] md:h-[300px] object-cover rounded-lg"
              />

              <div className="text-center space-y-2">
                <h3 className="text-[16px] sm:text-[18px] md:text-[19px] font-semibold text-[#404040] leading-tight">
                  {study.title}
                </h3>
                <p className="text-[14px] sm:text-[16px] text-[#404040]">{study.category}</p>
              </div>

              {/* Таблица показателей */}
              <div className="space-y-0">
                <div className="bg-white rounded-[10px] px-6 py-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black">Показник</span>
                    <span className="text-[14px] text-black">До</span>
                    <span className="text-[14px] text-black">Після</span>
                  </div>
                </div>

                <div className="bg-[#efeae4] rounded-[10px] p-3 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black">Апрув</span>
                    <span className="text-[14px] font-bold text-black">
                      {study.beforeStats.approval}
                    </span>
                    <span className="text-[14px] font-bold text-black">
                      {study.afterStats.approval}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] text-black">Upsell</span>
                    <span className="text-[13px] font-bold text-black">
                      {study.beforeStats.upsell}
                    </span>
                    <span className="text-[13px] font-bold text-black">
                      {study.afterStats.upsell}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black">Середній чек</span>
                    <span className="text-[14px] font-bold text-black">
                      {study.beforeStats.averageCheck}
                    </span>
                    <span className="text-[14px] font-bold text-black">
                      {study.afterStats.averageCheck}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] text-black">Викуп</span>
                    <span className="text-[13px] font-bold text-black">
                      {study.beforeStats.buyout}
                    </span>
                    <span className="text-[13px] font-bold text-black">
                      {study.afterStats.buyout}
                    </span>
                  </div>
                </div>

                <Button
                  variant="brand"
                  size="lg"
                  fullWidth
                  className="text-[20px] font-bold text-white"
                >
                  РАЗОМ
                </Button>

                <div className="text-left space-y-1 px-3 py-5">
                  <p className="text-[14px] font-medium text-[#404040]">
                    <span>Збільшили чистий прибуток: </span>
                    <span className="text-[#1663d3] font-semibold">
                      {study.results.profitIncrease}
                    </span>
                  </p>
                  <p className="text-[14px] font-medium text-[#404040]">
                    <span>Додатковий заробіток: </span>
                    <span className="text-[#1663d3] font-semibold">
                      {study.results.dailyEarnings}
                    </span>
                  </p>
                  <p className="text-[14px] font-medium text-[#404040]">
                    <span>Додатковий прибуток: </span>
                    <span className="text-[#1663d3] font-semibold">
                      {study.results.monthlyProfit}
                    </span>
                  </p>
                </div>

                <div className="text-center">
                  <Image
                    src="/images/img_symbol.svg"
                    alt="expand"
                    width={18}
                    height={22}
                    className="w-[18px] h-[22px] mx-auto"
                  />
                  <p className="text-[12px] text-black mt-1">Перегорнути</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-gradient-to-b from-[#1663d3] to-[#f0f0f0] rounded-[10px] overflow-hidden h-full">
            <div className="p-6 space-y-4">
              <h3 className="text-[18px] font-semibold text-[#404040] text-center">
                {study.title} — інші результати
              </h3>

              <div className="bg-[#efeae4] rounded-[10px] p-3 space-y-3">
                <p className="text-[14px] text-black">
                  Апрув після оптимізації:{' '}
                  <span className="font-bold">{study.afterStats.approval}</span>
                </p>
                <p className="text-[14px] text-black">
                  Upsell: <span className="font-bold">{study.afterStats.upsell}</span>
                </p>
                <p className="text-[14px] text-black">
                  Середній чек: <span className="font-bold">{study.afterStats.averageCheck}</span>
                </p>
                <p className="text-[14px] text-black">
                  Викуп: <span className="font-bold">{study.afterStats.buyout}</span>
                </p>
              </div>

              <div className="text-left space-y-1 px-3 py-5">
                <p className="text-[14px] font-medium text-[#404040]">
                  <span>Збільшили чистий прибуток: </span>
                  <span className="text-[#1663d3] font-semibold">
                    {study.results.profitIncrease}
                  </span>
                </p>
                <p className="text-[14px] font-medium text-[#404040]">
                  <span>Додатковий заробіток: </span>
                  <span className="text-[#1663d3] font-semibold">
                    {study.results.dailyEarnings}
                  </span>
                </p>
                <p className="text-[14px] font-medium text-[#404040]">
                  <span>Додатковий прибуток: </span>
                  <span className="text-[#1663d3] font-semibold">
                    {study.results.monthlyProfit}
                  </span>
                </p>
              </div>

              <div className="text-center">
                <Image
                  src="/images/img_symbol.svg"
                  alt="expand"
                  width={18}
                  height={22}
                  className="w-[18px] h-[22px] mx-auto"
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
