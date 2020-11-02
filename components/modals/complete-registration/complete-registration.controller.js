import {
  fetchUser,
  fetchAllUsers,
  updateUser as updateUserMutation,
  fetchEvent,
  fetchAllEvents,
} from './complete-registration.repository';

export const getUser = async (ida) => {
  let response;
  try {
    response = await fetchUser(ida);
  } catch (err) {
    console.log([err]);
  }
  return response;
};

export const getAllUsers = async (userConstraints) => {
  let response;
  try {
    response = await fetchAllUsers(userConstraints);
    console.log('All users ', response);
  } catch (err) {
    console.log([err]);
  }
  return response;
};

export const updateUser = async (user) => {
  let response;
  try {
    response = updateUserMutation(user);
  } catch (err) {
    console.log([err]);
  }
  return response;
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
