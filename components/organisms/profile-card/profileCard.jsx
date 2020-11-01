import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import React from 'react';
import PropTypes from 'prop-types';
import { Header, Wrapper, Title, Label, Value } from './profileCard.style';
import Button from 'components/atoms/button/button';

const calcAge = (birth_date) => Math.floor((new Date().getTime() - new Date(+birth_date).getTime()) / 31556952000);

const ProfileCard = ({
  birth_date,
  gender,
  other_gender,
  city,
  state,
  skin_color,
  other_skin_color,
  has_disability,
  disability,
  handleClick,
}) => {
  console.log('gender', gender);
  return (
    <Wrapper>
      <Label>Idade</Label>
      <Value>{birth_date ? calcAge(birth_date) : 'Não Informado'}</Value>
      <Label>Gênero</Label>
      <Value>{gender === 'other' ?  (other_gender || 'Não Informado') : gender}</Value>
      <Label>Localização</Label>
      <Value>{state && city ? `${state}, ${city}` : 'Não Informado'}</Value>
      <Label>Cor</Label>
      <Value>{skin_color === 'other' ? (other_skin_color || 'Não Informado') : skin_color}</Value>
      <Label>Se declara como PcD?</Label>
      <Value>{has_disability ? disability : 'Não' }</Value>
      <Button
        onClick={handleClick}
        icon="edit"
        color={'#808080'}
      >EDITAR</Button>
    </Wrapper>
  );
};

ProfileCard.defaultProps = {
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

ProfileCard.propTypes = {
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

export default ProfileCard;
