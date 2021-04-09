import styled from 'styled-components';


export const HeaderStyle = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(111.34deg, #545454 0%, #0B0B0B 100%);

`
export const BgLinha = styled.div`
    width: 100%;
    /* height: 684px; */
    background-image: url("bg-header.svg");
    background-position: center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   h1{
       font-size: 86px;
       font-weight: 700;
       color: rgba(241,241,241,1);
       font-Family:"Inter";
       line-height: 92px;
       padding: 0 0 14px 0;
   }
   p {
       font-size: 26px;
       font-weight: 400;
       color: rgba(241,241,241,1);
       font-family:"Inter";
       line-height: 36px;
   }
`
export const Right = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 0 0;
`