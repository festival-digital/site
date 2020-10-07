import React from 'react';
import Navigation from 'components/molecules/navigation/navigation';
import { Menu as MenuComponent } from './home-menu.style';

/**
 * This is the Menu component
 * @returns {React.Component} Menu component global
 */
const Menu = ({ opened, onIDASignin }) => {
  return (
    <MenuComponent opened={opened}>
      <Navigation textButton="Entrar com IDA" column />
    </MenuComponent>
  );
};

export default Menu;
