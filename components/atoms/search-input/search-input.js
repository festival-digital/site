import React from 'react';
import { ContainerInput, Icon, Input } from './search-input.style';

const SearchInput = ({ value, placeholder, onChange }) => {
  return (
    <ContainerInput>
      <Icon src="static/icons/search.svg" />
      <Input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type="text"
      />
    </ContainerInput>
  );
};

export default SearchInput;
