import React from "react";
import "./styles.css";
import {CardVideo} from "./components/CardVideo";

export default function App() {

  const video1 = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "Video 1"
  }
  
  return (

    <>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">

          <CardVideo nomeDaProp={video1}/>
          <CardVideo nomeDaProp={video1}/>
          <CardVideo nomeDaProp={video1}/>
          <CardVideo nomeDaProp={video1}/>
          <CardVideo nomeDaProp={video1}/>
          <CardVideo nomeDaProp={video1}/>
          <CardVideo nomeDaProp={video1}/>
          <CardVideo nomeDaProp={video1}/>

          </section>
        </main>
        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </>
  );
}




