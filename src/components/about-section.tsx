export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Основатель</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-lg shadow-red-500/10">
              <img
                src="https://cdn.poehali.dev/projects/5d9aa663-eeab-473f-be3b-51cb595e228c/bucket/daf50825-afee-4a9e-bf22-f9417c9a2191.png"
                alt="Основатель mininskoeAI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2 font-sans">mininskoeAI</h3>
            <p className="text-red-500 font-semibold mb-6">Основатель и CEO</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Помогаю бизнесу зарабатывать больше и тратить меньше с помощью искусственного интеллекта.
              Автоматизирую маркетинг, продажи и обучение сотрудников — от ИИ-продавцов до
              полностью автономных Telegram-каналов.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Каждое решение адаптируется под конкретный бизнес. Не шаблоны, а индивидуальные
              ИИ-агенты, которые понимают вашу нишу, ваших клиентов и ваши цели.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
