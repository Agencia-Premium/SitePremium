import React from "react";

type TitleProps = {
  name: string;
  description?: string;
};

import { NameTitulo, LineBotton, SubTitulo } from "./styles";

const Title: React.FC<TitleProps> = ({ name, description }) => {
  return (
    <>
      <LineBotton>
        <NameTitulo>{name}</NameTitulo>
        <img src="line_botton.svg" />
        {description && <SubTitulo>{description}</SubTitulo>}
      </LineBotton>
    </>
  );
};

export default Title;
