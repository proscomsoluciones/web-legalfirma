"use client";
import React, { useState } from "react";
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
      className="py-16 sm:py-24 bg-white text-gray-900 scroll-mt-24 border-b border-gray-200"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#a2172b] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 block text-center">
          Dudas Comunes
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-center mb-4 text-[#a2172b]">
          Preguntas Frecuentes
        </h2>
        <p className="text-center mb-10 sm:mb-14 text-gray-600 text-base sm:text-lg">
          Respuestas claras a las dudas más habituales sobre nuestros servicios.
        </p>

        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-200 border ${
                  isOpen ? "border-[#a2172b]/40 ring-1 ring-[#a2172b]/20" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  className={`w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium focus:outline-none transition-colors ${
                    isOpen ? "bg-red-50/50" : "hover:bg-gray-50/80"
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-2">
                    <div className="p-2 bg-red-100/50 rounded-lg text-[#a2172b] flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-900">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDownIcon
                    className={`w-5 h-5 flex-shrink-0 text-[#a2172b] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-gray-600 text-sm sm:text-base border-t border-red-100/40 bg-red-50/20">
                    <p className="leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
