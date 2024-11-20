import React, { useState } from "react";
import Header from "./NavBar";

function JobApplicationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("Cocinero");
  const [experience, setExperience] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Solicitud enviada:\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nPosición: ${position}\nExperiencia: ${experience} años\nComentarios: ${comments}`
    );
  };

  return (
    <div className="container">
      <Header></Header>
      <h2>Solicita un Empleo en la Pizzería</h2>
      <form onSubmit={handleSubmit} className="job-application-form">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="position">Posición Deseada:</label>
        <select
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="Cocinero">Cocinero</option>
          <option value="Repartidor">Repartidor</option>
          <option value="Cajero">Cajero</option>
          <option value="Gerente de Turno">Gerente de Turno</option>
        </select>

        <label htmlFor="experience">Años de Experiencia:</label>
        <input
          type="number"
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />

        <label htmlFor="comments">Comentarios:</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>

        <button type="submit" className="btn">
          Enviar Solicitud
        </button>
      </form>

      <style jsx>{`

        .job-application-form {
          display: flex;
          flex-direction: column;
          width: 60%;
          font-size: large; 
        }

        .job-application-form label {
          margin-top: 10px;
        }

        .job-application-form input,
        .job-application-form select,
        .job-application-form textarea {
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 1rem;
        }

      `}</style>
    </div>
  );
}

export default JobApplicationPage;
