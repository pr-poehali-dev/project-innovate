import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Владелец интернет-магазина электроники",
    content:
      "ИИ-продавец заменил трёх менеджеров и при этом конверсия выросла. Агент работает 24/7, помнит каждого клиента и не устаёт. Окупился за 2 недели.",
    initials: "АП",
  },
  {
    name: "Мария Сидорова",
    role: "Руководитель отдела маркетинга",
    content:
      "Анализ конкурентов в Telegram сэкономил нам месяцы работы. Получили полную картину рынка с конкретными рекомендациями по позиционированию.",
    initials: "МС",
  },
  {
    name: "Дмитрий Волков",
    role: "Предприниматель, сеть кофеен",
    content:
      "Telegram-канал на автопилоте — это магия. Контент лучше, чем мы делали вручную, а я не трачу ни минуты. Подписчики растут каждый день.",
    initials: "ДВ",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят предприниматели, которые уже внедрили ИИ в свой бизнес
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
