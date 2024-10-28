import React, { useState } from "react";

function OrderPage() {
  const [name, setName] = useState("");
  const [pizza, setPizza] = useState("Margherita");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pedido realizado: \nNombre: ${name}\nPizza: ${pizza}\nDirección: ${address}\nTeléfono: ${phone}`);
  };

  return (
    <div className="container">
      <h2>Ordena tu Pizza</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="pizza">Selecciona tu Pizza:</label>
        <select id="pizza" value={pizza} onChange={(e) => setPizza(e.target.value)}>
          <option value="Margherita">Pizza Margherita</option>
          <option value="Spinaci">Pizza Spinaci</option>
          <option value="Funghi">Pizza Funghi</option>
          <option value="Salamino">Pizza Salamino</option>
          <option value="Prosciutto">Pizza Prosciutto</option>
        </select>

        <label htmlFor="address">Dirección:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label htmlFor="phone">Teléfono:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <button type="submit" className="btn">Realizar Pedido</button>
      </form>
    </div>
  );
}

export default OrderPage;
