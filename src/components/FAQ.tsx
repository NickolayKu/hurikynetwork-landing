
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-huriky-blue/30 to-huriky-black relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Часто задаваемые вопросы
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Найдите ответы на общие вопросы о VPN-сервисах HurikyNetwork.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem 
              question="Что такое VLESS и чем он отличается от других VPN-протоколов?"
              answer="VLESS - это легкий и эффективный протокол туннелирования, разработанный для преодоления ограничений традиционных VPN-протоколов. Он обеспечивает лучшую производительность, меньшую задержку и повышенную безопасность, будучи при этом более трудно обнаруживаемым и блокируемым по сравнению с обычными VPN-решениями."
              delay={0}
            />
            
            <FaqItem 
              question="Ведет ли HurikyNetwork логи моей активности в интернете?"
              answer="Нет. HurikyNetwork придерживается строгой политики нулевого логирования. Мы не отслеживаем, не храним и не мониторим вашу онлайн-активность, временные метки соединений или IP-адреса. Ваша конфиденциальность — наш главный приоритет."
              delay={0.1}
            />
            
            <FaqItem 
              question="Сколько устройств я могу подключить одновременно?"
              answer="Количество одновременных подключений зависит от вашего тарифного плана. Базовый позволяет 5 подключений, Премиум — 10 подключений, а Корпоративный предлагает неограниченное количество подключений на всех ваших устройствах."
              delay={0.2}
            />
            
            <FaqItem 
              question="Будет ли использование HurikyNetwork замедлять мое интернет-соединение?"
              answer="В отличие от традиционных VPN, которые могут значительно снизить вашу скорость, протокол VLESS от HurikyNetwork разработан с минимальным влиянием на производительность. Благодаря нашей инфраструктуре сети 10 Гбит/с, многие пользователи фактически испытывают улучшение скорости из-за нашей оптимизации трафика и уменьшения ограничений со стороны интернет-провайдера."
              delay={0.3}
            />
            
            <FaqItem 
              question="Совместим ли HurikyNetwork со стриминговыми сервисами?"
              answer="Да. HurikyNetwork оптимизирован для бесперебойной работы с основными стриминговыми платформами, позволяя вам получить доступ к географически ограниченному контенту без проблем с буферизацией. Наши специализированные серверы для стриминга обеспечивают воспроизведение в высоком качестве."
              delay={0.4}
            />
            
            <FaqItem 
              question="Как настроить HurikyNetwork на моих устройствах?"
              answer="После подписки на HurikyNetwork вы получите доступ к нашим удобным приложениям для Windows, macOS, Linux, iOS и Android. Наши мастера установки проведут вас через простой процесс установки, который займет менее 2 минут. Для продвинутых пользователей мы также предоставляем подробные руководства по настройке для ручной установки на маршрутизаторах и других устройствах."
              delay={0.5}
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ question, answer, delay }: { 
  question: string, 
  answer: string,
  delay: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <AccordionItem value={question} className="border border-gray-800 rounded-lg bg-huriky-darkgray/30 overflow-hidden backdrop-blur-sm">
        <AccordionTrigger className="px-6 py-4 hover:bg-huriky-darkgray/50 transition-colors">
          {question}
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4 pt-2 text-gray-400">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

export default FAQ;
