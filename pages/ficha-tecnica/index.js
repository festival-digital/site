import React from 'react';
import BaseHead from 'components/base-head/BaseHead';
import FichaTecnicaPage from 'components/templates/ficha-tecnica/ficha-tecnica';

const FichaTecnica = () => (
  <>
    <BaseHead
      title="Oasi - Ficha Técnica"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <FichaTecnicaPage />;
  </>
);

export default FichaTecnica;
