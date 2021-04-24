import styled from "styled-components";


export const ContainerGallery = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #ffffff;
    

    .quadro{
        
        width: 329px;
        height: 386px;
        position: relative;
        box-sizing: border-box;
        margin: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .imagem {
        display: flex;
        align-items: center;
        justify-content: center;
        
        img {
            border-radius: 8px;
        }
    }

    h2 {
        position:absolute;
        top: 272px;
        left:19px;
        font-size: 3.2rem;
        font-weight: 700;
        font-family: "Inter";

    }
    
    p { 
        position: absolute;
        top: 309px;
        left: 20px;
        width: 210px;
        height: 63px;
        font-size: 1.4rem;
        font-weight: 400;
        font-family: "Inter";
        text-align: justify;
        overflow: hidden; 

    }
    
    .blur {
        width: 329px;
        height: 130px;
        position: absolute;
        bottom: 0;
        border: none;
        backdrop-filter: blur(2px);
    }

    .arrow {
        position: absolute;
        top: 325px;
        left: 261px;
        cursor: pointer;
    }
`