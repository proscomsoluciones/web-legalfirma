"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  MapPinIcon,
  DocumentTextIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

export default function PreguntasFrecuentes() {
  const faqs = [
    {
      q: "¿Qué ocurre si no estoy familiarizado con el uso de Internet?",
      a: "No te preocupes. Nuestro equipo te asiste telefónicamente o por WhatsApp en cada paso para que completes el proceso sin inconvenientes.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      q: "¿Y si el comprador y el vendedor están en lugares distintos?",
      a: "Nos encargamos de toda la coordinación y firma digital de documentos de forma 100% remota, sin que ninguna de las partes tenga que viajar o desplazarse.",
      icon: ClockIcon,
    },
    {
      q: "¿Qué historial guardan de mis trámites?",
      a: "Guardamos de forma segura el registro y copias digitales de las transferencias realizadas con nosotros para apoyarte si necesitas copias o seguimiento ante Registro Civil.",
      icon: MapPinIcon,
    },
    {
      q: "¿Qué necesito para transferir un vehículo?",
      a: "Cédula de identidad vigente de ambas partes, Clave Única, datos del vehículo (patente) y permiso de circulación o padrón al día.",
      icon: DocumentTextIcon,
    },
    {
      q: "¿Si represento a una empresa, puedo comprar o vender el vehículo?",
      a: "Sí, tramitamos transferencias tanto para personas naturales como para personas jurídicas (empresas), validando los poderes de representación correspondientes.",
      icon: BuildingOffice2Icon,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 bg-white bg-grid-pattern text-gray-900 scroll-mt-24 border-b border-gray-200/80 overflow-hidden"
    >
      {/* Halos de luz ambiental */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a2172b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#a2172b]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#a2172b] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Dudas Comunes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#a2172b] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mb-12 sm:mb-14 text-gray-600 text-base sm:text-lg">
            Respuestas claras a las dudas más habituales sobre nuestros servicios.
          </p>
        </motion.div>

        {/* Acordeón interactivo con framer-motion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-colors border ${
                  isOpen
                    ? "border-[#a2172b]/50 ring-1 ring-[#a2172b]/20 shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  className={`w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium focus:outline-none transition-colors cursor-pointer ${
                    isOpen ? "bg-red-50/60" : "hover:bg-gray-50/90"
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 pr-2">
                    <div
                      className={`p-2.5 rounded-xl transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#a2172b] text-white"
                          : "bg-red-100/50 text-[#a2172b]"
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-gray-900">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDownIcon
                    className={`w-5 h-5 flex-shrink-0 text-[#a2172b] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-red-50/20 border-t border-red-100/50"
                    >
                      <div className="px-5 py-4 text-gray-600 text-sm sm:text-base leading-relaxed pl-14 sm:pl-16">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
