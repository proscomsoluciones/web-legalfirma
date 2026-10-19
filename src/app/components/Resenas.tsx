"use client";
import React from "react";
import { motion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Reseñas() {
  const reviews = [
    {
      nombre: "Juan R.",
      comentario: "Excelente servicio y atención, muy profesional y todo el trámite fue rápido.",
      rating: 5,
      date: "Hace 2 semanas",
    },
    {
      nombre: "María P.",
      comentario: "Muy recomendable, equipo confiable, transparente y eficiente.",
      rating: 5,
      date: "Hace 1 mes",
    },
    {
      nombre: "Carlos G.",
      comentario: "Nos ayudaron a gestionar todo de forma remota, segura y sin filas.",
      rating: 5,
      date: "Hace 3 semanas",
    },
    {
      nombre: "Ana L.",
      comentario: "Servicio ágil y confiable, me explicaron todo con mucha paciencia.",
      rating: 5,
      date: "Hace 2 meses",
    },
    {
      nombre: "Pedro M.",
      comentario: "Excelente atención y seguimiento durante todo el proceso de firma.",
      rating: 5,
      date: "Hace 1 mes",
    },
    {
      nombre: "Ruth M.",
      comentario: "Impecable gestión. El certificado me llegó de inmediato a mi teléfono.",
      rating: 5,
      date: "Hace 2 semanas",
    },
  ];

  return (
    <section
      id="resenas"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50/90 via-white to-gray-50/90 bg-dot-pattern text-center scroll-mt-24 border-b border-gray-200/80 overflow-hidden"
    >
      {/* Halos de luz ambiental */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#a2172b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 bg-red-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#a2172b] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Opiniones Reales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Reseñas de Nuestros Clientes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg mb-14">
            La satisfacción y confianza de quienes ya transfirieron con nosotros nos respaldan.
          </p>
        </motion.div>

        {/* Contenedor responsive con scroll horizontal en móvil y grid con animaciones en desktop */}
        <div className="flex flex-nowrap gap-5 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {reviews.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.08)",
              }}
              className="flex-shrink-0 w-[84vw] max-w-xs sm:w-80 md:w-auto bg-white p-7 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between items-center text-center snap-center hover:border-red-200 transition-colors"
            >
              <div>
                {/* Estrellas con microinteracción */}
                <div className="flex justify-center gap-1 mb-4" aria-label={`Calificación: ${r.rating} de 5 estrellas`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 text-amber-400 drop-shadow-sm transition-transform hover:scale-125"
                    />
                  ))}
                </div>

                {/* Comentario */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{r.comentario}&rdquo;
                </p>
              </div>

              {/* Nombre y fecha */}
              <div className="border-t border-gray-100 pt-4 w-full flex justify-between items-center text-xs">
                <span className="font-bold text-gray-900 text-sm">{r.nombre}</span>
                <span className="text-gray-400 font-medium">{r.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicador scroll solo en móvil */}
        <p className="mt-5 text-gray-400 text-xs sm:text-sm md:hidden flex items-center justify-center gap-1.5">
          <span>←</span> Desliza para ver más opiniones <span>→</span>
        </p>
      </div>
    </section>
  );
}
