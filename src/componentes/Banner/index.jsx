import dia from "/imagens/Banner-dia.png";
import noite from "/imagens/Banner-noite.png";
import "./Banner.css";
import { useContext, useState } from "react";
import { DNcontext } from "../../contexto/DiaNoite";
import gitdia from "/imagens/github-dia.png";
import gitnoite from "/imagens/github-noite.png";
import linkedia from "/imagens/linke-dia.png";
import linkenoite from "/imagens/linke-noite.png";
import instadia from "/imagens/insta-dia.png";
import instanoite from "/imagens/insta-noite.png";

export default function Banner() {
  const [dn] = useContext(DNcontext);

  let bannerDN = "banner-dia";
  let linhaDN = "linha-dia";
  {
    dn === true ? (bannerDN = "banner-dia") : (bannerDN = "banner-noite");
  }
  {
    dn === true ? (linhaDN = "linha-noite") : (linhaDN = "linha-dia");
  }

  const coder = "<Coder>";
  const coderp =
    "Foco em desenvolver códigos simples, porém eficientes, priorizando a fácil manutenção e escalabilidade.";

  const designer = "Designer";
  const designerp =
    "Desenho designes belos e inovadores com experiência de usuário fluente, facilitada e intuitiva.";
  return (
    <div className={`banner ${bannerDN}`}>
      {dn === true ? (
        <div className="banner-img img-dia" />
      ) : (
        <div className="banner-img img-noite" />
      )}
      ;
      {dn === true ? (
        <img className="banner-eu" src={noite} />
      ) : (
        <img className="banner-eu" src={dia} />
      )}
      ;
      <div className="contato">
        <div>
          <a>
            {dn === true ? (
              <img src={gitnoite} alt="git" />
            ) : (
              <img src={gitdia} alt="git" />
            )}
          </a>
          <a>
            {dn === true ? (
              <img src={linkenoite} alt="linke" />
            ) : (
              <img src={linkedia} alt="linke" />
            )}
          </a>
          <a>
            {dn === true ? (
              <img src={instanoite} alt="insta" />
            ) : (
              <img src={instadia} alt="insta" />
            )}
          </a>
          {dn === true ? (
            <div className="contato-linha-noite" />
          ) : (
            <div className="contato-linha-dia" />
          )}
        </div>
      </div>
      <section>
        <div className="banner-conteudo banner-dia">
          <nav className={`coder ${bannerDN}`}>
            <h1>{coder}</h1>
            <hr className={`l1 ${linhaDN}`} />
            <p>{coderp}</p>
          </nav>
          <nav className={`designer ${bannerDN}`}>
            <h1>{designer}</h1>
            <hr className={`l2 ${linhaDN}`} />
            <p>{designerp}</p>
          </nav>
        </div>
        <ul>
          <h5>Front-End</h5>
          <h4>Developer</h4>
        </ul>
      </section>
    </div>
  );
}
