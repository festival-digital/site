import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IDARegisterButton } from '@resystem/design-system';
import Navigation from 'components/molecules/navigation/navigation';
import {
  BurgerIcon,
  Brand,
  Header as HeaderComponent,
  Wrapper,
} from './home-header.style';

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
      <Wrapper>
        <Navigation textButton="Entrar" />
      </Wrapper>
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
