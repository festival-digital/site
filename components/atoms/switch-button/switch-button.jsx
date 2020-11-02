import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ButtonContainer,
  Button,
  Radio,
  Label,
  ErrorMessage,
} from './switch-button.styles';

const SwitchButton = ({ error, options, handleOnClick, value }) => {
  const radioName = `${Radio.componentStyle.baseHash}`;
  return (
    <Container>
      <ButtonContainer>
        <Button>
          <Radio
            id={options[0].id}
            name={radioName}
            value={options[0].value}
            defaultChecked={value === options[0].value}
            onClick={handleOnClick}
          />
          <Label htmlFor={options[0].id}>{options[0].label}</Label>
        </Button>
        <Button>
          <Radio
            id={options[1].id}
            name={radioName}
            value={options[1].value}
            defaultChecked={value === options[1].value}
            onClick={handleOnClick}
          />
          <Label htmlFor={options[1].id}>{options[1].label}</Label>
        </Button>
      </ButtonContainer>
      <ErrorMessage>{error}</ErrorMessage>
    </Container>
  );
};

SwitchButton.defaultProps = {
  options: [
    {
      id: 'opção1',
      label: 'opção1',
      value: true,
    },
    {
      id: 'opção2',
      label: 'opção2',
      value: false,
    },
  ],
  handleOnClick: () => {},
};

SwitchButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.bool,
    })
  ),
  handleOnClick: PropTypes.func,
};

export default SwitchButton;
