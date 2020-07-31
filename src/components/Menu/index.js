import React from 'react';
import {LogoImage, MenuWrapper} from './style';
import logo from '../../img/dreflix.png';
import Button from '../Button/index';

function Header(){
    return(
        <MenuWrapper className="Menu" >
            <a href="/" >
            <LogoImage src={logo} className="Logo" alt="Logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </MenuWrapper>
    )
}

export default Header;