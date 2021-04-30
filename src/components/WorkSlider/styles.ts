import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  margin-top: 20px;
  min-width: 100%;
  overflow-x: hidden;

  position: relative;

  img {
    position: absolute;
    top: 45%;
    right: 32px;
    z-index: 10;
  }

  ${({ color }) => css`
    ${media.lessThan("huge")`
      overflow-x: hidden;
    `}
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide {
      min-width: 345px;

      @media screen and (max-width: 426px) {
        /* margin-left: 30px; */
        min-width: 200px;
      }
    }

    .slick-slide > div {
      margin: 0 22px;

      height: 100%;

      @media screen and (max-width: 526px) {
        margin: 0 22px;
      }
    }
    .slick-list {
      margin: 0 -22px;

      @media screen and (max-width: 526px) {
        margin: 0 -10px;
      }
    }

    ${media.greaterThan("large")`
    /* width: 100%; */
    overflow-x: hidden;
    overflow-y: hidden;

      .slick-slide > div {
        margin: 0 24px;
        overflow-x: hidden;
      }
      .slick-list {
        margin: 0 0px;
        overflow-x: hidden;
      }

      .slick-slide {
        min-width: 345px;
      }

      .slick-slide .slick-active {
        /* min-width: 200px; */
      }

      .slick-slider .slick-initialized {
        overflow: hidden;
      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      color: #fff;
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      overflow-x: hidden;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -60px;
    }
    .slick-next {
      right: -60px;
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
