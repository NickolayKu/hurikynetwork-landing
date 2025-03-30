
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Globe, Zap } from 'lucide-react';
import CyberGlobe from './CyberGlobe';

const Hero = () => {
  return (
    <div className="hero-pattern pt-32 pb-20 min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center p-1 bg-huriky-darkgray rounded-full px-4 py-1 border border-huriky-yellow/20">
            <Zap size={14} className="mr-2 text-huriky-yellow" />
            <span className="text-xs font-medium">Быстро. Безопасно. Приватно.</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ваше цифровое присутствие, <span className="text-huriky-yellow">Защищено</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            HurikyNetwork обеспечивает шифрование военного уровня с нашим премиум сервисом VLESS VPN,
            гарантируя, что ваша интернет-активность останется непрослеживаемой в эпоху тотальной слежки.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-huriky-yellow hover:bg-huriky-yellow/90 text-huriky-black">
              Начать бесплатный период
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-gray-300">
              Посмотреть функции
            </Button>
          </div>

          <CyberGlobe />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800 backdrop-blur-sm hover:border-huriky-yellow/30 transition-all duration-300">
              <Shield className="h-10 w-10 mb-4 text-huriky-yellow animate-pulse-slow" />
              <h3 className="text-lg font-medium mb-2">Сквозное шифрование</h3>
              <p className="text-sm text-gray-400 text-center">
                Ваши данные зашифрованы от вашего устройства до точки назначения.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800 backdrop-blur-sm hover:border-huriky-yellow/30 transition-all duration-300">
              <Globe className="h-10 w-10 mb-4 text-huriky-yellow animate-pulse-slow" />
              <h3 className="text-lg font-medium mb-2">Глобальная сеть</h3>
              <p className="text-sm text-gray-400 text-center">
                Точки доступа в более чем 90 странах для максимальной гибкости.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800 backdrop-blur-sm hover:border-huriky-yellow/30 transition-all duration-300">
              <Zap className="h-10 w-10 mb-4 text-huriky-yellow animate-pulse-slow" />
              <h3 className="text-lg font-medium mb-2">Молниеносная скорость</h3>
              <p className="text-sm text-gray-400 text-center">
                Оптимизированные серверы обеспечивают минимальную задержку для вашего соединения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
