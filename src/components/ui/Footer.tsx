import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          <Link
            href="https://www.instagram.com/trust.call_centr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/img_vector_white_a700.svg"
              alt="Facebook"
              width={48}
              height={48}
              className="w-12 h-12 hover:opacity-80 transition"
            />
          </Link>

          <Link
            href="https://www.youtube.com/channel/UCnVH4qbyZc8BMno0beXisOg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={48}
              height={48}
              className="w-12 h-12 transition grayscale hover:grayscale-0"
            />
          </Link>

          <Link
            href="https://api.whatsapp.com/send/?phone=3800971552677&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/img_vector_3.svg"
              alt="WhatsApp"
              width={48}
              height={48}
              className="w-12 h-12 hover:opacity-80 transition"
            />
          </Link>

          <Link href="mailto:trustcallcentr@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/img_vector_1.svg"
              alt="mail"
              width={48}
              height={48}
              className="w-12 h-12 hover:opacity-80 transition"
            />
          </Link>

          <Link href="https://t.me/trust_callcenter" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/img_vector_white_a700_48x48.svg"
              alt="Telegram"
              width={48}
              height={48}
              className="w-12 h-12 hover:opacity-80 transition"
            />
          </Link>
        </div>
        {/* Company Name */}
        <div className="text-center mb-8">
          <h2 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-semibold text-white leading-none text-inter">
            TRUST-CALL®
          </h2>
        </div>
        {/* Contact Email */}
        <div className="text-center mb-8">
          <a
            href="mailto:trustcallcentr@gmail.com"
            className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[70px] font-medium text-white hover:text-[#1663d3] transition-colors font-inter"
          >
            trustcallcentr@gmail.com
          </a>
        </div>
        {/* Footer Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
          <div className="text-[20px] sm:text-[24px] md:text-[30px] font-medium text-white uppercase text-unbounded">
            TRUST-CALL
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center gap-6 lg:gap-12 text-inter">
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
              <a href="tel:+380971552677" className="hover:underline">
                +380971552677
              </a>{' '}
              ( Олександр Х. – власник )<br />
              <a href="tel:+380963411753" className="hover:underline">
                +380963411753
              </a>{' '}
              ( Олександр Ш. – директор )
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[12px] font-bold text-white">
              ФОП Худомака Олександр Сергійович, ДРФО 3568912297, м. Одеса,
              <br />
              вул. Люстдорфська дорога, 140
            </p>
          </div>
        </div>{' '}
        <div
          className="fixed bottom-5 right-5 z-50 w-16 sm:w-20 lg:w-[98px] h-16 sm:h-20 lg:h-[98px] 
             rounded-full bg-white/10 backdrop-blur-sm
             shadow-[0_0_20px_5px_rgba(59,130,246,0.7)]
             flex items-center justify-center"
        >
          <a href="tel:+380971552677">
            <div
              className="w-full h-full flex items-center justify-center cursor-pointer rounded-full
                 transition-transform active:scale-95"
            >
              <Image
                src="/images/img_phone_call_2_svg.svg"
                alt="Phone Call"
                width={60}
                height={60}
                className="w-12 sm:w-14 lg:w-[60px] h-12 sm:h-14 lg:h-[60px] animate-wiggle"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
