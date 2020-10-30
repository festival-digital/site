import React, { useState, useEffect, useContext } from 'react';
import Breadcrumb from 'components/molecules/breadcrumb/breadcrumb';
import Store from 'components/store/Store';
import { OPEN_MENU_MODAL, CLOSE_MENU_MODAL } from 'components/store/actions';
import ErrorMessagemSearch from 'components/atoms/errorMessageSearch/errorMessagemSearch';
import Footer from 'components/organisms/footer/footer';
import Card from 'components/organisms/card-faq/card';
import Header from 'components/organisms/home-header/home-header';
import SearchInput from 'components/atoms/search-input/search-input';
import FormContact from 'components/organisms/form-contact/form-contact';
import { questions } from './questions';
import { Container, Wrapper, Space, Title, WrapperSearch } from './faq.style';

/**
 * This is page FAQ
 * @returns {React.Component}
 */
const FAQPage = () => {
  // const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [activeId, setActiveId] = useState(false);
  const [filterQuestion, setFilterQuestion] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const [messageSearch, setMessageSearch] = useState(false);

  useEffect(() => {
    const filter = questions.filter(({ title, description }) => {
      return (
        title.toLowerCase().includes(filterQuestion.toLowerCase()) ||
        description.toLowerCase().includes(filterQuestion.toLowerCase())
      );
    });

    if (filter.length > 0) {
      setFilteredQuestions(filter);
      setMessageSearch(false);
    } else {
      setFilteredQuestions(questions);
      setMessageSearch(true);
    }
  }, [filterQuestion]);

  const isClicked = (id) => {
    if (id === activeId) {
      return setActiveId(false);
    }
    return setActiveId(id);
  };

  const handleOnChangeFilter = ({ target }) => setFilterQuestion(target.value);

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
            { href: '/faq', label: 'Perguntas Frequentes' },
          ]}
        />
        <WrapperSearch>
          <Title>Perguntas Frequentes</Title>
          <SearchInput
            placeholder="Buscar"
            onChange={handleOnChangeFilter}
            value={filterQuestion}
          />
        </WrapperSearch>
        {messageSearch && (
          <ErrorMessagemSearch>
            Não encontramos resultados para sua busca
          </ErrorMessagemSearch>
        )}
        {filteredQuestions.map((question, index) => {
          const { title, description } = question;
          return (
            <Card
              key={title}
              title={title}
              activeId={activeId}
              id={index}
              description={description}
              onClick={isClicked}
            />
          );
        })}
        <FormContact />
        <Space />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default FAQPage;
