import React from "react";
import { InfosUsuario } from "./InfosUsuario";

const titulo = "Título do vídeo";

export function reproduzVideo(){
    alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props){

    const usuario  = "Rodolfo"

    return(
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <img src={props.nomeDaProp.imagem}></img>
                <h3>{props.nomeDaProp.titulo}</h3>
                <InfosUsuario nomeUsuario={usuario}/>
            </div>
        </div>
    )
}
