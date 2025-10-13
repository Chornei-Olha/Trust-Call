'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const ProfitForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      phone: `+380 ${formData.phone}`,
    };

    try {
      // Отправка EmailJS
      await emailjs.send(
        'service_v33od0d',
        'template_dfl7sos',
        templateParams,
        'sr_aVM5WYfgNWFCze'
      );

      // Отправка дублика в Telegram
      await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: `+380 ${formData.phone}`,
          message: 'Заявка з форми ProfitForm',
        }),
      });

      // Показ окна благодарности
      setShowThankYou(true);
      setFormData({ name: '', phone: '' });

      setTimeout(() => setShowThankYou(false), 3000);
    } catch (err: any) {
      console.error('FAILED...', err);
      alert('❌ Сталася помилка. Спробуйте ще раз.');
    }
  };

  return (
    <section className="w-full bg-black py-14 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-[18px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-unbounded font-semibold uppercase text-white mb-6">
            ЗБІЛЬШУЮ СВІЙ ПРИБУТОК ВЖЕ СЬОГОДНІ !
          </h3>
        </div>

        <form onSubmit={handleFormSubmit} className="max-w-5xl mx-auto space-y-8">
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
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, '');
                    if (digitsOnly.length <= 9) handleInputChange('phone', digitsOnly);
                  }}
                  maxLength={9}
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
        </form>
      </div>

      {/* --- Окно благодарности --- */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 sm:p-10 w-[90%] max-w-md mx-auto text-center shadow-[0_0_40px_8px_rgba(22,99,212,0.6)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <h3 className="text-[24px] sm:text-[26px] font-bold font-unbounded text-[#1663d3] mb-4">
                Дякуємо за заявку!
              </h3>
              <p className="text-[16px] sm:text-[18px] text-[#202020] leading-relaxed">
                Ми вже працюємо над нею — очікуйте дзвінка <strong>протягом 15 хвилин</strong>.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfitForm;
