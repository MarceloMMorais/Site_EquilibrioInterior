import React, { useState, useEffect, useRef } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedValue from "../components/AnimatedValue";
import ButtonWhatsScroll from "../components/ButtonWhatsScroll.js";
import Slider from "../components/Slider.js";

import styles from "../styles/About.module.css";

import photoOwner from "../images/Henrique_Coelho.jpg";

function About() {
  const containerNumbersRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Ajuste esse valor conforme necessário
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    }, options);

    if (containerNumbersRef.current) {
      observer.observe(containerNumbersRef.current);
    }

    return () => {
      if (containerNumbersRef.current) {
        observer.unobserve(containerNumbersRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header shouldApplyBackground={true} />
      <h1 className={styles.title}>Quem Somos</h1>
      <div className={styles.containerInfoOwner}>
        <div className={styles.containerImageOwner}>
          <img className={styles.imageOwner} src={photoOwner} alt="Imagem" />
        </div>
        <div className={styles.containerTextOwner}>
          <h2>Henrique de Mattos Coelho</h2>
          <p>
            Nascido em são Sebastião litoral norte de São Paulo no dia 1º de
            dezembro de 1977. Sou profissional de terapias holísticas e
            bem-estar, com formação e especialização em diversas áreas.
          </p>
          <p>
            <i>
              "Suavidade nas mãos, bem-estar no corpo. Deixe-me desvendar os nós
              que afligem sua alma e devolver-lhe o equilíbrio perdido."
            </i>
          </p>
          <p>
            Recebi reconhecimento profissional da ANT (Associação Nacional dos
            Terapeutas) e da SBMA (Sociedade Brasileira de Medicina
            Alternativa), conforme publicação no Diário Oficial da União, N°
            158, Pág. 103, Seção III, de 18/08/2003. Também estou registrado no
            7º oficial de pessoas jurídicas do município de São Paulo sob o
            número 418.247.
          </p>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.containerVertical}>
        <p>Minha trajetória inclui as seguintes formações:</p>
        <div className={styles.containerHorizontal}>
          <div>
            <span>Massoterapia</span>
            <p>
              Concluí o curso na Escola Paulista de Massagem e Terapias em
              outubro de 2003. Aprendi técnicas de massagem terapêutica que me
              permitem oferecer relaxamento e alívio de tensões musculares aos
              meus clientes.
            </p>
          </div>
          <div>
            <span>Quiropraxia</span>
            <p>
              Realizei o curso na Escola Brasileira de Medicina Alternativa em
              novembro de 2003. A quiropraxia me permite trabalhar com ajustes
              na coluna vertebral e outras articulações, visando melhorar a
              função do sistema nervoso e promover o equilíbrio postural.
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.containerVertical}>
        <p>
          Buscando constantemente aprimorar meus conhecimentos e oferecer o
          melhor serviço aos meus clientes, participei dos seguintes cursos de
          aprimoramento profissional:
        </p>
        <div className={styles.containerHorizontal}>
          <div>
            <span>Massagem em Cadeira</span>
            <p>
              Realizado na Escola Paulista de Massagem e Terapias em janeiro de
              2004. Adquiri habilidades específicas para proporcionar massagem
              em cadeira, oferecendo alívio de tensões de forma rápida e
              prática.
            </p>
          </div>
          <div>
            <span>Acupuntura Auricular Chinesa</span>
            <p>
              Concluí o curso na Escola Paulista de Massagem e Terapias em abril
              de 2004. Adquiri conhecimentos sobre a técnica de acupuntura
              auricular chinesa, que utiliza pontos específicos na orelha para
              estimular o equilíbrio energético do corpo.
            </p>
          </div>
        </div>
        <div className={styles.containerHorizontal}>
          <div>
            <span>Reciclagem em Quiropraxia</span>
            <p>
              Realizado no Instituto Brasileiro de Medicina Alternativa em junho
              de 2004. Aprofundei meus conhecimentos na área da quiropraxia,
              atualizando minhas técnicas e práticas.
            </p>
          </div>
          <div>
            <span>Iridologia</span>
            <p>
              Participei de dois cursos de iridologia. O primeiro, realizado na
              EOMA em junho/julho de 2005, e o segundo, no Elemento Terra
              Terapias Naturais em abril de 2006. A iridologia é uma técnica que
              permite analisar os olhos para identificar possíveis
              desequilíbrios e problemas de saúde.Recebi reconhecimento pela
              ANT/SBMA, o que valida minha qualificação e expertise nessas
              áreas.
            </p>
          </div>
        </div>
        <p className={styles.textEndOwner}>
          Minha dedicação em oferecer o melhor cuidado possível aos meus
          clientes é o que me motiva a continuar aprendendo e me aprimorando
          constantemente. Estou comprometido em proporcionar tratamentos
          terapêuticos de qualidade, visando o bem-estar e a saúde integral de
          cada indivíduo que busca meus serviços.
        </p>
      </div>
      <div className={styles.containerNumbers} ref={containerNumbersRef}>
        <h2>Os números não mentem:</h2>
        <div className={styles.containerHorizontalNumbers}>
          <div>
            <span>
              {isInViewport ? (
                <AnimatedValue
                  initialValue={0}
                  toValue={30000}
                  duration={3000}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              ) : isActive ? (
                30000
              ) : (
                0
              )}
            </span>
            <p>Clientes Satisfeitos</p>
          </div>
          <div>
            <span>
              {isInViewport ? (
                <AnimatedValue
                  initialValue={0}
                  toValue={20}
                  duration={3000}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              ) : isActive ? (
                20
              ) : (
                0
              )}
            </span>
            <p>Anos de Experiência</p>
          </div>
          <div>
            <span>
              {isInViewport ? (
                <AnimatedValue
                  initialValue={0}
                  toValue={175056}
                  duration={3000}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              ) : isActive ? (
                175056
              ) : (
                0
              )}
            </span>
            <p>Horas Trabalhadas</p>
          </div>
        </div>
      </div>
      <div className={styles.containerSliderAbout}>
        <p>Nossa Clínica:</p>
        <Slider name="images"/>
      </div>
      <div className={styles.containerText}>
        <h3>
          Nos tempos atuais, é comum observar um aumento significativo de
          pessoas que lidam com desafios emocionais como ansiedade, depressão,
          estresse, síndrome do pânico e outros transtornos que afetam tanto o
          corpo quanto a mente.
        </h3>
        <div className={styles.containerHorizontalText}>
          <div>
            <span>20 anos cuidando de você</span>
            <p>
              Celebrando duas décadas de dedicação e cuidado, a Clínica
              Equilíbrio Interior comemora seus 20 anos de existência. Ao longo
              dessa trajetória, temos sido uma referência em oferecer bem-estar
              físico e emocional a todos os nossos pacientes. Desde o nosso
              primeiro dia, nossa missão tem sido auxiliar as pessoas a
              encontrarem o equilíbrio perdido em meio às turbulências da vida
              moderna. Reconhecemos que muitos indivíduos enfrentam desafios
              emocionais que se manifestam de diversas formas, afetando sua
              saúde e qualidade de vida
            </p>
          </div>
          <div>
            <p>
              Com uma equipe altamente capacitada e especializada, combinamos
              técnicas tradicionais e inovadoras para proporcionar o melhor
              cuidado possível. Nossos terapeutas são profissionais dedicados,
              comprometidos em entender as necessidades individuais de cada
              paciente, a fim de oferecer um tratamento personalizado e eficaz.
              Nesses 20 anos, tivemos a honra de testemunhar inúmeras
              transformações positivas na vida de nossos pacientes. Ver a
              superação de quadros de ansiedade, depressão, estresse e outros
              problemas emocionais é a maior recompensa para todos nós da
              Clínica Equilíbrio Interior.
            </p>
          </div>
        </div>
      </div>
      <ButtonWhatsScroll />
      <Footer />
    </div>
  );
}

export default About;
