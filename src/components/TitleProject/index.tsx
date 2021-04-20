import React from 'react';

import {ContainerOur, Left, Right} from './styles';

type TitleProps = {
  title: string;
  subtitle?: string;
  imagem?: string;
}

const TitleProject: React.FC<TitleProps> = ({title, subtitle, imagem}) => {
  return(
    <>
      <ContainerOur>
        <Left>
        <img src="foguetetiponasa.webp" />
        </Left>
        <Right>
          <h2>{subtitle}</h2>
          <h1>{title}</h1>
          <img src={imagem}/>
        </Right>
      </ContainerOur>
    </>
  )
}
export default TitleProject;