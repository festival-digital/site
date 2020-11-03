import { client } from 'utils/apollo';
import moment from 'moment';
import { USER_QUERY } from 'utils/user.utils';
import { ONE_EVENT_QUERY } from './event.queries';
import { ADD_TICKET_INTO_USER_MUTATION } from './event.mutations';

const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

export const getDate = ({ end_date, start_date }) => {
  const start = moment(+start_date);
  const end = moment(+end_date);
  const startObj = {
    month: months[start.month()],
    day: start.date(),
  };
  const endObj = {
    month: months[end.month()],
    day: end.date(),
  };
  if (startObj.month === endObj.month && startObj.day === endObj.day) {
    return `${endObj.day} ${startObj.month} / ${start.hour()} - ${end.hour()}h`;
  }
  if (startObj.month === endObj.month) {
    return `${startObj.day} a ${endObj.day} de ${startObj.month}`;
  }
};

export const getEvent = async (
  event,
  setEvent,
  setActivitiesCurrent,
  setActivitiesFuture
) => {
  const eventResponse = await client().query({
    query: ONE_EVENT_QUERY,
    variables: {
      id: event,
    },
  });

  const activities = eventResponse.data.oneEvent.activities.map((a) => ({
    image_url: a.image_url || '',
    cover_url: a.cover_url,
    title: a.title,
    tags: a.tags,
    start_date: a.start_date,
    end_date: a.end_date,
    date: getDate(a),
    id: a.id,
  }));

  const current = activities.filter((a) => {
    if (
      a.start_date < new Date().getTime() &&
      a.end_date >= new Date().getTime()
    ) {
      return true;
    }
    return false;
  });

  const future = activities.filter((a) => {
    if (a.start_date > new Date().getTime()) {
      return true;
    }
    return false;
  });

  setEvent(eventResponse.data.oneEvent);
  setActivitiesCurrent(current);
  setActivitiesFuture(future);
};

export const verifyTicket = (state, event_id, setHasTicket) => {
  const hasTicket = state.user.tickets.find((t) => t.event && t.event.id === event_id);
  setHasTicket(!!hasTicket);
};

export const addTicket = async (
  payload,
  state,
  event,
  dispatch,
  setAddTicketModal
) => {
  console.log('addTicket -> state', state);
  console.log('addTicket -> event', event);
  // setLoading(true);

  if (
    state.user.tickets.findIndex(({ code }) => code === payload.ticket) !== -1
  ) {
    // callback();
    // setLoading(true);
    return;
  }

  try {
    await client().mutate({
      mutation: ADD_TICKET_INTO_USER_MUTATION,
      variables: {
        code: payload.ticket,
        sympla_event_id: event.sympla_id,
        user_id: state.user.id,
      },
    });
  } catch (err) {
    console.log('err', [err]);
    // invalidTicketCallback();
    // setLoading(false);
    return;
  }

  let user;

  try {
    user = await client().query({
      query: USER_QUERY,
      variables: {
        ida: state.auth.ida,
      },
    });
  } catch (err) {
    // invalidTicketCallback();
    // setLoading(false);
    return;
  }

  dispatch({
    type: 'SET_USER',
    user: user.data.oneUser,
  });
  setAddTicketModal(false);

  // callback();
  // setLoading(true);
};
