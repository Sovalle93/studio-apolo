'use client';

import { FiCheck, FiAward, FiLayout, FiEdit3, FiMonitor } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Negocio digital de servicios digitales integrales",
      features: [
        "Crear y gestionar contenido en redes sociales y plataformas digitales",
        "Monitorizar conversaciones sobre la marca en el entorno digital",
        "Identificar tendencias y oportunidades en el entorno online",
        "Desarrollar estrategias para aumentar la presencia online",
        "Analizar métricas y resultados de acciones en redes sociales ",
        "Atención personalizada de clientes"
      ],
      resultItems: [
        { 
          icon: <FiEdit3 size={24} />, 
          title: "Diseño de productos", 
          description: "Productos diseñados para destacar en el mercado"
        },
        { 
          icon: <FiAward size={24} />, 
          title: "Creación de marca", 
          description: "Identidad visual única y memorable"
        },
        { 
          icon: <FiMonitor size={24} />, 
          title: "Diseño web", 
          description: "Experiencias digitales atractivas y funcionales"
        },
        { 
          icon: <FiLayout size={24} />, 
          title: "Material publicitario", 
          description: "Piezas impactantes para cualquier plataforma"
        }
      ]
    },
  ];

  const pricingPlans = [
    {
      name: "Pack A",
      price: "*",
      features: [
        "Diseño de productos",
        "Creación de marca",
        "Material publiciatrio",
        "Community manager",
        "Atención personalizada de clientes",
        "Análisis de métricas y resultados",
      ],
      popular: false
    },
    {
      name: "Pack B",
      price: "*",
      features: [
        "Diseño y creación de páginas web",
        "Despliegue de proyecto y compra de dominio personalizado";
        "Mantención de página web",
      ], 
      popular: false
    },
    {
      name: "Pack C",
      price: "*",
      features: [
        "Diseño de productos",
        "Creación de marca",
        "Diseño web",
        "Material publiciatrio",
        "Community manager",
        "Atención a clientes",
        "Análisis de métricas y resultados",
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-center mb-5" style={{ color: '#272e80' }}>Nuestros Servicios</h2>
        <div className="h-1 w-26 mb-16 mx-auto" style={{ backgroundColor: '#272e80'}}></div>
        
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#272e80' }}>
              {service.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Features with checkboxes */}
              <div className="p-8 rounded-lg">
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="border border-[#4a64ad] rounded-sm p-0.5 mr-3 flex-shrink-0">
                        <FiCheck className="h-4 w-4 text-[#4a64ad]" />
                      </div>
                      <span className="text-2m" style={{ color: '#3754a5' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Right - Enhanced Client Result */}
              <div className="bg-[#e7f0f9] p-8 rounded-lg shadow-md">
                <motion.h4 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-center leading-tight mb-8" 
                  style={{ color: '#272e80' }}
                >
                  Resultados Para Tu Negocio
                </motion.h4>
                
                <div className="grid grid-cols-2 gap-6">
                  {service.resultItems.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-lg shadow-sm border-l-4"
                      style={{ borderLeftColor: '#4a64ad' }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="mr-3 text-[#272e80]">
                          {item.icon}
                        </div>
                        <h5 className="font-bold text-[#3754a5]">{item.title}</h5>
                      </div>
                      <p className="text-sm text-[#343380]">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-5" style={{ color: '#272e80' }}>Nuestros Planes</h2>
        <div className="h-1 w-26 mb-16 mx-auto" style={{ backgroundColor: '#272e80'}}></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-[#e7f0f9] border rounded-xl p-8 flex flex-col h-full ${plan.popular ? 'border-2 border-[#3754a5]' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3754a5] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Más Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-center mb-4 text-[#3754a5]">{plan.name}</h3>
              <p className="text-4xl font-bold text-center mb-6" style={{ color: '#0184c5' }}>
                {plan.price}
              </p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="border border-[#4a64ad] rounded-sm p-0.5 mr-3 flex-shrink-0">
                      <FiCheck className="h-4 w-4 text-[#4a64ad]" />
                    </div>
                    <span className="text-[#343380]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-4 rounded-md font-medium transition-colors hover:bg-[#3754a5]"
                  style={{ backgroundColor: '#272e80', color: 'white' }}
                >
                  Cotizar
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
