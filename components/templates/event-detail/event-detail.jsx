import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EventHeader from 'components/organisms/event-header/event-header';
import EventFooter from 'components/organisms/event-footer/event-footer';
import ActivityCard from 'components/organisms/activity-card';
import buildClass from 'utils/buildClass';
import { enhancedCodeGenerator } from 'utils/codeGenerator';
import Icon from '@material-ui/core/Icon';
import { getMonth, getMonthAbbreviated } from 'utils/date-formatter';
import moment from 'moment-timezone';
import { getEvent } from './event-detail.controller';

import {
  Badge,
  BadgeContainer,
  ButtonAddTicket,
  Container,
  EventCover,
  EventDate,
  EventLogo,
  Grid,
  LinearBackground,
  LinkBadge,
  SmallText,
  Text,
  Title,
} from './event-detail.style';

const EventDetail = () => {
  const router = useRouter();
  const [event, setEvent] = useState({});
  const [happeningNow, setHappeningNow] = useState([]);
  const [nextActivities, setNextActivities] = useState([]);
  const [previousActivities, setPreviousActivities] = useState([]);
  const [today, setToday] = useState(moment('2020-11-02T11:00:01.000Z'));

  const eventDateLabel = (start, end) => {
    let label = '';
    if (start.month() === end.month()) {
      if (start.date() === end.date())
        label = [`${start.date()}`, `${getMonth(start.month())}`];
      else
        label = [
          `${start.date()} a ${end.date()}`,
          `${getMonth(start.month())}`,
        ];
    } else
      label = [
        `${start.date()} de ${getMonth(start.month())} a`,
        `${end.date()} de ${getMonth(end.month())}`,
      ];
    return label;
  };

  const activityDateLabel = (start, end) => {
    let label = '';
    if (start.month() === end.month()) {
      if (start.date() === end.date())
        label = `${start.date()}
        ${getMonthAbbreviated(
          start.month()
        )} / ${start.hours()}h - ${end.hours()}h`;
      else
        label = `${start.date()} - ${end.date()}
      ${getMonthAbbreviated(start.month())}
      / ${start.hours()}h - ${end.hours()}h`;
    } else
      label = `${start.date()}
      ${getMonthAbbreviated(start.month())} -
      ${end.date()}
      ${getMonthAbbreviated(end.month())}
      / ${start.hours()}h - ${end.hours()}h`;
    return label;
  };

  const getSubscription = (start, end) => {
    let subscription = null;
    if (today.isAfter(end)) {
      subscription = 'closed';
      return subscription;
    }

    return subscription;
  };

  useEffect(() => {
    const { query } = router;
    getEvent(query.event).then((response) => {
      setEvent(response);
    });
  }, [router]);

  useEffect(() => {
    const between = [];
    const after = [];
    const before = [];
    event?.activities?.forEach((activity) => {
      if (today.isBetween(activity.start_date, activity.end_date)) {
        between.push(activity);
      } else if (!today.isAfter(activity.start_date)) {
        after.push(activity);
      } else if (!today.isBefore(activity.start_date)) {
        before.push(activity);
      }
    });
    console.log('between ', between);
    setHappeningNow(between);
    setNextActivities(after);
    setPreviousActivities(before);
  }, [event]);

  return (
    <Container>
      <EventHeader goBackMode />
      <EventCover backgroundImage={event.cover_url}>
        <LinearBackground>
          <EventLogo src={event.image_url} alt="Logo do evento" />
          <EventDate>
            {event.start_date &&
              eventDateLabel(
                event.start_date,
                event.end_date
              ).map((item, i) => (
                <span key={enhancedCodeGenerator()}>{item}</span>
              ))}
          </EventDate>
        </LinearBackground>
      </EventCover>
      <Grid>
        <Title>{event.name}</Title>
        <SmallText>{event.is_free ? 'Este evento é gratuito' : ''}</SmallText>
        <LinkBadge href="/">
          <Icon>public</Icon> <span>Site do evento</span>
        </LinkBadge>
        <BadgeContainer>
          {event?.tags?.map((item) => (
            <Badge key={enhancedCodeGenerator()}>{item}</Badge>
          ))}
        </BadgeContainer>
        <Text>{event.description}</Text>
        <ButtonAddTicket>
          <Icon>add </Icon> <span>Já tenho um ingresso</span>
        </ButtonAddTicket>
        <Text variant="warning">Acontecendo agora!</Text>
      </Grid>
      {happeningNow.length === 0 && (
        <Grid>
          <Text variant="default">
            Nenhuma atividade acontecendo está agora
          </Text>
        </Grid>
      )}
      {happeningNow.map((activity) => {
        return (
          <ActivityCard
            key={enhancedCodeGenerator()}
            backgroundUrl={activity.image_url}
            activityName={activity.title}
            activityDate={activityDateLabel(
              activity.start_date,
              activity.end_date
            )}
            isFree={activity.type === 'FREE'}
            tags={activity.tags}
            subscription={getSubscription(
              activity.subscription_start_date,
              activity.subscription_end_date
            )}
          />
        );
      })}

      <Grid>
        <Text variant="default">Próximas Atividades</Text>
      </Grid>

      {nextActivities.map((activity) => {
        return (
          <ActivityCard
            key={enhancedCodeGenerator()}
            backgroundUrl={activity.image_url}
            activityName={activity.title}
            activityDate={activityDateLabel(
              activity.start_date,
              activity.end_date
            )}
            tags={activity.tags}
            subscription={getSubscription(
              activity.subscription_start_date,
              activity.subscription_end_date
            )}
          />
        );
      })}

      {/* {previousActivities.map((activity) => {
        console.log('acontecendo agora');
        return (
          <ActivityCard
            key={enhancedCodeGenerator()}
            backgroundUrl="/static/images/card-activity-big.png"
            activityName="3333333333"
            activityDate="10 nov / 10h - 14h"
            tags={['música']}
            subscription="closed"
          />
        );
      })} */}
      {/* <ActivityCard
        key={enhancedCodeGenerator()}
        backgroundUrl="/static/images/card-activity-big.png"
        activityName="Nome da atividade"
        activityDate="10 nov / 10h - 14h"
        tags={['música']}
        activityType="free"
      />
      <ActivityCard
        key={enhancedCodeGenerator()}
        backgroundUrl="/static/images/card-activity-big.png"
        activityName="Nome da atividade"
        activityDate="10 nov / 10h - 14h"
        tags={['música']}
        subscription="done"
      />
      <ActivityCard
        key={enhancedCodeGenerator()}
        backgroundUrl="/static/images/card-activity-big.png"
        activityName="Nome da atividade"
        activityDate="10 nov / 10h - 14h"
        tags={['música']}
        subscription="open"
      /> */}

      <EventFooter />
    </Container>
  );
};

export default EventDetail;
