import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 62.5%;
        background-color: linear-gradient(111.34deg, #545454 0%, #0B0B0B 100%);
    }
    .container {
        min-width: 100%;
        min-height: 100%;
        background: linear-gradient(111.34deg, #545454 0%, #0B0B0B 100%);
    }

 

    html, body {
        background: linear-gradient(111.34deg, #545454 0%, #0B0B0B 100%);
        font-family: 'Ubuntu'
    }

    .gallery {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;

        @media screen and (max-width: 1120px) {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            margin: 0 auto;
        }

        @media screen and (max-width: 526px) {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            margin: 0 auto;
        }
    }

    section.Gallery-project {
        display: flex;
        align-items: center;
        justify-content: center;
        /* flex-wrap: wrap; */
        /* width: 1080px; */
        margin: 0 auto;
    }

    .secGalleryproject{
        /* width: 1080px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto; */

        h3 {
            font-size: 3.2rem;
            padding: 10rem 0 3.2rem 0;
            text-align: center;
            font-family: "Ubuntu";
            font-weight: 700;
            color: #dfdfdf;
        }
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        background-color: linear-gradient(111.34deg, #545454 0%, #0B0B0B 100%);
         font-family: "Ubuntu";
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    } 
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    `;

export default GlobalStyle;
