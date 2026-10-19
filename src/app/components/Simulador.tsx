"use client";
import { useState, useRef } from "react";
import {
  CalculatorIcon,
  XMarkIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

export default function Simulador() {
  const [tasacion, setTasacion] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatoCLP = (valor: number) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const soloNumeros = e.target.value.replace(/\D/g, "");
    setTasacion(soloNumeros);

    if (soloNumeros === "") {
      setResultado(null);
    }
  };

  const handleCalcular = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const monto = parseFloat(tasacion);
    if (isNaN(monto) || monto <= 0) {
      setResultado(null);
      return;
    }
    // Impuesto a la transferencia (1.5%) + aranceles notariales / operativos
    const calculo = monto * 0.015 + 36100 + 49000;
    setResultado(calculo);
  };

  const handleLimpiar = () => {
    setTasacion("");
    setResultado(null);
    inputRef.current?.focus();
  };

  return (
    <section
      id="simulador"
      className="py-16 sm:py-24 bg-gray-50 text-center scroll-mt-24 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[#a2172b] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
          Calculadora de Costos
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 text-gray-900">
          Simulador de Tasación
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-xl mb-10 leading-relaxed">
          Ingresa el avalúo fiscal o monto de tasación de tu vehículo y calcula
          el costo estimado del trámite al instante.
        </p>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col gap-5">
          <div className="flex items-center justify-center w-12 h-12 bg-red-50 text-[#a2172b] rounded-full mx-auto">
            <CalculatorIcon className="w-6 h-6" />
          </div>

          <form onSubmit={handleCalcular} className="flex flex-col gap-4">
            <div className="text-left">
              <label
                htmlFor="tasacion-input"
                className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Monto de Tasación (CLP)
              </label>

              {/* Input con botón de borrado rápido integrado */}
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  id="tasacion-input"
                  type="text"
                  inputMode="numeric"
                  placeholder="$ Ej: 5.000.000"
                  value={tasacion ? formatoCLP(Number(tasacion)) : ""}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-4 pr-11 py-3.5 text-base sm:text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a2172b] focus:border-transparent transition-all font-medium"
                />
                {tasacion && (
                  <button
                    type="button"
                    onClick={handleLimpiar}
                    className="absolute right-3 p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-200 transition-colors focus:outline-none"
                    aria-label="Borrar monto"
                    title="Borrar monto"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Botones de acción siempre visibles */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex-1 bg-[#a2172b] hover:bg-[#851222] text-white py-3.5 px-4 sm:px-6 rounded-xl font-semibold shadow-md transition-all text-base sm:text-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Calcular Total
              </button>

              <button
                type="button"
                onClick={handleLimpiar}
                className="px-4 sm:px-5 py-3.5 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all flex items-center justify-center gap-1.5 text-sm sm:text-base cursor-pointer shadow-sm hover:border-gray-400 active:bg-gray-300"
                title="Limpiar simulador"
                aria-label="Limpiar simulador"
              >
                <ArrowPathIcon className="w-5 h-5 text-gray-600" />
                <span>Limpiar</span>
              </button>
            </div>
          </form>

          {resultado !== null && (
            <div className="mt-2 p-5 bg-red-50/70 border border-red-200 rounded-2xl animate-fadeUp">
              <p className="text-gray-600 text-xs sm:text-sm mb-1">
                Total estimado a pagar:
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-[#a2172b] tracking-tight">
                {formatoCLP(resultado)}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                * Incluye impuesto 1.5% + aranceles operativos y notariales estimados.
              </p>

              {/* Botón directo para cotizar por WhatsApp con el monto ya calculado */}
              <a
                href={`https://wa.me/56984369223?text=${encodeURIComponent(
                  `Hola, realicé la simulación para un auto de tasación ${formatoCLP(
                    Number(tasacion)
                  )} (Total estimado: ${formatoCLP(resultado)}). ¿Cómo iniciamos la transferencia?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-all shadow-sm"
              >
                Transferir por este monto en WhatsApp →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
