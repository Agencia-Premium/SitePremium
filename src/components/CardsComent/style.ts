import styled from 'styled-components';

export const ContainerComent = styled.div`
    width: 100%;
    height: 100%;
    
`

export const Grade = styled.div`
    display: flex;
    width: 680px;
    height: 166px;
    background: rgba(11,11,11,0.5);
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    margin: 90px 150px;

`
export const Left = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    align-items: center;
    justify-content: center;
    /* background-color: darkGray;  */
`

export const Right = styled.div`
    display: flex;
    width: 60%;
    justify-content: center;
    flex-direction: column;
    
    h2 {
        display: line-block;
        font-size: 3rem;
        font-weight: 700;
        font-family: "Inter";
        padding-bottom: 16px;
        color: rgba(223,223,223,1);
    }
    
    p {
        font-size: 1.8rem;
        font-weight: 400;
        font-family: "inter";
        line-height: 22px;
        color: rgba(161,161,161,1);
    }
    .depo {
        
        padding-left: 10px;
        
    }
`