import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Автоматизация продаж",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Внедрили ИИ-продавца с RAG памятью для интернет-магазина электроники. Агент обрабатывает
            до 500 диалогов в день, помнит предпочтения каждого клиента и закрывает продажи без участия менеджеров.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Конверсия выросла на 47%
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Расходы на менеджеров сократились в 3 раза
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Работа 24/7 без выходных и больничных
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Анализ отдела продаж",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Подключили анализ звонков для колл-центра из 20 менеджеров. ИИ расшифровывает каждый
            разговор, оценивает качество и выявляет точки роста по каждому сотруднику.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Качество обслуживания выросло на 60%
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Время на контроль сократилось с 4 часов до 15 минут
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Выявлены лучшие скрипты продаж для обучения
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Контент на автопилоте",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Запустили Telegram-канал для бренда одежды полностью на автопилоте. ИИ-менеджер
            анализирует аудиторию, генерирует посты и управляет публикациями.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Рост подписчиков на 2500+ за 2 месяца
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Вовлечённость выше на 35% чем ручной контент
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              0 часов в неделю на ведение канала
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="cases" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Кейсы внедрения</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Реальные результаты наших клиентов после внедрения ИИ-решений в бизнес-процессы
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
