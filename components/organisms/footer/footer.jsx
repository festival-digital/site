import React from 'react';
import Link from 'next/link';
import { openIDASignin } from 'components/main/main.controller';
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
            <IDARegisterButton
              text="Entrar com IDa"
              dark
              small
              onClick={openIDASignin}
            />
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
            <Link href="/use-terms">
              <a>Termos de uso</a>
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link href="/ficha-tecnica">
              <a>Ficha Técnica</a>
            </Link>
          </NavigationItem>
        </div>
        <MediaSocial>
          <a
            href="https://www.facebook.com/oasi.vc/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <Icon src="/static/icons/facebookIcon.svg" alt="Logo do Facebook" />
          </a>
          <a
            href="https://www.instagram.com/oasi.vc/"
            target="_blank"
            without
            rel="noreferrer"
          >
            <Icon
              src="static/icons/instagramIcon.svg"
              alt="Logo do instagram"
            />
          </a>
          <a
            href="https://twitter.com/oasivc"
            target="_blank"
            without
            rel="noreferrer"
          >
            <Icon src="static/icons/twitterIcon.svg" alt="Logo do twitter" />
          </a>
        </MediaSocial>
      </Navigation>
      <Space />
      <Space />
      <Content>
        <div>
          <Link href="/">
            <BrandIcon src="static/icons/oasi.svg" alt="logo da oasi" />
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
              <IconOrganization
                src="static/logos/resystem.svg"
                alt="Logo da Resystem"
              />
              <IconOrganization
                src="static/logos/madpixel.svg"
                alt="Logo da MadPixel"
              />
            </ContentIcon>
          </ContentOrganization>
          <ContentOrganization>
            <TextOrganization>Apoio: </TextOrganization>
            <ContentIcon>
              <IconOrganization src="static/logos/som.svg" alt="Logo do SOM" />
              <IconOrganization
                src="static/logos/midianinja.svg"
                alt="Logo da Midia Ninja"
              />
              <IconOrganization src="static/logos/logo.svg" alt="" />
              <IconOrganization
                src="static/logos/afete-se.svg"
                alt="Logo do afete-se"
              />
              <IconOrganization
                src="static/logos/festival.svg"
                alt="Logo do festival covida: 2020"
              />
            </ContentIcon>
          </ContentOrganization>
        </Organization>
      </Content>
    </FooterComponent>
  );
};

export default Footer;
