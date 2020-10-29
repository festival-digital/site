import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { simpleCodeGenerator } from 'utils/codeGenerator';
import { Container, Button, Radio, Label } from './switch-button.styles';

const SwitchButton = ({ options, handleOnClick, value }) => {
  const idOption0 = `${Radio.componentStyle.baseHash}-0`;
  const idOption1 = `${Radio.componentStyle.baseHash}-1`;
  const radioName = `${Radio.componentStyle.baseHash}`;
  console.log('classname ', options[0]);
  return (
    <Container>
      <Button>
        <Radio
          id={options[0].id}
          name={radioName}
          value={options[0].id}
          defaultChecked={value === options[0].id}
          onClick={handleOnClick}
        />
        <Label htmlFor={options[0].id}>{options[0].label}</Label>
      </Button>
      <Button>
        <Radio
          id={options[1].id}
          name={radioName}
          value={options[1].id}
          defaultChecked={value === options[1].id}
          onClick={handleOnClick}
        />
        <Label htmlFor={options[1].id}>{options[1].label}</Label>
      </Button>
    </Container>
  );
};

SwitchButton.defaultProps = {
  options: [
    {
      id: 'opção1',
      label: 'opção1',
    },
    {
      id: 'opção2',
      label: 'opção2',
    },
  ],
  handleOnClick: () => {},
};

SwitchButton.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  handleOnClick: PropTypes.func,
};

export default SwitchButton;
