import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Icon } from '@material-ui/core';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import Loading from 'components/atoms/loading/loading';
import TicketCard from 'components/organisms/ticket-card/ticket-card';
import Store from 'components/store/Store';
import {
  TemplateWrapper, Header, Title, TicketList,
  LoadingWrapper,
} from './my-tickets.style';
import { getTickets } from './my-tickets.controller';

const renderTickets = ({ tickets }) => tickets.map(({
  id, event, code, sympla_ticket_name: ticketName,
  sympla_buyer_first_name: firstName, sympla_buyer_last_name: lastName,
}) => (
  <li key={id}>
    <TicketCard
      eventLogo={event.image_url}
      eventTitle={event.name}
      code={code}
      name={ticketName}
      user={`${firstName} ${lastName}`}
      onDelete={() => {}}
    />
  </li>
)) 

const MyTickets = () => {
  const { state } = useContext(Store);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (state.user) {
      getTickets({
        setTickets,
        setLoading,
        userId: state.user.id,
      });
    }
  }, []);

  useEffect(() => {
    if (state.user) {
      getTickets({
        setTickets,
        setLoading,
        userId: state.user.id,
      });
    }
  }, [state.user]);

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <TemplateWrapper>
      <Header>
        <GoBackButton
          onClick={() => {
            history.back();
          }}
        />
        <GradientButton
          customStyle={`
            width: 50px;
            text-align: center;

            > span {
              margin: 0;
            }
          `}
        >
          <Icon>help</Icon>
        </GradientButton>
      </Header>
      <Title>Meus ingressos</Title>
      <TicketList>
        { renderTickets({ tickets }) }
      </TicketList>
    </TemplateWrapper>
  );
};

MyTickets.propTypes = {

};

export default MyTickets;
