import React from 'react';
import WarningIcon from '@material-ui/icons/Warning';
import { Container, Text } from './errorMessageSearch.style';

const ErrorMessagemSearch = ({ children }) => {
  return (
    <Container>
      <WarningIcon style={{ color: '#FCFF7B', fontSize: '30px' }} />
      <Text>{children}</Text>
    </Container>
  );
};

export default ErrorMessagemSearch;
