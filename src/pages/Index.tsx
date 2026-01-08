import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white shadow-2xl rounded-sm p-8 sm:p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary opacity-30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary opacity-30" />

          <div className="relative z-10 space-y-8 animate-fade-in">
            <div className="text-center space-y-6">
              <div className="inline-block animate-scale-in">
                <Icon name="Heart" size={40} className="text-primary mx-auto mb-4" />
              </div>
              
              <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl font-light text-foreground tracking-wide">
                Роберт <span className="text-primary">&</span> Кристина
              </h1>

              <div className="flex items-center justify-center gap-4 my-6">
                <Separator className="w-16 bg-primary" />
                <span className="font-montserrat text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">
                  Приглашают
                </span>
                <Separator className="w-16 bg-primary" />
              </div>
            </div>

            <div className="text-center space-y-4 animate-fade-in-delayed">
              <p className="font-montserrat text-lg sm:text-xl text-foreground font-light">
                на празднование обручения
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 animate-fade-in-delayed">
              <div className="text-center space-y-2">
                <Icon name="Calendar" size={24} className="text-primary mx-auto mb-2" />
                <p className="font-montserrat text-sm uppercase tracking-widest text-muted-foreground font-medium">
                  Дата
                </p>
                <p className="font-cormorant text-3xl text-foreground">
                  24.01.2026
                </p>
              </div>

              <div className="text-center space-y-2">
                <Icon name="Clock" size={24} className="text-primary mx-auto mb-2" />
                <p className="font-montserrat text-sm uppercase tracking-widest text-muted-foreground font-medium">
                  Время
                </p>
                <p className="font-cormorant text-3xl text-foreground">
                  18:00
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-4 animate-fade-in-delayed">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <p className="font-montserrat text-sm uppercase tracking-widest text-muted-foreground font-medium">
                    Место проведения
                  </p>
                  <p className="font-montserrat text-base text-foreground leading-relaxed">
                    Кафе «Три берёзы»<br />
                    Усатого Балка, ул. Маяковского, 2е
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Separator className="bg-primary opacity-30" />
            </div>

            <div className="text-center pt-4">
              <p className="font-cormorant text-xl sm:text-2xl text-foreground font-light italic">
                Будем рады видеть вас!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
