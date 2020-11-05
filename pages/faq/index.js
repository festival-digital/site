import React from 'react';
import BaseHead from 'components/base-head/BaseHead';
import FAQTemplate from 'components/templates/faq/faq';

/**
 * This is the FAQ PAGe component
 * @returns {React.Component}
 */
const FAQ = () => (
  <>
    <BaseHead
      title="Oasi - FAQ"
      description="Experimente formas diferentes de se encontrar e conectar com amigues, colaborar com eventos e projetos, e realizar um novo mundo possível."
    />
    <FAQTemplate />
  </>
);

export default FAQ;
