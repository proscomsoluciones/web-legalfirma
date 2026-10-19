"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalculatorIcon,
  XMarkIcon,
  ArrowPathIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Simulador() {
  const [tasacion, setTasacion] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [impuesto, setImpuesto] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatoCLP = (valor: number) =>
    valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

  const calcularMonto = (valorStr: string) => {
    const monto = parseFloat(valorStr);
    if (isNaN(monto) || monto <= 0) {
      setResultado(null);
      setImpuesto(null);
      return;
    }
    const imp = monto * 0.015;
    const calculo = imp + 36100 + 49000;
    setImpuesto(imp);
    setResultado(calculo);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const soloNumeros = e.target.value.replace(/\D/g, "");
    setTasacion(soloNumeros);
    if (soloNumeros === "") {
      setResultado(null);
      setImpuesto(null);
    }
  };

  const handleCalcular = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    calcularMonto(tasacion);
  };

  const handleQuickSelect = (monto: number) => {
    const str = monto.toString();
    setTasacion(str);
    calcularMonto(str);
  };

  const handleLimpiar = () => {
    setTasacion("");
    setResultado(null);
    setImpuesto(null);
    inputRef.current?.focus();
  };

  const montosRapidos = [3000000, 6000000, 10000000, 15000000];

  return (
    <section
      id="simulador"
      className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-center scroll-mt-24 border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#a2172b] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Calculadora de Costos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Simulador de Tasación
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-base sm:text-xl mb-12 leading-relaxed">
            Ingresa el avalúo fiscal o monto de tasación de tu vehículo y calcula
            el costo estimado del trámite al instante.
          </p>
        </motion.div>

        {/* Tarjeta del Simulador con animación de entrada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sm:p-9 flex flex-col gap-6 relative"
        >
          {/* Icono flotante con pulso */}
          <div className="relative mx-auto">
            <div className="w-14 h-14 bg-gradient-to-tr from-red-100 to-red-50 text-[#a2172b] rounded-2xl flex items-center justify-center shadow-inner">
              <CalculatorIcon className="w-7 h-7" />
            </div>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </div>

          {/* Botones de montos rápidos sugeridos */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5 text-left">
              Montos frecuentes de prueba:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {montosRapidos.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => handleQuickSelect(m)}
                  className={`text-xs py-2 px-2.5 rounded-xl border transition-all font-semibold ${
                    tasacion === m.toString()
                      ? "bg-[#a2172b] text-white border-[#a2172b] shadow-sm"
                      : "bg-gray-50 hover:bg-red-50 text-gray-700 hover:text-[#a2172b] border-gray-200"
                  }`}
                >
                  ${(m / 1000000).toFixed(0)}M CLP
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleCalcular} className="flex flex-col gap-4">
            <div className="text-left">
              <label
                htmlFor="tasacion-input"
                className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5"
              >
                Monto de Tasación (CLP)
              </label>

              {/* Input interactivo con botón de borrado rápido */}
              <div className="relative flex items-center">
                <input
                  ref={inputRef}
                  id="tasacion-input"
                  type="text"
                  inputMode="numeric"
                  placeholder="$ Ej: 5.000.000"
                  value={tasacion ? formatoCLP(Number(tasacion)) : ""}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-4 pr-11 py-3.5 text-base sm:text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a2172b] focus:border-transparent transition-all font-medium shadow-inner"
                />
                {tasacion && (
                  <button
                    type="button"
                    onClick={handleLimpiar}
                    className="absolute right-3 p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-200 transition-colors focus:outline-none cursor-pointer"
                    aria-label="Borrar monto"
                    title="Borrar monto"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Botones de acción interactivos */}
            <div className="flex gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-[#a2172b] to-[#c21f37] hover:from-[#851222] hover:to-[#a2172b] text-white py-3.5 px-4 sm:px-6 rounded-xl font-semibold shadow-md shadow-red-950/20 transition-all text-base sm:text-lg cursor-pointer"
              >
                Calcular Total
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleLimpiar}
                className="px-4 sm:px-5 py-3.5 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-all flex items-center justify-center gap-1.5 text-sm sm:text-base cursor-pointer shadow-sm hover:border-gray-400"
                title="Limpiar simulador"
                aria-label="Limpiar simulador"
              >
                <ArrowPathIcon className="w-5 h-5 text-gray-600" />
                <span>Limpiar</span>
              </motion.button>
            </div>
          </form>

          {/* Resultado interactivo con desglose */}
          <AnimatePresence>
            {resultado !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: "auto", scale: 1 }}
                exit={{ opacity: 0, height: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden mt-1 text-left bg-gradient-to-br from-red-50/90 to-red-100/50 border border-red-200/90 rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Cálculo Estimado
                  </span>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm text-gray-600 border-b border-red-200/80 pb-3 mb-3">
                  <div className="flex justify-between">
                    <span>Impuesto a la transferencia (1.5%):</span>
                    <span className="font-semibold text-gray-800">
                      {impuesto !== null ? formatoCLP(impuesto) : "-"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Aranceles operativos y notariales:</span>
                    <span className="font-semibold text-gray-800">$85.100</span>
                  </div>
                </div>

                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-sm font-bold text-gray-800">Total a pagar:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#a2172b]">
                    {formatoCLP(resultado)}
                  </span>
                </div>

                {/* Botón directo a WhatsApp con microinteracción */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/56984369223?text=${encodeURIComponent(
                    `Hola Legal Firma! Hice la simulación para un auto de tasación ${formatoCLP(
                      Number(tasacion)
                    )} (Total estimado: ${formatoCLP(resultado)}). ¿Cómo iniciamos la transferencia?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md shadow-green-700/20 transition-all text-center cursor-pointer"
                >
                  <span>Solicitar Transferencia por WhatsApp</span>
                  <span>→</span>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
