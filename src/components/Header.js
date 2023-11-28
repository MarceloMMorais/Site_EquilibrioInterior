import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";

function Header({ shouldApplyBackground }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${styles.container} ${shouldApplyBackground ? styles.background : ""
        }`}
    >
      <div className={styles.containerMenu}>
        <div className={styles.menuButton} onClick={toggleMenu}>
          {shouldApplyBackground ? (
            <TiThMenuOutline color="#adc8b7" />
          ):(
            <TiThMenuOutline color="#038d6c" />
          )}
          
        </div>

        <div className={`${styles.menuLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
          <Link className={styles.links} to="/" onClick={toggleMenu}>
            Início
          </Link>
          <Link className={styles.links} to="/Quem-Somos" onClick={toggleMenu}>
            Quem Somos
          </Link>
          <Link className={styles.links} to="/Tratamentos" onClick={toggleMenu}>
            Tratamentos
          </Link>
          <Link className={styles.links} to="/Fale-Conosco" onClick={toggleMenu}>
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
