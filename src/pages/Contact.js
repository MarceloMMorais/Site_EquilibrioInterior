import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { SocialIcon } from "react-social-icons";
import GoogleMapReact from "google-map-react";

import Header from "../components/Header";
import styles from "../styles/Contact.module.css";

function Contact() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const coordinates = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className={styles.container}>
      <Header />
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
      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" }}
          defaultCenter={coordinates.center}
          defaultZoom={coordinates.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Contact;
