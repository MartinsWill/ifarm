import React, { useEffect, useState } from "react";
import { database } from "../services/firebase";

import "../styles/Solo.css";

import GardenImg from "../img/garden-bg.jpg";
import SobreImg from "../img/sobre-img.jpg";

function Solo() {

  const [dados, setDados] = useState({});

  useEffect(() => {
    
    const monitorRef = database.ref("/dados");
    monitorRef.on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setDados({
          ...snapshot.val(),
        });
      } else {
        setDados({});
      }
    });
  }, []);

  return (
    <div>
      <header id="header">
        <nav className="container">
          <a className="logo" href="#">
            i<span>Farm</span>
          </a>
          <div className="menu">
            <ul className="grid">
              <li>
                <a className="title" href="#home">
                  Início
                </a>
              </li>
              <li>
                <a className="title" href="#about">
                  Sobre
                </a>
              </li>
              <li>
                <a className="title" href="#monitorar">
                  Monitorar
                </a>
              </li>
              <li>
                <a className="title" href="#services">
                  Serviços
                </a>
              </li>
              <li>
                <a className="title" href="#contact">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="toggle icon-menu"></div>
          <div className="toggle icon-close"></div>
        </nav>
      </header>
      <main>
        <section className="section" id="home">
          <div className="container grid">
            <div className="image">
              <img src={GardenImg} alt="Varias plantinhas na terra." />
            </div>
            <div className="text">
              <h2 className="title">Monitore seu jardim através do iFarm</h2>
              <p>
                Sistema voltado para o monitoramento da umidade e temperatura do
                solo.
              </p>
              <a className="button" href="#monitorar">
                Começar a monitorar
              </a>
            </div>
          </div>
        </section>
        <div className="divider-1"></div>
        <section className="section" id="about">
          <div className="container grid">
            <div className="image">
              <img src={SobreImg} alt="3 mulheres sorrindo" />
            </div>
            <div className="text">
              <h2 className="title">Quem somos</h2>
              <p>
                O iFarm é um projeto capaz de monitorar a temperatura e umidade
                de um solo.
              </p>
              <br />
              <p>
                Com isso desenvolvemos um sistema autonomo que controla a
                umidade ideal do solo para a planta.
              </p>
              <br />
              <p>
                O sistema consiste em calcular e aplicar a umidade ideal para o
                solo, o sistema reconhece quando a umidade do solo esta baixa e
                como esta a temperatura, que funciona atraves de um sensor de
                umidade de solo e temperatura que informa o Arduino e com isso
                atualiza uma pagina via web para o monitoramento em tempo real
                em qualquer lugar que possua internet.
              </p>
            </div>
          </div>
        </section>
        <div className="divider-2"></div>
        <section className="section" id="monitorar">
          <div className="container grid">
            <header>
              <h2 className="title">Monitoramento</h2>
            </header>
            <div className="cards grid">
              <div className="card3">
                <i className="icon-woman-hair"></i>
                <h3 className="title">Umidade 💧</h3>
                <p className="pstyle">
                  {Object.keys(dados).map((id) => {
                    return <p className="pstyle">{dados[id].umidade} %</p>;
                  })}
                </p>
              </div>
              <div className="card2">
                <i className="icon-trim"></i>
                <h3 className="title">Temperatura 🔥</h3>
                <p>
                  {Object.keys(dados).map((id) => {
                    return <p className="pstyle">{dados[id].temperatura} ºC</p>;
                  })}
                </p>
              </div>
              <div className="card4">
                <i className="icon-trim"></i>
                <h3 className="title">Situação ⚠</h3>
                <p>
                  {Object.keys(dados).map((id) => {
                    return <p className="pstyle">{dados[id].estado}</p>;
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-1"></div>

        <section className="section" id="services">
          <div className="container grid">
            <header>
              <h2 className="title">Descrição</h2>
            </header>
            <div className="cards grid">
              <div className="card">
                <i className="icon-woman-hair"></i>
                <h3 className="title">Umidade</h3>
                <p>
                  O controle e a previsão da umidade do solo são essenciais para
                  o crescimento ideal da planta. O monitoramento preciso da
                  umidade so solo permite o controle eficiente de nutrientes e
                  outras entradas.
                </p>
              </div>
              <div className="card">
                <i className="icon-trim"></i>
                <h3 className="title">Temperatura</h3>
                <p>
                  A temperatura interfere diretamente no desenvolvimento das
                  plantas , determinando uma produção maior ou menor. Alguns
                  vegetais exigem temperatura especiais para completarem o seu
                  ciclo e por isso nao se adaptam quando são transferidas do seu
                  hábitat natural para outros lugares.
                </p>
              </div>
              <div className="card">
                <i className="icon-cosmetic"></i>
                <h3 className="title">Situação</h3>
                <p>
                  A situação do solo será baseada na umidade do solo. Se a
                  umidade for menor que 40%, então o solo precisa ser irrigado,
                  se a umidade estiver entre 40% a 70%, o solo esta úmido.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="divider-1"></div>
        <section className="section" id="contact">
          <div className="container grid">
            <div className="text">
              <h2 className="title">Quer saber mais detalhes do projeto?</h2>
              <p>
                Acesse o nosso repositório do GitHub, e veja como foi
                desenvolvido.
              </p>
              <a
                href="https://github.com/MartinsWill/ifarm"
                className="button"
                target="_blank"
              >
                <i className="icon-whatsapp"></i> Repositório GitHub
              </a>
            </div>
            <div className="links">
              <ul className="grid">
                <h2 className="title">Equipe de desenvolvedores</h2>
                <li>
                  <i className="icon-phone"></i>Levi Vilas Boas, Graduando
                  Sistemas de Informação - FEPI
                </li>
                <li>
                  <i className="icon-map-pin"></i>Rafael Abreu, Graduando
                  Sistemas de Informação - FEPI
                </li>
                <li>
                  <i className="icon-mail"></i>Willian Martins, Graduando
                  Sistemas de Informação - FEPI
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="divider-1"></div>
      </main>

      <footer className="section">
        <div className="container grid">
          <div className="brand">
            <a className="logo logo-alt" href="#home">
              i<span>Farm</span>
            </a>
            <p>©2021 iFarm.</p>
            <p>Todos os direitos reservados.</p>
          </div>

          <div className="social grid">
            <a href="https://instagram.com" target="_blank">
              <i className="icon-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank">
              <i className="icon-facebook"></i>
            </a>
            <a href="https://youtube.com" target="_blank">
              <i className="icon-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Solo;
