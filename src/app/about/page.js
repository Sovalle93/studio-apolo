'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const cloudinaryBase = "https://res.cloudinary.com/dmivjpb65/image/upload";
  const aboutImageUrl = `${cloudinaryBase}/f_auto,q_auto:best,w_1200/v1745007297/Screenshot_2025-05-07_110954_pgmwhs.png`;
  
  // Animation will happen only once
  const logoZoomVariants = {
    initial: { scale: 1 },
    animate: {
      scale: 1.08,
      transition: {
        duration: 3,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

  const brandColor = "#3754a5";

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Hero Image - Logo with animation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mb-16" //
        >
          <div className="overflow-hidden rounded-lg shadow-xl w-4/5 mx-auto">
            <motion.div
              initial="initial"
              animate="animate"
              variants={logoZoomVariants}
            >
              <Image
                src={aboutImageUrl}
                alt="Studio Apolo"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                quality={99}
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="w-full grid md:grid-cols-2 gap-12 mb-16"
        >
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandColor }}>Misión</h2>
            <div className="h-1 w-16 mb-6" style={{ backgroundColor: brandColor }}></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Potenciar el crecimiento del mercado digital para pequeñas y medianas empresas radica en soluciones integrales de comunicación y marketing. Al
              externalizar servicios profesionales y optimizar recursos, lasempresas pueden enfocar susesfuerzos en su negocio principal, transformando su identidad
              digitalen resultados tangibles y medibles.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandColor }}>Visión</h2>
            <div className="h-1 w-16 mb-6" style={{ backgroundColor: brandColor }}></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser reconocido como un aliado estratégico para emprendedores y PYMES que buscan profesionalizar su presencia digital. Esto se logra mediante la construcción
              de relaciones de confianza a largo plazo, basadas en resultados medibles, innovación constante y un profundo entendimiento del negocio, lo que contribuye a un éxito
              sostenido de los clientes en su ecosistema digital.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.section
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4" style={{ color: brandColor }}>Valores</h2>
            <div className="h-1 w-16 mb-8 mx-auto" style={{ backgroundColor: brandColor }}></div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Creatividad", text: "Soluciones innovadoras adaptadas a cada necesidad" },
                { title: "Responsabilidad", text: "Compromiso con los resultados y plazos acordados" },
                { title: "Servicialidad", text: "Enfoque en entender y resolver las necesidades reales" },
                { title: "Orientación a resultados", text: "Métricas claras que demuestren el impacto generado" },
              ].map((value, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: brandColor }}>{value.title}</h3>
                  <p className="text-gray-600">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

      {/* Team Members Section */}
      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="w-full mb-16"
      >
        <div className="text-center mb-10 p-15">
          <h2 className="text-3xl font-bold mb-4" style={{ color: brandColor }}>Nuestro Equipo</h2>
          <div className="h-1 w-16 mb-6 mx-auto" style={{ backgroundColor: brandColor }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center p-8 rounded-xl border border-gray-200" style={{ backgroundColor: "#e7f0f9" }}>
            <div className="mb-6">
              <Image
                src="https://res.cloudinary.com/dmivjpb65/image/upload/v1746714636/rosa_pfp_juyvxz.jpg"
                alt="Team Member 1"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-md"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: brandColor }}>Rosario</h3>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Co-fundador & Director Creativo</h4>
            <p className="text-gray-600 text-center leading-loose">
              Diseñadora - Universidad del Desarrollo<br />
              Pedagogia en Arte - Universidad de los Andes <br />
              Diplomado Historia del arte<br />
              Alumna de Taller 99(Grabado), Fotógrafa, Pintora e Illustradora.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center p-8 rounded-xl border border-gray-200" style={{ backgroundColor: "#e7f0f9" }}>
            <div className="mb-6">
              <Image
                src="https://res.cloudinary.com/dmivjpb65/image/upload/t_Profile/v1746714651/perfil_ibsvci.png"
                alt="Team Member 2"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-md"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: brandColor }}>Santiago</h3>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Co-fundador & Director de Estrategia</h4>
            <p className="text-gray-600 text-center leading-loose">
                Psicólogo - Universidad de los Andes<br />
                International Business Management - Greystone College, Canada<br />
                Fullstack Developer Javascript - Academia Desafio Latam
              </p>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
}
