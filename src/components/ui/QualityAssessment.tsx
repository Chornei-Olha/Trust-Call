// components/QualityAssessment.tsx
import Image from 'next/image';

const QualityAssessment = () => {
  const items = [
    {
      title: 'TV-Shop товари',

      image: '/images/card1.webp',
      amount: '1049 грн',
      duration: '2:28',
      audio: '/audio/audio1.mp3',
    },
    {
      title: 'Дрібна побутова техніка',
      image: '/images/card2.jpeg',
      amount: '1487 грн',
      duration: '2:50',
      audio: '/audio/audio5.mp3',
    },
    {
      title: 'Парфумерія',
      image: '/images/card3.png',
      amount: '998 грн',
      duration: '2:38',
      audio: '/audio/audio3.mp3',
    },
    {
      title: 'Акумуляторна пила',
      image: '/images/card4.jpg',
      amount: '2450 грн',
      duration: '5:32',
      audio: '/audio/audio2.mp3',
    },
    {
      title: 'Комплекти постільної білизни',
      image: '/images/card5.webp',
      amount: '1747 грн',
      duration: '2:50',
      audio: '/audio/audio4.mp3',
    },
  ];

  return (
    <section className="w-full bg-black py-14 sm:py-16 md:py-20 lg:pb-[300px] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[30px] sm:text-[48px] md:text-[55px] uppercase font-semibold font-unbounded text-white leading-tight">
            ОЦІНІТЬ ЯКІСТЬ РОБОТИ
            <br />
            НАШИХ ОПЕРАТОРІВ
          </h2>
          <div className="mt-8">
            <div className="bg-[#0066fb] rounded-[30px] px-6 py-3 inline-block shadow-2xl transform rotate-[5deg]">
              <p className="text-[17px] font-bold font-unbounded uppercase text-white">
                Це той випадок, коли краще 1 раз почути
              </p>
            </div>
          </div>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 sm:p-6 flex items-center gap-4 sm:gap-6 shadow-md"
            >
              <div className="w-[90px] h-[90px] sm:w-[118px] sm:h-[118px] bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#404040]">
                  {item.title}
                </h3>
                <p className="text-[13px] font-semibold text-[#4040407f]">на суму {item.amount}</p>
                {/* Audio */}
                <audio controls className="w-full">
                  <source src={item.audio} type="audio/mpeg" />
                  Ваш браузер не підтримує аудіо.
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Наклонная синяя лента */}
      <div className="absolute bottom-[100px] left-[-50px] right-[-50px] transform rotate-[5deg] origin-bottom bg-[#0066fb] py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-white text-[20px] sm:text-[28px] font-bold tracking-widest mx-6">
            TRUST- CALL *TRUST- CALL *TRUST- CALL *TRUST- CALL *TRUST- CALL *
          </span>
          <span className="text-white text-[20px] sm:text-[28px] font-bold tracking-widest mx-6">
            TRUST- CALL *TRUST- CALL *TRUST- CALL *TRUST- CALL *TRUST- CALL *
          </span>
        </div>
      </div>
    </section>
  );
};

export default QualityAssessment;
