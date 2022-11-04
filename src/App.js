import React from "react";
import "./styles.css";
import {CardVideo} from "./components/CardVideo";
import { AppContainer, BotoesMenuPrincipal, Busca, Footer, H1Labenu, H4Footer, Header, MenuVertical, PainelDeVideos, TelaInteira } from "./style";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {

  const video1 = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "Video 1"
  }

  // teste
  
  const video2 = {
    imagem: "https://picsum.photos/400/400?a=2",
    titulo: "Video 2"
  }

  const video3 = {
    imagem: "https://picsum.photos/400/400?a=3",
    titulo: "Video 3"
  }

  const video4 = {
    imagem: "https://picsum.photos/400/400?a=4",
    titulo: "Video 4"
    
  }

  const video5 = {
    imagem: "https://picsum.photos/400/400?a=5",
    titulo: "Video 5"
  }

  const video6 = {
    imagem: "https://picsum.photos/400/400?a=6",
    titulo: "Video 6"
  }

  const video7 = {
    imagem: "https://picsum.photos/400/400?a=7",
    titulo: "Video 7"
  }

  const video8 = {
    imagem: "https://picsum.photos/400/400?a=8",
    titulo: "Video 8"
  }

  return (

    <>
      <GlobalStyle />
      <TelaInteira>
        
        <Header>
          <H1Labenu>LabeTube</H1Labenu>
          <Busca type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <AppContainer>
          <MenuVertical>
            <ul>
              <BotoesMenuPrincipal>Início</BotoesMenuPrincipal>
              <BotoesMenuPrincipal>Em alta</BotoesMenuPrincipal>
              <BotoesMenuPrincipal>Inscrições</BotoesMenuPrincipal>
              <hr />
              <BotoesMenuPrincipal>Originais</BotoesMenuPrincipal>
              <BotoesMenuPrincipal>Histórico</BotoesMenuPrincipal>
            </ul>
          </MenuVertical>

          <PainelDeVideos>

          <CardVideo nomeDaProp={video1}/>
          <CardVideo nomeDaProp={video2}/>
          <CardVideo nomeDaProp={video3}/>
          <CardVideo nomeDaProp={video4}/>
          <CardVideo nomeDaProp={video5}/>
          <CardVideo nomeDaProp={video6}/>
          <CardVideo nomeDaProp={video7}/>
          <CardVideo nomeDaProp={video8}/>

          </PainelDeVideos>
        </AppContainer>
        <Footer>
          <H4Footer>Oi! Eu moro no footer!</H4Footer>
        </Footer>
      </TelaInteira>
    </>
  );
}




