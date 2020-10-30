import React, { useContext, useState } from 'react';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import Icon from '@material-ui/core/Icon';
import Link from 'next/link';

import {
  Container,
  Icon as IconMenu,
  Menu as MenuComponent,
  MenuItem,
  customButtonStyle,
  Text,
} from './profile-menu.style';
import ida from 'libs/ida.lib';
import { useRouter } from 'next/router';
import Store from 'components/store/Store';

const handleLogout = (router, dispatch) => {
  router.push('/');
  ida.logout();
  dispatch({
    type: 'SET_USER',
    user: null,
  });
  dispatch({
    type: 'SET_AUTH',
    auth: null,
  });
};

const Menu = () => {
  const { dispatch } = useContext(Store)
  const router = useRouter();
  return (
    <MenuComponent>
      <MenuItem>
        <Link href="#">
          <a>
            <Icon style={{ color: 'white' }}>account_balance_wallet</Icon>
            <Text>Meus Ingressos</Text>
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">
          <a>
            <Icon style={{ color: 'white' }}>description</Icon>
            <Text>Dados Cadastrais</Text>
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">
          <a>
            <Icon style={{ color: 'white' }}>import_contacts</Icon>
            <Text>História de Oasi</Text>
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">
          <a>
            <Icon style={{ color: 'white' }}>assignment</Icon>
            <Text>Termos de Uso</Text>
          </a>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="#">
          <a>
            <Icon style={{ color: 'white' }}>public</Icon>
            <Text>Portal Oasi</Text>
          </a>
        </Link>
      </MenuItem>
      <MenuItem onClick={() => handleLogout(router, dispatch)}>
        <Link href="#">
          <a>
            <Icon style={{ color: 'white' }}>exit_to_app</Icon>
            <Text>Sair</Text>
          </a>
        </Link>
      </MenuItem>
    </MenuComponent>
  );
};

const ProfileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Container>
      <GradientButton
        customStyle={customButtonStyle}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <IconMenu src="static/images/avatar-oasi.svg" />
      </GradientButton>
      {openMenu && <Menu />}
    </Container>
  );
};

export default ProfileMenu;
