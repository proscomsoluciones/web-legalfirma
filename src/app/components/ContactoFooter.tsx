"use client";
import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleOvalLeftIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function ContactoFooter() {
  const corporateColor = "#a2172b";

  const contactos = [
    {
      icon: PhoneIcon,
      title: "Teléfono",
      text: "+56 9 8436 9223",
      link: "tel:+56984369223",
      action: "Llamar ahora",
    },
    {
      icon: ChatBubbleOvalLeftIcon,
      title: "WhatsApp",
      text: "Atención inmediata",
      link: "https://wa.me/56984369223?text=Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20una%20transferencia%20de%20veh%C3%ADculo.",
      action: "Escribir al chat",
    },
    {
      icon: EnvelopeIcon,
      title: "Correo",
      text: "transferencias@legalfirma.cl",
      link: "mailto:transferencias@legalfirma.cl",
      action: "Enviar mensaje",
    },
    {
      icon: MapPinIcon,
      title: "Ubicación",
      text: "Malloa, Chile",
      link: "https://maps.google.com/?q=Malloa,Chile",
      action: "Ver mapa",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-16 sm:py-24 bg-gray-50 text-gray-900 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <span className="text-[#a2172b] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 block text-center">
          Estamos para ayudarte
        </span>
        <h2
          className="text-2xl sm:text-4xl font-extrabold text-center mb-4"
          style={{ color: corporateColor }}
        >
          Contáctanos
        </h2>
        <p className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-14">
          Comunícate con nuestro equipo legal por el canal que te resulte más cómodo.
        </p>

        {/* Bloques de contacto responsivos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactos.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center justify-between bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-3.5 bg-red-50 rounded-2xl mb-4 group-hover:bg-[#a2172b] transition-colors duration-300">
                  <Icon
                    className="w-7 h-7 sm:w-8 sm:h-8 text-[#a2172b] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center break-all mb-4">
                  {item.text}
                </p>
                <span className="text-xs font-semibold text-[#a2172b] group-hover:underline">
                  {item.action} →
                </span>
              </a>
            );
          })}
        </div>

        {/* Horario de atención */}
        <div className="max-w-xl mx-auto mt-10 sm:mt-14 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-sm flex flex-col items-center">
          <div className="p-3 bg-red-50 rounded-xl mb-3">
            <ClockIcon
              className="w-7 h-7 text-[#a2172b]"
            />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
            Horario de Atención
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            <span className="font-semibold text-gray-800">Lunes a Viernes:</span> 08:30 a 20:00 hrs.
          </p>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            <span className="font-semibold text-gray-800">Sábados y Domingos:</span> 09:00 a 17:00 hrs.
          </p>
        </div>
      </div>
    </section>
  );
}
