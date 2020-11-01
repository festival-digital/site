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
  IconOrganization,
  Content,
  BrandIcon,
  IDAContent,
  IDAContentWrapper,
  ContentAbout,
  ContentOrganization,
  IDASubtitle,
  IDAText,
  IDALink,
  Organization,
  ContentIcon,
  TextOrganization,
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
              <a>Termos de uso</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/">
              <a>Ficha Técnica</a>
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
      <Content>
        <div>
          <Link href="/">
            <BrandIcon src="static/icons/oasi.svg" alt="" />
          </Link>
        </div>
        <Organization>
          <ContentOrganization>
            <TextOrganization>Narrativa: </TextOrganization>
            <ContentIcon>
              <IconOrganization
                src="static/logos/narrativa.svg"
                alt="Logo da plataforma de escrita criativa, é um quadrado com bordas brancas, dentro tem palavra quadro escrito"
              />
            </ContentIcon>
          </ContentOrganization>
          <ContentOrganization>
            <TextOrganization>Desenvolvimento: </TextOrganization>
            <ContentIcon>
              <IconOrganization src="static/logos/resystem.svg" alt="" />
              <IconOrganization src="static/logos/madpixel.svg" alt="" />
            </ContentIcon>
          </ContentOrganization>
          <ContentOrganization>
            <TextOrganization>Apoio: </TextOrganization>
            <ContentIcon>
              <IconOrganization src="static/logos/som.svg" alt="" />
              <IconOrganization src="static/logos/midianinja.svg" alt="" />
              <IconOrganization src="static/logos/logo.svg" alt="" />
              <IconOrganization src="static/logos/afete-se.svg" alt="" />
              <IconOrganization src="static/logos/festival.svg" alt="" />
            </ContentIcon>
          </ContentOrganization>
        </Organization>
      </Content>
    </FooterComponent>
  );
};

export default Footer;
