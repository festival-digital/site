import React from 'react';
import PropTypes from 'prop-types';
import JuryTemplate from 'components/templates/jury/jury-template';
import PrivateContext from 'components/private-context/private-context';

const Jury = ({ id }) => (
  <PrivateContext>
    <JuryTemplate id={id} />
  </PrivateContext>
);

Jury.propTypes = {
  id: PropTypes.string.isRequried,
};

Jury.getInitialProps = ({ query }) => ({ id: query.id });

export default Jury;
