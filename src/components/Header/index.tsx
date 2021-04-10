import React from 'react';

import {HeaderStyle, BgLinha, Left, Right,} from './styles';

const Header: React.FC = ({}) => {
    return (

        <>
            <HeaderStyle>

                <BgLinha>

                    <Left>
                        <h1>Seja <br/> Premium</h1>
                        <p>Aqui nosso objetivo é levar seus <br/> negócios para o próximo nível.</p>    
                    </Left>

                    <Right>
                        <img src="trofeu3.webp"></img>
                    </Right>

                </BgLinha>

            </HeaderStyle>

        </>


    )
}

export default Header;