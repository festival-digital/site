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
  let response;

  try {
    response = await fetchEvent(id);
  } catch (err) {
    console.log([err]);
  }
  console.log('get event ', response);
};

export const getAllEvents = async () => {
  const response = await fetchAllEvents();
  console.log('get all events ', response);
};
