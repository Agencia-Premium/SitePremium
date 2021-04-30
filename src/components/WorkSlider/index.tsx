import React, { useEffect, useState } from 'react'

import Slider, { Settings } from "react-slick";
import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";

import Collaborator, { CollaboratorProps } from "../Collaborator";
import { Collaborators } from "../Collaborator/constants";

import CardWork from '../CardWork';
import { Work } from '../CardWork/Constants'
import * as S from "./styles";

import { HomeProps } from '../../pages/index'

const settings: Settings = {
  arrows: false,
  slidesToShow: 3,
  infinite: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1120,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 426,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
  ],
  nextArrow: <ArrowRight aria-label="next card" />,
  prevArrow: <ArrowLeft aria-label="previous card" />,
};

const CollaboratorSlider: React.FC<Omit<HomeProps, 'posts'>> = ({ data }) => (
  <S.Wrapper>
    <img src="fade-arrow-right.webp" alt="seta banca para a direita"/>
    <Slider {...settings}>
      {data.map(( item, index ) => {
        return <CardWork key={item.id} title={item.title} description={item.description} image={item.image.url} />
      })}
    </Slider>
  </S.Wrapper>
);

export default CollaboratorSlider;
