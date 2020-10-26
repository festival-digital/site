import React from 'react';
import Navigation from 'components/molecules/navigation/navigation';
import { Menu as MenuComponent } from './home-menu.style';

/**
 * This is the Menu component
 * @returns {React.Component} Menu component global
 */
const Menu = ({ opened, onIDASignin, closeMenu }) => {
  return (
    <MenuComponent opened={opened}>
      <Navigation
        onIDASignin={onIDASignin}
        closeMenu={closeMenu}
        textButton="Entrar com IDA"
        column
      />
    </MenuComponent>
  );
};

export default Menu;
