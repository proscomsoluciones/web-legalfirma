"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  LightBulbIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

export default function Nosotros() {
  const cards = [
    {
      icon: AcademicCapIcon,
      title: "Profesionalismo",
      desc: "Excelencia y confiabilidad legal en cada trámite que gestionamos para ti.",
    },
    {
      icon: LightBulbIcon,
      title: "Innovación",
      desc: "Incorporamos tecnología y firma electrónica avanzada para simplificar procesos.",
    },
    {
      icon: ChatBubbleLeftIcon,
      title: "Soporte Continuo",
      desc: "Atención rápida, humana y personalizada para cada consulta o necesidad.",
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-center scroll-mt-24 border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado animado al llegar a la sección */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-[#a2172b] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Quiénes Somos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Sobre Nosotros
          </h2>

          <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-xl mb-14 leading-relaxed">
            En <span className="font-semibold text-gray-900">Legal Firma</span> presentamos nuestros servicios para que la compraventa y
            transferencia de vehículos en <strong className="text-gray-900 font-semibold">Rancagua, Rengo y la Región de O&apos;Higgins</strong> sean
            trámites simples, rápidos y claros. Nos encargamos de todo, desde la
            firma digital hasta el seguimiento, sin filas ni complicaciones.
          </p>
        </motion.div>

        {/* Tarjetas que se arman secuencialmente (Staggered Build-in) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(162, 23, 43, 0.12)",
                }}
                className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-7 sm:p-8 transition-all duration-300 flex flex-col items-center sm:items-start gap-4 hover:border-red-200/80 group ${
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="p-3.5 bg-red-50 rounded-2xl group-hover:bg-[#a2172b] transition-colors duration-300 transform group-hover:scale-110">
                  <Icon className="w-8 h-8 text-[#a2172b] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center sm:text-left group-hover:text-[#a2172b] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA con microinteracción de pulsación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-14"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#a2172b] to-[#c21f37] text-white px-9 py-4 rounded-xl font-semibold shadow-lg shadow-red-950/20 hover:shadow-red-800/40 transition-shadow text-base sm:text-lg cursor-pointer"
          >
            <span>Contáctanos hoy</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
