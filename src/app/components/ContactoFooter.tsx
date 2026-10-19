"use client";
import React from "react";
import { motion } from "framer-motion";
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
      title: "Cobertura",
      text: "Rancagua, Rengo y Región de O'Higgins",
      link: "https://maps.google.com/?q=Rancagua,Chile",
      action: "Ver cobertura",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-20 sm:py-28 bg-gray-50 text-gray-900 scroll-mt-24 border-t border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#a2172b] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Estamos para ayudarte
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
            style={{ color: corporateColor }}
          >
            Contáctanos
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-14">
            Comunícate con nuestro equipo legal para la transferencia rápida de tu auto en Rancagua, Rengo y toda la Región de O&apos;Higgins.
          </p>
        </motion.div>

        {/* Bloques de contacto interactivos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {contactos.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(162, 23, 43, 0.12)",
                }}
                className="flex flex-col items-center justify-between bg-white border border-gray-200/90 rounded-2xl p-7 shadow-sm transition-all duration-300 group hover:border-red-300 cursor-pointer"
              >
                <div className="p-4 bg-red-50 rounded-2xl mb-4 group-hover:bg-[#a2172b] transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                  <Icon className="w-8 h-8 text-[#a2172b] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5 text-center group-hover:text-[#a2172b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm text-center break-all mb-5">
                  {item.text}
                </p>
                <span className="text-xs font-bold text-[#a2172b] group-hover:text-red-700 flex items-center gap-1">
                  <span>{item.action}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Horario de atención con micro-animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl mx-auto mt-12 sm:mt-16 bg-white border border-gray-200/90 rounded-3xl p-7 sm:p-8 text-center shadow-sm flex flex-col items-center"
        >
          <div className="p-3.5 bg-red-50 rounded-2xl mb-3 text-[#a2172b]">
            <ClockIcon className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Horario de Atención
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            <span className="font-semibold text-gray-800">Lunes a Viernes:</span> 08:30 a 20:00 hrs.
          </p>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            <span className="font-semibold text-gray-800">Sábados y Domingos:</span> 09:00 a 17:00 hrs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
