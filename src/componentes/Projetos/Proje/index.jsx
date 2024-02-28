import { useContext, useEffect, useState } from "react";
import "./Proje.css";
import { DNcontext } from "../../../contexto/DiaNoite";

export default function Proje(props) {
  const ferra = props.ferramentas;
  const [dn] = useContext(DNcontext);

  let projeDN = "proje-dia";
  let btDN = "bt-dia";
  let borDN = "bor-dia";
  {
    dn === true ? (projeDN = "proje-noite") : (projeDN = "proje-dia");
  }
  {
    dn === true ? (btDN = "bt-noite") : (btDN = "bt-dia");
  }
  {
    dn === true ? (borDN = "bor-noite") : (borDN = "bor-dia");
  }

  return (
    <div className={`proje ${projeDN}`}>
      <img className="proje-banner" src={props.banner} />
      <section className="proje-text">
        <div>
          <div className="proje-text-cima">
            <h1>{props.titulo}</h1>
            <div>
              <h2>status:</h2>
              <h3>{props.status}</h3>
              <img className="proje-carreg" src={props.icone} />
            </div>
          </div>
          <div className="proje-text-baixo">
            <p>{props.descricao}</p>
          </div>
        </div>
        <section className={`proje-ferra ${btDN}`}>
          {ferra &&
            ferra.map((item, index) => <label key={index}>{item}</label>)}
        </section>
      </section>
    </div>
  );
}
