import styled, { keyframes } from 'styled-components';

export const appearFromLeft = keyframes`
   from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const appearFromBottom = keyframes`
   from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



export const HeaderStyle = styled.div`
    width: 100%;
    height: 100%;
`
export const BgLinha = styled.div`
    width: 100%;
    height: 100%;
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

    animation: ${appearFromLeft} 1s;

   h1{
       font-size: 8.6rem;
       font-weight: 700;
       color: rgba(241,241,241,1);
       font-Family:"Inter";
       line-height: 92px;
       padding: 0 0 14px 0;
   }
   p {
       font-size: 2.6rem;
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
    animation: ${appearFromBottom} 1s;


    img {
        margin-top: 80px;
    }
`