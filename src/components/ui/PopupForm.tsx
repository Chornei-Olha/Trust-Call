'use client';

import { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const countries = [
  { code: '+380', name: 'Україна', flag: '/images/img_image_background_shadow.png' },
  { code: '+48', name: 'Polska', flag: '/images/flag_pl.png' },
  { code: '+49', name: 'Deutschland', flag: '/images/flag_de.png' },
];

export default function PopupForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [name, setName] = useState('Олексій');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState('Дзвінок');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name,
      phone: `${selectedCountry.code} ${phone}`,
      contactMethod,
    };

    emailjs.send('service_v33od0d', 'template_dfl7sos', templateParams, 'sr_aVM5WYfgNWFCze').then(
      () => {
        alert('✅ Дякуємо! Ми скоро з вами зв’яжемося.');
        setName('Олексій');
        setPhone('');
        setContactMethod('Дзвінок');
        onClose();
      },
      (error) => {
        console.error('FAILED...', error.text);
        alert('❌ Сталася помилка. Спробуйте ще раз.');
      }
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white rounded-3xl shadow-[0_0_40px_8px_rgba(22,99,212,0.6)] p-6 sm:p-8 w-[90%] max-w-md mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
            >
              ×
            </button>

            <h3 className="text-center text-[24px] sm:text-[28px] font-bold font-unbounded text-[#1663d3] mb-6">
              Замовити консультацію
            </h3>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[18px] font-semibold mb-2 text-[#202020]">
                  Як до вас звертатися?
                </label>
                <input
                  type="text"
                  value={name}
                  onFocus={() => name === 'Олексій' && setName('')}
                  onBlur={() => name === '' && setName('Олексій')}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 bg-white border border-[#e1e1e1] rounded-[24px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#1663d3] ${
                    name === 'Олексій' ? 'text-gray-400' : 'text-[#202020]'
                  }`}
                  required
                />
              </div>

              <div>
                <label className="block text-[18px] font-semibold mb-2 text-[#202020]">
                  Ваш номер телефону
                </label>
                <div className="flex items-center">
                  <div className="flex items-center gap-1 bg-white border border-[#e1e1e1] rounded-[24px] px-4 py-3">
                    <Image
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      width={20}
                      height={14}
                      className="w-[20px] h-[14px]"
                    />
                    <select
                      value={selectedCountry.code}
                      onChange={(e) => {
                        const country = countries.find((c) => c.code === e.target.value);
                        if (country) setSelectedCountry(country);
                      }}
                      className="bg-transparent text-[14px] focus:outline-none text-black"
                    >
                      {countries.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    placeholder="(99) 999-99-99"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 px-2 py-3 ml-2 text-black bg-white border border-[#e1e1e1] rounded-[24px] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#1663d3]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[18px] font-semibold mb-2 text-[#202020]">
                  Як зручніше зв'язатися:
                </label>
                <div className="flex gap-4 text-black">
                  {['Дзвінок', 'Telegram', 'Viber'].map((item) => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contact"
                        value={item}
                        checked={contactMethod === item}
                        onChange={() => setContactMethod(item)}
                        className="w-4 h-4 accent-[#1663d3]"
                      />
                      <span className="text-[14px]">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-center">
                <Button
                  type="submit"
                  variant="brand"
                  size="sm"
                  className="text-[14px] sm:text-[16px] font-medium uppercase tracking-wide px-6 py-3"
                >
                  Відправити
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
