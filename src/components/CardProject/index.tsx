import React from 'react';
import Link from 'next/link'
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
                <img src={image} alt="foto mostrando os projetos da agência premium" />
            </Left>
            <Right>
                <h2>{Title}</h2>
                <p>{SubTitle}</p>
                <Link href="ourproject">
                <Button scale="xsmall" background="yellow" >Ver</Button>
                </Link>
            </Right>


        </ContainerProject>
        </>
    )
}
export default CardProject;