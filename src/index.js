import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Pan italiano con aceite de oliva y romero",
    price: 120,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Salsa de tomate y queso mozarella",
    price: 150,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients:
      "Salsa de tomate casera, queso mozarella, espinaca y queso ricotta",
    price: 180,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Salsa tomate, queso mozarella, champiñones y cebolla",
    price: 120,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Salsa de tomate, queso mozarella y pepperoni",
    price: 150,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Salsa de tomate, queso mozarella, jamón, y queso burrata",
    price: 180,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const styles = {};
  return (
    <header className="header">
      <h1 style={styles}>Pizzeria MamaMia</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Nuestro Menú</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Cocina auténtica italiana. Seis tipos de pizza diferentes para
            elegir. Todas nuestras pizzas son cocinadas desde nuestro horno de
            piedra, todas son orgánicas y deliciosas.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>Aún estámos trabajando en nuestro menú. Disculpe las molestías</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "SIN EXISTENCIAS" : `$${pizzaObj.price}`}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour < closedHour; // Corrección: cerrado antes de las 22

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closed={closedHour} open={openHour} />
      ) : (
        <>
          <p>
            Estamos alegres de atenderlo entre las {openHour}:00 y las{" "}
            {closedHour}:00.
          </p>
          <br />
          Dirección: Calle de la Pizza 123, Ciudad del Sabor, CP 45678 <br />
          Teléfono: (555) 123-4567 <br />
          Correo electrónico: contacto@pizzeriamamamia.com
        </>
      )}
      <IconWA></IconWA>
    </footer>
  );
}

function IconWA() {
  return (
    <div style={{ position: "relative" }}>
      <a
        href="https://wa.me/5213921057200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          size="4x"
          style={{
            color: "#25D366",
            marginRight: "10px",
            position: "fixed",
            right: "50px",
            bottom: "40px",
          }}
        />
      </a>
    </div>
  );
}

function Order({ closed, open }) {
  return (
    <div className="order">
      <p>
        ¡Estamos actualmente abiertos! Nuestro horario de atención es de {open}
        :00 hasta {closed}:00 ¡Ven a visitarnos u ordena en línea! :D
      </p>
      <button className="btn">Ordena!</button>
      <p>
        <br></br>
        Dirección: Calle de la Pizza 123, Ciudad del Sabor, CP 45678 <br></br>
        Teléfono: (555) 123-4567 <br></br>
        Correo electrónico: contacto@pizzeriamamamia.com
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
