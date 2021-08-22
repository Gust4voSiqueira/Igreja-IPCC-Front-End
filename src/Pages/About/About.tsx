import React from "react";
import Header from "../../Global Components/Header/Header";
import Footer from "../../Global Components/Footer/Footer";

import ImageLocal from "../../images/sobre-nos-image.jpg";
import ImageGlobal from "../../images/sobre-nos-image2.jpg";

import "./About.css";
const AboutPage = () => {
  return (
    <>
      <div id="About-container">
        <Header />
        <h2 id='About-title'>Aqui você conhecerá um pouco mais sobre a nossa história...</h2>
        <section className="history">
          
          <div id="text-global-history">
            <h3>Igreja IPCC - Jardim Ingá</h3>
            <p style={{display:"block", marginRight:"8%"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            
          </div>
          <img src={ImageLocal} alt="ImageLocal" />
        </section>

        <section className="history">
        <img src={ImageGlobal} alt="ImageGlobal" />
          <div id="text-global-history">
            <h3>IGREJA CELULAR - Arquitetura Religião</h3>
            <p style={{display:"block", marginLeft:"8%"}}>
              Uma igreja celular é uma estrutura de igreja cristã centrada na
              reunião regular de grupos de células. Os ministérios de pequenos
              grupos são freqüentemente chamados de grupos de células, mas
              também podem ser chamados de grupos caseiros, grupos de amizade em
              casa, grupos de assistência domiciliar, grupos de famílias ou
              grupos de vida. Uma igreja com grupos de células não é
              necessariamente uma igreja celular. Uma igreja celular deve ser
              composta de grupos de células e centrada neles. Nas igrejas em
              células, um líder de célula (se houver) é considerado efetivamente
              um pastor ou mentor dentro da igreja. John Wesley usou uma forma
              de estrutura de grupo de células que ele chamou de Reuniões de
              Classe ao formar suas sociedades Metodistas em um movimento
              nacional, primeiro na Grã-Bretanha e depois nos Estados Unidos no
              século XVIII.
            </p>
          </div>
          
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
