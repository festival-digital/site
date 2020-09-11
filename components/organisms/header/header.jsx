import React from 'react';
import { IDALoginButton } from '@resystem/design-system';
import {
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
      src="/static/images/dummy-brand.svg"
      alt="esse é um logo provisório para a plataforma da feira digital"
    />
    <div>
      <IDALoginButton
        onClick={(() => {})}
        dark
        small
        text="Entrar"
      /> 
      <BurgerIcon
        onClick={(() => {})}
        src="/static/icons/menu-burger.svg"
        alt="esse é icone do meenu, 3 linhas pretas na horizontal formando um sanduiche"
      />
    </div>
  </HeaderComponent>
);

export default Header;
