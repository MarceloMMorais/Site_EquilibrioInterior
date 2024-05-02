import React, { useState, useEffect } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaGripLinesVertical } from "react-icons/fa";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import styles from "../styles/Tratamento.module.css";
import ButtonWhatsScroll from "../components/ButtonWhatsScroll.js";

import image1 from "../images/Tratamentos/acupuntura_tratamento.jpg"; //Acupuntura
import image2 from "../images/Tratamentos/Agulhamento_a_Seco.jpg"; //Agulhamento A Seco
import image3 from "../images/Tratamentos/Drenagem_Em_Gestantes.jpg"; //Drenagem Em Gestantes
import image4 from "../images/Tratamentos/Drenagem_linfatica.jpg"; //Drenagem Linfática
import image5 from "../images/Tratamentos/Esfoliacao_Corporal.jpg"; //Esfoliação Corporal
import image6 from "../images/Tratamentos/liberacao_miofascial.jpg"; //Liberação Miofacial
import image7 from "../images/Tratamentos/limpeza_de_pele.jpg"; //Limpeza de Pele
import image8 from "../images/Tratamentos/massagem_facial.jpg"; //Massagem Facial
import image9 from "../images/Tratamentos/Massagem_Modeladora.jpg"; //Massagem Modeladora
import image10 from "../images/Tratamentos/Massagem_Relaxante.jpg"; //Massagem Relaxante
import image11 from "../images/Tratamentos/Massagem_Terapeutica.jpg"; //Massagem Terapêutica
import image12 from "../images/Tratamentos/microfisioterapia.jpg"; //Microfisioterapia
import image13 from "../images/Tratamentos/Quick_Massagem.jpg"; //Quick Massage
import image14 from "../images/Tratamentos/quiropraxia.jpg"; //Quiropraxia
import image15 from "../images/Tratamentos/tapping.jpeg"; //Tappyng
import image16 from "../images/Tratamentos/tratamento_Dor_l.jpg"; //Tratamento Da Dor
import image17 from "../images/Tratamentos/DTM.jpg"; //Tratamento De DTM / Enxaqueca
import image18 from "../images/Tratamentos/Tratamento_De_Incontinencia.jpg"; //Tratamento De Incontinência

import background from "../images/Tratamentos.jpg";

