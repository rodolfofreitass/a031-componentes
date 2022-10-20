import styled from "styled-components";

export const BoxPaginaPrincipal = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-width: thin;
    align-items: start;
    justify-items: stretch;
    box-shadow: 2px 2px 4px gray;
    font-size: 13px;
    background-color: lightgray;
    font-weight: 1000;
`;

export const ImgBox = styled.img`
    width: 100%;
    height: 200px;
`;