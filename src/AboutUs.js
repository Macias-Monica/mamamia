import React from "react";
import Header from "./NavBar";

function AboutUs() {
  return (
    <div className="container">
      <Header />
      <h2>Nuestra Historia</h2>
      <p>
        Fundada en 2020, MamaMia nació del amor por la pizza y la tradición
        culinaria italiana. Nuestro fundador, Giovanni Rossi, soñaba con traer
        los sabores auténticos de su tierra natal a nuestra comunidad.
      </p>
      <p>
        Desde entonces, hemos estado comprometidos con la calidad, utilizando
        solo ingredientes frescos y recetas tradicionales que han sido
        transmitidas de generación en generación. Cada pizza es elaborada a
        mano, garantizando una experiencia deliciosa en cada bocado.
      </p>
      <p>
        A lo largo de los años, hemos crecido y evolucionado, pero nuestro
        objetivo se mantiene: brindar a nuestros clientes una experiencia única
        y memorable.
      </p>
      <p>
        Te invitamos a que nos visites y pruebes nuestras deliciosas pizzas,
        ¡esperamos verte pronto en MamaMia!
      </p>

      <style jsx>{`
            p {
          margin: 10px 0;
          line-height: 1.6;
          color: #555;
          font-size: large;
        }
      `}</style>
    </div>
  );
}

export default AboutUs;
