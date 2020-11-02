import moment from 'moment-timezone';
import { fetchEvent } from './event-detail.repository';

const adapterEvent = (event) => ({
  ...event,
  start_date: moment(parseInt(event.start_date, 10)).utc(),
  end_date: moment(parseInt(event.end_date, 10)).utc(),
  activities: event.activities.map((activity) => ({
    ...activity,
    start_date: moment(parseInt(activity.start_date, 10)).utc(),
    end_date: moment(parseInt(activity.end_date, 10)).utc(),
    subscription_start_date: moment(
      parseInt(activity.subscription_start_date, 10)
    ).utc(),
    subscription_end_date: moment(
      parseInt(activity.subscription_end_date, 10)
    ).utc(),
  })),
});

export const getEvent = async (id) => {
  let response;

  try {
    response = await fetchEvent(id);
  } catch (err) {
    console.log([err]);
  }

  if (response?.data?.oneEvent) {
    const event = response?.data?.oneEvent || [];

    response = adapterEvent(event);
  } else {
    response = [];
  }

  return response;
};
