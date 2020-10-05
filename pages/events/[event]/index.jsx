import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EventHeader from 'components/organisms/event-header';
import buildClass from 'utils/buildClass';
import { Text, TextInput } from '@resystem/design-system';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventPage = () => {
  return (
    <Container>
      <EventHeader />
    </Container>
  );
};

export default EventPage;
