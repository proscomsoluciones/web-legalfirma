"use client";
import React from "react";
import {
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function PorQueElegirnos() {
  const razones = [
    {
      title: "Rápido y Personalizado",
      description:
        "Atendemos tus dudas de inmediato y te acompañamos paso a paso durante el trámite.",
      icon: ClockIcon,
    },
    {
      title: "Certificado por WhatsApp",
      description:
        "Recibe tu comprobante de transferencia seguro y digital directamente en tu teléfono.",
      icon: DocumentCheckIcon,
    },
    {
      title: "Flexibilidad Total",
      description:
        "Nos adaptamos a tus horarios y necesidades para simplificar todo el proceso.",
      icon: UserGroupIcon,
    },
    {
      title: "Asistencia Amigable",
      description:
        "Te guiamos con claridad, cercanía y el más alto rigor legal en cada etapa.",
      icon: ChatBubbleBottomCenterTextIcon,
    },
  ];

  return (
    <section
      id="porque-elegirnos"
      className="py-16 sm:py-24 bg-white text-center scroll-mt-24 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#a2172b] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
          Nuestras Ventajas
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 text-gray-900">
          ¿Por qué Elegirnos?
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-xl mb-12 sm:mb-16 leading-relaxed">
          En <span className="font-semibold text-[#a2172b]">Legal Firma</span>,
          hacemos que comprar, vender o transferir un vehículo sea un proceso
          transparente, cómodo y sin demoras burocráticas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {razones.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-gray-50 rounded-2xl border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className="p-3.5 bg-red-100/60 rounded-xl mb-5 group-hover:bg-[#a2172b] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#a2172b] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {r.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Botón CTA */}
        <div className="mt-12 sm:mt-16">
          <a
            href="#contacto"
            className="inline-block bg-[#a2172b] hover:bg-[#851222] text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all text-base sm:text-lg transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Iniciar Trámite
          </a>
        </div>
      </div>
    </section>
  );
}
