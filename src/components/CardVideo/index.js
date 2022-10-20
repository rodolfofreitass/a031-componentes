import React from "react";
import { InfosUsuario } from "../InfosUsuario";
import { BoxPaginaPrincipal , ImgBox } from "./style";

const titulo = "Título do vídeo";

export function reproduzVideo(){
    alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props){

    const usuario  = "Vídeo upado por: Rodolfo"

    return(
        <div>
            <BoxPaginaPrincipal onClick={reproduzVideo}>
                <ImgBox src={props.nomeDaProp.imagem}/>
                <h2>{props.nomeDaProp.titulo}</h2>
                <InfosUsuario nomeUsuario={usuario}/>
            </BoxPaginaPrincipal>
        </div>
    )
}
