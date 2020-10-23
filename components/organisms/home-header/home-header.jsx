import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { IDARegisterButton } from '@resystem/design-system';
import { openIDASignin } from 'components/main/main.controller';
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
const Header = ({ menuOpened, toggleMenu, closeMenu }) => (
  <HeaderComponent fixed={menuOpened}>
    <Brand
      onClick={() => {}}
      src="/static/icons/oasi.svg"
      alt="esse é um logo provisório para a plataforma da feira digital"
    />
    <div>
      <Wrapper>
        <Navigation
          closeMenu={closeMenu}
          onIDASignin={openIDASignin}
          textButton="Entrar"
        />
      </Wrapper>
      <BurgerIcon
        onClick={toggleMenu}
        customStyle={`
          height: 39px;
        `}
        src={menuOpened ? "/static/icons/close.svg" : "/static/icons/menu-burger.svg"}
        alt="esse é icone do meenu, 3 linhas pretas na horizontal formando um sanduiche"
      />
    </div>
  </HeaderComponent>
);

Header.propTypes = {
  menuOpened: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Header;
