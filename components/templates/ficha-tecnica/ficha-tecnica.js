import React, { useContext } from 'react';
import Breadcrumb from 'components/molecules/breadcrumb/breadcrumb';
import Store from 'components/store/Store';
import { OPEN_MENU_MODAL, CLOSE_MENU_MODAL } from 'components/store/actions';
import Footer from 'components/organisms/footer/footer';
import Header from 'components/organisms/home-header/home-header';
import {
  Container,
  Wrapper,
  Space,
  Title,
  Contact,
  Subtitle,
  List,
  ListItem,
  Strong,
  WrapperGeneric,
  ContainerGeneric,
} from './ficha-tecnica.style';

/**
 *
 * @returns {React.Component}
 */
const UseTermsPage = () => {
  // const router = useRouter();
  const { state, dispatch } = useContext(Store);
  return (
    <Container>
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
      <Wrapper>
        <Space />
        <Breadcrumb
          options={[
            { href: '/', label: 'Início' },
            { href: '/ficha-tecnica', label: 'FICHA TÉCNICA' },
          ]}
        />
        <Title>Ficha Técnica</Title>
        <Contact>
          <div>
            <Subtitle>Realização</Subtitle>
            <List>
              <ListItem>Afete-se</ListItem>
              <ListItem>Festival Convida</ListItem>
              <ListItem>Feira da Música</ListItem>
              <ListItem>Mídia NINJA</ListItem>
            </List>
          </div>
          <div>
            <Subtitle>Idealização</Subtitle>
            <List>
              <ListItem>Fabio Pedroza</ListItem>
              <ListItem>Ivan Ferraro</ListItem>
              <ListItem>Talles Lopes</ListItem>
              <ListItem>Tawana 'Nana' Yung</ListItem>
            </List>
          </div>
        </Contact>
        <Contact>
          <div>
            <Subtitle>Eventos</Subtitle>
            <List>
              <ListItem>
                <Strong>Afete-se</Strong> - Tawana 'Nana' Yung, Fabio Pedroza,
                Thiago Fanis
              </ListItem>
              <ListItem>
                <Strong>Festival Convida</Strong> - Fabio Pedroza e Eli Moura
              </ListItem>
              <ListItem>
                <Strong>Feira da Música</Strong> - Thais Siqueira de Andrade e
                Camila Rodrigues Francisco
              </ListItem>
            </List>
          </div>
          <div>
            <Subtitle>Articuladores</Subtitle>
            <List>
              <ListItem>Fabio Pedroza</ListItem>
              <ListItem>Ivan Ferraro</ListItem>
              <ListItem>Talles Lopes</ListItem>
            </List>
          </div>
        </Contact>
        <Contact>
          <div>
            <Subtitle>Product Manager</Subtitle>
            <List>
              <ListItem>Cláudia Schulz</ListItem>
            </List>
          </div>
          <div>
            <Subtitle>Product Owner</Subtitle>
            <List>
              <ListItem>Júlia Hormann</ListItem>
            </List>
          </div>
        </Contact>
        <Contact>
          <div>
            <Subtitle>Scrum Master</Subtitle>
            <List>
              <ListItem>Thatiana Emanuelle da Cunha</ListItem>
            </List>
          </div>
          <div>
            <Subtitle>Pesquisa de Campo</Subtitle>
            <List>
              <ListItem>Júlia Hormann</ListItem>
            </List>
          </div>
        </Contact>
        <Contact>
          <div>
            <Subtitle>GT em Acessibilidade Cultural do Ceará</Subtitle>
            <List>
              <ListItem>Thamyle Vieira Machado</ListItem>
              <ListItem>João Bosco de Farias</ListItem>
              <ListItem>Maria Gislana Monte do Vale</ListItem>
            </List>
          </div>
        </Contact>
        <ContainerGeneric>
          <Subtitle>Design</Subtitle>
          <WrapperGeneric>
            <List>
              <ListItem>Thiago Scherer - Direção de Arte</ListItem>
              <ListItem>
                Éligê (LG) - Lucas Caldeira - Artista Generalista
              </ListItem>
              <ListItem>Felipe Sampaio - Product Design</ListItem>
              <ListItem>Arthur Dias - UX e Visual Designer</ListItem>
              <ListItem>Pri Parlagreco - UI Designer</ListItem>
            </List>
            <List>
              <ListItem>Bruno Costa - UX/UI Designer</ListItem>
              <ListItem>Jesus Lumma - UX Strategy</ListItem>
              <ListItem>Cecília Sá - Design</ListItem>
              <ListItem>Gabriel Andrade de Souza - Game Designer</ListItem>
              <ListItem>
                Lucas Sordi - Concept, UX designer e planejamento de gameficação
              </ListItem>
            </List>
          </WrapperGeneric>
        </ContainerGeneric>
        <ContainerGeneric>
          <Subtitle>Desenvolvimento</Subtitle>
          <WrapperGeneric>
            <List>
              <ListItem>Gabriel Furlan - Front End</ListItem>
              <ListItem>Kelly Maria Silva Batista - Front End</ListItem>
              <ListItem>Natália Luiza da Silva - Front End</ListItem>
              <ListItem>Gabriel Mota Araújo - Programador</ListItem>
            </List>
            <List>
              <ListItem>Guilherme Okita - Programador</ListItem>
              <ListItem>Maurício Montes Maletta - Programador</ListItem>
              <ListItem>Isaac Lopes - Programador</ListItem>
              <ListItem>Isaque Benevides Costa - Programador</ListItem>
            </List>
          </WrapperGeneric>
        </ContainerGeneric>
        <Contact>
          <div>
            <Subtitle>Narrativa</Subtitle>
            <List>
              <ListItem>Jéferson Assumção</ListItem>
            </List>
          </div>
          <div>
            <Subtitle>Facilitação</Subtitle>
            <List>
              <ListItem>Rafaela Santos Palma</ListItem>
            </List>
          </div>
        </Contact>
        <Contact>
          <div>
            <Subtitle>Consultoria de Inovação</Subtitle>
            <List>
              <ListItem>Paula Marques</ListItem>
            </List>
          </div>
          <div>
            <Subtitle>Consultoria de Gamificação </Subtitle>
            <List>
              <ListItem>Ítalo Furtado </ListItem>
            </List>
          </div>
        </Contact>
        <Contact>
          <div>
            <Subtitle>Comunicação</Subtitle>
            <List>
              <ListItem>Tawana Yung - Criativo de marca/COM</ListItem>
              <ListItem>Felipe Qualquer</ListItem>
            </List>
          </div>
          <div>
            <Subtitle>Artistas Convidados </Subtitle>
            <List>
              <ListItem>Siren </ListItem>
              <ListItem>Brixx </ListItem>
              <ListItem>SHN </ListItem>
              <ListItem>Grud </ListItem>
              <ListItem>Tainá Rossi </ListItem>
            </List>
          </div>
        </Contact>
        <ContainerGeneric>
          <Subtitle>Inteligência Coletiva (Colaboradores)</Subtitle>
          <WrapperGeneric>
            <List>
              <ListItem>Rosa Liriss</ListItem>
              <ListItem>Yoshiaki Shimbo</ListItem>
              <ListItem>Edvam Filho</ListItem>
              <ListItem>Alessandra Santos</ListItem>
              <ListItem>Bianca Lima</ListItem>
              <ListItem>Karla Martins</ListItem>
              <ListItem>Freitas Benevides</ListItem>
              <ListItem>Lisa Brito</ListItem>
              <ListItem>Felipe Altenfelder</ListItem>
              <ListItem>Cleber Machado</ListItem>
              <ListItem>Fabrício Ofuji</ListItem>
              <ListItem>Alexandre Theodoro</ListItem>
              <ListItem>Bruno Carrilho</ListItem>
              <ListItem>Francieli Abreu</ListItem>
            </List>
            <List>
              <ListItem>Louise Akemi</ListItem>
              <ListItem>Thiago Bezerra Sampaio</ListItem>
              <ListItem>Oswaldo Ribeiro dos Santos Júnior (DougPreto)</ListItem>
              <ListItem>Maria Cristiane Sousa Pires</ListItem>
              <ListItem>Nádia Maria Ferreira de Sousa</ListItem>
              <ListItem>Polyana De Loreto Pontes Xavier</ListItem>
              <ListItem>Paulo Sampaio</ListItem>
              <ListItem>Paulo Zé Barcellos</ListItem>
              <ListItem>Tiago Pezão</ListItem>
              <ListItem>Ane Molina</ListItem>
              <ListItem>Hanna Thuin</ListItem>
              <ListItem>Andre Ferraz</ListItem>
              <ListItem>Pablo Hércules</ListItem>
            </List>
          </WrapperGeneric>
        </ContainerGeneric>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default UseTermsPage;
