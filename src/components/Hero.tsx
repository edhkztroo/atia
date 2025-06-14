import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bot, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const handleDemoClick = () => {
    window.open('https://wa.me/573022740452', '_blank');
  };
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 overflow-hidden relative">
  
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              Cobra sin datáfono,{' '}
              <span className="bg-gradient-to-r from-[#004234] to-[#3bffc9] bg-clip-text text-transparent">
                vende con inteligencia artificial
              </span>
            </h1>
            
            <div className="space-y-4 mb-8 text-lg text-gray-600">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Smartphone className="text-[#004234] flex-shrink-0" size={24} />
                <p>Genera links de pago en segundos y compártelos por WhatsApp, Instagram, correo o con un QR.</p>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Bot className="text-[#3bffc9] flex-shrink-0" size={24} />
                <p>Con ATIA, tu asistente virtual con IA, automatiza la atención, reservas y cobros sin salir del chat.</p>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDemoClick}
              className="bg-gradient-to-r from-[#004234] to-[#3bffc9] text-white px-10 py-5 rounded-full text-xl font-bold hover:from-[#003228] hover:to-[#2ee6b8] transition-all duration-300 shadow-2xl hover:shadow-[#3bffc9]/50 mb-6 w-full sm:w-auto border-2 border-[#3bffc9]/20 hover:border-[#3bffc9]/40"
            >
              SOLICITAR DEMO GRATIS
            </motion.button>

            <p className="text-sm text-gray-500 font-medium">
              Sin contratos. Sin costos ocultos. Sin complicaciones.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Shield className="text-[#004234]" size={20} />
                <span className="text-sm text-gray-600">Seguro y confiable</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-[#3bffc9]" size={20} />
                <span className="text-sm text-gray-600">Activación inmediata</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="/images/payment-hero.jpg"
                alt="Tecnología de pagos moderna"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#004234]">24/7</div>
                  <div className="text-xs text-gray-500">Disponible</div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#004234] to-[#3bffc9] p-4 rounded-xl shadow-lg text-white"
              >
                <div className="text-center">
                  <div className="text-xs">Ventas automatizadas</div>
                  <div className="text-lg font-bold">Con IA</div>
                </div>
              </motion.div>
            </div>

        
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
