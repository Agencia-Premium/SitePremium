import React from "react";

import { ContainerCards, Cards } from "./styles";

import { Cards as CardConstants } from "./constants";

const Cardes: React.FC = ({}) => {
  return (
    <>
      <ContainerCards>
        {CardConstants.map((card, index) => {
          return (
            <Cards key={index}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </Cards>
          );
        })}
      </ContainerCards>
    </>
  );
};
export default Cardes;
