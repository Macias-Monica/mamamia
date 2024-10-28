// Datos de pizzas
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

export default function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Nuestro Menú</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Cocina auténtica italiana. Seis tipos de pizza diferentes para
            elegir. Todas nuestras pizzas son cocinadas en nuestro horno de
            piedra, orgánicas y deliciosas.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Aún estamos trabajando en nuestro menú. Disculpe las molestias.</p>
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
