import Proje from "./Proje";
import "./Projetos.css";

import reactjs from "/imagens/react.png";
import html from "/imagens/html.png";
import css from "/imagens/css.png";
import js from "/imagens/js.png";
import python from "/imagens/python.png";
import next from "/imagens/next.png";
import mongodb from "/imagens/mongodb.png";
import figma from "/imagens/figma.png";
import { useContext } from "react";
import { DNcontext } from "../../contexto/DiaNoite";

export default function Projetos() {
  const str = "<Projetos />";
  const [dn] = useContext(DNcontext);

  let projetosDN = "projetos-dia";
  let borDN = "bor-dia";
  {
    dn === true
      ? (projetosDN = "projetos-noite")
      : (projetosDN = "projetos-dia");
  }
  {
    dn === true ? (borDN = "bor-noite") : (borDN = "bor-dia");
  }

  return (
    <div className={`projetos ${projetosDN}`}>
      <h1 className="projetos-titulo">{str}</h1>

      <label className="projetos-descricao">
        Foco em projetos de estudo funcionais, com design criativo e finalidade
        inovadora.
      </label>

      <div className="projetos-cima">
        <section className="projetos-ferramentas">
          <section>
            <div>
              <img src={reactjs} alt="react-icone" />
              <label>React.js</label>
            </div>
            <div>
              <img src={html} alt="html-icone" />
              <label>Html</label>
            </div>
          </section>
          <section>
            <div>
              <img src={css} alt="css-icone" />
              <label>Css</label>
            </div>
            <div>
              <img src={js} alt="js-icone" />
              <label>JavaScript</label>
            </div>
          </section>
          <section>
            <div>
              <img src={python} alt="python-icone" />
              <label>Python</label>
            </div>
            <div>
              <img src={mongodb} alt="mongodb" />
              <label>MongoDB</label>
            </div>
          </section>
          <section>
            <div>
              <img src={next} alt="next-icone" />
              <label>Next.js</label>
            </div>
            <div>
              <img src={figma} alt="figma-icone" />
              <label>Figma</label>
            </div>
          </section>
        </section>
        <div className="projetos-novidades">
          <h3>novidades</h3>
          <p>- Aprofundando banco de dados</p>
          <p>- Estudando novas soluções de Ux</p>
        </div>
      </div>

      <label className="projetos-descricao-2">
        Estou praticando habilidades de programação e design com projetos
        pessoais até conseguir minha primeira oportunidade de emprego.
      </label>

      <div className="projetos-conteudo">
        <div className={`projetos-linha ${borDN}`} />
        <Proje
          banner="/imagens/ufoimg.png"
          titulo="Ufo Report Map"
          status="em desenvolvimento"
          icone="/imagens/loading.png"
          descricao="Primeira plataforma colaborativa de relatos ufológicos da América Latina, com um fórum onde se pode avaliar a relevância de relatos e contar suas próprias experiências, ajudando a construir um mapa de avistamentos e casos históricos."
          ferramentas={["React.js", "Html", "Css", "MongoDB", "JavaScript"]}
        />
        <div className={`projetos-linha ${borDN}`} />
        <Proje
          banner="/imagens/projeZap.png"
          titulo="Zap em massa"
          status="em desenvolvimento"
          icone="/imagens/loading.png"
          descricao="Plataforma Saas para gerenciamento e envio de mensagens em massa no WhatApp, como calendário de envio, editor de texto, programador de status e painel de gerenciamente. Com Ux fluente e intuitivo."
          ferramentas={["React.js", "Html", "Css", "Python", "Next.js"]}
        />
        <div className={`projetos-linha ${borDN}`} />
      </div>
    </div>
  );
}
