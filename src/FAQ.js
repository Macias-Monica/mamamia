import React from "react";
import Header from "./NavBar"; // Asegúrate de importar tu Navbar

function FAQ() {
  const faqs = [
    {
      question: "¿Cuáles son los horarios de atención?",
      answer: "Estamos abiertos de Lunes a Domingo de 10:00 AM a 10:00 PM.",
    },
    {
      question: "¿Hacen entregas a domicilio?",
      answer: "Sí, ofrecemos servicio de entrega a domicilio en todas nuestras sucursales.",
    },
    {
      question: "¿Puedo hacer un pedido por teléfono?",
      answer: "¡Claro! Puedes llamarnos al (555) 123-4567 para hacer tu pedido.",
    },
    {
      question: "¿Tienen opciones vegetarianas?",
      answer: "Sí, tenemos varias pizzas vegetarianas en nuestro menú.",
    },
    {
      question: "¿Aceptan pagos con tarjeta?",
      answer: "Sí, aceptamos pagos en efectivo y con tarjeta de crédito o débito.",
    },
    {
      question: "¿Puedo personalizar mi pizza?",
      answer: "¡Por supuesto! Puedes elegir los ingredientes que prefieras para personalizar tu pizza.",
    },
    {
      question: "¿Hacen promociones o descuentos?",
      answer: "Sí, ofrecemos promociones especiales los fines de semana y descuentos para grupos grandes.",
    },
    {
      question: "¿Tienen un menú para niños?",
      answer: "Sí, contamos con un menú especial para niños con opciones más pequeñas y precios reducidos.",
    },
    {
      question: "¿Cómo puedo hacer una reserva?",
      answer: "Puedes hacer una reserva llamándonos al (555) 123-4567 o a través de nuestra página web.",
    },
    {
      question: "¿Tienen opciones sin gluten?",
      answer: "Sí, ofrecemos pizzas con masa sin gluten para aquellos que lo necesiten.",
    },
    {
      question: "¿Cuál es su pizza más popular?",
      answer: "Nuestra pizza más popular es la 'Mama Mia Special', con ingredientes frescos y una mezcla de sabores únicos.",
    },
    {
      question: "¿Ofrecen catering para eventos?",
      answer: "Sí, ofrecemos servicios de catering para eventos y reuniones. Contáctanos para más detalles.",
    },
    {
      question: "¿Tienen servicio para llevar?",
      answer: "Sí, puedes pedir tu pizza para llevar en cualquiera de nuestras sucursales.",
    },
  ];

  return (
    <div className="container">
      <Header />
      <h2>Preguntas Frecuentes</h2>
      <section className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
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
          margin-top: 15px;
          color: #333;
        }

        .faq-item {
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

export default FAQ;
