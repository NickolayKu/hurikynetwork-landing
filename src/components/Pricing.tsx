
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-huriky-black relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Выберите ваш план защиты
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Выберите уровень безопасности, который соответствует вашим потребностям. Все планы включают нашу основную технологию.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Базовый"
            price={9.99}
            features={[
              "5 одновременных подключений",
              "30+ серверных локаций",
              "Протокол VLESS",
              "Стандартное шифрование",
              "Поддержка по email",
              "Без ограничений по трафику"
            ]}
            isPopular={false}
            delay={0}
          />
          
          <PricingCard 
            title="Премиум"
            price={14.99}
            features={[
              "10 одновременных подключений",
              "70+ серверных локаций",
              "Протокол VLESS",
              "Продвинутое шифрование",
              "Приоритетная поддержка 24/7",
              "Без ограничений по трафику",
              "Маскировка трафика"
            ]}
            isPopular={true}
            delay={0.2}
          />
          
          <PricingCard 
            title="Корпоративный"
            price={24.99}
            features={[
              "Неограниченное количество подключений",
              "90+ серверных локаций",
              "Протокол VLESS",
              "Шифрование военного уровня",
              "Выделенная поддержка 24/7",
              "Без ограничений по трафику",
              "Маскировка трафика",
              "Опции настраиваемого развертывания",
              "Выделенные IP-адреса"
            ]}
            isPopular={false}
            delay={0.4}
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Нужно индивидуальное решение для вашей организации?</p>
          <Button variant="outline" className="border-gray-700 text-gray-300">
            Связаться с отделом продаж
          </Button>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, isPopular, delay }: { 
  title: string, 
  price: number, 
  features: string[], 
  isPopular: boolean,
  delay: number
}) => {
  return (
    <motion.div 
      className={`rounded-lg backdrop-blur-sm ${isPopular ? 'border-huriky-yellow glow-effect' : 'border-gray-800'} p-8 relative`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-huriky-yellow text-huriky-black text-xs font-bold px-3 py-1 rounded-full">
          ПОПУЛЯРНЫЙ
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="flex items-center justify-center">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-400 ml-1">/месяц</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-huriky-yellow mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button className={`w-full ${isPopular ? 'bg-huriky-yellow hover:bg-huriky-yellow/90 text-huriky-black' : 'bg-huriky-darkgray hover:bg-huriky-darkgray/70'}`}>
        {isPopular ? 'Начать' : 'Выбрать план'}
      </Button>
    </motion.div>
  );
};

export default Pricing;
