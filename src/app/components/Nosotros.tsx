"use client";
import React from "react";
import {
  AcademicCapIcon,
  LightBulbIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="py-16 sm:py-24 bg-gray-50 text-center scroll-mt-24 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#a2172b] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
          Quiénes Somos
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Sobre Nosotros
        </h2>

        <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-xl mb-12 sm:mb-16 leading-relaxed">
          En <span className="font-semibold text-gray-900">Legal Firma</span> presentamos nuestros servicios para que la compraventa y
          transferencia de vehículos en <strong className="text-gray-900 font-semibold">Rancagua, Rengo y la Región de O&apos;Higgins</strong> sean
          trámites simples, rápidos y claros. Nos encargamos de todo, desde la
          firma digital hasta el seguimiento, sin filas ni complicaciones.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-6 sm:p-8 transition-all duration-300 border border-gray-100 flex flex-col items-center sm:items-start gap-4">
            <div className="p-3 bg-red-50 rounded-xl">
              <AcademicCapIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#a2172b]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center sm:text-left">
              Profesionalismo
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left leading-relaxed">
              Excelencia y confiabilidad legal en cada trámite que gestionamos para ti.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-6 sm:p-8 transition-all duration-300 border border-gray-100 flex flex-col items-center sm:items-start gap-4">
            <div className="p-3 bg-red-50 rounded-xl">
              <LightBulbIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#a2172b]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center sm:text-left">
              Innovación
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left leading-relaxed">
              Incorporamos tecnología y firma electrónica avanzada para simplificar procesos.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl p-6 sm:p-8 transition-all duration-300 border border-gray-100 flex flex-col items-center sm:items-start gap-4 sm:col-span-2 lg:col-span-1">
            <div className="p-3 bg-red-50 rounded-xl">
              <ChatBubbleLeftIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#a2172b]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center sm:text-left">
              Soporte Continuo
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left leading-relaxed">
              Atención rápida, humana y personalizada para cada consulta o necesidad.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16">
          <a
            href="#contacto"
            className="inline-block bg-[#a2172b] hover:bg-[#851222] text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg"
          >
            Contáctanos hoy
          </a>
        </div>
      </div>
    </section>
  );
}
