import styled from "styled-components";

export const ContainerContact = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    font-family: "Inter";
    color: rgba(223,223,223,1);
    padding-top: 90px;
    padding-bottom: 40px;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
    .container-footer {
        position: absolute;
        bottom: 40px;
        display:flex;
    }


    .circlo {
        position: absolute;
        bottom: 0;
        right: 0;

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    img {
        display: inline-block;
    }

    div {
        margin-right: 24px;
        margin-left: 80px;
    }
`

