import React, { useContext } from 'react';
import Breadcrumb from 'components/molecules/breadcrumb/breadcrumb';
import Store from 'components/store/Store';
import { OPEN_MENU_MODAL, CLOSE_MENU_MODAL } from 'components/store/actions';
import Footer from 'components/organisms/footer/footer';
import Header from 'components/organisms/home-header/home-header';
import TextUseTerms from 'components/atoms/text-terms/tex-terms';
import { Container, Wrapper, Space } from './useTerms.style';

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
            { href: '/use-terms', label: 'TERMOS DE USO' },
          ]}
        />

        <TextUseTerms />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default UseTermsPage;
