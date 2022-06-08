import { createGlobalStyle } from "styled-components";
import bgImage from "../../images/background.jpg";

export const GlobalStyle = createGlobalStyle`
body {
    background: url(${bgImage}) center no-repeat;
    background-size: cover;
    color: #332c36;    
    padding: 0;
    margin: 0;
    font-family: "EB Garamond", serif;
}`;
