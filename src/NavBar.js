import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <ListItem direction={"/"}>Inicio</ListItem>
        <ListItem direction="/menu">Menu</ListItem>
        <ListItem direction={"/promociones"}>Promociones</ListItem>
        <ListItem direction={"/directorio"}>Directorio</ListItem>
        <ListItem direction={"/ubicacion"}>Ubicacion</ListItem>
      </ul>
    </nav>
  );
}

function ListItem({ direction, children }) {
  return (
    <li style={styles.navLink}>
      <Link to={direction}>{children}</Link>
    </li>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#ff6347", // Color tipo tomate (relacionado con pizza)
    padding: "10px",
    textAlign: "center",
    fontFamily: "Poppins, arial, sans-serif",
    position: "sticky",
    top: "0",
    left: "0",
  },
  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
  },
  navItem: {
    margin: "0 15px",
    paddingRight: "2px",
    borderRight: "1px solid black",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
