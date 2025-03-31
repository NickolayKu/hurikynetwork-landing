
import React from 'react';
import Logo from './Logo';
import { Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-huriky-black border-t border-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            {/* <p className="text-gray-400 text-sm">
              Secure. Private. Unstoppable. The next-generation VPN service for the surveillance age.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-huriky-yellow transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-huriky-yellow transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-huriky-yellow transition-colors">
                <Instagram size={18} />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-400">Разделы</h3>
            <ul className="space-y-2">
              <FooterLink href="#features">Преимущества</FooterLink>
              <FooterLink href="#pricing">Цены</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              {/* <FooterLink href="#">Server Status</FooterLink> */}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-400">Информация</h3>
            <ul className="space-y-2">
              {/* <FooterLink href="#">About Us</FooterLink> */}
              <FooterLink href="#">Политика конфиденциальности</FooterLink>
              {/* <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Contact</FooterLink> */}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-400">Поддержка</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Написать в Telegram</FooterLink>
              {/* <FooterLink href="#">Setup Guides</FooterLink>
              <FooterLink href="#">API Documentation</FooterLink>
              <FooterLink href="#">Support Center</FooterLink> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HurikyNetwork.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-huriky-yellow transition-colors text-sm">
        {children}
      </a>
    </li>
  );
};

export default Footer;
