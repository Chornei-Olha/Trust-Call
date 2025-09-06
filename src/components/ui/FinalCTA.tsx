import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useState } from 'react';

const countries = [
  { code: '+380', name: 'Україна', flag: '/images/img_image_background_shadow.png' },
  { code: '+48', name: 'Polska', flag: '/images/flag_pl.png' },
  { code: '+49', name: 'Deutschland', flag: '/images/flag_de.png' },
];

export default function FinalCTA() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <section className="w-full bg-white pt-14 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="contaimer mx-auto px-4 sm:px-6 lg:px-8">
        {/* Подложка с фоном и скруглёнными верхними углами */}
        <div className="relative overflow-hidden rounded-t-[32px] bg-[#d9ecff]">
          <div className="absolute inset-0">
            <Image
              src="/images/img_background.png"
              alt="background"
              fill
              className="object-cover rounded-t-[32px] opacity-70"
            />
          </div>

          <div className="relative z-10 p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Левая часть */}
              <div className="space-y-3 sm:space-y-6">
                <div className="flex justify-between items-center font-inter px-8 sm:px-32">
                  <span className="text-[20px] sm:text-[25px] font-semibold text-[#404040]">
                    Ви
                  </span>
                  <span className="text-[20px] sm:text-[25px] font-semibold text-[#404040]">
                    Наша команда
                  </span>
                </div>
                <Image
                  src="/images/img_group_267_2_png_webp.png"
                  alt="comparison"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="text-center space-y-4">
                  <h3 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[28px] font-bold font-unbounded uppercase text-black leading-tight">
                    <span>
                      ЗБІЛЬШЕННЯ ПРИБУТКУ
                      <br />
                    </span>
                    <span className="text-[#1663d4]">У 2 РАЗИ !</span>
                  </h3>
                  <div className="space-y-2 pt-8">
                    <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold font-inter text-[#404040]">
                      ЗБІЛЬШУЮ СВІЙ ПРИБУТОК ВЖЕ СЬОГОДНІ !
                    </h4>
                    {/* Наклонная плашка */}
                    <div className="swing bg-[#1663d4] rounded-lg px-6 sm:px-8 py-4 sm:py-6 inline-block transform -rotate-6 font-unbounded">
                      <span className="text-[24px] sm:text-[32px] md:text-[42px] font-medium uppercase text-white">
                        Знижка 10%
                      </span>
                    </div>
                    <p className="text-[24px] sm:text-[32px] md:text-[42px] font-medium font-unbounded uppercase text-black leading-tight">
                      <span>
                        на перший
                        <br />
                        рахунок для
                        <br />
                      </span>
                      <span className="text-[#0041ff]">нових клієнтів</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Правая часть - Форма */}
              <div className="space-y-6">
                <div>
                  <label className="block text-[20px] sm:text-[25px] font-semibold font-inter text-[#202020] mb-3">
                    Як до вас звертатися?
                  </label>
                  <input
                    type="text"
                    defaultValue="Олексій"
                    className="w-full px-5 py-5 bg-white border border-[#e1e1e1] rounded-[32px] text-[14px] sm:text-[16px] text-[#202020] focus:outline-none focus:ring-2 focus:ring-[#1663d3]"
                  />
                </div>
                <div>
                  <label className="block text-[20px] sm:text-[25px] font-semibold font-inter text-[#202020] mb-3">
                    Ваш номер телефону
                  </label>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-2 bg-white border border-[#e1e1e1] rounded-[32px] px-4 py-3">
                      <Image
                        src={selectedCountry.flag}
                        alt={selectedCountry.name}
                        width={20}
                        height={14}
                        className="w-[20px] h-[14px]"
                      />
                      <select
                        value={selectedCountry.code}
                        onChange={(e) => {
                          const country = countries.find((c) => c.code === e.target.value);
                          if (country) setSelectedCountry(country);
                        }}
                        className="bg-transparent text-[14px] text-[#202020] focus:outline-none"
                      >
                        {countries.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.code}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      type="tel"
                      placeholder="(99) 999-99-99"
                      className="flex-1 px-3 sm:px-5 py-3 sm:py-5 bg-white border border-[#e1e1e1] rounded-[32px] text-[14px] sm:text-[16px] text-[#202020] focus:outline-none focus:ring-2 focus:ring-[#1663d3]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[20px] sm:text-[25px] font-semibold font-inter text-[#202020] mb-4">
                    Як зручніше зв'язатися:
                  </label>
                  <div className="space-y-3">
                    {['Дзвінок', 'Telegram', 'Viber'].map((item) => (
                      <label key={item} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="contact" className="w-5 h-5 accent-[#1663d3]" />
                        <span className="text-[14px] sm:text-[15px] text-[#202020]">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center -gap-16">
                  <Button
                    variant="brand"
                    size="sm"
                    className="animate-pulse-scale text-[8px] sm:text-[16px] font-medium font-inter uppercase tracking-wider px-3 py-3"
                  >
                    замовити консультацію
                  </Button>
                  <Image
                    src="/images/img_klipartz_24.png"
                    alt="decoration"
                    width={160}
                    height={18}
                    className="w-[80px] sm:w-[120px] md:w-[160px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
