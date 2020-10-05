import React from 'react';
 
import { IDARegisterButton, } from '@resystem/design-system';
import {
  IDALoginButton,
  BurgerIcon,
  Brand,
  Header as HeaderComponent,
} from './header.style';

/**
 * This is the Header component
 * @returns {React.Component} header component global
 */
const Header = () => (
  <HeaderComponent>
    <Brand
      onClick={(() => {})}
      src="/static/images/oasi.png"
      alt="esse é um logo provisório para a plataforma da feira digital"
    />
   <div>
      
      <BurgerIcon
        onClick={(() => {})}
        src="/static/icons/menu-burger.svg"
        alt="esse é icone do meenu, 3 linhas pretas na horizontal formando um sanduiche"
      /> 
    </div>
     
     
    <IDALoginButton
      onClick={(() => {})}
      src="/static/images/branco.png"
      alt="esse é um logo provisório para a plataforma da feira digital"
    />
   
 

  </HeaderComponent>
);

export default Header;
