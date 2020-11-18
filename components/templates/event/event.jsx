import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Loading from 'components/atoms/loading/loading';
import EventHeader from 'components/organisms/event-header/event-header';
import GradientButton from 'components/atoms/gradient-button/gradient-button';
import EventFooter from 'components/organisms/event-footer/event-footer';
import ActivityCard from 'components/organisms/activity-card';
import { enhancedCodeGenerator } from 'utils/codeGenerator';
import {
  Container, EventCover, LinearBackground,
  EventLogo, EventDate, LinkBadge, Grid,
  BadgeContainer, Badge, ButtonAddTicket,
  Title, SmallText, Text, TicketAdded, LoadingWrapper,
  EventDateWrapper, InfoWrapper, List, RightWrapper,
} from './event.style';
import { getDate, getEvent, verifyTicket } from './event.controller';
import Store from 'components/store/Store';
import ModalSympla from 'components/modals/modal-sympla/modal-sympla';
import AddTicketFromEvent from 'components/modals/add-ticket-from-event/add-ticket-from-event';
import { addTicket } from './event.controller';
import { isMobile } from 'utils/validations';

const EventTemplate = ({ event_id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});
  const [hasTicket, setHasTicket] = useState({});
  const [simplaModal, setSimplaModal] = useState(false);
  const [addTicketModal, setAddTicketModal] = useState(false);
  const [activitiesCurrent, setActivitiesCurrent] = useState([]);
  const [activitiesFuture, setActivitiesFuture] = useState([]);
  const { state, dispatch } = useContext(Store);

  const checkUser = () => {
    const currentDate = new Date().getTime();
    console.log('aqui', currentDate > +event.start_date, currentDate < +event.end_date, state.user.tickets);
    if (
      state.user &&
      state.user.tickets.findIndex(({ event: e }) => e.id === event_id) !== -1  &&
      currentDate > +event.start_date &&
      currentDate < +event.end_date &&
      !isMobile()
    ) router.push('/game');
  };

  useEffect(() => {
    getEvent(
      event_id,
      setEvent,
      setActivitiesCurrent,
      setActivitiesFuture,
      setLoading,
    );
  }, [])

  useEffect(() => {
    checkUser();

    if (state.user && event.id){
      verifyTicket(state, event_id, setHasTicket);
    }
  }, [event, state.user])

  if (loading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Container>
      <EventHeader goBackMode />
      <EventCover cover={event.cover_url}>
        <LinearBackground>
          <EventDateWrapper>
            <div>
              <EventLogo src={event.image_url} alt="Logo do evento" />
            </div>
            <div>
              <EventDate>{getDate(event)}</EventDate>
            </div>
          </EventDateWrapper>
        </LinearBackground>
      </EventCover>
      <Grid>
        <InfoWrapper>
          <div>
            <Title>{event.name}</Title>
            {event.is_free ? <SmallText>Evento é gratuito</SmallText> : null}
            <LinkBadge href={'event.site_url'}>
              <Icon>public</Icon>
              &nbsp;
              Site do evento
            </LinkBadge>
            {
              hasTicket ? (
                <TicketAdded><Icon>check_circle</Icon>&nbsp;&nbsp;INGRESSO ADICIONADO</TicketAdded>
              ) : (
                <div>
                  <ButtonAddTicket
                    onClick={() => setAddTicketModal(true)}
                  >
                    Já tenho um ingresso
                  </ButtonAddTicket>
                  <GradientButton
                    onClick={() => { setSimplaModal(true); }}
                    customStyle={`
                      display: none;

                      @media (min-width: 1024px) {
                        display: inline-block;
                        width: 235px;
                        font-size: 12px;
                        margin-left: 8px;
                      }
                    `}
                  >
                    <Icon>shopping_cart</Icon>
                    &nbsp;
                    ADQUIRIR INGRESSO
                  </GradientButton>
                </div>
              )
            }
          </div>
          <RightWrapper>
            <BadgeContainer>
              {(event.tags || []).map((item) => (
                <Badge key={enhancedCodeGenerator()}>{item}</Badge>
              ))}
            </BadgeContainer>
            <Text>{event.description}</Text>
          </RightWrapper>
        </InfoWrapper>
        <Text variant="warning">Acontecendo agora!</Text>
      </Grid>
      <List>
        {
          activitiesCurrent.map((a) => (
            <ActivityCard
              key={a.id}
              backgroundUrl={a.image_url}
              activityName={a.title}
              activity={a}
              enter
            />
          ))
        }
      </List>
      <Grid>
        <Text variant="default">Próximas Atividades</Text>
      </Grid>
      <List>
        {
          activitiesFuture.map((a) => (
            <ActivityCard
              key={a.id}
              backgroundUrl={a.image_url}
              activityName={a.title}
              activity={a}
            />
          ))
        }
      </List>
      {
        hasTicket ? null : (
          <EventFooter handleClick={() => setSimplaModal(!simplaModal)} />
        )
      }
      <ModalSympla
        opened={simplaModal}
        handleConfirmButton={() => console.log('handleConfirmButton')}
        handleCancelButton={() => setSimplaModal(!simplaModal)}
        handleBackButton={() => setSimplaModal(!simplaModal)}
        toSympla={() => window.open(event.ticket_url, '_blank').focus()}
        onCancel={() => setSimplaModal(!simplaModal)}
      />
      <AddTicketFromEvent
        opened={addTicketModal}
        handleConfirmButton={(payload) => addTicket(payload, state, event, dispatch, setAddTicketModal)}
        handleCancelButton={() => setAddTicketModal(!addTicketModal)}
      />
    </Container>
  );
};

export default EventTemplate;
