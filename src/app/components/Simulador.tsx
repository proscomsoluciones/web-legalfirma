"use client";
import { useState } from "react";
import { CalculatorIcon } from "@heroicons/react/24/outline";

export default function Simulador() {
  const [tasacion, setTasacion] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

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
              <input
                id="tasacion-input"
                type="text"
                inputMode="numeric"
                placeholder="$ Ej: 5.000.000"
                value={tasacion ? formatoCLP(Number(tasacion)) : ""}
                onChange={handleInputChange}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-base sm:text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a2172b] focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#a2172b] hover:bg-[#851222] text-white py-3.5 px-6 rounded-xl font-semibold shadow-md transition-all text-base sm:text-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Calcular Total
            </button>
          </form>

          {resultado !== null && (
            <div className="mt-2 p-4 bg-red-50/70 border border-red-200 rounded-xl">
              <p className="text-gray-600 text-xs sm:text-sm mb-1">
                Total estimado a pagar:
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#a2172b]">
                {formatoCLP(resultado)}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                * Incluye impuesto 1.5% + aranceles operativos y notariales estimados.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
