import { SET_USER } from 'components/store/actions';
import { validateCPF } from 'utils/validations';
import {
  createUser,
  getEvents as getEventsRepository,
  addTicket as addTicketRepository,
  updateUser,
} from './complete-signup.repository';
import { isMobile } from './complete-signup.validate';

/**
 * function that validate and try errors or the api response
 * @param {object} user user to be map
 * @param {string} user.ida user ativist identification
 */
const mapUserToAPI = ({
  ida, cpf, email, displayName,
  old, gender, otherGender, stateLocation,
  cityLocation, hasDisability, disability, color,
  otherColor,
}) => ({
  ida,
  first_name: displayName.split(' ')[0],
  last_name: displayName.split(' ').slice(1).join(' '),
  display_name: displayName,
  old: parseInt(old, 10),
  gender,
  other_gender: otherGender || null,
  state: stateLocation,
  city: cityLocation,
  has_disability: hasDisability,
  disability,
  skin_color: color,
  other_skin_color: otherColor,
  status: 'ACTIVE',
});

/**
 * function that validate and try errors or the api response
 * @param {object} params infations and state control function
 * @param {function} params.setLoading set loading state when waits for api response
 * @param {function} params.router function to navigate to another page
 * @param {function} params.dispatch function to change global context
 * @param {function} params.ida ativist identification code
 * @param {function} params.userId oasis identification code
 */
export const initCreateOasisAccount = async ({
  setLoading,
  ida,
  router,
  dispatch,
  userId,
  navigateTo,
}) => {
  setLoading(true);

  if (userId) {
    setLoading(false);
    navigateTo();
    return;
  }

  let createUserResponse;
  try {
    createUserResponse = await createUser({
      ida,
    });
  } catch (err) {
    console.log([err]);
    throw err;
  }

  dispatch({
    type: SET_USER,
    user: createUserResponse.data.createUser,
  });

  setLoading(false);
  navigateTo();
};

/**
 * function that request enable events on api and set on component state
 * @param {object} params infations and state control function
 * @param {function} params.setLoading set loading state when waits for api response
 * @param {function} params.setEventOptions set evente option to the user select
 */
export const getEvents = async ({ setLoading, setEventOptions }) => {
  setLoading(true);

  let eventsResponse;

  try {
    eventsResponse = await getEventsRepository();
  } catch (err) {
    throw err;
  }

  setEventOptions(
    eventsResponse.data.allEvents.filter((event) => {
      const currentDate = new Date().getTime();
      return currentDate < parseInt(event.end_date, 10);
    }).map(({ id, name, sympla_id }) => ({
      id,
      label: name,
      sympla_id,
    }))
  );

  setTimeout(() => {
    setLoading(false);
  }, 2000);
};

/**
 * function that add ticket on user
 * @param {object} params infations and state control function
 * @param {function} params.setLoading set loading state when waits for api response
 * @param {function} params.ticket ticket code
 * @param {function} params.symplaEventId sympla event id
 * @param {function} params.callback function to execute after ticket validation
 * @param {function} params.invalidTicketCallback function to execute if return ticket validation error
 * @param {function} params.dispatch function to change global context
 */
export const addTicket = async ({
  setLoading,
  callback,
  ticket,
  symplaEventId,
  userId,
  tickets,
  invalidTicketCallback,
}) => {
  setLoading(true);

  if (tickets.findIndex(({ code }) => code === ticket) !== -1) {
    callback();
    setLoading(true);
    return;
  }

  try {
    await addTicketRepository({
      code: ticket.replace(/-/g, ''),
      sympla_event_id: symplaEventId,
      user_id: userId,
    });
  } catch (err) {
    invalidTicketCallback();
    setLoading(false);
    return;
  }

  callback();
  setLoading(true);
};

/**
 * function that add ticket on user
 * @param {object} params infations and state control function
 * @param {function} params.setLoading set loading state when waits for api response
 * @param {object} params.userId api user id
 * @param {object} params.user user data
 * @param {object} params.router router
 */
export const completeRegister = async ({
  setLoading, userId, user, router,
  token,
}) => {
  setLoading(true);

  const mappedUser = mapUserToAPI(user);
  mappedUser.id = userId;

  let editUserPromise;

  try {
    editUserPromise = await updateUser(mappedUser);
  } catch (err) {
    throw err;
  }

  setTimeout(() => {
    setLoading(false);
    if (isMobile()) router.push('/events');
    else router.push('/game');
  }, 2000);
};

