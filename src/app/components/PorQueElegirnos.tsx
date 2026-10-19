"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function PorQueElegirnos() {
  const razones = [
    {
      step: "01",
      title: "Rápido y Personalizado",
      description:
        "Atendemos tus dudas de inmediato y te acompañamos paso a paso durante todo el trámite.",
      icon: ClockIcon,
    },
    {
      step: "02",
      title: "Certificado por WhatsApp",
      description:
        "Recibe tu comprobante de transferencia seguro y digital directamente en tu teléfono.",
      icon: DocumentCheckIcon,
    },
    {
      step: "03",
      title: "Flexibilidad Total",
      description:
        "Nos adaptamos a tus horarios y necesidades para simplificar todo el proceso.",
      icon: UserGroupIcon,
    },
    {
      step: "04",
      title: "Asistencia Amigable",
      description:
        "Te guiamos con claridad, cercanía y el más alto rigor legal en cada etapa.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
  ];

  return (
    <section
      id="porque-elegirnos"
      className="relative py-20 sm:py-28 bg-white bg-grid-pattern text-center scroll-mt-24 border-b border-gray-200/80 overflow-hidden"
    >
      {/* Halos de luz ambiental */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#a2172b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#a2172b]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#a2172b] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Nuestras Ventajas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            ¿Por qué Elegirnos?
          </h2>

          <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-xl mb-14 leading-relaxed">
            En <span className="font-semibold text-[#a2172b]">Legal Firma</span>,
            hacemos que comprar, vender o transferir un vehículo sea un proceso
            transparente, cómodo y sin demoras burocráticas.
          </p>
        </motion.div>

        {/* Tarjetas que se construyen en cascada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {razones.map((r, index) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 30px -10px rgba(162, 23, 43, 0.08)",
                }}
                className="relative bg-gray-50/70 hover:bg-white rounded-2xl border border-gray-200/90 p-7 shadow-sm transition-all duration-300 flex flex-col items-center text-center group hover:border-red-300"
              >
                {/* Número correlativo moderno */}
                <span className="text-4xl font-extrabold text-gray-200 group-hover:text-red-100 transition-colors absolute top-4 right-5 select-none font-mono">
                  {r.step}
                </span>

                <div className="p-3.5 bg-red-100/60 rounded-2xl mb-5 group-hover:bg-[#a2172b] transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                  <Icon className="w-8 h-8 text-[#a2172b] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a2172b] transition-colors">
                  {r.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#a2172b] to-[#c21f37] text-white px-9 py-4 rounded-xl font-semibold shadow-lg shadow-red-950/20 hover:shadow-red-800/40 transition-shadow text-base sm:text-lg cursor-pointer"
          >
            <span>Iniciar Trámite Ahora</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
