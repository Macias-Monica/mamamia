import React from "react";
import Header from "./NavBar";

function Locations() {
  const branches = [
    {
      name: "Sucursal Centro",
      address: "Av. Principal 123, Ciudad, País",
      phone: "(555) 123-4567",
      hours: "Lunes a Domingo: 10:00 AM - 10:00 PM",
    },
    {
      name: "Sucursal Norte",
      address: "Calle Norte 456, Ciudad, País",
      phone: "(555) 234-5678",
      hours: "Lunes a Domingo: 11:00 AM - 11:00 PM",
    },
    {
      name: "Sucursal Sur",
      address: "Av. del Sur 789, Ciudad, País",
      phone: "(555) 345-6789",
      hours: "Lunes a Sábado: 12:00 PM - 10:00 PM",
    },
    {
      name: "Sucursal Este",
      address: "Calle Este 321, Ciudad, País",
      phone: "(555) 456-7890",
      hours: "Martes a Domingo: 1:00 PM - 9:00 PM",
    },
  ];

  return (
    <div className="container">
      <Header />
      <h2>Directorio de Sucursales de MamaMia</h2>
      <section className="branches">
        {branches.map((branch, index) => (
          <div key={index} className="branch">
            <h3>{branch.name}</h3>
            <p>Dirección: {branch.address}</p>
            <p>Teléfono: {branch.phone}</p>
            <p>Horarios: {branch.hours}</p>
          </div>
        ))}
      </section>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
        }

        h2 {
          color: #4caf50;
          margin-bottom: 20px;
        }

        h3 {
          margin-top: 20px;
          color: #333;
        }

        .branch {
          margin-bottom: 20px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        p {
          margin: 5px 0;
          line-height: 1.6;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default Locations;
