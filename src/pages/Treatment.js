import React, { useState, useEffect } from "react";
import { ImWhatsapp } from "react-icons/im";
import { IoMdArrowDropright } from "react-icons/io";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import styles from "../styles/Tratamento.module.css";

import image1 from "../images/acupuntura_tratamento.jpg"; //Acupuntura
import image2 from "../images/aromaterapia_tratamento.jpg"; //Aromaterapia
import image3 from "../images/auriculoterapia_tratamento.jpg"; //Auriculoterapia
import image4 from "../images/cromoterapia_tratamento.jpg"; //Cama de cristal/Cromoterapia
import image5 from "../images/drenagem_tratamento.jpg"; //Drenagem linfática
import image6 from "../images/Liberacao_tratamento.jpg"; //Liberação miofascial
import image7 from "../images/relaxante_tratamento.jpg"; //Massagem relaxante
import image8 from "../images/terapeutica_tratamento.jpeg"; //Massagem terapêutica
import image9 from "../images/microfisioterapia_tratamento.jpg"; //Microfisioterapia
import image10 from "../images/moxaterapia_tratamento.jpg"; //Moxaterapia
import image11 from "../images/sentai_tratamento.jpg"; //New Seitai
import image12 from "../images/quiro.jpg"; //Quick
import image13 from "../images/quiropraxia_tratamento.jpg"; //Quiropraxia
import image14 from "../images/florais_tratamento.png"; //Terapia com florais
import image15 from "../images/combinada_tratamento.jpg"; //Terapias combinadas
import image16 from "../images/dor_tratamento.jpg"; //Tratamento da dor
import image17 from "../images/fibrimialgia_tratamento.jpeg"; //Tratamento para fibromialgia
import image18 from "../images/ventosa_tratamento.jpg"; //Ventosaterapia
import image19 from "../images/quiro.jpg"; //Yogaterapia

import background from "../images/Banner_Tratamentos2.png";

