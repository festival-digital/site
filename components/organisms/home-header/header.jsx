import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IDARegisterButton } from '@resystem/design-system';
import {
  BurgerIcon, Brand, Header as HeaderComponent, IDAContent,
  Navigation, NavigationItem,
} from './header.style';

/**
 * This is the Header component
 * @returns {React.Component} header component global
 */
const Header = ({ onIDASignin }) => (
  <HeaderComponent>
    <Brand
      onClick={() => {}}
      src="/static/icons/oasis-logo.svg"
      alt="esse é um logo provisório para a plataforma da feira digital"
    />
    <div>
      <Navigation>
        <NavigationItem>
          <Link href="/">
            <a>Início</a>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/events">
            <a>Todos os eventos</a>
          </Link>
        </NavigationItem>
      </Navigation>
      <IDAContent>
        <IDARegisterButton
          onClick={onIDASignin}
          text="Entrar"
          small
        />
      </IDAContent>
      <BurgerIcon
        onClick={() => {}}
        customStyle={`
          height: 39px;
        `}
        src="/static/icons/menu-burger.svg"
        alt="esse é icone do meenu, 3 linhas pretas na horizontal formando um sanduiche"
      />
    </div>
  </HeaderComponent>
);

Header.propTypes = {
  onIDASignin: PropTypes.func.isRequired,
};

export default Header;
