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
import image19 from "../images/Tratamentos/Enxaqueca.jpeg"; //Tratamento Dor De Cabeça / Enxaqueca
import image18 from "../images/Tratamentos/Tratamento_De_Incontinencia.jpg"; //Tratamento De Incontinência

import background from "../images/Tratamentos.jpg";

function Treatment() {
  const dados = [
    {
      title: "Acupuntura",
      image: image1,
      paragraph1:
        "A acupuntura é uma técnica terapêutica que remonta à antiga medicina chinesa, baseada na inserção de agulhas finas em pontos específicos do corpo. Esses pontos, situados ao longo dos meridianos, canais de energia, são estimulados para restaurar o equilíbrio do fluxo energético e promover a saúde.",
      paragraph2:
        "Embora amplamente utilizada e muitas vezes associada a relatos de alívio da dor e melhoria do bem-estar, a comunidade científica continua a investigar sua eficácia em comparação com tratamentos convencionais, gerando debates sobre sua validade e mecanismos de ação.",
    },
    {
      title: "Agulhamento A Seco",
      image: image2,
      paragraph1:
        "Agulhamento a seco, também conhecido como dry needling, é uma técnica de tratamento utilizada por profissionais de saúde, como fisioterapeutas e quiropráticos, para aliviar dores musculares e tensões. Nessa abordagem, agulhas finas são inseridas em pontos de gatilho muscular, onde há acúmulo de tensão e sensibilidade, visando reduzir a dor e restaurar a função muscular normal.",
      paragraph2:
        "Apesar de sua popularidade crescente e relatos de eficácia por parte de muitos pacientes, a pesquisa científica sobre o agulhamento a seco ainda está em andamento, suscitando discussões sobre sua validade e mecanismos de ação comparados a outras terapias.",
    },
    {
      title: "Drenagem Em Gestantes",
      image: image3,
      paragraph1:
        "A drenagem linfática em gestantes é uma técnica de massagem suave que visa aliviar o inchaço e a retenção de líquidos comuns durante a gravidez. Realizada por profissionais treinados, essa terapia é adaptada para atender às necessidades específicas das mulheres grávidas, promovendo o relaxamento e melhorando a circulação sanguínea e linfática.",
      paragraph2:
        " Embora geralmente considerada segura quando realizada adequadamente, é importante que gestantes obtenham autorização médica antes de iniciar qualquer tratamento, incluindo a drenagem linfática, para garantir a saúde tanto da mãe quanto do bebê.",
    },
    {
      title: "Drenagem Linfática",
      image: image4,
      paragraph1:
        "A drenagem linfática é uma técnica de massagem terapêutica que visa estimular o sistema linfático, responsável pela remoção de toxinas e excesso de líquidos do corpo. Por meio de movimentos suaves e ritmados, essa terapia promove a drenagem dos fluidos acumulados nos tecidos, reduzindo o inchaço, melhorando a circulação e promovendo uma sensação geral de bem-estar.",
      paragraph2:
        "Amplamente utilizada para tratar condições como edema, celulite e retenção de líquidos, a drenagem linfática é considerada segura e eficaz quando realizada por profissionais treinados e pode ser uma opção complementar para melhorar a saúde e a qualidade de vida.",
    },
    {
      title: "Esfoliação Corporal",
      image: image5,
      paragraph1:
        "A esfoliação corporal é um procedimento estético que consiste na remoção das células mortas da pele, proporcionando uma renovação da sua superfície. Geralmente realizada com a aplicação de produtos esfoliantes, como cremes ou géis com partículas abrasivas, ou com o uso de luvas especiais, essa técnica ajuda a promover a regeneração celular, deixando a pele mais macia, suave e luminosa.",
      paragraph2:
        "Além disso, a esfoliação corporal pode estimular a circulação sanguínea, auxiliar na absorção de hidratantes e outros tratamentos tópicos, e até mesmo melhorar a aparência de áreas com problemas como celulite e estrias.",
    },
    {
      title: "Liberação Miofacial",
      image: image6,
      paragraph1:
        "A liberação miofascial é uma técnica de terapia manual que visa aliviar a tensão e o desconforto muscular, bem como melhorar a mobilidade e a função dos tecidos moles do corpo. Nesse procedimento, o terapeuta utiliza pressão suave e contínua em áreas específicas do corpo, visando liberar as restrições na fáscia, uma estrutura de tecido conjuntivo que envolve e suporta músculos, ossos e órgãos.",
      paragraph2:
        "Ao romper aderências e pontos de tensão na fáscia, a liberação miofascial pode proporcionar alívio da dor, aumento da amplitude de movimento e melhoria da postura, sendo utilizada no tratamento de uma variedade de condições musculoesqueléticas, como dor nas costas, dor no pescoço e síndrome do túnel do carpo.",
    },
    {
      title: "Limpeza de Pele",
      image: image7,
      paragraph1:
        "A limpeza de pele é um procedimento estético realizado por profissionais especializados para remover impurezas, células mortas, comedões (cravos) e milium (pontos brancos) da pele, deixando-a mais limpa, suave e saudável. Geralmente, o processo envolve etapas como a aplicação de vapor para abrir os poros, seguida da extração manual ou com instrumentos apropriados, e o uso de produtos específicos para limpar e hidratar a pele. Além de promover uma aparência mais radiante, a limpeza de pele pode ajudar a prevenir o surgimento de acne, reduzir a oleosidade e melhorar a absorção de outros tratamentos cosméticos.",
      paragraph2:
        "É importante que o procedimento seja realizado por um profissional qualificado e que seja adaptado às necessidades individuais de cada pessoa, levando em consideração seu tipo de pele e quaisquer condições dermatológicas existentes.",
    },
    {
      title: "Massagem Facial",
      image: image8,
      paragraph1:
        " massagem facial é uma técnica de terapia manual que visa relaxar os músculos do rosto, promover a circulação sanguínea e linfática, e estimular a regeneração da pele. Realizada com movimentos suaves e precisos, essa massagem pode incluir pressões, deslizamentos e percussões em áreas específicas do rosto, como testa, bochechas, queixo e ao redor dos olhos.",
      paragraph2:
        "Além de proporcionar uma sensação de relaxamento e bem-estar, a massagem facial pode ajudar a reduzir a tensão muscular, suavizar rugas e linhas de expressão, melhorar a luminosidade da pele e facilitar a absorção de produtos cosméticos. É importante que a massagem seja realizada por um profissional treinado, utilizando técnicas adequadas e produtos adequados ao tipo de pele do cliente.",
    },
    {
      title: "Massagem Modeladora",
      image: image9,
      paragraph1:
        "A massagem modeladora é uma técnica estética que utiliza movimentos firmes e rápidos para promover a quebra de gordura localizada e a redução de medidas em áreas específicas do corpo. Por meio de manobras como amassamento, pinçamento e deslizamento profundo, essa massagem estimula a circulação sanguínea e linfática, ajudando a eliminar toxinas e a remodelar a silhueta. Geralmente realizada em regiões como abdômen, coxas e glúteos, a massagem modeladora pode ser uma opção para quem busca melhorar a aparência da pele, reduzir a celulite e promover a sensação de leveza e bem-estar.",
      paragraph2:
        "É importante que o procedimento seja realizado por um profissional qualificado, levando em consideração as condições individuais de cada pessoa e combinando a massagem com hábitos saudáveis de alimentação e atividade física para melhores resultados.",
    },
    {
      title: "Massagem Relaxante",
      image: image10,
      paragraph1:
        "A massagem relaxante é uma técnica terapêutica que visa proporcionar relaxamento físico e mental por meio de movimentos suaves e rítmicos aplicados no corpo. Durante o procedimento, o terapeuta utiliza técnicas como deslizamento, amassamento e pressão leve para aliviar a tensão muscular, reduzir o estresse e promover uma sensação geral de bem-estar. Indicada para aliviar o cansaço, a ansiedade e as dores musculares, a massagem relaxante pode ser uma excelente maneira de relaxar e recarregar as energias após um dia agitado.",
      paragraph2:
        "É importante que o ambiente esteja calmo e tranquilo durante a sessão, permitindo que o cliente se desconecte das preocupações do dia a dia e desfrute dos benefícios terapêuticos da massagem.",
    },
    {
      title: "Massagem Terapêutica",
      image: image11,
      paragraph1: "A massagem terapêutica é uma prática que combina técnicas de massagem para ajudar no tratamento de condições físicas, emocionais e mentais. Realizada por profissionais treinados, essa abordagem personalizada pode incluir uma variedade de técnicas, como massagem sueca, massagem profunda, liberação miofascial e alongamento muscular, adaptadas às necessidades individuais de cada cliente. A massagem terapêutica visa aliviar dores musculares, reduzir o estresse, melhorar a circulação sanguínea e promover o relaxamento geral do corpo e da mente.",
      paragraph2: "É comum que seja recomendada como parte de um plano de tratamento para condições como lesões musculoesqueléticas, dor crônica, ansiedade, depressão e problemas de sono, proporcionando alívio e bem-estar aos pacientes.",
    },
    {
      title: "Microfisioterapia",
      image: image12,
      paragraph1: "A microfisioterapia é uma abordagem terapêutica relativamente recente que busca identificar e tratar desequilíbrios no organismo, incluindo questões físicas, emocionais e energéticas. Baseada na premissa de que o corpo humano possui uma capacidade inata de se auto curar, essa técnica utiliza toques sutis em áreas específicas do corpo para estimular o sistema de autocorreção do organismo e promover a regulação de processos fisiológicos. Durante uma sessão de microfisioterapia, o terapeuta busca identificar memórias celulares de eventos traumáticos ou desequilíbrios que podem estar contribuindo para problemas de saúde, visando estimular a capacidade do corpo de se recuperar e restaurar seu estado de equilíbrio natural.",
      paragraph2: "Embora ainda seja considerada uma abordagem complementar, a microfisioterapia tem sido cada vez mais utilizada como parte integrante de tratamentos para uma variedade de condições de saúde física e emocional.",
    },
    {
      title: "Quick Massage",
      image: image13,
      paragraph1:
        "A Quick Massage é uma técnica de massagem rápida e acessível, geralmente realizada em cadeiras ergonômicas ou poltronas específicas, projetadas para proporcionar alívio do estresse e relaxamento em um curto período de tempo. Durante uma sessão de Quick Massage, o terapeuta utiliza movimentos suaves e firmes em áreas como pescoço, ombros, costas, braços e mãos, visando aliviar a tensão muscular e promover o relaxamento.",
      paragraph2:
        "Essa modalidade de massagem é ideal para ambientes corporativos, eventos ou feiras, onde as pessoas podem desfrutar dos benefícios terapêuticos da massagem em apenas alguns minutos, sem precisar se despir ou dedicar muito tempo à sessão. A Quick Massage é uma opção conveniente e eficaz para quem busca alívio imediato do estresse e do desconforto muscular no dia a dia.",
    },
    {
      title: "Quiropraxia",
      image: image14,
      paragraph1:
        "A quiropraxia é uma prática de saúde manual focada no diagnóstico, tratamento e prevenção de distúrbios musculoesqueléticos, especialmente aqueles relacionados à coluna vertebral. Os quiropráticos utilizam técnicas de ajuste manual ou instrumental para corrigir desalinhamentos da coluna vertebral, conhecidos como subluxações, e restaurar a função normal das articulações e dos tecidos circundantes. Esses ajustes podem ajudar a aliviar dores nas costas, pescoço e articulações, melhorar a mobilidade, promover o equilíbrio e o bem-estar geral do paciente.",
      paragraph2:
        "A quiropraxia é baseada na crença de que o corpo possui uma capacidade inata de se curar e se adaptar, e que a saúde ótima pode ser alcançada através da manutenção do sistema nervoso central, que é influenciado pela integridade da coluna vertebral e do sistema musculoesquelético. Embora seja considerada uma prática segura e eficaz para muitas condições, é importante que os pacientes consultem um profissional de saúde qualificado antes de iniciar qualquer tratamento quiroprático, especialmente se tiverem condições médicas pré-existentes.",
    },
    {
      title: "Tappyng",
      image: image15,
      paragraph1:
        "O tappyng, também conhecido como EFT (Emotional Freedom Techniques), é uma técnica terapêutica que combina a estimulação de pontos de acupuntura com a psicologia para aliviar o estresse emocional, reduzir a ansiedade e tratar traumas. Durante uma sessão de tapping, o praticante utiliza os dedos para bater levemente em pontos específicos do corpo enquanto se concentra em um problema emocional ou físico.",
      paragraph2:
        "Essa estimulação é combinada com afirmações verbais positivas para ajudar a liberar bloqueios energéticos e promover o equilíbrio emocional. Embora a pesquisa sobre o tapping ainda esteja em andamento, muitas pessoas relatam benefícios significativos, incluindo redução do estresse, aumento da autoconfiança e alívio de sintomas de ansiedade e depressão.",
    },
    {
      title: "Tratamento Da Dor",
      image: image16,
      paragraph1:
        "O tratamento da dor abrange uma variedade de abordagens terapêuticas destinadas a aliviar ou gerenciar a dor em pessoas que sofrem de condições agudas ou crônicas. Essas abordagens podem incluir medicamentos analgésicos, terapias físicas, como fisioterapia e reabilitação, técnicas de relaxamento, como meditação e respiração profunda, intervenções psicológicas, como terapia cognitivo-comportamental, e abordagens complementares, como acupuntura, quiropraxia e massagem terapêutica. O tratamento da dor é frequentemente personalizado para atender às necessidades individuais de cada paciente e pode envolver uma combinação de diferentes modalidades para alcançar o alívio máximo da dor e melhorar a qualidade de vida.",
      paragraph2:
        "É importante que o tratamento da dor seja supervisionado por profissionais de saúde qualificados, que podem avaliar a causa subjacente da dor e desenvolver um plano de tratamento adequado para cada situação.",
    },
    {
      title: "Tratamento De DTM / ATM",
      image: image17,
      paragraph1:
        "O tratamento da DTM (Disfunção Temporomandibular) ou ATM (Articulação Temporomandibular) envolve uma abordagem multidisciplinar para aliviar a dor e restaurar a função normal da mandíbula e da articulação temporomandibular. Isso pode incluir terapias conservadoras, como fisioterapia para fortalecer os músculos da mandíbula e melhorar a postura, uso de placas oclusais para aliviar a pressão sobre a articulação, técnicas de relaxamento para reduzir o estresse e a tensão muscular, e modificação dos hábitos alimentares e de mastigação.",
      paragraph2:
        "O tratamento da DTM/ATM geralmente é personalizado de acordo com a gravidade dos sintomas e as necessidades individuais de cada paciente, com o objetivo de melhorar a função da mandíbula, aliviar a dor e restaurar a qualidade de vida.",
    },
    {
      title: "Tratamento Dor De Cabeça / Enxaqueca",
      image: image19,
      paragraph1:
        "O tratamento da dor de cabeça e enxaqueca pode envolver uma variedade de abordagens terapêuticas, dependendo da causa subjacente e da gravidade dos sintomas. Isso pode incluir medicamentos analgésicos, como analgésicos de venda livre ou prescrição médica, medicamentos específicos para enxaqueca, como triptanos ou medicamentos preventivos, terapias não farmacológicas, como biofeedback, acupuntura, massagem terapêutica e técnicas de relaxamento, como meditação e respiração profunda. Além disso, pode ser recomendado que o paciente identifique e evite os fatores desencadeantes conhecidos, como certos alimentos, estresse ou falta de sono.",
      paragraph2:
        "O tratamento da dor de cabeça e enxaqueca é frequentemente personalizado para atender às necessidades individuais de cada paciente e pode exigir tentativa e erro para encontrar a combinação mais eficaz de terapias para controlar os sintomas e melhorar a qualidade de vida. Em casos graves ou refratários, pode ser necessário o acompanhamento de um neurologista ou especialista em dor de cabeça para avaliação e manejo adequado.",
    },
    {
      title: "Tratamento De Incontinência (Feminino)",
      image: image18,
      paragraph1:
        "O tratamento da incontinência urinária com fisioterapeutas geralmente envolve a fisioterapia do assoalho pélvico. Os fisioterapeutas especializados nessa área podem oferecer uma variedade de técnicas para fortalecer os músculos do assoalho pélvico e melhorar o controle da bexiga. Isso pode incluir exercícios de Kegel, biofeedback, estimulação elétrica, treinamento do músculo do assoalho pélvico e técnicas de relaxamento.",
      paragraph2:
        "Além disso, os fisioterapeutas podem fornecer orientações sobre mudanças no estilo de vida e hábitos urinários que podem ajudar a reduzir os sintomas da incontinência. Trabalhar com um fisioterapeuta pode oferecer uma abordagem personalizada e eficaz para o tratamento da incontinência urinária, visando melhorar a qualidade de vida e a função da bexiga.",
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