function Treatment() {
  const dados = [
    {
      title: "Acupuntura",
      image: image1,
      paragraph1:
        "A acupuntura é uma técnica terapêutica milenar que tem como base a crença de que o corpo humano possui canais de energia, chamados de meridianos, que estão interconectados e influenciam a saúde e o bem-estar. Quando esse fluxo de energia é perturbado, podem surgir desequilíbrios e doenças. Através da estimulação dos pontos de acupuntura, a energia é restaurada e o corpo é incentivado a se curar de forma natural.",
      paragraph2:
        "Na Clínica Equilíbrio Interior, acreditamos na abordagem holística da acupuntura, que trata o corpo, a mente e o espírito como um todo interconectado."
    },
    {
      title: "Aromaterapia",
      image: image2,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Auriculoterapia",
      image: image3,
      paragraph1:
        "A Acupuntura Auricular é conhecida por sua eficácia no tratamento de uma variedade de condições, incluindo dores crônicas, distúrbios do sono, ansiedade, estresse, vícios, problemas de digestão, entre outros. É uma abordagem terapêutica holística que visa tratar não apenas os sintomas, mas também as causas subjacentes dos desequilíbrios no corpo.",
      paragraph2:
        "Durante a sessão, pequenas agulhas ou outros estímulos serão aplicados nos pontos auriculares relevantes, proporcionando um efeito terapêutico específico para o seu caso."
    },
    {
      title: "Cama de Cristal/Cromoterapia",
      image: image4,
      paragraph1:
        "A Cromoacupuntura pode ser utilizada para tratar uma variedade de condições, como dores crônicas, distúrbios do sono, ansiedade, estresse, problemas digestivos, entre outros. Cada cor possui propriedades terapêuticas específicas, e a seleção cuidadosa das cores utilizadas durante o tratamento é essencial para obter os melhores resultados.",
      paragraph2:
        "É importante ressaltar que a cromoacupuntura deve ser realizada por terapeutas qualificados e experientes, que possuem conhecimento tanto em acupuntura quanto em cromoterapia."
    },
    {
      title: "Drenagem Linfática",
      image: image5,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Liberação Miofascial",
      image: image6,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Massagem Relaxante",
      image: image7,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Massagem Terapêutica",
      image: image8,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Microfisioterapia",
      image: image9,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Moxaterapia",
      image: image10,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "New Seitai",
      image: image11,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Quick",
      image: image12,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Quiropraxia",
      image: image13,
      paragraph1:
        "A quiropraxia é uma abordagem holística que reconhece a interconexão entre a coluna vertebral, o sistema nervoso e a saúde geral. Nosso quiropraxista utiliza ajustes manuais suaves e precisos para realinhar a coluna e liberar tensões e restrições nas articulações, permitindo que o corpo se cure naturalmente.",
      paragraph2:
        "Ao longo desses 20 anos, ajudamos inúmeros clientes a superar uma variedade de condições, como dores nas costas, dores de cabeça, tensão muscular, lesões esportivas e muito mais."
    },
    {
      title: "Terapia com Florais",
      image: image14,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Terapias Combinadas",
      image: image15,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Tratamento da Dor",
      image: image16,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Tratamento para Fibromialgia",
      image: image17,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Ventosaterapia",
      image: image18,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Yogaterapia",
      image: image19,
      paragraph1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      paragraph2:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  ];

  const [shouldApplyBackground, setShouldBackground] = useState(false);
  const [pageYPosition, setPageYPosition] = useState(0);

  const [containerDoubts, setContainerDoubts] = useState(false);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", getPageYAfterScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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

  const throttle = require("lodash/throttle");

  const players = Array.from(document.querySelectorAll("img"));
  console.log(players);

  function isOnScreen(el) {
    let rect = el.getBoundingClientRect();
    return rect.top > 0 && rect.bottom < window.innerHeight;
  }

  function playAnimation(el) {
    if (isOnScreen(el)) el.style.animationPlayState = "running";
  }

  const render = throttle(() => players.forEach(playAnimation), 150);

  render();
  window.addEventListener("scroll", render);

  function handleScrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleScrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Ajuste conforme necessário
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className={styles.container}>
      <Header shouldApplyBackground={shouldApplyBackground} />
      <img
        id="background"
        className={styles.background}
        src={background}
        alt="Imagem"
      />
      <div style={{ alignSelf: "center" }}>
        <h1 className={styles.titleTreatments}>
          Principais serviços que oferecemos aqui na Equilíbrio:
        </h1>
        <div className={styles.columnsContainer}>
          {[...Array(4)].map((_, colIndex) => (
            <ul key={colIndex} className={styles.column}>
              {dados.slice(colIndex * 5, (colIndex + 1) * 5).map((data, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleScrollTo(`tratamento-${colIndex * 5 + index}`)}
                    className="scroll-highlight"
                  >
                    <IoMdArrowDropright />
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <hr className={styles.lineTreatments} />
        {dados.map((data, index) => (
          <div id={`tratamento-${index}`} className={styles.containerTreatments} key={index}>
            <div
              className={
                index % 2 === 0
                  ? styles.containerImgTextTreatmentsRight
                  : styles.containerImgTextTreatmentsLeft
              }
            >
              <div className={styles.containerTextTreatments}>
                <h3>{data.title}</h3>
                <p>{data.paragraph1}</p>
                <p>{data.paragraph2}</p>
              </div>
              <div>
                <img
                  className={
                    index % 2 === 0
                      ? styles.imgTreatmentsRight
                      : styles.imgTreatmentsLeft
                  }
                  src={data.image}
                  alt={`${data.title} imagem`}
                />
              </div>
            </div>
            <hr className={styles.lineTreatments} />
          </div>
        ))}
      </div>
      <div className={styles.containerButtons}>
        {pageYPosition > 900 && (
          <div className={styles.containerScroll}>
            <span
              onClick={() => scrollToTop()}
              className={styles.btnScroll}
            ></span>
          </div>
        )}
        <div className={styles.containerWhats}>
          <p style={containerDoubts ? { visibility: "visible" } : { visibility: "hidden" }} className={styles.paragraphWhats}>Tire suas dúvidas!</p>
          <div
            className={styles.iconWhats}
            onMouseEnter={() => setContainerDoubts(true)}
            onMouseLeave={() => setContainerDoubts(false)}
          >
            <ImWhatsapp color="#FFF" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Treatment;
