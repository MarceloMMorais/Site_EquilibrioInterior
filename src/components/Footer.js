import styles from "../styles/Footer.module.css";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

function Footer() {

  return (
    <div className={styles.container}>
      <div className={styles.containerInformation}>
        <div className={styles.text}>
          <div className={styles.containerInfo}>
            <p className={styles.cnpj}>
              Equilíbrio Interior | CNPJ: XX.XXX.XXX/XXXX-XX
            </p>
          </div>
          <div className={styles.containerInfo}>
            <FaMapMarkerAlt color="#FFF" />
            <p>
              Rua João Baptista Fernandes, 169 Centro - São Sebastião - São
              Paulo
            </p>
          </div>
          <div className={styles.containerInfo}>
            <FaPhoneAlt color="#FFF" />
            <p>(12) 9 9722-8453</p>
          </div>
          <div className={styles.containerInfo}>
            <FaEnvelope color="#FFF" />
            <p>atendimento@equilibriointerior.com.br</p>
          </div>
        </div>
        <div className={styles.redes}>
          <p>NOSSAS REDES SOCIAIS:</p>
          <div className={styles.containerIcons}>
            <SocialIcon
              className={styles.SocialIcons}
              href="https://www.youtube.com/"
              fgColor="#038d6c"
              bgColor="#FFF"
              url="https://www.instagram.com"
            />
            <SocialIcon
              className={styles.SocialIcons}
              href="https://www.youtube.com/"
              fgColor="#038d6c"
              bgColor="#FFF"
              url="https://www.facebook.com"
            />
            <SocialIcon
              className={styles.SocialIcons}
              href="https://www.youtube.com/"
              fgColor="#038d6c"
              bgColor="#FFF"
              url="https://www.whatsapp.com/"
            />
          </div>
        </div>
      </div>
      <div className={styles.lineFooter}></div>
      <div>
        <p className={styles.copyright}>Copyright © 2003-2023 - Equílibrio Interior-Terapias Naturais</p>
      </div>
    </div>
  );
}

export default Footer;
