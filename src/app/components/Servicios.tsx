"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowPathIcon,
  DocumentTextIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Servicios() {
  const servicios = [
    {
      title: "Transferencia de Vehículos",
      description: "Gestión completa con contrato digital y firma electrónica con validez legal.",
      icon: TruckIcon,
      badge: "Más Solicitado",
    },
    {
      title: "Mandato con Poder Especial",
      description:
        "Documento con total autoridad legal para representar a otra persona en el trámite.",
      icon: DocumentTextIcon,
      badge: "Notarial",
    },
    {
      title: "Permiso de Salida del País",
      description: "Autorización notarial y legal si el vehículo va a cruzar fronteras nacionales.",
      icon: ShieldCheckIcon,
      badge: "Rápido",
    },
    {
      title: "Gestión de Trámites Rápidos",
      description: "Simplificamos y aceleramos tus gestiones vehiculares sin filas ni complicaciones.",
      icon: ArrowPathIcon,
      badge: "100% Online",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 sm:py-28 bg-white text-center scroll-mt-24 border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#a2172b] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Lo que hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Nuestros Servicios
          </h2>

          <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-xl mb-14 leading-relaxed">
            En <span className="font-semibold text-[#a2172b]">Legal Firma</span>,
            transformamos los trámites complejos en procesos simples y rápidos.
            Descubre nuestros servicios diseñados para que vender, transferir o
            gestionar tu vehículo sea una experiencia segura y sin demoras.
          </p>
        </motion.div>

        {/* Tarjetas interactivas con animación escalonada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicios.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.08)",
                }}
                className="relative bg-gray-50/80 hover:bg-white rounded-2xl border border-gray-200/90 p-7 shadow-sm transition-all duration-300 flex flex-col justify-between items-center text-center group cursor-pointer hover:border-red-300"
              >
                {/* Badge flotante */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100/70 text-[#a2172b] group-hover:bg-[#a2172b] group-hover:text-white transition-colors">
                  {s.badge}
                </span>

                <div className="w-full flex flex-col items-center">
                  <div className="p-4 bg-red-50 rounded-2xl mb-5 group-hover:bg-[#a2172b] transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                    <Icon className="w-8 h-8 text-[#a2172b] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a2172b] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#a2172b] group-hover:text-red-700 transition-colors"
                >
                  <span>Consultar trámite</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
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
            <span>Solicitar Servicio</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
