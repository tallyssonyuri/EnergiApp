import React from "react";
import { AlertTriangle } from "lucide-react";

export default function Alerts() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white min-h-screen p-4">
      <AlertTriangle size={100} className="text-yellow-400 mb-6" />

      <h1 className="text-4xl font-bold text-yellow-400 mb-4">AVISO</h1>
      <p className="text-center text-lg mb-6">
        Excesso de consumo detectado! <br />
        O seguinte eletrodoméstico excedeu o consumo:
      </p>

      <div className="bg-yellow-400 text-black w-full max-w-sm rounded-lg p-4 flex items-center justify-center mb-8 shadow-lg">
        <span className="font-bold text-lg flex items-center gap-2">
          <span className="w-6 h-6 bg-black rounded-full"></span>
          Ar-condicionado
        </span>
      </div>

    </div>
  );
}
