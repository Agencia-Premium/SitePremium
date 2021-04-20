import React from 'react';
import Button from '../Button';


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
                <Button scale="xsmall" background="yellow" >Ver</Button>
            </Right>


        </ContainerProject>
        </>
    )
}
export default CardProject;