import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const Registro = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    twitter: "",
    ocupacion: "",
    avatar: "",
    terminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.terminos) {
      alert("Debe aceptar los términos de condiciones.");
      return;
    }

    const response = await fetch("https://examen2ndparcial20251108010608-gebbcnhub2dhc3fe.canadacentral-01.azurewebsites.net/api/Participante/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: form.nombre,
        apellidos: form.apellidos,
        email: form.email,
        twitter: form.twitter,
        ocupacion: form.ocupacion,
        avatar: form.avatar
      })
    });

    if (response.ok) {
      alert("Registrado correctamente");
      navigate("/participantes");
    } else {
      alert("Error al registrar");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-gray-900 p-8 rounded-xl shadow-2xl text-gray-100 border border-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-gray-100 text-center">
          Registrar Participante
        </h1>

        <Form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label className="font-semibold">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-3 py-2 mt-1 bg-gray-800 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Apellidos:</label>
            <input
              type="text"
              name="apellidos"
              value={form.apellidos}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-3 py-2 mt-1 bg-gray-800 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-3 py-2 mt-1 bg-gray-800 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Twitter:</label>
            <input
              type="text"
              name="twitter"
              value={form.twitter}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-3 py-2 mt-1 bg-gray-800 text-gray-100"
            />
          </div>

          <div>
            <label className="font-semibold">Ocupación:</label>
            <input
              type="text"
              name="ocupacion"
              value={form.ocupacion}
              onChange={handleChange}
              className="w-full border border-gray-700 rounded px-3 py-2 mt-1 bg-gray-800 text-gray-100"
              required
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">Avatar:</label>
            <div className="flex gap-4 justify-center">
              {["avatar01.png", "avatar02.png", "avatar03.png", "avatar04.png"].map((img) => (
                <label key={img} className="flex flex-col items-center cursor-pointer">
                  <input
                    type="radio"
                    name="avatar"
                    value={img}
                    onChange={handleChange}
                    className="mb-1"
                    required
                  />
                  <img
                    src={`/${img}`}
                    width={70}
                    className="rounded-lg border border-gray-700 shadow-sm"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              name="terminos"
              checked={form.terminos}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <p className="text-gray-300">Leí y acepto los términos de condiciones</p>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-800 text-white font-semibold py-2 rounded hover:bg-blue-900 transition shadow-lg"
          >
            Guardar
          </button>

        </Form>
      </div>
    </div>
  );
};

export default Registro;
