
import React from 'react';
import { Lock, Server, Network, Eye, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import DataStream from './DataStream';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-huriky-black to-huriky-blue/30 relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Расширенные функции VLESS VPN
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Испытайте беспрецедентную конфиденциальность и производительность с нашей передовой технологией VPN.
          </motion.p>
        </div>
        
        <DataStream />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Server className="h-8 w-8 text-huriky-yellow" />}
            title="Протокол VLESS"
            description="Наш продвинутый протокол VLESS обеспечивает лучшую производительность, чем традиционные VPN-технологии, с минимальным следом обнаружения."
            delay={0}
          />
          
          <FeatureCard 
            icon={<Lock className="h-8 w-8 text-huriky-yellow" />}
            title="Политика нулевого логирования"
            description="Мы поддерживаем строгую политику отсутствия логов. Ваша история просмотров, временные метки соединений и IP-адреса остаются приватными."
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-huriky-yellow" />}
            title="Сеть 10 Гбит/с"
            description="Наша инфраструктура сети высокой пропускной способности обеспечивает молниеносную скорость без ущерба для безопасности."
            delay={0.4}
          />
          
          <FeatureCard 
            icon={<Network className="h-8 w-8 text-huriky-yellow" />}
            title="Поддержка мультиплатформ"
            description="Бесшовная интеграция на Windows, macOS, Linux, iOS, Android и реализациях на маршрутизаторах."
            delay={0.6}
          />
          
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-huriky-yellow" />}
            title="Маскировка трафика"
            description="Продвинутая маскировка трафика делает ваше VPN-соединение похожим на обычный HTTPS-трафик, обходя глубокую проверку пакетов."
            delay={0.8}
          />
          
          <FeatureCard 
            icon={<Eye className="h-8 w-8 text-huriky-yellow" />}
            title="Защита DNS"
            description="Предотвращает утечки DNS, гарантируя, что ваши запросы не раскрываются вашему ISP или другим следящим субъектам."
            delay={1}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, delay }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay: number
}) => {
  return (
    <motion.div 
      className="p-6 rounded-lg border border-gray-800 bg-huriky-darkgray/30 hover:bg-huriky-darkgray/50 transition-colors group backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="mb-4 p-3 bg-huriky-darkgray rounded-lg inline-block group-hover:bg-huriky-yellow/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default Features;
