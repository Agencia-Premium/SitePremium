import React from 'react';
import {NavBarStyle, Left, Right} from './styles';


const NavBar: React.FC = ({}) => {
    return (
        <>

            <NavBarStyle>
                <Left><img src="logo.svg"/></Left>
                <Right>
                    <ul>
                        <li>Início</li>
                        <li>Serviços</li>
                        <li>Sobre nós</li>
                        <li>Equipe</li>
                        <li>Projetos</li>
                    </ul>
                </Right>
            </NavBarStyle>
        </>  
    )
}
export default NavBar;