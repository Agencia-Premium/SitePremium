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

    @media screen and (max-width: 1160px) {
        justify-content: center;
    }
  }

  div.column-two {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 1160px) {
        justify-content: center;
    }
  }

  @media screen and (max-width: 660px) {
      display: none;
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

  @media screen and (max-width: 1160px) {
    width: 560px;
    height: 120px;
  }

  @media screen and (max-width: 768px) {
    width: 560px;
    height: 120px;
  }

  .left {
    position: absolute;
    top: -30px;
    left: -30px;

    @media screen and (max-width: 1160px) {
      top: -24px;
      left: -24px;
      width: 40px;
      height: 40px;
    }
  }

  .right {
    position: absolute;
    bottom: -30px;
    right: -30px;

    @media screen and (max-width: 1160px) {
      bottom: -24px;
      right: -24px;
      width: 40px;
      height: 40px;
    }
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

      @media screen and (max-width: 1160px) {
        font-size: 20px;
      }
    }

    p {
      font-size: 18px;
      font-weight: 400;
      font-family: "Inter";
      line-height: 22px;
      color: #a1a1a1;

      padding-top: 16px;
      text-align: justify;

      @media screen and (max-width: 1160px) {
        font-size: 12px;
        padding-top: 10px;
      }
    }
  }

  div.container-left {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 26px;

    @media screen and (max-width: 1160px) {
      /* img {
            width: 100%;
            height: 100%;
        } */
    }
  }
`;
