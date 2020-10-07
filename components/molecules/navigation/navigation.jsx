import React from 'react';
import Link from 'next/link';
import { IDARegisterButton } from '@resystem/design-system';
import {
  Navigation as NavigationComponent,
  NavigationItem,
  IDAContent,
} from './navigation.style';

const Navigation = ({ onIDASignin, textButton, column }) => {
  return (
    <div>
      <NavigationComponent column={column}>
        <NavigationItem column={column}>
          <Link href="/">
            <a>Início</a>
          </Link>
        </NavigationItem>
        <NavigationItem column={column}>
          <Link href="/events">
            <a>Todos os eventos</a>
          </Link>
        </NavigationItem>
        <IDAContent column={column}>
          <IDARegisterButton small onClick={onIDASignin} text={textButton} />
        </IDAContent>
      </NavigationComponent>
    </div>
  );
};

export default Navigation;
