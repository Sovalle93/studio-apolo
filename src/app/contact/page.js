'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

export default function ContactPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setValue
  } = useForm();

  // Honeypot captcha field
  const [honeypot, setHoneypot] = useState('');

  const onSubmit = async (data) => {
    // Check honeypot field
    if (honeypot) {
      return; // Likely a bot
    }

    const formData = {
      ...data,
      selectedPackage: selectedPackage || 'No pack seleccionado'
    };

    await fetch("https://formspree.io/f/mzzrgovo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    reset();
    setSelectedPackage(null);
  };

  const packages = [
    { id: 'pack-a', name: 'Pack A', description: 'Material publicitario y diseño web' },
    { id: 'pack-b', name: 'Pack B', description: 'Community Manager' },
    { id: 'pack-c', name: 'Pack C', description: 'Diseño de productos + Community manager' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contacta a Studio Apolo</h1>
          <p className="text-gray-700">Completa el formulario y nos pondremos en contacto contigo</p>
        </div>
        
        {isSubmitSuccessful ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Mensaje enviado! Te responderemos a la brevedad.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot Captcha (hidden from humans) */}
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input 
                type="text" 
                id="website" 
                name="website" 
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo*</label>
                <input
                  {...register("name", { required: "Este campo es obligatorio" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido"
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono*</label>
              <input
                type="tel"
                {...register("phone", { 
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[0-9+\-\s]+$/,
                    message: "Número inválido"
                  }
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Paquete de interés</label>
              <div className="grid gap-3 md:grid-cols-3">
                {packages.map((pack) => (
                  <div 
                    key={pack.id}
                    onClick={() => {
                      setSelectedPackage(pack.id);
                      setValue('package', pack.name);
                    }}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedPackage === pack.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <h3 className="font-bold text-gray-900">{pack.name}</h3>
                    <p className="text-sm text-gray-700 mt-1">{pack.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje*</label>
              <textarea
                rows={5}
                {...register("message", { required: "Este campo es obligatorio" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#272e80] hover:bg-[#1a2165] text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <FiSend />
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
}