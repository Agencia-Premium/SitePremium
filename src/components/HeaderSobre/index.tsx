import React from 'react';
import {HeaderContainer, BkgContainer, Left, Right} from './styles'
const HeaderSobre: React.FC = ({}) => {
    return(

        <>
            <HeaderContainer>
                <BkgContainer>
                    <Left>
                        <img src="TrofeuSobre.webp" alt="troféu dourado" />
                    </Left>
                    <Right>
                        <h1>Conheça a <br/><span>Premium!</span></h1>
                    </Right>
                </BkgContainer>
            </HeaderContainer>
        </>
    )
}

export default HeaderSobre;