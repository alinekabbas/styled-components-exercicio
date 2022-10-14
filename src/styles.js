import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
export const TelaInteira = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 10%;
`

export const Main = styled.main`
    min-height: 80%;
    display: flex;
`

export const Nav = styled.nav`
    flex-basis: 200px;
    border-right-style: solid;
    border-right-width: thin;
`
export const BotoesLista = styled.li`
    list-style-type: none;
`
export const Section = styled.section`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 10px;
    column-gap: 10px;
    margin: 10px;
`

export const Rodape = styled.footer`
    background: #333b3e;
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    padding: 0 10px;
    
`