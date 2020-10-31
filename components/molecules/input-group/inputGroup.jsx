import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import React from 'react';
import PropTypes from 'prop-types';
import {
 Wrapper, Label, Error
} from './inputGroup.style';

const calcAge = (birth_date) => Math.floor((new Date().getTime() - birth_date.getTime()) / 31556952000);

const InputGroup = ({
  label, children, error
}) => {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </Wrapper>
  )
};

InputGroup.defaultProps = {
  birth_date: null,
  gender: '',
  other_gender: '',
  city: '',
  state: '',
  skin_color: '',
  other_skin_color: '',
  has_disability: false,
  disability: ''
};

InputGroup.propTypes = {
  handleClick: PropTypes.func.isRequired,
  birth_date: PropTypes.instanceOf(Date),
  gender: PropTypes.string,
  other_gender: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  skin_color: PropTypes.string,
  other_skin_color: PropTypes.string,
  has_disability: PropTypes.bool,
  disability: PropTypes.string,
}

export default InputGroup;