function Treatment() {
  const dados = [
    {
      title: "Acupuntura",
      image: image1,
      paragraph1:
        "A acupuntura é uma técnica terapêutica milenar que tem como base a crença de que o corpo humano possui canais de energia, chamados de meridianos, que estão interconectados e influenciam a saúde e o bem-estar. Quando esse fluxo de energia é perturbado, podem surgir desequilíbrios e doenças. Através da estimulação dos pontos de acupuntura, a energia é restaurada e o corpo é incentivado a se curar de forma natural.",
      paragraph2:
        "Na Clínica Equilíbrio Interior, acreditamos na abordagem holística da acupuntura, que trata o corpo, a mente e o espírito como um todo interconectado.",
    },
    {
      title: "Agulhamento A Seco",
      image: image2,
      paragraph1:
        "A aromaterapia utiliza óleos essenciais de plantas para promover o bem-estar físico e emocional. Extraídos de flores, folhas e raízes, esses óleos têm propriedades aromáticas que afetam positivamente o corpo e a mente. Podem ser inalados ou aplicados na pele, adaptando-se às necessidades individuais, como alívio do estresse ou melhoria do sono.",
      paragraph2:
        "A aromaterapia contribui para redução de estresse, melhoria do humor e alívio de condições físicas, integrando-se a abordagens holísticas.",
    },
    {
      title: "Drenagem Em Gestantes",
      image: image3,
      paragraph1:
        "A Acupuntura Auricular é conhecida por sua eficácia no tratamento de uma variedade de condições, incluindo dores crônicas, distúrbios do sono, ansiedade, estresse, vícios, problemas de digestão, entre outros. É uma abordagem terapêutica holística que visa tratar não apenas os sintomas, mas também as causas subjacentes dos desequilíbrios no corpo.",
      paragraph2:
        "Durante a sessão, pequenas agulhas ou outros estímulos serão aplicados nos pontos auriculares relevantes, proporcionando um efeito terapêutico específico para o seu caso.",
    },
    {
      title: "Drenagem Linfática",
      image: image4,
      paragraph1:
        "A Cromoacupuntura pode ser utilizada para tratar uma variedade de condições, como dores crônicas, distúrbios do sono, ansiedade, estresse, problemas digestivos, entre outros. Cada cor possui propriedades terapêuticas específicas, e a seleção cuidadosa das cores utilizadas durante o tratamento é essencial para obter os melhores resultados.",
      paragraph2:
        "É importante ressaltar que a cromoacupuntura deve ser realizada por terapeutas qualificados e experientes, que possuem conhecimento tanto em acupuntura quanto em cromoterapia.",
    },
    {
      title: "Esfoliação Corporal",
      image: image5,
      paragraph1:
        "A Drenagem Linfática é uma técnica de massagem terapêutica que visa estimular o sistema linfático, responsável pela remoção de toxinas e resíduos do corpo. Realizada por profissionais especializados, a técnica utiliza movimentos suaves e ritmados que direcionam o excesso de líquidos acumulados nos tecidos para os gânglios linfáticos, promovendo a eliminação de edemas, melhorando a circulação sanguínea e fortalecendo o sistema imunológico.",
      paragraph2:
        "Além de seus benefícios estéticos, a Drenagem Linfática é frequentemente indicada como parte do tratamento pós-operatório, na redução de inchaços e para aliviar a sensação de pernas cansadas, proporcionando uma sensação de relaxamento e bem-estar.",
    },
    {
      title: "Liberação Miofacial",
      image: image6,
      paragraph1:
        "A Liberação Miofascial é uma técnica terapêutica que visa aliviar tensões e restrições nos tecidos conjuntivos, conhecidos como fáscia, que envolvem músculos, ossos e órgãos. A técnica consiste em aplicar pressão controlada e sustentada em áreas específicas, buscando desfazer aderências e melhorar a flexibilidade dos músculos e das camadas subjacentes da fáscia. Essa abordagem não apenas alivia dores musculares, mas também pode contribuir para a melhoria da postura, aumento da amplitude de movimento e otimização da função muscular.",
      paragraph2:
        "A Liberação Miofascial é frequentemente utilizada em terapias físicas e esportivas, proporcionando benefícios tanto para atletas em recuperação quanto para indivíduos que buscam alívio de desconfortos musculares crônicos.",
    },
    {
      title: "Limpeza de Pele",
      image: image7,
      paragraph1:
        "A Massagem Relaxante é uma técnica suave e delicada projetada para promover o relaxamento físico e mental. Realizada através de movimentos lentos e envolventes, essa modalidade de massagem busca aliviar o estresse, reduzir a tensão muscular e induzir uma sensação profunda de tranquilidade.",
      paragraph2:
        "Ao utilizar pressões suaves e deslizamentos, os terapeutas especializados em Massagem Relaxante visam criar uma experiência terapêutica que estimule a liberação de endorfinas, promovendo um estado de calma e bem-estar que beneficia tanto o corpo quanto a mente.",
    },
    {
      title: "Massagem Facial",
      image: image8,
      paragraph1:
        "A Massagem Terapêutica é uma prática holística que combina técnicas manuais para promover o bem-estar físico e emocional. Essa forma de massagem visa aliviar dores musculares, reduzir o estresse e melhorar a circulação sanguínea. Através de movimentos específicos, pressões e manipulações, a Massagem Terapêutica pode ser adaptada para atender às necessidades individuais, proporcionando relaxamento profundo, alívio de tensões e contribuindo para a promoção da saúde geral.",
      paragraph2:
        "Essa modalidade de massagem é frequentemente incorporada em tratamentos de reabilitação, gestão da dor e programas de bem-estar, oferecendo uma abordagem integrativa para o cuidado do corpo e da mente.",
    },
    {
      title: "Massagem Modeladora",
      image: image9,
      paragraph1:
        "A Microfisioterapia é uma abordagem terapêutica que busca identificar e tratar as causas profundas de sintomas e disfunções no corpo. Desenvolvida por fisioterapeutas franceses, essa técnica considera que as memórias traumáticas e os desequilíbrios energéticos podem ser registrados nas células do corpo, contribuindo para problemas de saúde.",
      paragraph2:
        "Durante uma sessão de Microfisioterapia, nós utilizamos toques sutis em diferentes áreas do corpo para identificar os bloqueios e estimular a autocorreção do organismo, promovendo a restauração do equilíbrio e favorecendo a recuperação natural. Essa abordagem integrativa visa não apenas tratar os sintomas, mas compreender e abordar as causas subjacentes das condições de saúde.",
    },
    {
      title: "Massagem Relaxante",
      image: image10,
      paragraph1:
        "A Moxaterapia é uma técnica terapêutica tradicional da medicina chinesa que utiliza a queima de moxa, uma substância feita de Artemisia vulgaris (erva-mãe), para estimular pontos específicos no corpo. Durante uma sessão de Moxaterapia, pequenas quantidades de moxa são acesas e colocadas sobre pontos de acupuntura ou movimentadas próximas à pele, gerando calor. Esse calor é acreditado por praticantes da medicina chinesa tradicional como capaz de estimular o fluxo de energia vital, aliviando dores, fortalecendo o sistema imunológico e promovendo o equilíbrio energético no corpo.",
      paragraph2:
        "A Moxaterapia é frequentemente usada em conjunto com a acupuntura, sendo considerada uma prática complementar para tratar uma variedade de condições, desde dores musculares até problemas digestivos. Seu objetivo é restabelecer o fluxo harmonioso de energia no corpo, proporcionando uma abordagem holística para a promoção da saúde e o alívio de desconfortos físicos.",
    },
    {
      title: "Massagem Terapêutica",
      image: image11,
      paragraph1: "Em breve novas informações sobre este tratamento.",
      paragraph2: "",
    },
    {
      title: "Microfisioterapia",
      image: image12,
      paragraph1: "Em breve novas informações sobre este tratamento.",
      paragraph2: "",
    },
    {
      title: "Quick Massage",
      image: image13,
      paragraph1:
        "A quiropraxia é uma abordagem holística que reconhece a interconexão entre a coluna vertebral, o sistema nervoso e a saúde geral. Nosso quiropraxista utiliza ajustes manuais suaves e precisos para realinhar a coluna e liberar tensões e restrições nas articulações, permitindo que o corpo se cure naturalmente.",
      paragraph2:
        "Ao longo desses 20 anos, ajudamos inúmeros clientes a superar uma variedade de condições, como dores nas costas, dores de cabeça, tensão muscular, lesões esportivas e muito mais.",
    },
    {
      title: "Quiropraxia",
      image: image14,
      paragraph1:
        "A Terapia com Florais é uma abordagem de medicina alternativa que utiliza essências florais para promover o equilíbrio emocional e o bem-estar psicológico. Criada pelo médico inglês Edward Bach na década de 1930, essa terapia envolve a seleção de essências florais específicas, cada uma associada a estados emocionais particulares.",
      paragraph2:
        "Essas essências são diluídas e administradas ao paciente, com o objetivo de harmonizar as emoções, aliviar o estresse e promover um estado mental mais positivo. A Terapia com Florais é frequentemente considerada uma prática complementar, destinada a apoiar o aspecto emocional e mental da saúde, contribuindo para o tratamento de questões como ansiedade, depressão e desequilíbrios emocionais.",
    },
    {
      title: "Tappyng",
      image: image15,
      paragraph1:
        "As Terapias Combinadas referem-se à abordagem terapêutica que integra diferentes técnicas e modalidades para oferecer um tratamento abrangente e personalizado. Essa prática envolve a combinação de diversas terapias complementares, como massagem, acupuntura, quiropraxia, entre outras, adaptadas de acordo com as necessidades individuais do paciente.",
      paragraph2:
        "O objetivo é criar uma sinergia entre as diferentes abordagens, visando maximizar os benefícios terapêuticos e promover uma abordagem holística para a saúde e o bem-estar. Essa integração pode proporcionar uma resposta mais eficaz a uma variedade de condições, abordando tanto os aspectos físicos quanto emocionais do paciente.",
    },
    {
      title: "Tratamento Da Dor",
      image: image16,
      paragraph1:
        "O Tratamento da Dor abrange uma variedade de abordagens terapêuticas destinadas a aliviar ou gerenciar desconfortos físicos. Este pode incluir métodos farmacológicos, como analgésicos, anti-inflamatórios e terapias medicamentosas, além de intervenções não farmacológicas, como fisioterapia, acupuntura, massagem e exercícios físicos específicos.",
      paragraph2:
        "O objetivo principal é identificar a causa subjacente da dor e aplicar estratégias adequadas para minimizar os sintomas, promovendo a recuperação e melhor qualidade de vida para o paciente. A abordagem escolhida pode variar de acordo com a natureza e a intensidade da dor, proporcionando uma gama diversificada de opções para atender às necessidades individuais de cada pessoa.",
    },
    {
      title: "Tratamento De DTM / Enxaqueca",
      image: image17,
      paragraph1:
        "O Tratamento para Fibromialgia envolve uma abordagem multidisciplinar, visto que essa condição crônica caracterizada por dor generalizada e sensibilidade nos músculos e tecidos moles pode afetar diversos aspectos da vida do paciente. Os protocolos terapêuticos comumente incluem medicamentos para aliviar a dor, melhorar o sono e controlar sintomas associados, como depressão e ansiedade.",
      paragraph2:
        "Além disso, terapias não farmacológicas, como exercícios físicos adaptados, fisioterapia, técnicas de relaxamento, acupuntura e aconselhamento psicológico, são frequentemente incorporadas para proporcionar uma abordagem holística, visando melhorar a qualidade de vida e gerenciar os sintomas da fibromialgia de maneira mais abrangente.",
    },
    {
      title: "Tratamento De Incontinência",
      image: image18,
      paragraph1:
        "A Ventosaterapia é uma técnica terapêutica que utiliza copos de vidro ou plástico para criar sucção na pele, estimulando a circulação sanguínea e promovendo o alívio de tensões musculares. Durante o procedimento, os copos são colocados sobre áreas específicas do corpo, criando um vácuo que pode resultar em marcas temporárias circulares na pele.",
      paragraph2:
        "Esta prática, originada em antigas medicinas tradicionais, é frequentemente utilizada para tratar dores musculares, promover o relaxamento e melhorar a circulação, sendo uma opção complementar em diversos tratamentos de fisioterapia e bem-estar.",
    },
  ];
  const [paragrafosVisiveis, setParagrafosVisiveis] = useState([]);
  const [shouldApplyBackground, setShouldBackground] = useState(false);

  const toggleParagrafos = (index) => {
    setParagrafosVisiveis((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
    window.scrollTo({
      top: element.offsetTop - 200,
      behavior: "smooth",
    });
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
      <h1 className={styles.titleTreatments}>
        Principais serviços que oferecemos aqui na Equilíbrio:
      </h1>
      <div className={styles.columnsContainer}>
        {[...Array(4)].map((_, colIndex) => (
          <ul key={colIndex} className={styles.column}>
            {dados
              .slice(colIndex * 5, (colIndex + 1) * 5)
              .map((data, index) => (
                <li key={index}>
                  <a
                    onClick={() =>
                      handleScrollTo(`tratamento-${colIndex * 5 + index}`)
                    }
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
        <div
          id={`tratamento-${index}`}
          className={styles.containerTreatments}
          key={index}
        >
          <h2 className={styles.tittle}>
            <FaGripLinesVertical size={20} color="#038d6c" />
            {data.title}
          </h2>
          <div className={styles.containerImgTextTreatments}>
            <div className={styles.containerTextTreatments}>
              <div
                className={styles.containerTittle}
                onClick={() => toggleParagrafos(index)}
              >
                <div>
                  <IoIosArrowDropdownCircle
                    color="#038d6c"
                    size={25}
                    style={{
                      transform: paragrafosVisiveis[index]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "all 0.8s ease",
                    }}
                  />
                  <h3>{data.title}</h3>
                </div>
                <div>
                  <h3 className={styles.tittleValue}>VALOR SOB CONSULTA</h3>
                </div>
              </div>
              <div
                className={`${styles.containerParagrafos} ${
                  paragrafosVisiveis[index] ? styles.visible : styles.hidden
                }`}
                style={{
                  transition: "height 0.8s ease",
                }}
              >
                <p>{data.paragraph1}</p>
                <p>{data.paragraph2}</p>
              </div>
            </div>
            <div className={styles.containerImgTreatments}>
              <img
                className={styles.imgTreatments}
                src={data.image}
                alt={`${data.title} imagem`}
              />
            </div>
          </div>
        </div>
      ))}
      <ButtonWhatsScroll />
      <Footer />
    </div>
  );
}

export default Treatment;