import { getEvents as getEventsRepository } from './events.repository';

/**
 * function that get events on api and set on local state
 * @param {function} setLoading function to controll loading state
 * @param {function} setNowEvents function to controll now events on state
 * @param {function} setOtherEvents function to controll other events on state
 */
export const getEvents = async ({ setLoading, setNowEvents, setOtherEvents }) => {
  setLoading(true);

  let eventsPromise;

  try {
    eventsPromise = await getEventsRepository();
  } catch (err) {
    console.log([err]);
    throw err;
  }

  const nowEvents = eventsPromise.data.allEvents.filter((event) => {
    const currentDate = new Date().getTime();
    return currentDate > parseInt(event.start_date, 10) && currentDate < parseInt(event.end_date, 10);
  });

  const otherEvents = eventsPromise.data.allEvents.filter((event) => {
    const currentDate = new Date().getTime();
    return currentDate < parseInt(event.start_date, 10);
  });

  console.log(otherEvents, nowEvents);

  setOtherEvents(otherEvents);
  setNowEvents(nowEvents);
  setLoading(false);
};
