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

      {/* Соцсети сбоку */}

      <div className="absolute right-[25px] top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-[46px] bg-black/10 rounded-[36px] px-[15px] py-[25px] z-20">
        {[
          { text: 'TWITTER', href: 'https://x.com/' },
          { text: 'FACEBOOK', href: 'https://www.facebook.com/' },
          { text: 'INSTAGRAM', href: 'https://instagram.com/yourprofile' },
        ].map(({ text, href }, idx) => (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-krona-one font-normal font-montserrat leading-[15px] text-center text-global-10 hover:underline"
            style={{ writingMode: 'vertical-rl' }}
          >
            {text}
          </a>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h1 className="text-[50px] sm:text-[80px] md:text-[130px] uppercase leading-tight font-bold text-center">
          Trust-call
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Левая часть */}
          <div className="lg:col-span-4 space-y-6 sm:space-y-8 md:space-y-12 text-[32px] sm:text-[40px] md:text-[50px] font-medium">
            <span className="text-white">Аутсорсинговий </span>
            <span className="text-[#005eff]">
              кол-центр
              <br />
              TRUST-CALL{' '}
            </span>
            <span className="text-white">
              для товарного
              <br />
              бізнесу
            </span>
            <p className="text-[18px] sm:text-[24px] md:text-[30px] font-light leading-relaxed text-white max-w-4xl">
              Тестовий період перед підключенням – ми обробимо
              <br />
              ваші перші 50 лідів <span className="font-medium">АБСОЛЮТНО БЕЗКОШТОВНО</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
              <Button
                variant="secondary"
                size="lg"
                className="text-[16px] sm:text-[20px] font-medium px-6 sm:px-8 py-2"
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
                      width={200}
                      height={200}
                      className="w-[40px] sm:w-[54px] h-[auto] rounded-full border-2 border-white"
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
      <div className="relative bg-white z-10 mx-auto px-4 sm:px-6 lg:px-8 py-5 mt-5">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 opacity-80">
          {/* лого */}
          <Image
            src="/images/partner.svg"
            alt="Trust-call platform"
            width={266}
            height={266}
            className="w-full max-w-[100px] sm:max-w-[166px] h-auto mx-auto"
          />
          <Image
            src="/images/partner2.svg"
            alt="Trust-call platform"
            width={266}
            height={266}
            className="w-full max-w-[100px] sm:max-w-[166px] h-auto mx-auto"
          />
          <Image
            src="/images/partner3.svg"
            alt="Trust-call platform"
            width={266}
            height={266}
            className="w-full max-w-[100px] sm:max-w-[166px] h-auto mx-auto"
          />
          <Image
            src="/images/partner4.svg"
            alt="Trust-call platform"
            width={266}
            height={266}
            className="w-full max-w-[100px] sm:max-w-[166px] h-auto mx-auto"
          />
          <Image
            src="/images/partner5.svg"
            alt="Trust-call platform"
            width={266}
            height={266}
            className="w-full max-w-[100px] sm:max-w-[166px] h-auto mx-auto"
          />
          <Image
            src="/images/partner6.svg"
            alt="Trust-call platform"
            width={266}
            height={266}
            className="w-full max-w-[100px] sm:max-w-[166px] h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
