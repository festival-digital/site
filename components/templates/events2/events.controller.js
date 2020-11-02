import moment from 'moment-timezone';
import { fetchAllEvents } from './events.repository';

const adapterEvent = (event) => ({
  ...event,
  start_date: moment(parseInt(event.start_date, 10)).utc(),
  end_date: moment(parseInt(event.end_date, 10)).utc(),
});

export const getAllEvents = async () => {
  let response;

  try {
    response = await fetchAllEvents();
  } catch (err) {
    console.log([err]);
  }

  if (response?.data?.allEvents) {
    const events = response?.data?.allEvents || [];

    response = events.map((event) => adapterEvent(event));
  } else {
    response = [];
  }

  return response;
};
