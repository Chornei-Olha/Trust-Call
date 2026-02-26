'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Review {
  id: string;
  name: string;
  niche: string;
  avatar: string;
  text: string;
  leadCount: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Лісовий Валерій',
    niche: 'Електротовари',
    avatar: '/images/foto-review-5.webp',
    text: 'Наш бізнес пов’язаний із продажем електротоварів, і клієнти часто потребують консультацій перед покупкою. Завдяки співпраці з кол-центром ми можемо бути впевнені, що жоден дзвінок не залишиться без уваги. Це підвищило рівень довіри та дозволило значно збільшити продажі.',
    leadCount: 'К-сть лідів 200+',
  },
  {
    id: '2',
    name: 'Зінченко Олексій',
    niche: 'Автомобільні товари',
    avatar: '/images/foto-review-6.webp',
    text: 'Ми займаємося продажем автомобільних аксесуарів та запчастин. Часто клієнтам потрібна додаткова інформація перед замовленням, і саме тут допомагають оператори — вони швидко реагують і надають корисні поради. Завдяки цьому ми отримали більше постійних клієнтів.',
    leadCount: 'К-сть лідів 100+',
  },
  {
    id: '3',
    name: 'Оленчук Степан',
    niche: 'Саджанці троянди',
    avatar: '/images/foto-review-1.svg',
    text: 'Наша компанія займається вирощуванням та продажем саджанців, і для нас важливо було знайти команду, яка допоможе якісно працювати з клієнтами. Оператори завжди швидко реагують на звернення, надають детальні консультації та допомагають нашим покупцям зробити правильний вибір. Це співробітництво значно підвищило довіру клієнтів і дало змогу нам розвиватися швидше.',
    leadCount: 'К-сть лідів 300',
  },
  {
    id: '4',
    name: 'Поліщук Вікторія',
    niche: 'Жіночі костюми',
    avatar: '/images/foto-review-2.svg',
    text: 'Ми працюємо в сегменті жіночого одягу, і для нас особливо важливо, щоб клієнт завжди отримував вчасну та якісну консультацію. Команда операторів чудово справляється із цим завданням — вони ввічливі, уважні й завжди готові допомогти підібрати потрібний варіант. Завдяки такій співпраці нам вдалося підвищити довіру покупців і збільшити кількість повторних замовлень',
    leadCount: 'К-сть лідів 150+',
  },
  {
    id: '5',
    name: 'Сердюк Дмитро',
    niche: 'Насіння квітів, овочів, фруктів і т.п.',
    avatar: '/images/foto-review-4.webp',
    text: 'Ми займаємося реалізацією насіння для саду та городу. Дуже важливо було, щоб наші клієнти отримували швидкі відповіді на питання щодо сортів та умов вирощування. Оператори завжди ввічливі й компетентні — завдяки цьому ми отримуємо більше замовлень і менше відмов.',
    leadCount: 'К-сть лідів 2000+',
  },
  {
    id: '6',
    name: 'Мітіна Світлана',
    niche: 'Господарські товари',
    avatar: '/images/foto-review-3.svg',
    text: 'Наша компанія спеціалізується на продажі господарських товарів, і якісний сервіс для клієнтів завжди був у пріоритеті. Завдяки співпраці з “Trust-cal” ми отримали можливість швидко обробляти замовлення та відповідати на всі запитання покупців. Це суттєво зменшило кількість відмов і допомогло збільшити обсяги продажів.',
    leadCount: 'К-сть лідів 500+',
  },
];

export default function ReviewsCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return (
    <section className="w-full bg-white pb-14 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          navigation={!isMobile}
          breakpoints={{
            0: { slidesPerView: 1 }, // 👈 мобільний — по одному
            768: { slidesPerView: 2 }, // 👈 планшет
            1024: { slidesPerView: 3 }, // 👈 десктоп
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="flex">
              <div className="bg-[#eaf3ff] rounded-[20px] p-6 shadow-lg flex flex-col justify-between w-full h-full min-h-[460px]">
                {/* Avatar + Name */}
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={560}
                    height={560}
                    className="w-[60px] h-[60px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[24px] font-medium font-inter text-[#222]">
                      {review.name}
                    </h3>
                    <p className="text-base text-white font-medium font-inter bg-[#0067ff] rounded-md px-2 py-1 inline-block">
                      Ніша — {review.niche}
                    </p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-[#222] text-[16px] font-light font-inter leading-relaxed mb-6 flex-1">
                  {review.text}
                </p>

                {/* Bottom info */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-[#0067ff] text-lg">★★★★★</div>
                  <span className="text-sm font-semibold text-[#222]">{review.leadCount}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
