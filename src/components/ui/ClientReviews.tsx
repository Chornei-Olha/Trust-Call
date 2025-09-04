// components/ClientReviews.tsx
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Testimonial } from './TestimonialsCarousel';

interface ClientReviewsProps {
  testimonials: Testimonial[];
}

const ClientReviews: React.FC<ClientReviewsProps> = ({ testimonials }) => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[55px] font-medium text-[#222222] leading-tight">
            ВІДГУКИ КЛІЄНТІВ
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.1, centeredSlides: true },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col items-center gap-4">
                {/* Video */}
                <div className="relative w-full rounded-[34px] overflow-hidden">
                  {/* Синяя плашка с leadCount */}
                  <div className="absolute top-4 right-4 z-10 rotate-[3deg]">
                    <div className="swing bg-[#0067ff] rounded-md px-3 py-2">
                      <span className="text-[10px] font-semibold text-white">
                        {testimonial.leadCount}
                      </span>
                    </div>
                  </div>

                  <Image
                    src={`/images/img_img${index === 0 ? '' : index === 1 ? '_184x328' : '_1'}.png`}
                    alt="video thumbnail"
                    width={500}
                    height={280}
                    className="w-full aspect-video object-cover rounded-[34px]"
                  />
                  <button className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/images/img_button_dialog.svg"
                      alt="play"
                      width={68}
                      height={68}
                      className="w-[68px] h-[68px]"
                    />
                  </button>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={58}
                    height={58}
                    className="w-[58px] h-[58px] rounded-full"
                  />
                  <div>
                    <h4 className="text-[20px] font-medium text-[#222222]">{testimonial.name}</h4>
                    <p className="text-[14px] text-[#2222227f]">{testimonial.niche}</p>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-[#d9d9d9] rounded-md px-3 py-2 flex items-center gap-2">
                  <Image
                    src="/images/img_photoroom_png_webp.png"
                    alt="social"
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px]"
                  />
                  <span className="text-[12px] font-medium text-[#222222]">
                    {testimonial.socialHandle}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Profit Increase Banner */}
        <div className="bg-[#292929] rounded-[72px] p-6 sm:p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <Image
              src="/images/img_dollar_64.png"
              alt="money"
              width={160}
              height={158}
              className="w-[80px] sm:w-[120px] md:w-[160px] h-auto"
            />
            <div className="flex-1">
              <h3 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold uppercase text-white leading-tight">
                <span>Підвищимо апрув </span>
                <span className="text-[#1663d3]">до 95%</span>
                <span>
                  {' '}
                  та помножимо
                  <br />
                  Ваш прибуток{' '}
                </span>
                <span className="text-[#1663d3]">мінімум у 2 рази!</span>
              </h3>
            </div>
            <Image
              src="/images/img_dollar_61.png"
              alt="money"
              width={126}
              height={142}
              className="w-[60px] sm:w-[90px] md:w-[126px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
