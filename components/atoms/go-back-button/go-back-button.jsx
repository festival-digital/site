import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { Button } from './go-back-button.style';

const GoBackButton = ({ customStyle, onClick }) => (
  <Button
    type="button"
    onClick={onClick}
    customStyle={customStyle}
  >
    <Icon>keyboard_arrow_left</Icon>
    voltar
  </Button>
);

GoBackButton.propTypes = {
  customStyle: PropTypes.string,
  onClick: PropTypes.func,
};

GoBackButton.defaultProps = {
  customStyle: '',
  onClick: () => { console.warn('Not implemented') },
};

export default GoBackButton;
