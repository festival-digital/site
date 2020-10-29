import React from 'react';
import PropTypes from  'prop-types';
import Button from 'components/atoms/button/button';
import {
  JuryContainer, JuryHeader, JuryDescription, JuryList,
  OasiLogo, JuryTitle, BackIcon, Wrapper,
} from './jury.style';

const renderCards = () => null;

/**
 * This is the Jury component
 * @param {object} props proptypes to be pass to the component
 * @returns {React.Component}
 */
const JuryTemplate = () => (
  <JuryContainer>
    <Wrapper>
      <JuryHeader>
        <OasiLogo src="/static/icons/oasi.svg" alt="" />
        <JuryTitle>Júri Popular</JuryTitle>
      </JuryHeader>
      <Button
        customStyle={`
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: 32px;
          width: 232px;
        `}
      >
        <BackIcon src="/static/icons/back.svg" alt="" />
        Voltar para a galeria
      </Button>
      <JuryDescription>
        Aqui, você pode classificar os vídeos exibidos na Mostra de Videoclipes. O vídeo mais bem votado vai ser exibido no palco principal durante o encerramento da Feira da Música! Quando terminar de votar, pode clicar em “Voltar Para a Galeria” que vamos te levar de volta ;)
      </JuryDescription>
      <JuryList>
          { renderCards() }
      </JuryList>
    </Wrapper>
  </JuryContainer>
);

Jury.propTypes = {

};

export default JuryTemplate;
