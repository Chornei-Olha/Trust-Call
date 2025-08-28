// components/TestimonialsCarousel.tsx
'use client';

import Image from 'next/image';
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export interface Testimonial {
  id: string;
  name: string;
  niche: string;
  content: string;
  leadCount: string;
  rating: number;
  avatar: string;
  socialHandle: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? 'text-[#1663D3]' : 'text-gray-300'}>
      ★
    </span>
  ));
};

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2.2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sliderRef} className="keen-slider !overflow-visible">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="keen-slider__slide bg-[#cee2ff] rounded-[18px] p-4 w-[418px] flex-shrink-0 relative pt-[70px] !overflow-visible" // добавляем паддинг сверху
            >
              {/* Аватар */}
              <div className="absolute -top-[50px] left-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              {/* Контент */}
              <div className="ml-[120px]">
                <h4 className="text-[24px] font-medium text-black mb-2">{testimonial.name}</h4>
                <div className="bg-[#0067ff] rounded-md px-3 py-2 inline-block mb-4">
                  <span className="text-[16px] font-medium text-white">
                    Ніша-<span className="font-light">{testimonial.niche}</span>
                  </span>
                </div>
                <p className="text-[16px] font-light text-black leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">{renderStars(testimonial.rating)}</div>
                  <span className="text-[16px] font-semibold text-black">
                    {testimonial.leadCount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
