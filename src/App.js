import React, { useState } from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import SwitcherTema from "./Components/SwitcherTema";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BtnTema } from './Components/UI'
import { temaClaro, temaEscuro } from './Components/UI/temas'

function App() {

  const [tema, toggleTema] = useState(true);

  function handleClick(){
    toggleTema(!tema);
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={handleClick}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
