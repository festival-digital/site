import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import {
  Wrapper, DoubleInputWrapper,
} from './profileEditCard.style';
import SimpleInput from 'components/atoms/simple-input/simple-input';
import InputGroup from 'components/molecules/input-group/inputGroup';
import Select from 'components/atoms/select/select';
import { gendersCollection } from 'collections/index';
import { statesCollection } from 'collections/index';
import { skinColorCollection } from 'collections/index';
import { disabilitiesCollection } from 'collections/index';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import { maskDate } from 'utils/validations';

const dateToStringBR = (payload) => {
  const date = new Date(+payload);
  if (!date) return '';
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return`${day}${month < 10 ? `0${month}` : month}${year}`;
}

const ProfileEditCard = ({
  initialState,
  handleClick,
}) => {
  const [birthDate, setBirthDate] = useState(dateToStringBR(initialState.birth_date));
  const [gender, setGender] = useState(initialState.gender);
  const [otherGender, setOtherGender] = useState(initialState.other_gender);
  const [city, setCity] = useState(initialState.city);
  const [state, setState] = useState(statesCollection.find((s) => s.uf === initialState.state).id);
  const [skinColor, setSkinColor] = useState(initialState.skin_color);
  const [otherSkinColor, setOtherSkinColor] = useState(initialState.other_skin_color);
  const [hasDisability, setHasDisability] = useState(initialState.has_disability);
  const [disability, setDisability] = useState(initialState.disability);

  return (
    <Wrapper>
      <InputGroup label="Data de nasc.">
        <SimpleInput
          value={birthDate ? maskDate(birthDate) : ''}
          onChange={({ target }) => setBirthDate(target.value.replace(/\D/g, ''))}
          error=""
        />
      </InputGroup>
      <InputGroup label="Gênero">
        <Select
          onChange={({ target }) => setGender(target.value)}
          options={gendersCollection}
          value={gender}
          error=""
        />
        {
          gender === 'other'
          ? (
            <SimpleInput
              value={otherGender}
              onChange={({ target }) => setOtherGender(target.value)}
              error=""
            />
          ) : null
        }
      </InputGroup>
      <InputGroup label="Localização">
        <DoubleInputWrapper>
          <Select
            onChange={({ target }) => setState(target.value)}
            options={statesCollection}
            value={state}
            error=""
          />
          <SimpleInput
            customStyle="padding-left: 10px"
            value={city}
            onChange={({ target }) => setCity(target.value)}
            error=""
          />
        </DoubleInputWrapper>
      </InputGroup>
      <InputGroup label="Cor">
        <Select
          onChange={({ target }) => setSkinColor(target.value)}
          options={skinColorCollection}
          value={skinColor}
          error=""
        />
        {
          skinColor === 'other'
          ? (
            <SimpleInput
              value={otherSkinColor}
              onChange={({ target }) => setOtherSkinColor(target.value)}
              error=""
            />
          ) : null
        }
      </InputGroup>
      <InputGroup label="Se declara como PcD?">
        <Select
          value={disability || 'no'}
          onChange={({ target }) => setDisability(target.value)}
          options={disabilitiesCollection}
          error=""
        />
      </InputGroup>
      <GradientButton
        onClick={() => handleClick({
          birth_date: birthDate,
          gender: gender,
          other_gender: otherGender,
          city: city,
          state: state,
          skin_color: skinColor,
          other_skin_color: otherSkinColor,
          has_disability: hasDisability,
          disability: disability,
        })}
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
