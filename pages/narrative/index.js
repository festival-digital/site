import React from 'react';
import NarrativeTemplate from 'components/templates/narrative/narrative';
import BaseHead from 'components/base-head/BaseHead';

const Narrative = () => (
  <>
    <BaseHead
      title="Oasi - Narrativa"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <NarrativeTemplate />
  </>
);


export default Narrative;
