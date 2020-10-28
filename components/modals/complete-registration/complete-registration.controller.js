import {
  fetchAllUsers,
  fetchEvent,
  fetchAllEvents,
} from './complete-registration.repository';

export const getAllUsers = async () => {
  const response = await fetchAllUsers();
  console.log('All users ', response);
};

export const getEvent = async (id) => {
  const response = await fetchEvent(id);
  console.log('get event ', response);
};

export const getAllEvents = async () => {
  const response = await fetchAllEvents();
  console.log('get all events ', response);
};
