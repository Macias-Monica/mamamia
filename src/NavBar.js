import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order">Ordenar</Link>
          </li>
          <li>
            <Link to="/jobs">Empleo</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/locations">Directorio</Link>
          </li>
          <li>
            <Link to="/aboutus">Nuestra Historia</Link>
          </li>
          <li>
            <Link to="/FAQ">FAQ</Link>
          </li>
        </ul>
      </nav>
      <h1>Pizzeria MamaMia</h1>
    </header>
  );
}
