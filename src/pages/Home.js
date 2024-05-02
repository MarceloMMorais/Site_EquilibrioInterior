import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Importação de componentes
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ButtonWhatsScroll from "../components/ButtonWhatsScroll.js";
import Slider from "../components/Slider.js";

// Arquivo css
import styles from "../styles/Home.module.css";

// Imagens utilizadas
import background from "../images/Banner_home_novo2.jpg";
import image1 from "../images/Tratamentos/acupuntura_tratamento.jpg";
import image2 from "../images/Tratamentos/quiropraxia.jpg";
import image3 from "../images/Tratamentos/Massagem_Relaxante.jpg";

function Home() {
  const [shouldApplyBackground, setShouldBackground] = useState(false);

  // Função para verificar se a imagem está fora da tela
  const checkImagePosition = () => {
    const headerContainer = document.querySelector(`.${styles.container}`);
    const image = document.getElementById("background");

    if (headerContainer && image) {
      const imageRect = image.getBoundingClientRect();
      if (imageRect.bottom <= 0) {
        setShouldBackground(true);
      } else {
        setShouldBackground(false);
      }
    }
  };

  // Adicione um listener para verificar a posição da imagem ao carregar a página
  useEffect(() => {
    checkImagePosition();
    window.addEventListener("scroll", checkImagePosition);

    // Limpe o listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", checkImagePosition);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header shouldApplyBackground={shouldApplyBackground} />
      <div className={styles.containerImgTitle}>
        <img
          id="background"
          className={styles.background}
          src={background}
          alt="Imagem"
        />
        <div className={styles.containerTitles}>
          <h1 className={styles.title1}>Equilíbrio Interior</h1>
          <h2 className={styles.title2}>Terapias Naturais</h2>
        </div>
      </div>
      <div className={styles.containerResume}>
        <h1 className={styles.titleResume}>Um pouco sobre nós</h1>
        <p className={styles.paragraphResume}>
          Celebrando duas décadas de dedicação e cuidado, a Clínica Equilíbrio
          Interior comemora seus 20 anos de existência. Ao longo dessa
          trajetória, temos sido uma referência em oferecer bem-estar físico e
          emocional a todos os nossos pacientes. Desde o nosso primeiro dia,
          nossa missão tem sido auxiliar as pessoas a encontrarem o equilíbrio
          perdido em meio às turbulências da vida moderna. Reconhecemos que
          muitos indivíduos enfrentam desafios emocionais que se manifestam de
          diversas formas, afetando sua saúde e qualidade de vida.
        </p>
        <Slider name="videos"/>
        <div className={styles.containerButton}>
          <Link
            className={styles.button}
            preventScrollReset={false}
            to="/Quem-Somos"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
      <div className={styles.containerSentence}>
        <h3>
          Curar as vezes, aliviar frequentemente e confortar sempre com todos os
          meios que possamos dispor.
        </h3>
        <hr className={styles.line} />
        <h3>
          Clínica Equilíbrio Interior - Cuidando de você há 20 anos e pelos
          próximos que virão!
        </h3>
      </div>
      <div style={{ alignSelf: "center" }}>
        <h1 className={styles.titleTreatments}>Alguns de nossos tratamentos</h1>
        <div className={styles.containerTreatments}>
          <div className={styles.containerImgTextTreatmentsRight}>
            <div className={styles.containerTextTreatments}>
              <h3>Acupuntura</h3>
              <p>
                É uma prática terapêutica tradicional da medicina chinesa que
                envolve a aplicação de agulhas em pontos específicos do corpo.
              </p>
            </div>
            <div className={styles.containerImgTreatments}>
              <img
                className={styles.imgTreatments}
                src={image1}
                alt="Acupuntura imagem"
              />
            </div>
          </div>
          <hr className={styles.lineTreatments} />
          <div className={styles.containerImgTextTreatmentsLeft}>
            <div className={styles.containerImgTreatments}>
              <img
                className={styles.imgTreatments}
                src={image2}
                alt="Acupuntura imagem"
              />
            </div>
            <div className={styles.containerTextTreatmentsRight}>
              <h3>Quiropraxia</h3>
              <p>
                É uma abordagem terapêutica que se concentra no diagnóstico,
                tratamento e prevenção de distúrbios do sistema
                musculoesquelético, especialmente da coluna vertebral.
              </p>
            </div>
          </div>
          <hr className={styles.lineTreatments} />
          <div className={styles.containerImgTextTreatmentsRight}>
            <div className={styles.containerTextTreatments}>
              <h3>Massagem Clássica</h3>
              <p>
                É uma forma tradicional de terapia manual que utiliza técnicas
                específicas de movimentos e pressão para promover relaxamento
                muscular, alívio de tensões e melhorar a circulação sanguínea.
              </p>
            </div>
            <div className={styles.containerImgTreatments}>
              <img
                className={styles.imgTreatments}
                src={image3}
                alt="Acupuntura imagem"
              />
            </div>
          </div>
        </div>
        <div className={styles.containerButton}>
          <Link
            preventScrollReset={false}
            className={styles.button}
            to="/Tratamentos"
          >
            Veja Mais
          </Link>
        </div>
        <ButtonWhatsScroll />
      </div>
      <Footer />
    </div>
  );
}

export default Home;