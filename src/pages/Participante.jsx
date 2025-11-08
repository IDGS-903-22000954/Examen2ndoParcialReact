import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Participante = () => {
  const { participante } = useLoaderData();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="flex gap-6 flex-col md:flex-row">

        <div className="w-80 bg-gray-900 rounded-xl shadow-2xl p-6 flex flex-col items-center border border-gray-800">
          <img
            src={`/${participante.avatar}`}
            alt={participante.nombre}
            className="w-28 h-28 object-cover rounded-full mb-4 shadow-md border border-gray-700"
          />
          <h2 className="text-xl font-bold text-white text-center">
            {participante.nombre} {participante.apellidos}
          </h2>
          <p className="text-gray-400 mt-2 text-center">
            {participante.ocupacion}
          </p>
        </div>

        <div className="w-80 bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col items-center border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-3">Contacto</h3>

          <p className="text-gray-200 text-sm">{participante.email}</p>

          <a
            href={`https://x.com/${participante.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm mt-1 hover:underline"
          >
            @{participante.twitter}
          </a>

          <p className="text-gray-400 mt-6 text-center text-xs">
            Presenta este gaffete en el evento.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Participante;

export const loaderParticipante = async ({ params }) => {
  const data = await fetch(
    `https://examen2ndparcial20251108010608-gebbcnhub2dhc3fe.canadacentral-01.azurewebsites.net/api/Participante/participante/${params.id}`
  );
  const participante = await data.json();
  return { participante };
};
