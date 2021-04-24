import styled from 'styled-components';

export const ContainerSobre = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1076px) {
        margin-bottom: 20px;
    }
`

export const GradeLeft = styled.div`
    width: 499px;
    height: 157px;
    background-color: rgba(18,18,18,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    @media screen and (max-width: 768px) {
        width: 450px;
        height: 157px;
    }

    @media screen and (max-width: 426px) {
        width: 350px;
        height: 157px;
    }

`

export const Left = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    margin-right: 18px;
     justify-content: center; 
`
export const Right = styled.div`
    width: 80%;
    text-align: justify;
    margin-right: 28px;
    
    h2 {
        font-size: 2.4rem;
        font-weight: 700;
        color: #efefef;
        margin-bottom: 8px;
        font-family:"Inter";

        @media screen and (max-width: 768px) {
            font-size: 1.8rem;
        }
    }
    
    p {
        font-size: 1.6rem;
        font-weight: 400;
        font-family: "Inter";
        line-height: 2rem;
        color: #acacac;
        margin: 0 0 0 0;

        @media screen and (max-width: 768px) {
            font-size: 1.2rem;
        }
    }



`

