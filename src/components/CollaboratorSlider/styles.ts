import styled, { css } from "styled-components";
import media from "styled-media-query";
import { CollaboratorSliderProps } from ".";

type WrapperProps = Pick<CollaboratorSliderProps, "color">;

export const Wrapper = styled.section<WrapperProps>`
  min-width: 100%;
  max-width: 1036px;
  /* margin-top: 20px; */
  margin: 0 auto;
  overflow: hidden;

  ${({ color }) => css`
    ${media.lessThan("huge")`
      overflow-x: hidden;
    `}
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide {
      min-width: 328px;
      /* height: 345px; */
      /* margin-left: 20px; */

      @media screen and (max-width: 426px) {
        margin-left: 30px;
      }
    }

    .slick-slide > div {
      margin: 0 22px;

      height: 100%;
    }
    .slick-list {
      margin: 0 -22px;
    }

    ${media.greaterThan("large")`
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;

      .slick-slide > div {
        margin: 0 24px;
      }
      .slick-list {
        margin: 0 0px;
      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      color: #fff;
      cursor: pointer;
      position: absolute;
      top: 60%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
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
