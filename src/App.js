import React from "react";
import CardVideo from "./Componentes/CardVideo";
// import "./styles.css";
import { createGlobalStyle } from "styled-components"
import { GlobalStyle, Header, Main, Nav, BotoesLista, Section, Rodape, TelaInteira } from "./styles";


export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <GlobalStyle />
      <TelaInteira>
        <Header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Main>
          <Nav>
            <ul>
              <BotoesLista>Início</BotoesLista>
              <BotoesLista>Em alta</BotoesLista>
              <BotoesLista>Inscrições</BotoesLista>
              <hr />
              <BotoesLista>Originais</BotoesLista>
              <BotoesLista>Histórico</BotoesLista>
            </ul>
          </Nav>

          <Section>
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </Section>
        </Main>

        <Rodape>
          <h4>Oi! Eu moro no footer!</h4>
        </Rodape>
      </TelaInteira>
    </div>
  );
}
