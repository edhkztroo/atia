import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Bot, 
  Headphones, 
  Calendar, 
  ShoppingCart, 
  Link2, 
  Package, 
  FileText,
  Clock
} from 'lucide-react';

const WhoIsAtia = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const capabilities = [
    {
      icon: Headphones,
      title: 'Automatizar atención al cliente',
      description: 'Responde consultas, resuelve dudas y proporciona información 24/7'
    },
    {
      icon: Calendar,
      title: 'Tomar reservas y pedidos',
      description: 'Gestiona citas, reservas y pedidos de manera inteligente'
    },
    {
      icon: ShoppingCart,
      title: 'Recomendar productos',
      description: 'Sugiere productos basándose en las necesidades del cliente'
    },
    {
      icon: Link2,
      title: 'Generar links de pago',
      description: 'Crea enlaces de cobro seguros al instante durante la conversación'
    },
    {
      icon: Package,
      title: 'Validar disponibilidad en inventario',
      description: 'Consulta stock en tiempo real y actualiza disponibilidad'
    },
    {
      icon: FileText,
      title: 'Registrar ventas y conectar con contabilidad',
      description: 'Integra automáticamente las ventas con tu sistema contable'
    }
  ];

  return (
    <section id="quien-es-atia" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/30 rounded-full translate-x-40 translate-y-40 blur-3xl"></div>
      
      {/* Formas geométricas decorativas */}
      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-emerald-300 rounded-xl rotate-45"></div>
      <div className="absolute top-40 left-20 w-12 h-12 bg-emerald-400/20 rounded-full"></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 border-2 border-cyan-300 rounded-full"></div>
      <div className="absolute bottom-20 right-32 w-8 h-8 bg-cyan-400/30 rounded-lg rotate-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Quién es <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">ATIA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una asistente virtual con IA, entrenada específicamente para tu negocio
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Image and highlight */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="/images/24-7-service.webp"
                alt="Asistente virtual 24/7"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-cyan-500 p-6 rounded-2xl shadow-2xl text-white">
                <div className="flex items-center space-x-3">
                  <Clock size={28} />
                  <div>
                    <div className="text-sm opacity-90">Disponible</div>
                    <div className="text-2xl font-bold">24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-200 to-cyan-200 rounded-full opacity-30 blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-200 to-emerald-200 rounded-full opacity-30 blur-xl"></div>
          </motion.div>

          {/* Right side - Description */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover:shadow-3xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/30">
                  <Bot className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ATIA, tu empleada perfecta</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ATIA es más que un chatbot. Es una asistente inteligente que aprende de tu negocio, 
                conoce tus productos y puede manejar conversaciones complejas como lo haría tu mejor vendedor.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Nunca se enferma ni toma vacaciones</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Atiende múltiples clientes simultáneamente</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Mejora continuamente con cada interacción</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Sin salario, sin prestaciones, solo resultados</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capabilities grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Qué puede hacer ATIA por tu negocio?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-200 hover:border-emerald-300 h-full group-hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                          {capability.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Final highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Todo esto, 24/7 y sin que tú estés conectado
            </h3>
            <p className="text-xl mb-8 text-emerald-50 max-w-3xl mx-auto">
              Mientras duermes, ATIA trabaja. Mientras estás ocupado, ATIA vende. 
              Tu negocio nunca para de crecer.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              CONOCER MÁS SOBRE ATIA
            </motion.button>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsAtia;
