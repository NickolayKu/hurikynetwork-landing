
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-pattern pb-5 min-h-screen flex flex-col justify-center pt-36">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center justify-center p-1 bg-huriky-darkgray rounded-full px-4 py-1 border border-huriky-yellow/20">
            <Zap size={14} className="mr-2 text-huriky-yellow" />
            <span className="text-xs font-medium">Быстро. Безопасно. Приватно.</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Премиальные приватные <span className="text-huriky-yellow">VLESS</span> доступы
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Премильные доступы по протоколу VLESS для быстрого, удобного и безопасного путешествия по сети интернет без ограничений.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href='#pricing'>
              <Button size="lg" className="bg-huriky-yellow hover:bg-huriky-yellow/90 text-huriky-black">
                Перейти к тарифам
              </Button>
            </a>
            <a href='#features'>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-300">
                Посмотреть преимущества
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800">
              <Shield className="h-10 w-10 mb-4 text-huriky-yellow" />
              <h3 className="text-lg font-medium mb-2">Безопасно</h3>
              <p className="text-sm text-gray-400 text-center">
                Все проходящие данные надежно шифруются и никак не логируются.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800">
              <Globe className="h-10 w-10 mb-4 text-huriky-yellow" />
              <h3 className="text-lg font-medium mb-2">Универсально</h3>
              <p className="text-sm text-gray-400 text-center">
                Большое количество серверов в любой точке мира на ваш выбор.
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-huriky-darkgray/50 border border-gray-800">
              <Zap className="h-10 w-10 mb-4 text-huriky-yellow" />
              <h3 className="text-lg font-medium mb-2">Молниеносно</h3>
              <p className="text-sm text-gray-400 text-center">
                Самые оптимизированные сервера с минимальной задержкой.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
