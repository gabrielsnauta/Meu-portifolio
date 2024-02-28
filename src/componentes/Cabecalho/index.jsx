import { useContext, useState } from "react";
import sol from "/imagens/icone-sol.png";
import lua from "/imagens/icone-lua.png";
import { DNcontext } from "../../contexto/DiaNoite";
import "./Cabecalho.css";
import styled from "styled-components";

const Linha = styled.div`
  position: fixed;
  top: 0;
  left: 96%;
  z-index: 2;
  width: 4px;
  height: 100%;
  opacity: 0.8;

  background: linear-gradient(
    to top,
    #fdfdfd00 0%,
    #ffffff 50%,
    #fdfdfd00 100%
  );
`;

export default function Cabecalho() {
  const [dn, setdn] = useContext(DNcontext);
  const [icone, seticone] = useState(sol);

  let cabeDN = "cabe-dia";
  function iconedn() {
    console.log(dn);
    if (dn === true) {
      setdn(false);
      seticone(sol);
      console.log(dn);
    } else {
      setdn(true);
      seticone(lua);
      console.log(dn);
    }
  }
  console.log(dn);
  {
    dn === true ? (cabeDN = "cabe-noite") : (cabeDN = "cabe-dia");
  }

  const inicio = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const projetos = () => {
    window.scroll({
      top: 1100,
      behavior: "smooth",
    });
  };

  return (
    <header className={`cabecalho ${cabeDN}`}>
      <div>
        <a onClick={inicio}>Início</a>
        <a onClick={projetos}>Projetos</a>
        <a>Sobre</a>
      </div>
      <a onClick={iconedn}>
        <img className="icone-dn" src={icone} />
      </a>
    </header>
  );
}
