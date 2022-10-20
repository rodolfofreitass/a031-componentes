import styled from "styled-components";

export const AppContainer = styled.main`
    min-height: 80%;
    display: flex;
`;

export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const MenuVertical = styled.nav`
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
    font-weight: 600;
`;

export const Header = styled.header`
    background-color: orange;
    /* display: flex; */
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10%;
`;

export const Footer = styled.footer`
    background: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px;
`;

export const BotoesMenuPrincipal = styled.li`
    list-style-type: none;
`;

export const PainelDeVideos = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
`;

export const H4Footer = styled.h4`
    margin-left: 20px;
`;

export const H1Labenu = styled.h1`
    border-radius: 2px;
    background-color: #333b3e;
    color: whitesmoke;
    text-align: center;
    box-shadow: 1px 1px 4px black;
`;

export const Busca = styled.input`
    grid-column: 6 / span 2;
    box-shadow: 2px 2px 4px gray;
`