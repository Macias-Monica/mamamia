import React, { useState } from "react";
import Header from "./NavBar";

function ReviewsPage() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("5");
  const [comments, setComments] = useState("");
  
  // Reseñas prehechas
  const [reviews, setReviews] = useState([
    { name: "Ana García", rating: "5", comments: "¡La mejor pizza que he probado! Los ingredientes son frescos y el servicio es excelente." },
    { name: "Carlos Pérez", rating: "4", comments: "Muy buena pizza, aunque podrían mejorar la rapidez en el servicio." },
    { name: "Lucía Méndez", rating: "5", comments: "Gran variedad de opciones y sabores únicos. Definitivamente volveré." },
    { name: "Juan López", rating: "3", comments: "La pizza estaba bien, pero esperaba algo más especial por el precio." },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      rating,
      comments,
    };
    setReviews([...reviews, newReview]);
    setName("");
    setRating("5");
    setComments("");
    alert("Gracias por tu reseña!");
  };

  return (
    <div className="container">
      <Header></Header>
      <h2>Deja tu Reseña</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="rating">Calificación:</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="5">5 Estrellas</option>
          <option value="4">4 Estrellas</option>
          <option value="3">3 Estrellas</option>
          <option value="2">2 Estrellas</option>
          <option value="1">1 Estrella</option>
        </select>

        <label htmlFor="comments">Comentarios:</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="btn">Enviar Reseña</button>
      </form>

      <h3>Reseñas de Clientes</h3>
      <ul className="reviews-list">
        {reviews.map((review, index) => (
          <li key={index} className="review-item">
            <h4>{review.name}</h4>
            <p>Calificación: {review.rating} Estrellas</p>
            <p>{review.comments}</p>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
        }

        .review-form,
        .reviews-list {
          display: flex;
          flex-direction: column;
		  width: 60%;
        }

        .review-form label,
        .reviews-list h3 {
          margin-top: 10px;
        }

        .review-form input,
        .review-form select,
        .review-form textarea {
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .review-form button {
          margin-top: 15px;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .review-form button:hover {
          background-color: #45a049;
        }

        .reviews-list {
          margin-top: 20px;
          padding: 0;
        }

        .review-item {
          list-style: none;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }

        .review-item h4 {
          margin: 0;
          font-size: 1.1em;
          color: #333;
        }

        .review-item p {
          margin: 5px 0;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default ReviewsPage;
