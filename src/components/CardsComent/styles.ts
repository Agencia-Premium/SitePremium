import styled, { css } from "styled-components";
import { CardsCommentProps } from ".";

type WrapperProps = Pick<CardsCommentProps, "align">;

const CardModifiers = {
  start: () => css`
    display: flex;
  `,
  end: () => css`
    div.container-right {
      margin-left: 26px;
    }

    div.container-left {
      margin-right: 40px;
    }
  `,
};

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1032px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;

  div.column-one {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
  }

  div.column-two {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Card = styled.div<WrapperProps>`
  width: 680px;
  height: 166px;
  background: rgba(11, 11, 11, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 6px;
  display: flex;
  position: relative;

  @media screen and (max-width: 768px) {
      width: 560px;
      height: 120px;
  } 

  .left {
    position: absolute;
    top: -30px;
    left: -30px;
  }

  .right {
    position: absolute;
    bottom: -30px;
    right: -30px;
  }
  ${({ align }) => css`
    ${!!align && CardModifiers[align]}
  `}

  div.container-right {
    display: flex;
    flex-direction: column;

    justify-content: center;
    padding: 0 32px 0 20px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      font-family: "Inter";
      color: #dfdfdf;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      font-family: "Inter";
      line-height: 22px;
      color: #a1a1a1;

      padding-top: 16px;
      text-align: justify;
    }
  }
  div.container-left {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 26px;
  }
`;

// export const ContainerComent = styled.div`
//     width: 100%;
//     max-width: 1032px;
//     margin: 62px auto;
//     /* display: flex;
//     flex-direction: column; */
//     /* justify-content: center; */

//     div.grade-left {
//         width: 100%;
//         display: flex;
//         justify-content: flex-start;
//     }

//     div.grade-right {
//         display: flex;
//         justify-content: flex-end;
//         margin-top: 60px;
//     }
// `

// export const Grade = styled.div`
//     display: flex;
//     width: 680px;
//     height: 166px;
//     background: rgba(11,11,11,0.5);
//     border-radius: 6px;
//     align-items: center;
//     justify-content: center;
//     /* margin: 45px auto; */
//     position: relative;

//     .AspasDireita {
//         position: absolute;
//         left: 650px;
//         top: 127px;
//     }

//     .AspasEsquerda {
//         position: absolute;
//         left: -27px;
//         top: -27px;
//     }

// `
// export const Left = styled.div`
//     display: flex;
//     width: 30%;
//     height: 100%;
//     align-items: center;
//     justify-content: center;
//     /* background-color: darkGray;  */
// `

// export const Right = styled.div`
//     display: flex;
//     width: 60%;
//     justify-content: center;
//     flex-direction: column;

//     h2 {
//         display: line-block;
//         font-size: 3rem;
//         font-weight: 700;
//         font-family: "Inter";
//         padding-bottom: 16px;
//         color: rgba(223,223,223,1);
//     }

//     p {
//         font-size: 1.8rem;
//         font-weight: 400;
//         font-family: "inter";
//         line-height: 22px;
//         color: rgba(161,161,161,1);
//     }
//     .depo {

//         padding-left: 10px;

//     }
// `
