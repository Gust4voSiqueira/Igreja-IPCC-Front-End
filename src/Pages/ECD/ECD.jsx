import React, { useCallback, useState } from "react";
import "./ECD.css";

import Header from "../../Global Components/Header/Header";
import Footer from "../../Global Components/Footer/Footer";

import Book6 from "../../images/livro-seis.png";
import Book5 from "../../images/livro-cinco.png";
import Book4 from "../../images/livro-quatro.png";
import Book3 from "../../images/livro-tres.png";
import Book2 from "../../images/livro-dois.png";
import Book1 from "../../images/livro-um.png";

import Modules from "./Modules/Modules";

const ECD = () => {
  const modules = [
    {
      module: 1,
      themeOne: "Pastoreados pelo seu Amor",
      textOne:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maxime praesentium a magnam eos sit vitae blanditiis corporis,excepturi, ipsa minus alias asperiores temporibus eius deleniti tempora placeat officia distinctio!",
      imageOne: Book1,
      themeTwo: "O Poder de uma Visão",
      textTwo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maxime praesentium a magnam eos sit vitae blanditiis corporis,excepturi, ipsa minus alias asperiores temporibus eius deleniti tempora placeat officia distinctio!",
      imageTwo: Book2,
    },
    {
      module: 2,
      themeOne: "A estratégia do ganhar",
      textOne:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maxime praesentium a magnam eos sit vitae blanditiis corporis,excepturi, ipsa minus alias asperiores temporibus eius deleniti tempora placeat officia distinctio!",
      imageOne: Book3,
      themeTwo: "Famílias com Propósito",
      textTwo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maxime praesentium a magnam eos sit vitae blanditiis corporis,excepturi, ipsa minus alias asperiores temporibus eius deleniti tempora placeat officia distinctio!",
      imageTwo: Book4,
    },
    {
      module: 3,
      themeOne: "Liderança Eficaz",
      textOne:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maxime praesentium a magnam eos sit vitae blanditiis corporis,excepturi, ipsa minus alias asperiores temporibus eius deleniti tempora placeat officia distinctio!",
      imageOne: Book5,
      themeTwo: "O espírito em mim",
      textTwo:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste maxime praesentium a magnam eos sit vitae blanditiis corporis,excepturi, ipsa minus alias asperiores temporibus eius deleniti tempora placeat officia distinctio!",
      imageTwo: Book6,
    },
  ];
  const [indModules, setIndModules] = useState(0);
  const HandleModules = useCallback(() => {
    return (
      <Modules
        module={modules[indModules].module}
        themeOne={modules[indModules].themeOne}
        textOne={modules[indModules].textOne}
        imageOne={modules[indModules].imageOne}
        themeTwo={modules[indModules].themeTwo}
        textTwo={modules[indModules].textTwo}
        imageTwo={modules[indModules].imageTwo}
      />
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modules]);
  return (
    <>
      <Header />
      <h2>Conheça a Escola de Capacitação Destino</h2>
      <div id="ecd-container">
        <section className="sections">
          <h2>O que é a Capacitação Destino?</h2>
          <p>
            O Capacitação Destino é um curso destinado a qualquer pessoa que
            deseje se tornar um instrumento de Deus, independentemente da sua
            idade ou do seu nível de educação. Você pode mergulhar em cada
            classe nos princípios bíblicos que o levarão a ser um grande líder e
            através de cada módulo. Você será capaz de conhecer os pilares
            básicos do cristianismo e, assim, recebê-los, aprendê-los,
            fortalecê-los e implementá-los em sua vida.
          </p>
        </section>

        <section className="sections">
          <h2>Módulos</h2>

          <div id="module-container">
         
            <div
            style={{background:"#FBB041"}}
              className="module"
              id="module-1"
              onClick={() => {
                document.getElementById("module-1").style.background = "#FBB041"
                document.getElementById("module-2").style.background = "black"
                document.getElementById("module-3").style.background = "black"
                document.getElementById("module-1-title").style.color = "#151515"
                document.getElementById("module-2-title").style.color = "var(--cor-title-button)"
                document.getElementById("module-3-title").style.color = "var(--cor-title-button)"
                setIndModules(0);
              }}
            >
               <a href="#module">
              <h1 style={{color:"#151515"}} id="module-1-title">1º Módulo</h1>
              <p>
                Quando os alunos se conectam inicialmente ao conteúdo do
                material.
              </p>
              </a>
            </div>
          

            <div
              className="module"
              id="module-2"
              onClick={() => {
                document.getElementById("module-1").style.background = "black"
                document.getElementById("module-2").style.background = "#FBB041"
                document.getElementById("module-3").style.background = "black"
                document.getElementById("module-2-title").style.color = "#151515"
                document.getElementById("module-1-title").style.color = "var(--cor-title-button)"
                document.getElementById("module-3-title").style.color = "var(--cor-title-button)"
                setIndModules(1);
              }}
            >
              <a href="#module">
              <h1 id="module-2-title">2º Módulo</h1>
              <p>Quando algo começa a acontecer dentro de você.</p>
              </a>
            </div>
           
            
            <div
              className="module"
              id="module-3"
              onClick={() => {
                document.getElementById("module-1").style.background = "black"
                document.getElementById("module-2").style.background = "black"
                document.getElementById("module-3").style.background = "#FBB041"
                document.getElementById("module-3-title").style.color = "#151515"
                document.getElementById("module-2-title").style.color = "var(--cor-title-button)"
                document.getElementById("module-1-title").style.color = "var(--cor-title-button)"
                setIndModules(2);
              }}
            >
              <a href="#module">
              <h1 id="module-3-title">3º Módulo</h1>
              <p>Quando produzem algo visível com o conhecimento adquirido.</p>
              </a>
            </div>
            
          </div>
        </section>

        {HandleModules(indModules)}

        <section className="sections">
          <h2>O que preciso para me Increver?</h2>
          <li>Ter 16 anos ou mais;</li>
          <li>Ter ido ao Encontro e ao Pré Encontro;</li>
          <li>Fazer sua inscrição com um de nossos Líderes;</li>
          <li>Estar disposto a entrar nessa jornada de cabeça!</li>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ECD;
