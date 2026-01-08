const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md mx-4">
        <div className="bg-background overflow-hidden shadow-xl">
          {/* Верхняя светлая секция */}
          <div className="bg-[#e8e3da] px-8 pt-16 pb-12 text-center">
            <h1 className="font-cinzel text-[2.75rem] leading-tight tracking-[0.15em] text-[#3a3a3a] mb-3">
              РОБЕРТ
            </h1>
            <div className="text-[#3a3a3a] text-4xl font-light my-2">&</div>
            <h1 className="font-cinzel text-[2.75rem] leading-tight tracking-[0.15em] text-[#3a3a3a]">
              КРИСТИНА
            </h1>
          </div>

          {/* Нижняя темная секция */}
          <div className="bg-[#8a8178] px-8 py-12 text-center text-[#d4cfc7]">
            <div className="mb-10">
              <h2 className="font-tenor text-5xl tracking-[0.2em] mb-8 text-[#e8e3da]">
                24.01.2026
              </h2>
            </div>

            <div className="space-y-6 font-tenor text-sm leading-relaxed">
              <p className="text-[#d4cfc7]">
                Наступит важный день в нашей<br />
                жизни — мы станем семьей.<br />
                Ваша поддержка, понимание,<br />
                любовь и дружба всегда были<br />
                ценны для нашей пары.
              </p>

              <p className="text-[#d4cfc7]">
                Именно поэтому в этот счастливый<br />
                день мы хотим, чтобы вы были<br />
                рядом с нами!
              </p>

              <div className="pt-4 pb-2">
                <p className="text-[#d4cfc7] font-light mb-3">Время: 18:00</p>
                <p className="text-[#d4cfc7] font-light text-xs leading-relaxed">
                  Кафе «Три берёзы»<br />
                  Усатого Балка, ул. Маяковского, 2е
                </p>
              </div>

              <p className="text-[#d4cfc7] italic pt-4">
                С любовью,<br />
                Роберт и Кристина
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
