import styled from 'styled-components';

export const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px 0;
`
export const Cards = styled.div`
    width: 328px;
    height: 214px;
    border-radius: 6px;
    background: rgba(11,11,11,0.5);
    margin: 12px;
    text-align: left;

    :hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    
    
    h2 {
        font-size: 3rem;
        font-weight: 700;
        color: rgba(223,223,223,1);
        font-family:"Inter";
        /* margin: 16px 35px 2px 20px; */
        padding: 16px 0;
        text-align: center;
        
    }

    p {
        font-size: 1.8rem;
        font-weight: 400;
        color: rgba(161,161,161,1);
        font-family: "Inter";
        /* margin: 0 28px 0 20px; */
        line-height: 22px;
        padding: 2px 20px;
        text-align: center;
        text-align: justify;
    }
`