import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Participantes = () => {
  const { participantes: initialParticipantes } = useLoaderData();
  const [participantes, setParticipantes] = useState(initialParticipantes);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const buscarParticipantes = async (nombre) => {
    if (!nombre) {
      setParticipantes(initialParticipantes);
      setNotFound(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://examen2ndparcial20251108010608-gebbcnhub2dhc3fe.canadacentral-01.azurewebsites.net/api/Participante/listado/${nombre}`);
      if (response.ok) {
        const data = await response.json();
        if (data.length === 0) {
          setNotFound(true);
          setParticipantes([]);
        } else {
          setNotFound(false);
          setParticipantes(data);
        }
      } else {
        setNotFound(true);
        setParticipantes([]);
      }
    } catch (error) {
      console.error(error);
      setNotFound(true);
      setParticipantes([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      buscarParticipantes(search.trim());
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <div className="min-h-screen bg-black text-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">
        Asistentes Registrados
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-64 border border-gray-700 rounded px-3 py-2 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <Link to="/registro">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded shadow-lg transition">
            Registro
          </button>
        </Link>
      </div>

      {loading && (
        <p className="text-center text-gray-300 mb-4">Buscando...</p>
      )}

      {notFound && !loading && (
        <p className="text-center text-red-500 mb-6">
          No hay participantes con ese nombre.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {participantes.map((p) => (
          <div
            key={p.idParticipante}
            className="bg-gray-900 p-5 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-800"
          >
            <Link to={`/participante/${p.idParticipante}`}>
              <img
                src={`/${p.avatar}`}
                alt={p.nombre}
                className="w-full h-44 object-cover rounded-lg mb-3 border border-gray-700"
              />
            </Link>
            <p className="font-semibold text-gray-100">
              {p.nombre} {p.apellidos}
            </p>
            <p className="text-gray-400">{p.ocupacion}</p>
            <p className="text-gray-500 text-sm">{p.email}</p>

            <a
              href={`https://x.com/${p.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-sm hover:underline"
            >
              @{p.twitter}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Participantes;

export const loaderParticipantes = async () => {
  const data = await fetch(
    'https://examen2ndparcial20251108010608-gebbcnhub2dhc3fe.canadacentral-01.azurewebsites.net/api/Participante/listado'
  );
  const participantes = await data.json();
  return { participantes };
};
