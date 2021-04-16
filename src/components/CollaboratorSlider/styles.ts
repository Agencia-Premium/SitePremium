import styled, { css } from "styled-components";
import media from "styled-media-query";
import { CollaboratorSliderProps } from ".";

type WrapperProps = Pick<CollaboratorSliderProps, "color">;

export const Wrapper = styled.section<WrapperProps>`
  /* background: red; */
  min-width: 100%;
  /* margin: 0 auto; */
  /* position: relative; */

  ${({ color }) => css`
    ${media.lessThan("huge")`
      overflow-x: hidden;
    `}
    .slick-track,
    .slick-list {
      display: flex;
    }
    .slick-slide > div {
      margin: 0 12px;
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -12px;
    }
    ${media.greaterThan("large")`
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
      .slick-slide > div {
        margin: 0 24px;
      }
      .slick-list {
        margin: 0 -24px;
      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      /* background: #fff; */
      color: #fff;
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
      /* overflow: hidden; */
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
