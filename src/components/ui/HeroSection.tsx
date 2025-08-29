// components/HeroSection.tsx
'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import Header from './Header';

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img__0x0.png')" }}
    >
      {/* Верхняя строка */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 md:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Левая часть */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 md:space-y-12">
            <h1 className="text-[32px] sm:text-[40px] md:text-[50px] font-medium uppercase leading-tight">
              <span className="text-white">Аутсорсинговий </span>
              <span className="text-[#005eff]">
                кол-центр
                <br />
                TRUST-CALL для товарного
                <br />
                бізнесу
              </span>
            </h1>
            <p className="text-[18px] sm:text-[24px] md:text-[30px] font-light leading-relaxed text-white max-w-4xl">
              Тестовий період перед підключенням – ми обробимо
              <br />
              ваші перші 50 лідів <span className="font-medium">АБСОЛЮТНО БЕЗКОШТОВНО</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
              <Button
                variant="secondary"
                size="lg"
                className="text-[16px] sm:text-[20px] font-medium px-6 sm:px-8 py-4 sm:py-6"
              >
                Отримати консультацію
              </Button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {['1', '2', '3', '4'].map((n) => (
                    <Image
                      key={n}
                      src={`/images/img_ellipse_${n}_54x54.png`}
                      alt={`client-${n}`}
                      width={54}
                      height={54}
                      className="w-[40px] sm:w-[54px] h-[40px] sm:h-[54px] rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть */}
          <div className="lg:col-span-4 relative">
            <div className="relative">
              <Image
                src="/images/img_object1_png.png"
                alt="Trust-call platform"
                width={266}
                height={266}
                className="w-full max-w-[200px] sm:max-w-[266px] h-auto mx-auto"
              />
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -right-4 w-[62px] h-[62px] bg-[#0000000c] rounded-lg shadow-lg border border-white/20"></div>
              <div className="absolute top-8 -left-4 w-[62px] h-[62px] bg-[#0000000c] rounded-lg shadow-lg border border-white/20"></div>
              <div className="absolute -bottom-4 right-8 w-[62px] h-[62px] bg-[#0000000c] rounded-lg shadow-lg border border-white/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Логотипы партнёров */}
      <div className="relative bg-white z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5 mt-5">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 opacity-80">
          <Image
            src="/images/img_lp_crm_1_svg.png"
            alt="LP CRM"
            width={170}
            height={90}
            className="h-[60px] sm:h-[70px] md:h-[90px] w-auto"
          />
          <Image
            src="/images/img_png_webp.png"
            alt="Ukrposhta"
            width={200}
            height={52}
            className="h-[40px] sm:h-[45px] md:h-[52px] w-auto"
          />
          <Image
            src="/images/img_nextel_png_webp.png"
            alt="Nextel"
            width={200}
            height={52}
            className="h-[40px] sm:h-[45px] md:h-[52px] w-auto"
          />
          <Image
            src="/images/img_binotel_png_webp.png"
            alt="Binotel"
            width={200}
            height={70}
            className="h-[50px] sm:h-[60px] md:h-[70px] w-auto"
          />
          <Image
            src="/images/img_photo_png_webp.png"
            alt="Citrus"
            width={200}
            height={52}
            className="h-[40px] sm:h-[45px] md:h-[52px] w-auto"
          />
          <Image
            src="/images/img_png_webp_70x200.png"
            alt="Nova Poshta"
            width={200}
            height={70}
            className="h-[50px] sm:h-[60px] md:h-[70px] w-auto"
          />
        </div>
      </div>
    </section>
  );
}
