import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

function Header({ shouldApplyBackground }) {
  return (
    <div
      className={`${styles.container} ${
        shouldApplyBackground ? styles.background : ""
      }`}
    >
      <div className={styles.containerMenu}>
        <Link className={styles.links} to="/">Início</Link>
        <Link className={styles.links} to="/Quem-Somos">Quem Somos</Link>
        <Link className={styles.links} to="/Tratamentos">Tratamentos</Link>
        <Link className={styles.links} to="/Fale-Conosco">Fale Conosco</Link>
      </div>
    </div>
  );
}

export default Header;
