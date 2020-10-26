import { SET_USER } from 'components/store/actions';
import { validateCPF } from 'utils/validations';
import {
  createUser,
  getEvents as getEventsRepository,
  addTicket as addTicketRepository,
} from './complete-signup.repository';

/**
 * function that validate and try errors or the api response
 * @param {object} user user to be map
 * @param {string} user.cpf user cpf
 * @param {string} user.name user display name
 * @param {string} user.ida user ativist identification
 * @param {string} user.email user email
 */
const mapUserToAPI = ({ ida, cpf, email, name }) => ({
  ida,
  email,
  first_name: name.split(' ')[0],
  last_name: name.split(' ').slice(1).join(' '),
  cpf: cpf.replace(/\D+/g, ''),
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
      ida: '5f9344948b147955a09bffc3',
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
    eventsResponse.data.allEvents.map(({ id, name, sympla_id }) => ({
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

  let addTicketResponse;

  try {
    addTicketResponse = await addTicketRepository({
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
