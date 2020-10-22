import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Text } from '@resystem/design-system';
import { questions } from './questions';
import Footer from '../../components/organisms/footer/footer';
import Card from '../../components/organisms/card-faq/card';
import GradientButton from '../../components/atoms/gradient-button/gradient-button';
import Header from '../../components/organisms/home-header/home-header';
import {
  Container,
  Wrapper,
  Contact,
  Form,
  Space,
  SpaceSmall,
  Title,
  customButtonStyle,
} from './index.style';

const FAQPage = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState(false);

  const isClicked = (id) => {
    setActiveId(id);
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Perguntas Frequentes</Title>
        {questions.map((question, index) => {
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
        <Contact>
          <Space />
          <Title>
            Ficou com mais alguma dúvida? Entre em contato com a gente
          </Title>
          <SpaceSmall />
          <Text>
            Preencha o formulário abaixo com suas dúvidas, sugestões ou
            comentários. Vamos tentar te dar um retorno o mais rápido possível!
          </Text>
          <SpaceSmall />
          <Form>
            <GradientButton customStyle={customButtonStyle}>
              Enviar Formulário
            </GradientButton>
          </Form>
        </Contact>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default FAQPage;
