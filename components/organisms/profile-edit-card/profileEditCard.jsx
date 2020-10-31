import React from 'react';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import {
  Header, Wrapper,
  Title, Label, Value, DoubleInputWrapper,
} from './profileEditCard.style';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import Button from 'components/atoms/button/button';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import InputGroup from 'components/molecules/input-group/inputGroup';
import Select from 'components/atoms/select/select';
import { gendersCollection } from 'collections';
import { statesCollection } from 'collections';
import { skinColorCollection } from 'collections';
import { disabilitiesCollection } from 'collections';
import GradientButton from 'components/atoms/gradient-button/gradient-button';

const calcAge = (birth_date) => Math.floor((new Date().getTime() - birth_date.getTime()) / 31556952000);

const ProfileEditCard = ({
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
  return (
    <Wrapper>
      <InputGroup label="Data de nasc.">
        <SimpleInput error=""/>
      </InputGroup>
      <InputGroup label="Gênero">
        <Select
          onChange={(data) => console.log('genero: ', data.target.value)}
          options={gendersCollection}
          error=""
          />
      </InputGroup>
      <InputGroup label="Localização">
        <DoubleInputWrapper>
          <Select
            onChange={(data) => console.log('state: ', data.target.value)}
            options={statesCollection}
            error=""
          />
          <SimpleInput
            customStyle="padding-left: 10px"
            error=""
          />
        </DoubleInputWrapper>
      </InputGroup>
      <InputGroup label="Cor">
        <Select
          onChange={(data) => console.log('Cor: ', data.target.value)}
          options={skinColorCollection}
          error=""
        />
      </InputGroup>
      <InputGroup label="Se declara como PcD?">
        <Select
          onChange={(data) => console.log('pcd: ', data.target.value)}
          options={disabilitiesCollection}
          error=""
        />
      </InputGroup>
      <GradientButton
        onClick={handleClick}
      >
        <Icon>check_circle</Icon>
        CONCLUÍDO
      </GradientButton>
    </Wrapper>
  )
};

ProfileEditCard.defaultProps = {
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

ProfileEditCard.propTypes = {
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

export default ProfileEditCard;
