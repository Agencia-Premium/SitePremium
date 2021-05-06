import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 40px; 
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;

    }

    img {
        border-radius: 8px;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            padding-left: 20px;
            font-size: 32px;
            font-weight: 600;
            font-family: "Ubuntu";
            color: #FEFEFE;
            text-align: center;
            line-height: 36px;

            @media screen and (max-width: 768px) {
                padding-top: 20px;
                font-size: 20px;
                line-height: 26px;
            }
        }

        h6 {
            font-size: 18px;
            font-weight: 700;
            font-family: "Ubuntu";
            color: #F8AF30;
            padding-top: 20px;
            padding-right: 30px;
            text-align: right;
        }
    }
`;


export const Description = styled.div`
    margin-top: 60px;

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        text-align: justify;
        color: #ABABAB;
        font-family: "Ubuntu";
    }
`