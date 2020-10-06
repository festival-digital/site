import React from 'react';
import { IDARegisterButton } from '@resystem/design-system';
import Link from 'next/link';
import {
  Menu as MenuComponent,
  Navigation,
  NavigationItem,
  IDAContent,
} from './home-menu.style';

/**
 * This is the Menu component
 * @returns {React.Component} Menu component global
 */
const Menu = ({ opened, onIDASignin }) => {
  return (
    <MenuComponent opened={opened}>
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
        <IDARegisterButton small onClick={onIDASignin} text="Entrar com IDA" />
      </IDAContent>
    </MenuComponent>
  );
};

export default Menu;
