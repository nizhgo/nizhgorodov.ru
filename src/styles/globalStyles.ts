import {createGlobalStyle} from "styled-components";
import {theme} from "./themes/main.theme";

// @ts-ignore
export const GlobalStyles = createGlobalStyle`
    html, body{
      font-family: 'Jost', sans-serif;
      max-width: 1200px;
      margin: 0.4em auto;
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.white};
      padding-inline: 0.4em;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    h2{
      font-family: 'Press Start 2P', cursive;
    }

    :root {
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
    }
    
    
    li {
      font-family: 'Jost', sans-serif !important;
      list-style-type: none;
    }
    
    a {
      color: #CBFF00;
    }




`;
        

