import { useContext, useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner";
import { DNcontext } from "./contexto/DiaNoite";
import Cabecalho from "./componentes/Cabecalho";

import Projetos from "./componentes/Projetos";

function App() {
  useContext(DNcontext);
  const [dn, setdn] = useState(true);

  return (
    <div>
      <DNcontext.Provider value={[dn, setdn]}>
        <Cabecalho />
        <Banner />
        <Projetos />
      </DNcontext.Provider>
    </div>
  );
}

export default App;
