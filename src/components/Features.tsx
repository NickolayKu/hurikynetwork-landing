
import React from 'react';
import { Lock, Server, Network, Eye, Zap, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Преимущества приватного доступа</h2>
          <p className="text-gray-400">
            Самая современная технология для вашей защиты и прватности в интернете.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Server className="h-8 w-8 text-huriky-yellow" />}
            title="VLESS протокол"
            description="Самый современный и надежный протокол обеспечивает высочайшую приватность, безопасность и скорость работы."
          />
          
          <FeatureCard 
            icon={<Lock className="h-8 w-8 text-huriky-yellow" />}
            title="Политика логирования"
            description="Мы никогда не сохраняем никакие логи ваших подключений, запросов, временных меток, устройств или IP адресов."
          />
          
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-huriky-yellow" />}
            title="2 Гб/c интернет канал"
            description="Все наши сервера подключены к интернет каналам со скоростью не менее 2 Гб/c, что обеспечивает высокую скорость соединения."
          />
          
          <FeatureCard 
            icon={<Network className="h-8 w-8 text-huriky-yellow" />}
            title="Мультиплатформенность"
            description="Доступы VLESS легко подключить и использовать в Windows, macOS, Linux, iOS, Android, TV и других устрйоствах, включая роутеры."
          />
          
          <FeatureCard 
            icon={<Shield className="h-8 w-8 text-huriky-yellow" />}
            title="Обфускация трафика"
            description="Продвинутая маскировка трафика маскирует ваше подключение как обычный HTTPS трафик, обходя системы глубокого анализа пакетов."
          />
          
          <FeatureCard 
            icon={<Eye className="h-8 w-8 text-huriky-yellow" />}
            title="Скрытие запросов"
            description="Надежные механизмы протокола VLESS редотвращает риски утечки и раскрытия ваших запросов и других данных о пользователе."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-800 bg-huriky-darkgray/30 hover:bg-huriky-darkgray/50 transition-colors group">
      <div className="mb-4 p-3 bg-huriky-darkgray rounded-lg inline-block group-hover:bg-huriky-yellow/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Features;
