import React from 'react';
import PropTypes from 'prop-types';
import JuryTemplate from 'components/templates/jury/jury-template';

const Jury = ({ id }) => <JuryTemplate id={id} />;

Jury.propTypes = {
  id: PropTypes.string.isRequried,
};

Jury.getInitialProps = ({ query }) => ({ id: query.id });

export default Jury;
