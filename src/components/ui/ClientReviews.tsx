import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Testimonial = {
  id: string;
  name: string;
  niche: string;
  leadCount: string;
  rating: number;
  avatar: string;
  socialHandle: string;
  videoUrl: string;
};

type ClientReviewsProps = {
  testimonials: Testimonial[];
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Максим Ліповський',
    niche: 'Власник інтернет магазину',
    leadCount: '150+ ЛІДІВ НА ДЕНЬ',
    rating: 5,
    avatar: '/images/img_img_58x58.png',
    socialHandle: '@Maxx_0001',
    videoUrl:
      'https://www.youtube.com/watch?v=DtJC0eTs-2s&ab_channel=%D0%A2%D0%B2%D1%96%D0%B9TRUST-CALLcentr',
  },
  {
    id: '2',
    name: 'Анатолій Соколов',
    niche: 'Продаж товарів через односторінкові сайти',
    leadCount: '250+ ЛІДІВ НА ДЕНЬ',
    rating: 5,
    avatar: '/images/img_img_2.png',
    socialHandle: '@a_ssokolov',
    videoUrl:
      'yhttps://outube.com/watch?v=G04KTMge2JY&embeds_referring_euri=https%3A%2F%2Ftrust-call.com%2F&source_ve_path=OTY3MTQ',
  },
  {
    id: '3',
    name: 'Вадим Попазов',
    niche: 'Продажі електроніки через односторінкові сайти',
    leadCount: '450+ ЛІДІВ НА ДЕНЬ',
    rating: 5,
    avatar: '/images/img_img_3.png',
    socialHandle: '@popazov_vadim',
    videoUrl:
      'https://www.youtube.com/watch?v=EjVq4sLoKYY&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D0%BE%D0%B2%D0%B8%D1%87',
  },
];

const ClientReviews: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="reviews" className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[40px] sm:text-[48px] md:text-[55px] font-semibold font-unbounded uppercase text-[#222222] leading-tight">
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
                  <div className="absolute top-4 right-4 z-10 rotate-[5deg]">
                    <div className="swing bg-[#0067ff] rounded-md px-3 py-2">
                      <span className="text-[10px] font-semibold font-inter text-white">
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
                  <button
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={() => setActiveVideo(testimonial.videoUrl)} // 👈 відкриваємо відео
                  >
                    {' '}
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
                    width={158}
                    height={158}
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
        <div className="bg-[#292929] rounded-[72px] p-6 sm:p-8 md:p-12 text-center mt-16 relative">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <Image
              src="/images/img_dollar_64.png"
              alt="money"
              width={160}
              height={158}
              className="w-[100px] sm:w-[120px] md:w-[160px] h-auto absolute -left-5 sm:left-0 top-[20px]"
            />
            <Image
              src="/images/img_dollar_64.png"
              alt="money"
              width={160}
              height={158}
              className="w-[100px] sm:w-[120px] md:w-[160px] h-auto absolute -left-5 sm:left-0 top-[30px] rotate-6"
            />
            <Image
              src="/images/img_dollar_64.png"
              alt="money"
              width={160}
              height={158}
              className="w-[100px] sm:w-[120px] md:w-[160px] h-auto absolute -left-5 sm:left-0 top-[40px] rotate-12"
            />
            <div className="flex-1">
              <h3 className="text-[18px] sm:text-[28px] md:text-[34px] font-bold font-unbounded uppercase text-white leading-tight px-3 sm:px-[100px]">
                <span>Підвищимо апрув </span>
                <span className="text-[#1663d3]">до 95%</span>
                <span> та помножимо Ваш прибуток </span>
                <span className="text-[#1663d3]">мінімум у 2 рази!</span>
              </h3>
            </div>
            <Image
              src="/images/img_dollar_61.png"
              alt="money"
              width={126}
              height={142}
              className="w-[70px] sm:w-[90px] md:w-[126px] h-auto absolute -right-5 sm:right-0 top-[20px]"
            />
            <Image
              src="/images/img_dollar_61.png"
              alt="money"
              width={126}
              height={142}
              className="w-[70px] sm:w-[90px] md:w-[126px] h-auto absolute -right-5 sm:right-0 top-[20px] rotate-6"
            />
            <Image
              src="/images/img_dollar_61.png"
              alt="money"
              width={126}
              height={142}
              className="w-[70px] sm:w-[90px] md:w-[126px] h-auto absolute -right-5 sm:right-0 top-[20px] rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
