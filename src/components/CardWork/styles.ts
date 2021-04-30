import styled from "styled-components";
import { CardWorkProps } from ".";

type WrapperProps = Pick<CardWorkProps, 'image'>

export const Wrapper = styled.div<WrapperProps>`
  /* min-width: 100%; */
  /* min-height: 100%; */
  max-width: 345px;
  min-height: 450px;
  border: 2px solid rgba(248, 175, 48, 0.5);
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  filter: drop-shadow(20px 23px 30px 0px rgba(0, 0, 0, 0.42));

  @media screen and (max-width: 526px) {
    min-width: 180px;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    font-size: 32px;
    font-weight: 700;
    font-family: "Ubuntu";
    padding-left: 24px;
    color: rgba(241, 241, 241, 1);

    @media screen and (max-width: 526px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 18px;
    color: #f7f7f7;
    padding-left: 24px;
    padding-bottom: 24px;
    font-family: "Ubuntu";
    font-weight: 400;
    padding-top: 8px;

    @media screen and (max-width: 526px) {
      font-size: 14px;
    }
  }
`;
