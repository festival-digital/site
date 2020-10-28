import React from 'react';
import Link from 'next/link';

import { IDARegisterButton, Text, Subtitle } from '@resystem/design-system';
import {
  Footer as FooterComponent,
  Space,
  SpaceSmall,
  Navigation,
  NavigationItem,
  WrapperButtonIDA,
  MediaSocial,
  Icon,
  Organization,
  BrandIcon,
  IDAContent,
  IDAContentWrapper,
  ContentAbout,
  IDASubtitle,
  IDAText,
  IDALink,
} from './footer.style';

const Footer = () => {
  return (
    <FooterComponent>
      <IDAContent>
        <IDAContentWrapper>
          <ContentAbout>
            <IDASubtitle>
              Bora viver essa experiência mágica com a gente?
            </IDASubtitle>
            <IDAText>
              Conhece a IDa? É uma autenticação segura e rápida!
              <br />
              Seu cadastro na OASI é feito com ela.
            </IDAText>
          </ContentAbout>
          <WrapperButtonIDA>
            <IDARegisterButton text="Entrar com IDa" dark />
            <IDALink href="/">SAIBA MAIS SOBRE A IDa</IDALink>
          </WrapperButtonIDA>
        </IDAContentWrapper>
      </IDAContent>
      <Navigation>
        <div>
          <NavigationItem>
            <Link href="/">
              <a>Início</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/events">
              <a>Todos os Eventos</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/faq">
              <a>Perguntas Frequentes</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/">
              <a>Política de Privicidade</a>
            </Link>
          </NavigationItem>
        </div>
        <MediaSocial>
          <a href="/" target="_blank" without rel="noreferrer">
            <Icon src="/static/icons/facebookIcon.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/oasi.vc/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <Icon src="static/icons/instagramIcon.svg" alt="" />
          </a>
          <a href="/" target="_blank" without rel="noreferrer">
            <Icon src="static/icons/twitterIcon.svg" alt="" />
          </a>
        </MediaSocial>
      </Navigation>
      <Space />
      <Space />
      <Organization>
        <div>
          <Link href="/">
            <BrandIcon src="static/icons/oasi.svg" alt="" />
          </Link>
        </div>
        <div>
          <Icon src="static/icons/midia-ninja.svg" alt="" />
          <Icon src="static/icons/design-ativista.svg" alt="" />
          <Icon src="static/icons/zona-de-propulssao.svg" alt="" />
        </div>
      </Organization>
    </FooterComponent>
  );
};

export default Footer;
