import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          <Image
            src="/images/img_vector_white_a700.svg"
            alt="social"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <Image
            src="/images/img_vector_white_a700_48x48.svg"
            alt="social"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <Image
            src="/images/img_vector_48x48.svg"
            alt="social"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <Image
            src="/images/img_vector_1.svg"
            alt="social"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <Image
            src="/images/img_vector_2.svg"
            alt="social"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <Image
            src="/images/img_vector_3.svg"
            alt="social"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>

        {/* Company Name */}
        <div className="text-center mb-8">
          <h2 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-semibold text-white leading-none">
            TRUST-CALL®
          </h2>
        </div>

        {/* Contact Email */}
        <div className="text-center mb-8">
          <a
            href="mailto:trustcallcentr@gmail.com"
            className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[70px] font-medium text-white hover:text-[#1663d3] transition-colors"
          >
            trustcallcentr@gmail.com
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          <div className="text-[20px] sm:text-[24px] md:text-[30px] font-medium text-white uppercase">
            TRUST-CALL
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center gap-6 lg:gap-12">
            <a
              href="#about"
              className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white hover:text-[#1663d3] transition-colors"
            >
              Про компанію
            </a>
            <a
              href="#cases"
              className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white hover:text-[#1663d3] transition-colors"
            >
              Кейси
            </a>
            <a
              href="#benefits"
              className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white hover:text-[#1663d3] transition-colors"
            >
              Переваги співпраці
            </a>
            <a
              href="#partners"
              className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white hover:text-[#1663d3] transition-colors"
            >
              Партнери
            </a>
            <a
              href="#pricing"
              className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white hover:text-[#1663d3] transition-colors"
            >
              Тарифи
            </a>
            <a
              href="#reviews"
              className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-white hover:text-[#1663d3] transition-colors"
            >
              Відгуки
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 pt-8 border-t border-white/20">
          <div className="space-y-2">
            <p className="text-[12px] font-bold text-white">
              +380971552677 ( Олександр Х. – власник )<br />
              +380963411753 ( Олександр Ш. – директор )
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[12px] font-bold text-white">
              ФОП Худомака Олександр Сергійович, ДРФО 3568912297, м. Одеса,
              <br />
              вул. Люстдорфська дорога, 140
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
