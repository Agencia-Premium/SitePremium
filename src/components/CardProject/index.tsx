import React from 'react';

import { ContainerProject, Right, Left} from "./styled";

type CardProjectProps = {
    Title: string;
    SubTitle: string;
    image: string;
}

const CardProject: React.FC<CardProjectProps> = ({Title, SubTitle, image}) => {
    return(
        <>
        <ContainerProject>
            <Left>
                <img src={image}/>
            </Left>
            <Right>
                <h2>{Title}</h2>
                <p>{SubTitle}</p>
                <button id="ver">Ver</button>
            </Right>


        </ContainerProject>
        </>
    )
}
export default CardProject;