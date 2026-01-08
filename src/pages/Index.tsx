import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-24T18:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-8">
      <div className="w-full max-w-md mx-4 space-y-6">
        <div className="bg-background overflow-hidden shadow-xl">
          {/* Верхняя светлая секция с монограммой */}
          <div className="bg-[#e8e3da] px-8 pt-16 pb-12 text-center relative">
            {/* Декоративные уголки */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-[#8a8178] opacity-20"></div>
            <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-[#8a8178] opacity-20"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-[#8a8178] opacity-20"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-[#8a8178] opacity-20"></div>
            
            {/* Монограмма */}
            <div className="mb-8 relative">
              <div className="text-8xl font-cinzel text-[#3a3a3a] font-semibold tracking-tight leading-none">
                R<span className="text-7xl mx-1">&</span>K
              </div>
              <div className="font-script text-3xl text-[#3a3a3a] mt-3 opacity-60">
                Роберт и Кристина
              </div>
            </div>

            <Separator className="w-32 mx-auto bg-[#8a8178] opacity-30 mb-8" />

            <h2 className="font-tenor text-sm uppercase tracking-[0.35em] text-[#3a3a3a] mb-6 opacity-80">
              Дорогие гости!
            </h2>
            
            <h1 className="font-cinzel text-5xl leading-tight tracking-[0.2em] text-[#3a3a3a] mb-2">
              РОБЕРТ
            </h1>
            <div className="text-[#3a3a3a] text-5xl font-light my-3">&</div>
            <h1 className="font-cinzel text-5xl leading-tight tracking-[0.2em] text-[#3a3a3a]">
              КРИСТИНА
            </h1>
          </div>

          {/* Нижняя темная секция */}
          <div className="bg-[#8a8178] px-8 py-10 text-center text-[#d4cfc7]">
            <div className="mb-8">
              <h2 className="font-tenor text-5xl tracking-[0.2em] mb-6 text-[#e8e3da]">
                24.01.2026
              </h2>
              <p className="font-tenor text-sm text-[#d4cfc7]">18:00</p>
            </div>

            <div className="space-y-5 font-tenor text-sm leading-relaxed">
              <p className="text-[#d4cfc7]">
                Мы будем счастливы разделить с<br />
                вами радость неповторимого для<br />
                нас дня - дня нашей помолвки!
              </p>

              <p className="text-[#d4cfc7]">
                Приглашаем Вас присоединиться к<br />
                нашему празднику и украсить его<br />
                своим присутствием.
              </p>

              <div className="pt-3">
                <p className="text-[#d4cfc7] font-light text-xs leading-relaxed">
                  Кафе «Три берёзы»<br />
                  Усатого Балка, ул. Маяковского, 2е
                </p>
              </div>


            </div>
          </div>
        </div>

        {/* Карточка с обратным отсчетом */}
        <Card className="bg-[#e8e3da] border-none shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-2 left-2 w-12 h-12 border-t border-l border-[#8a8178] opacity-15"></div>
          <div className="absolute bottom-2 right-2 w-12 h-12 border-b border-r border-[#8a8178] opacity-15"></div>
          
          <div className="text-center mb-6">
            <Icon name="Clock" size={28} className="text-[#8a8178] mx-auto mb-3 opacity-70" />
            <h3 className="font-cinzel text-2xl text-[#3a3a3a] tracking-wide">
              До праздника
            </h3>
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {[
              { value: countdown.days, label: "дней" },
              { value: countdown.hours, label: "часов" },
              { value: countdown.minutes, label: "минут" },
              { value: countdown.seconds, label: "секунд" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#8a8178] rounded-md p-4 mb-2 shadow-sm">
                  <span className="font-tenor text-3xl text-[#e8e3da] font-semibold">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-tenor text-[10px] text-[#3a3a3a] uppercase tracking-widest opacity-70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Карточка с картой */}
        <Card className="bg-[#e8e3da] border-none shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-2 left-2 w-12 h-12 border-t border-l border-[#8a8178] opacity-15"></div>
          <div className="absolute bottom-2 right-2 w-12 h-12 border-b border-r border-[#8a8178] opacity-15"></div>
          
          <div className="text-center mb-6">
            <Icon name="MapPin" size={28} className="text-[#8a8178] mx-auto mb-3 opacity-70" />
            <h3 className="font-cinzel text-2xl text-[#3a3a3a] tracking-wide mb-4">
              Место проведения
            </h3>
            <p className="font-tenor text-base text-[#3a3a3a] opacity-80">
              Кафе «Три берёзы»<br />
              Усатого Балка, ул. Маяковского, 2е
            </p>
          </div>
          
          <div className="rounded-md overflow-hidden shadow-md mb-5">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.424600,44.897675&z=16&l=map&pt=37.424600,44.897675,pm2rdm"
              width="100%"
              height="320"
              frameBorder="0"
              className="w-full"
              title="Карта проезда"
            />
          </div>
          
          <a
            href="https://yandex.ru/maps/?ll=37.424600,44.897675&z=16&pt=37.424600,44.897675"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="bg-[#8a8178] text-[#e8e3da] font-tenor text-sm px-8 py-4 rounded-md hover:bg-[#756b64] transition-all duration-300 w-full shadow-md hover:shadow-lg uppercase tracking-wider">
              Открыть в Яндекс.Картах
            </button>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Index;