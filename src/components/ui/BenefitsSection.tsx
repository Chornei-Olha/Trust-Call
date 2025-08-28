// BenefitsSection.jsx
import React from 'react';

const benefits = [
  {
    title: 'Старт проєкту в роботу\nза 24 години',
    description:
      'Ми забезпечуємо повний цикл підготовки проєкту, від технічної інтеграції до навчання персоналу, всього за добу. Швидкість і якість – наші пріоритети.',
  },
  {
    title: 'Прибуток зросте мінімум\nу 2 рази',
    description:
      'Використовуючи інноваційні стратегії up-sell і cross-sell, ми не лише подвоюємо середній чек, а й створюємо стабільний прибуток.',
  },
  {
    title: 'Показники апруву на рівні 95 %',
    description:
      'Штат компанії нараховує понад 200 професійних менеджерів та чіткий алгоритм розподілення навантаження між кожною ланкою, ми телефонуємо 8-12 разів/добу застиглі ліди, що гарантує високий показник Апруву',
  },
  {
    title: 'Високий Up-sell та Cross-sell',
    description:
      "Завдяки нашим спеціалістам із написання скриптів, Ви можете розраховувати на 90%+ допродажів 'повітря' з гарним викупом. В 50%+ замовлень ми допродаємо додаткові товари з ринковою маржею для підвищення Вашої прибутковості",
  },
  {
    title: 'Ефективний дожим до викупу',
    description:
      "Наші дожимні скрипти та SMS-розсилки ефективно завершують угоди, перетворюючи 'незабори' на накладені платежі. Без додаткових витрат для вас.",
  },
  {
    title: 'Аналітика та прозорість',
    description:
      'Надаємо детальні звіти та записи дзвінків для повного розуміння процесів. Ви отримуєте цінні інсайти для покращення вашого бізнесу.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-medium uppercase text-white leading-tight mb-8">
            <span className="text-white">Яку </span>
            <span className="text-[#1663d3]">вигоду ви отримаєте</span>
            <span className="text-white">
              {' '}
              від
              <br />
              плідної роботи з TRUST-CALL
            </span>
          </h2>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative">
              <div className="bg-[#0000004c] border border-white/40 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl">
                <div className="space-y-6">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white underline whitespace-pre-line">
                    {benefit.title}
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Autonomous Work Section */}
        <div
          className="rounded-[24px] p-6 sm:p-8 md:p-12 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bgStarlink.png')" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-[28px] sm:text-[32px] md:text-[37px] font-bold text-black leading-tight">
                <span className="text-black">TRUST-CALL</span>
                <span className="text-black font-normal">
                  {' '}
                  ПРАЦЮЄ
                  <br />
                  АВТОНОМНО!
                </span>
              </h3>
              <p className="text-[14px] text-black/50 leading-relaxed">
                Завдяки наявному генератору та Starlink, ми працюємо у повному автономному режимі, і
                навіть під час повного блек-ауту зможемо обробляти ліди. Ми на зв'язку 24/7 та
                завжди виконуємо свої обов'язки у повному обсязі!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-center">
              <div className="bg-[#1663d3] rounded-[22px] px-6 py-3">
                <span className="text-[17px] font-semibold text-white">Starlink</span>
              </div>
              <div className="bg-white rounded-[22px] px-4 py-2 text-black font-semibold">+</div>
              <div className="bg-[#1663d3] rounded-[22px] px-6 py-3">
                <span className="text-[17px] font-semibold text-white">Генератор</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
