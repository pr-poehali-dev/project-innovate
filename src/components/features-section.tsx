import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Ультимативный продавец",
    description: "ИИ-агент с RAG памятью. Запоминает весь диалог, работает с базой до 1000 товаров. Отлично закрывает продажи 24/7.",
    emoji: "🤖",
    badge: "Продажи",
  },
  {
    title: "Анализ звонков",
    description: "ИИ-агент скачивает запись разговора, расшифровывает и составляет глубокий анализ качества и эффективности.",
    emoji: "📞",
    badge: "Аналитика",
  },
  {
    title: "Личный бухгалтер",
    description: "Автоматический разбор счетов и актов из PDF в Google Sheets. Экономит часы рутинной работы бухгалтерии.",
    emoji: "📊",
    badge: "Финансы",
  },
  {
    title: "Анализ конкурентов в Telegram",
    description: "Выявляет нишу, ЦА, контент-стратегию, формулу вовлечённости, сильные и слабые стороны канала с оценкой по 10-балльной шкале.",
    emoji: "🔍",
    badge: "Маркетинг",
  },
  {
    title: "Telegram на автопилоте",
    description: "Полностью автоматизированный Telegram-канал с личным AI-менеджером. Контент, публикации и вовлечение без вашего участия.",
    emoji: "✈️",
    badge: "Автоматизация",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">ИИ для бизнеса</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Снижаем расходы на маркетинг, продажи и обучение через внедрение ИИ в бизнес-процессы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.emoji}</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
