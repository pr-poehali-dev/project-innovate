import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько стоит внедрение ИИ-решения?",
      answer:
        "Стоимость зависит от сложности задачи. Простой ИИ-агент для продаж стартует от 30 000 ₽, комплексная автоматизация — по индивидуальному расчёту. Первая консультация бесплатна.",
    },
    {
      question: "Как быстро можно запустить ИИ-агента?",
      answer:
        "Стандартный срок — от 3 до 14 дней в зависимости от решения. Простого ИИ-продавца можно запустить за 3-5 дней, сложную аналитическую систему — за 2 недели.",
    },
    {
      question: "Нужны ли технические знания для работы с ИИ?",
      answer:
        "Нет. Мы настраиваем всё под ключ и обучаем вашу команду. Интерфейс управления интуитивно понятен — если умеете пользоваться мессенджером, справитесь и с нашими решениями.",
    },
    {
      question: "Как ИИ-продавец работает с базой товаров?",
      answer:
        "Агент подключается к вашей базе данных (до 1000 товаров) и использует RAG-технологию для точных ответов. Он помнит весь диалог с клиентом и подбирает товары под его запрос.",
    },
    {
      question: "Можно ли протестировать перед покупкой?",
      answer:
        "Да. Мы проводим бесплатную консультацию, показываем демо на вашем примере и предлагаем пилотный запуск, чтобы вы увидели результат до полного внедрения.",
    },
    {
      question: "Какие данные нужны для анализа конкурентов?",
      answer:
        "Достаточно ссылок на Telegram-каналы конкурентов. ИИ самостоятельно проанализирует нишу, ЦА, контент-стратегию, формулу вовлечённости и выдаст развёрнутый отчёт с рекомендациями.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о внедрении ИИ в бизнес, сроках и стоимости
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
