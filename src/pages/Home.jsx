import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src="/tic.png"
          alt="TIC Logo"
          className="w-48 h-auto rounded-lg shadow-lg"
        />
        <img
          src="/images.png"
          alt="Images Logo"
          className="w-48 h-auto rounded-lg shadow-lg"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
        Congreso de Tecnologías de la Información
      </h1>
      <a href="/participantes">
        <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition">
          Entrar
        </button>
      </a>
    </div>
  );
};

export default Home;
