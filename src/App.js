import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import Menu from "./Menu";
import Header from "./NavBar";

const openHour = 0; // Hora de apertura
const closedHour = 24; // Hora de cierre

function App() {
  return (
    <div className="container">
      <Menu />
      <SectionMap />
      <Footer />
    </div>
  );
}

function SectionMap() {
  const mapStyles = {
    width: "600px",
    height: "450px",
    border: "0",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
  };
  return (
    <div className="menu">
      <h2>Mapa</h2>
      <p>
        Dirección: Calle de la Pizza 123, Ciudad del Sabor, CP 45678
        <br />
        Teléfono: (555) 123-4567
        <br />
        Correo electrónico: contacto@pizzeriamamamia.com
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.0326850471415!2d-117.06111006254348!3d32.3737865012155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9316dbf79bb71%3A0x22f3c55be5a6f844!2sLittle%20Caesars%20Pizza!5e0!3m2!1ses-419!2smx!4v1729322092716!5m2!1ses-419!2smx"
        style={mapStyles}
        title="Mapa de Pizzeria"
      ></iframe>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour < closedHour;

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
          <p>
            Dirección: Calle de la Pizza 123, Ciudad del Sabor, CP 45678
            <br />
            Teléfono: (555) 123-4567
            <br />
            Correo electrónico: contacto@pizzeriamamamia.com
          </p>
        </>
      )}
      <IconWA />
      <SocialMediaIcons />
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
            position: "fixed",
            right: "50px",
            bottom: "40px",
          }}
        />
      </a>
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="social-media-container">
      <p>Síguenos en nuestras redes sociales</p>
      <div className="social-media-icons">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
}

function Order({ closed, open }) {
  return (
    <div className="order">
      <p>
        ¡Estamos actualmente abiertos! Nuestro horario de atención es de {open}
        :00 hasta {closed}:00. ¡Ven a visitarnos u ordena en línea!
      </p>
      <Link to="/order">
        <button className="btn">Ordena!</button>
      </Link>
    </div>
  );
}

export default App;
