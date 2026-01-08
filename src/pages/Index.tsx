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
          <div className="bg-[#e8e3da] px-8 pt-12 pb-10 text-center relative">
            {/* Монограмма */}
            <div className="mb-6 relative">
              <div className="text-7xl font-cinzel text-[#3a3a3a] font-semibold tracking-tight">
                R<span className="text-6xl">&</span>C
              </div>
              <div className="font-script text-2xl text-[#3a3a3a] mt-2 opacity-70">
                Роберт и Кристина
              </div>
            </div>

            <Separator className="w-24 mx-auto bg-[#8a8178] opacity-30 mb-6" />

            <h2 className="font-tenor text-sm uppercase tracking-[0.3em] text-[#3a3a3a] mb-4">
              Дорогие гости!
            </h2>
            
            <h1 className="font-cinzel text-[2.75rem] leading-tight tracking-[0.15em] text-[#3a3a3a]">
              РОБЕРТ
            </h1>
            <div className="text-[#3a3a3a] text-4xl font-light my-2">&</div>
            <h1 className="font-cinzel text-[2.75rem] leading-tight tracking-[0.15em] text-[#3a3a3a]">
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

              <p className="text-[#d4cfc7] italic pt-2">
                С любовью,<br />
                Роберт и Кристина
              </p>
            </div>
          </div>
        </div>

        {/* Карточка с обратным отсчетом */}
        <Card className="bg-[#e8e3da] border-none shadow-lg p-6">
          <h3 className="font-cinzel text-xl text-center text-[#3a3a3a] mb-4 tracking-wide">
            До праздника осталось
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { value: countdown.days, label: "дней" },
              { value: countdown.hours, label: "часов" },
              { value: countdown.minutes, label: "минут" },
              { value: countdown.seconds, label: "секунд" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#8a8178] rounded-lg p-3 mb-2">
                  <span className="font-tenor text-2xl text-[#e8e3da] font-medium">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-tenor text-xs text-[#3a3a3a] uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Карточка с картой */}
        <Card className="bg-[#e8e3da] border-none shadow-lg p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="MapPin" size={20} className="text-[#8a8178]" />
            <h3 className="font-cinzel text-lg text-[#3a3a3a] tracking-wide">
              Место проведения
            </h3>
          </div>
          <p className="font-tenor text-sm text-center text-[#3a3a3a] mb-4">
            Кафе «Три берёзы»<br />
            Усатого Балка, ул. Маяковского, 2е
          </p>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617635,55.755814&z=16&l=map&pt=37.617635,55.755814,pm2rdm"
              width="100%"
              height="300"
              frameBorder="0"
              className="w-full"
              title="Карта проезда"
            />
          </div>
          <a
            href="https://yandex.ru/maps/?text=Усатого Балка, ул. Маяковского, 2е"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center"
          >
            <button className="bg-[#8a8178] text-[#e8e3da] font-tenor text-sm px-6 py-3 rounded-lg hover:bg-[#756b64] transition-colors w-full">
              Открыть в Яндекс.Картах
            </button>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Index;
