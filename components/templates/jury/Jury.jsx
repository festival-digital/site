import React from 'react';
import PropTypes from 'prop-types';
import {
  JuryContainer,
  JuryHeader,
  JuryDescription,
  JuryList,
} from './jury.style';

const renderCards = () => null;

/**
 * This is the Jury component
 * @param {object} props proptypes to be pass to the component
 * @returns {React.Component}
 */
const Jury = () => (
  <JuryContainer>
    <JuryHeader>
      <OasiLogo />
      <JuryTitle>Juri Popular</JuryTitle>
    </JuryHeader>
    <Button>Voltar para a galeria</Button>
    <JuryDescription>
      Aqui, você pode classificar os vídeos exibidos na Mostra de Videoclipes. O
      vídeo mais bem votado vai ser exibido no palco principal durante o
      encerramento da Feira da Música! Quando terminar de votar, pode clicar em
      “Voltar Para a Galeria” que vamos te levar de volta ;)
    </JuryDescription>
    <JuryList>{renderCards()}</JuryList>
  </JuryContainer>
);

Jury.propTypes = {};

export default Jury;
