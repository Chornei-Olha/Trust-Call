'use client';

import Image from 'next/image';
import Button from '../ui/Button'; // путь поправь под свой проект

export default function Header() {
  return (
    <header className="bg-black/40 backdrop-blur-[5px] z-[9999] w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-4 fixed">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Логотип / название */}
        <div className="text-[20px] sm:text-[24px] md:text-[30px] font-medium font-unbounded text-white uppercase tracking-wider">
          TRUST-CALL
        </div>

        {/* Кнопка и декоративная картинка */}
        <div className="hidden lg:flex flex-col items-center -gap-16">
          <Button
            variant="brand"
            size="sm"
            className="text-[9px] font-medium font-unbounded uppercase tracking-wider px-3 py-3"
          >
            отримати консультацію
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
    </header>
  );
}
