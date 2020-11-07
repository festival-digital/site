import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Icon from '@material-ui/core/Icon';
import { IDARegisterButton } from '@resystem/design-system';
import { openIDASignin } from 'components/main/main.controller';
import ModalSympla from 'components/modals/modal-sympla/modal-sympla';
import Header from 'components/organisms/home-header/home-header';
import Footer from 'components/organisms/footer/footer';
import Button from 'components/atoms/button/button';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import Loading from 'components/atoms/loading/loading';
import LinkButton from 'components/atoms/link-button/link-button';
import { isMobile } from 'utils/validations';
import Store from 'components/store/Store';
import { OPEN_MENU_MODAL, CLOSE_MENU_MODAL } from 'components/store/actions';
import {
  PageTemplate,
  ApresentationContent,
  InitialWrapper,
  Title,
  OasiLogo,
  Description,
  DownIllustration,
  DownButton,
  IDAContent,
  ContentAbout,
  IDASubtitle,
  IDALink,
  IDAText,
  WrapperButtonIDA,
  IDAContentWrapper,
  AboutPlataform,
  TextWrapper,
  AboutTitle,
  AboutDescription,
  Picture,
  AboutPlataformRow,
  AboutText,
  AboutTitleIllusttration,
  AboutOasi,
  AboutOasiWrapper,
  AboutOasiVideo,
  AboutOasiTextWrapper,
  AboutOasiTitle,
  AboutOasiDescription,
  NextEvent,
  NextEventTitle,
  NextEventSubtitle,
  NextEventDate,
  NextEventTags,
  NextEventActionsWrapper,
  NextEventDescription,
  NextEventInfoWrapper,
  NextEventMosaicIllustration,
  LoadingWrapper,
} from './home.style';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => {
  const { state, dispatch } = useContext(Store);
  const [symplaModal, setSymplaModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (state.user && state.user.status !== 'IN_REGISTER' && isMobile()) router.push('/events');
    if (state.user && state.user.status !== 'IN_REGISTER' && !isMobile()) {
      router.push(`https://game.oasi.vc/?t=${state.auth.token}`);
    }

  }, [state.user]);

  if (state.loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <PageTemplate>
      <InitialWrapper>
        <Header
          menuOpened={state.menu}
          toggleMenu={() => {
            dispatch({
              type: state.menu ? CLOSE_MENU_MODAL : OPEN_MENU_MODAL,
            });
          }}
          closeMenu={() => {
            dispatch({
              type: CLOSE_MENU_MODAL,
            });
          }}
        />
        <ApresentationContent>
          <Title>
            Conheça
            <span>Oasi</span>
            <OasiLogo src="/static/icons/oasi.svg" alt="" />
          </Title>
          <Description>
            Experimente formas diferentes de se encontrar e conectar com amigues,
            colaborar com eventos projetos, e realizar um novo mundo possível.
          </Description>
          <DownButton
            type="button"
            onClick={() => {
              document.querySelector('#ida-c2a').scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            <span>Descer para saber mais</span>
            <DownIllustration
              src="/static/icons/more-illustration.svg"
              alt=""
            />
          </DownButton>
        </ApresentationContent>
      </InitialWrapper>

      <IDAContent id="ida-c2a">
        <IDAContentWrapper>
          <ContentAbout>
            <IDASubtitle>
              Gostou? Vem viver essa experiência com a gente!
            </IDASubtitle>
            <IDAText>
              Você conhece a IDa? É uma autenticação rápida e segura.
              <br />
              Sua entrada na OASI é feita com ela
            </IDAText>
          </ContentAbout>
          <WrapperButtonIDA>
            <IDARegisterButton
              onClick={openIDASignin}
              text="Entrar com IDa"
              dark
              small
            />
          </WrapperButtonIDA>
        </IDAContentWrapper>
      </IDAContent>

      <AboutOasi>
        <AboutOasiWrapper>
          <AboutOasiVideo>
            <iframe
              title="video do youtube"
              src="https://www.youtube.com/embed/kXtsZdAeGjk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AboutOasiVideo>
          <AboutOasiTextWrapper>
            <AboutOasiTitle>Oasi? Mas o que é isso?</AboutOasiTitle>
            <AboutOasiDescription>
              Ei! Você! Oasi é uma plataforma que absorve vários formatos,
              shows, festas, mostras, conferências, oficinas e encontros. É uma
              nova forma de construir eventos e experiências coletivas!
              <br />
              <br />
              Bom, fica o convite pra fazer e realizar esse mundo com a gente.
              Vem explorar! E avisa as amigues!
            </AboutOasiDescription>
          </AboutOasiTextWrapper>
        </AboutOasiWrapper>
      </AboutOasi>

      <AboutPlataform>
        <AboutPlataformRow reverse>
          <Picture src="/static/images/grid-1.jpg" alt="" />
          <AboutText>
            <TextWrapper>
              <AboutTitleIllusttration
                src="/static/icons/grid-1-title-illustration.svg"
                alt=""
              />
              <AboutTitle>Saudações, Nomade!</AboutTitle>
              <AboutDescription>
                Uma experiência diferente pra você assistir o seu artista
                favorite! Fazer aquela reunião interativa e multimídia, ou expor
                seus produtos? Conheça a plataforma! Conheça Oasi.
              </AboutDescription>
            </TextWrapper>
          </AboutText>
        </AboutPlataformRow>
        <AboutPlataformRow>
          <Picture src="/static/images/grid-2.jpg" alt="" />
          <AboutText>
            <TextWrapper>
              <AboutTitleIllusttration
                src="/static/icons/grid-2-title-illustration.svg"
                alt=""
              />
              <AboutTitle>Um mundo feito de encontros</AboutTitle>
              <AboutDescription>
                Uma nova forma de experimentar o coletivo, novas amigues,
                amigues antigas, ou até seus artistas favorites, te esperam em
                Oasi!
              </AboutDescription>
            </TextWrapper>
          </AboutText>
        </AboutPlataformRow>
        <AboutPlataformRow reverse>
          <Picture src="/static/images/grid-3.jpg" alt="" />
          <AboutText>
            <TextWrapper>
              <AboutTitleIllusttration
                src="/static/icons/grid-3-title-illustration.svg"
                alt=""
              />
              <AboutTitle>Galeria e Exposições</AboutTitle>
              <AboutDescription>
                Curadoria sempre envolvida com os eventos e temas da plataforma,
                dos mais diversos. Pra espalhar a palavra de tudo que a gente
                ama.
              </AboutDescription>
            </TextWrapper>
          </AboutText>
        </AboutPlataformRow>
        <AboutPlataformRow>
          <Picture src="/static/images/grid-4.jpg" alt="" />
          <AboutText>
            <TextWrapper>
              <AboutTitleIllusttration
                src="/static/icons/grid-4-title-illustration.svg"
                alt=""
              />
              <AboutTitle>Feira online </AboutTitle>
              <AboutDescription>
                Com um catálogo colaborativo, espaços de aprendizagem, encontros
                e painéis! Muita troca e histórias pra ouvir e contar por aqui!
                Vai perder essa?
              </AboutDescription>
            </TextWrapper>
          </AboutText>
        </AboutPlataformRow>
      </AboutPlataform>

      <NextEvent backgroundImg="/static/images/feira-bg.jpg">
        <NextEventMosaicIllustration
          src="/static/images/event-mosaic.svg"
          alt=""
        />
        <NextEventInfoWrapper>
          <NextEventTitle>Próximo evento</NextEventTitle>
          <NextEventSubtitle>Feira da Música de Fortaleza</NextEventSubtitle>
          <NextEventDate>de 5 a 8 de Novembro</NextEventDate>
          <NextEventTags>
            música - mostra de vídeoclipe - oficinas - hackatom - zona de
            propulsão
          </NextEventTags>
          <NextEventDescription>
            Cinco dias de muita música brasileira, com artistas locais e
            emergentes. Também vai rolar exposições com artistas de Fortaleza, e
            claro que não podia faltar a feirinha online, né?
          </NextEventDescription>
        </NextEventInfoWrapper>
        <NextEventActionsWrapper>
          <GradientButton
            onClick={() => setSymplaModal(true)}
            customStyle={`
              > span {
                vertical-align: middle;
              }
            `}
            alt="Adquirir ingresso para a Feira da Música de Fortaleza de 5 a 8 de Novembro"
          >
            <Icon>local_grocery_store</Icon>
            Adquirir ingresso
          </GradientButton>
          <Button
            color="#404040"
            onClick={() => {
              router.push('https://feiradamusica.com.br');
            }}
            alt="Saiba mais sobre a Feira da Música de Fortaleza de 5 a 8 de Novembro"
          >
            Saiba mais
          </Button>
          {/* <Link href="/events">
            <LinkButton color="#FFFFFF">
              Ver todos os eventos
            </LinkButton>
          </Link> */}
        </NextEventActionsWrapper>
      </NextEvent>

      <Footer />

      <ModalSympla
        opened={symplaModal}
        toSympla={() => {
          window.open('https://www.sympla.com.br/18-feira-da-musica__1034066', '_blank');
          setSymplaModal(false);
        }}
        onCancel={() => setSymplaModal(false)}
      />
    </PageTemplate>
  );
};

export default Home;
