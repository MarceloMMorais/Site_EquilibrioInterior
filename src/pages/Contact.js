import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons";
import Maps from '../images/PhotoMaps.png'

import Header from "../components/Header";
import styles from "../styles/Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <Header shouldApplyBackground={true} />
      <h1 className={styles.title}>Fale Conosco</h1>
      <div className={styles.containerInfoForm}>
        <div className={styles.text}>
          <div className={styles.containerInfo}>
            <FaMapMarkerAlt color="#038d6c" />
            <p>
              Rua João Baptista Fernandes, 169 Centro - São Sebastião - São
              Paulo
            </p>
          </div>
          <div className={styles.containerInfo}>
            <FaPhoneAlt color="#038d6c" />
            <p>(12) 9 9722-8453</p>
          </div>
          <div className={styles.containerInfo}>
            <FaEnvelope color="#038d6c" />
            <p>atendimento@equilibriointerior.com.br</p>
          </div>
          <div className={styles.redes}>
            <p>Nossas redes sociais:</p>
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
          <div>
            <a target="_blank" href="https://www.google.com.br/maps/place/Equil%C3%ADbrio+Interior+Terapias+Naturais/@-23.8001732,-45.4019522,17z/data=!3m1!4b1!4m6!3m5!1s0x94d29bf0f2580595:0xc2eb8092d00b565a!8m2!3d-23.8001732!4d-45.4019522!16s%2Fg%2F11h2hhn22n?entry=ttu">
              <img
                src={Maps}
                alt="Localização"
                className={styles.imgMaps}
              />
            </a>
          </div>
        </div>
        <div className={styles.containerForm}>
          <form
            action="https://api.staticforms.xyz/submit"
            className={styles.form}
            method="post"
          >
            <label className={styles.label} for="name">
              *Seu nome:
            </label>
            <input className={styles.input} type="text" id="name" name="name" />
            <label className={styles.label} for="email">
              *E-mail:
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
            />
            <label className={styles.label} for="subject">
              *Assunto:
            </label>
            <select className={styles.input} name="subject">
              <option value="Dúvidas">Dúvidas</option>
              <option value="Reclamação">Reclamação</option>
              <option value="Sugestão">Sugestão</option>
            </select>
            <label className={styles.label} for="message">
              *Sua mensagem:
            </label>
            <textarea className={styles.input} id="message" name="message" />
            <input
              className={styles.buttonSubmit}
              type="submit"
              value="Enviar"
            />
            <input type="hidden" name="replyTo" value="@" />
            <input
              type="hidden"
              name="accessKey"
              value="d1f90f58-5fee-4da2-bf45-5e359b291014"
            />
            <input type="hidden" name="redirectTo" value="http://localhost:3000/Fale-Conosco"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
