'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const ProfitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const handleFormSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const templateParams = {
  //     name: formData.name,
  //     phone: `+380 ${formData.phone}`, // фиксированный код (можно сделать селектор как в FinalCTA)
  //   };

  //   try {
  //     await emailjs.send(
  //       'service_v33od0d', // ID сервиса
  //       'template_dfl7sos', // ID шаблона
  //       templateParams, // данные формы
  //       'sr_aVM5WYfgNWFCze' // public key
  //     );

  //     alert('✅ Дякуємо! Ми скоро з вами зв’яжемося.');
  //     setFormData({ name: '', phone: '' });
  //   } catch (err: any) {
  //     console.error('FAILED...', err);
  //     alert('❌ Сталася помилка. Спробуйте ще раз.');
  //   }
  // };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      phone: `+380 ${formData.phone}`,
    };

    try {
      // 1️⃣ Відправляємо через EmailJS
      await emailjs.send(
        'service_v33od0d', // ID сервісу
        'template_dfl7sos', // ID шаблону
        templateParams, // дані форми
        'sr_aVM5WYfgNWFCze' // public key
      );

      // 2️⃣ ДОДАЄМО: відправка дублю в Telegram через API маршрутизатор
      await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: `+380 ${formData.phone}`,
          message: 'Заявка з форми ProfitForm',
        }),
      });

      // 3️⃣ Повідомлення про успіх
      alert('✅ Дякуємо! Ми скоро з вами зв’яжемося.');
      setFormData({ name: '', phone: '' });
    } catch (err: any) {
      console.error('FAILED...', err);
      alert('❌ Сталася помилка. Спробуйте ще раз.');
    }
  };

  return (
    <section className="w-full bg-black py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-unbounded font-semibold uppercase text-white mb-6">
            ЗБІЛЬШУЮ СВІЙ ПРИБУТОК ВЖЕ СЬОГОДНІ !
          </h3>
        </div>

        <form onSubmit={handleFormSubmit} className="max-w-5xl mx-auto space-y-8">
          {/* перший рядок (name + phone + button) */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-6 items-end">
            {/* Name */}
            <div>
              <label className="block text-[16px] sm:text-[25px] font-semibold font-inter text-white mb-2">
                Як до вас звертатися?
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-[#e1e1e1] rounded-[32px] text-[14px] text-[#202020] focus:outline-none focus:ring-2 focus:ring-[#1663d3]"
                placeholder="Олексій"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[16px] sm:text-[25px] font-semibold font-inter text-white mb-2">
                Ваш номер телефону
              </label>
              <div className="relative">
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <Image
                    src="/images/img_image_background_shadow.png"
                    alt="flag"
                    width={18}
                    height={12}
                    className="w-[18px] h-[12px]"
                  />
                  <span className="text-[14px] text-[#202020]">+380</span>
                </div>
                <input
                  type="tel"
                  inputMode="numeric" // открывает цифровую клавиатуру на мобильных
                  value={formData.phone}
                  onChange={(e) => {
                    // Удаляем все символы, кроме цифр
                    const digitsOnly = e.target.value.replace(/\D/g, '');
                    // Разрешаем максимум 9 цифр (для формата +380)
                    if (digitsOnly.length <= 9) {
                      handleInputChange('phone', digitsOnly);
                    }
                  }}
                  maxLength={9} // дополнительное ограничение
                  className="w-full pl-20 pr-5 py-3 bg-white border border-[#e1e1e1] rounded-[32px] text-[14px] text-[#202020] focus:outline-none focus:ring-2 focus:ring-[#1663d3]"
                  placeholder="(99) 999-99-99"
                  required
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex flex-col items-center -gap-16">
              <Button
                type="submit"
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

          {/* другий рядок (знижка + декор) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-start">
            <p className="text-[25px] font-semibold text-white">
              Швидка обробка замовлень та високий % допродажу
            </p>
            {/* <div className="bg-white rounded-[22px] px-6 py-2 text-center sm:text-left">
              <span className="text-[24px] sm:text-[27px] font-semibold text-black">
                Знижка 10%
              </span>
            </div>
            <div className="bg-black rounded-[22px] px-6 py-2 text-center sm:text-left">
              <span className="text-[24px] sm:text-[27px] font-semibold text-white ml-2">
                на перший рахунок для нових клієнтів
              </span>
            </div> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfitForm;
