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
    background-position: center bottom;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;  

    @media screen and (max-width: 426px) {
      flex-direction: column;
    }
`
export const Left = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    animation: ${appearFromLeft} 1s;

    @media screen and (max-width: 426px) {
      width: 100%;
    }

   h1{
       font-size: 8.6rem;
       font-weight: 700;
       color: rgba(241,241,241,1);
       font-Family:"Inter";
       line-height: 92px;
       padding: 0 0 14px 0;

       @media screen and (max-width: 768px) {
          font-size: 6rem;
          line-height: 70px;
       }

       @media screen and (max-width: 426px) {
         font-size: 4rem;
         line-height: 40px;
         text-align: center;
         padding-top: 20px;
       }
   }
   p {
       font-size: 2.6rem;
       font-weight: 400;
       color: rgba(241,241,241,1);
       font-family:"Inter";
       line-height: 36px;

       @media screen and (max-width: 768px) {
         font-size: 2rem;
         line-height: 30px;
       }

       @media screen and (max-width: 426px) {
         font-size: 1.6rem;
         line-height: 22px;
       }
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

        @media screen and (max-width: 768px) {
          width: 460px;
          height: 560px;
        }

        @media screen and (max-width: 426px) {
          width: 320px;
          height: 420px;
          opacity: 0.3;

          margin-top: 20px;
        }
    }
`