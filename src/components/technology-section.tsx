import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const designServices = [
  {
    title: "Переработчик изображений",
    description: "ИИ-инструмент для дизайнеров: улучшение, стилизация и трансформация изображений в нужном направлении.",
    emoji: "🎨",
    badge: "Дизайн",
  },
  {
    title: "Товарные фото для маркетплейсов",
    description: "Генерация профессиональных товарных фотографий для Wildberries, Ozon и других площадок без фотостудии.",
    emoji: "📸",
    badge: "E-commerce",
  },
  {
    title: "Рекламные креативы",
    description: "Генерация креативов на основе анализа бренда и референса. Уникальные визуалы для рекламных кампаний.",
    emoji: "🎯",
    badge: "Реклама",
  },
  {
    title: "Анимация фото и видео",
    description: "Превращаем статичные фотографии в динамичные видео. Оживляем контент для соцсетей и презентаций.",
    emoji: "🎬",
    badge: "Видео",
  },
  {
    title: "ИИ редактор",
    description: "Интеллектуальный редактор изображений с ИИ-функциями: удаление фона, ретушь, замена объектов и стилизация.",
    emoji: "✏️",
    badge: "Редактор",
  },
]

export function TechnologySection() {
  return (
    <section id="design" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-sans">ИИ для дизайна</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Визуальный контент нового уровня — от товарных фото до рекламных креативов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designServices.map((service, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up bg-zinc-900/50 border-red-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{service.emoji}</span>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
