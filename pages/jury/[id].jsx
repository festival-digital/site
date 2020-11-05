import React from 'react';
import PropTypes from 'prop-types';
import BaseHead from 'components/base-head/BaseHead';
import JuryTemplate from 'components/templates/jury/jury-template';
import PrivateContext from 'components/private-context/private-context';

const Jury = ({ id }) => (
  <>
    <BaseHead
      title="Oasi - Juri Popular"
      description="Aqui, você pode votar nos vídeos exibidos na Mostra de Videoclipes. Quando terminar de votar, pode clicar em “Voltar Para a Galeria” ;)"
    />
      <JuryTemplate id={id} />
  </>
);

Jury.propTypes = {
  id: PropTypes.string.isRequried,
};

Jury.getInitialProps = ({ query }) => ({ id: query.id });

export default Jury;
