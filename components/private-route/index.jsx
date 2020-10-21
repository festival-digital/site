import React from 'react';
import StoreContext from 'components/store/Store';
import {} from 'next/route';
import PropTypes from 'prop-types';

const PrivateRoute = () => {
  return <></>;
};

PrivateRoute.defaultProps = {
  children: <span />,
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
