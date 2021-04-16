import Slider, { Settings } from "react-slick";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";

import Collaborator, { CollaboratorProps } from "../Collaborator";
import { Collaborators } from "../Collaborator/constants";
import * as S from "./styles";

export type CollaboratorSliderProps = {
  color?: "white" | "black";
};

const settings: Settings = {
  arrows: true,
  slidesToShow: 3,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
  nextArrow: <ArrowRight aria-label="next card" />,
  prevArrow: <ArrowLeft aria-label="previous card" />,
};

const CollaboratorSlider = ({ color = "white" }: CollaboratorSliderProps) => (
  <S.Wrapper color={color}>
    <Slider {...settings}>
      {Collaborators.map((item, index) => {
        return (
          <Collaborator
            key={index}
            image={item.image}
            name={item.name}
            occupation={item.occupation}
            description={item.description}
            facebook={item.socialMedia.facebook}
            instagram={item.socialMedia.instagram}
            linkedin={item.socialMedia.linkedin}
            twitter={item.socialMedia.twitter}
          />
        );
      })}
    </Slider>
  </S.Wrapper>
);

export default CollaboratorSlider;
