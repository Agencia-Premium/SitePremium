import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;

export const ContainerSobre = styled.div`
    /* width: 100%; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   

    @media screen and (max-width: 1076px) {
        margin-bottom: 20px;
    }

    :hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const GradeLeft = styled.div`
    width: 328px;
    height: 330px;
    background-color: rgba(18,18,18,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    animation: ${appearFromBottom} 2s;

    @media screen and (max-width: 768px) {
        width: 300px;
        height: 302px;
    }

    @media screen and (max-width: 426px) {
        width: 280px;
        height: 282px;
    }

`

export const Left = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    margin-right: 18px;
     justify-content: center; 

     img {
         width: 90px;
         height: 90px;
     }
`
export const Right = styled.div`
    width: 100%;
    height: 60%;
    text-align: center;
    
    h2 {
        font-size: 2.4rem;
        font-weight: 700;
        color: #efefef;
        margin-bottom: 8px;
        font-family:"Ubuntu";

        @media screen and (max-width: 768px) {
            font-size: 1.8rem;
        }
    }
    
    p {
        font-size: 1.6rem;
        font-weight: 400;
        font-family: "Ubuntu";
        line-height: 2rem;
        color: #acacac;
        padding: 20px 40px;
        text-align: justify;

        @media screen and (max-width: 768px) {
            font-size: 1.2rem;
        }
    }



`

