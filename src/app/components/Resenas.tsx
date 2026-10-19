"use client";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Reseñas() {
  const reviews = [
    {
      nombre: "Juan R.",
      comentario: "Excelente servicio y atención, muy profesional y todo el trámite fue rápido.",
      rating: 5,
    },
    {
      nombre: "María P.",
      comentario: "Muy recomendable, equipo confiable, transparente y eficiente.",
      rating: 5,
    },
    {
      nombre: "Carlos G.",
      comentario: "Nos ayudaron a gestionar todo de forma remota, segura y sin filas.",
      rating: 5,
    },
    {
      nombre: "Ana L.",
      comentario: "Servicio ágil y confiable, me explicaron todo con mucha paciencia.",
      rating: 5,
    },
    {
      nombre: "Pedro M.",
      comentario: "Excelente atención y seguimiento durante todo el proceso de firma.",
      rating: 5,
    },
    {
      nombre: "Ruth M.",
      comentario: "Impecable gestión. El certificado me llegó de inmediato a mi teléfono.",
      rating: 5,
    },
  ];

  return (
    <section
      id="resenas"
      className="py-16 sm:py-24 bg-gray-50 text-center scroll-mt-24 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#a2172b] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
          Opiniones Reales
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 text-gray-900">
          Reseñas de Nuestros Clientes
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg mb-12 sm:mb-16">
          La satisfacción y confianza de quienes ya transfirieron con nosotros nos respaldan.
        </p>

        {/* Contenedor responsive con scroll horizontal en móvil y grid en desktop */}
        <div className="flex flex-nowrap gap-5 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 scroll-smooth snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[84vw] max-w-xs sm:w-80 md:w-auto bg-white p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between items-center text-center snap-center"
            >
              <div>
                {/* Estrellas */}
                <div className="flex justify-center gap-1 mb-4" aria-label={`Calificación: ${r.rating} de 5 estrellas`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < r.rating ? "text-amber-400" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Comentario */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{r.comentario}&rdquo;
                </p>
              </div>

              {/* Nombre */}
              <p className="font-bold text-gray-900 text-sm sm:text-base border-t border-gray-100 pt-3 w-full">
                {r.nombre}
              </p>
            </div>
          ))}
        </div>

        {/* Indicador scroll solo en móvil */}
        <p className="mt-4 text-gray-500 text-xs sm:text-sm md:hidden flex items-center justify-center gap-1.5">
          <span>←</span> Desliza para ver más opiniones <span>→</span>
        </p>
      </div>
    </section>
  );
}
