import React from "react";
import { InfosUsuario } from "./InfosUsuario";

const titulo = "Título do vídeo";

export function reproduzVideo(){
    alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props){
    return(
        <div>
            <div className="box-pagina-principal" onClick={reproduzVideo}>
                <p>{props.nomeDaProp}</p>
                <InfosUsuario/>
            </div>
        </div>
    )
}
