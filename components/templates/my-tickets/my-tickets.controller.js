import { getTickets as getTicketsRepository } from './my-tickets.repository';

/**
 * function that get tickets of logged user on api and set on local state
 * @param {function} setLoading function to controll loading state
 * @param {function} setTickets function to controll tickets on state
 * @param {string} userId user id to get tickets
 */
export const getTickets = async ({ setLoading, setTickets, userId }) => {
  setLoading(true);

  let ticketsPromise;

  try {
    ticketsPromise = await getTicketsRepository({ user: userId })
  } catch (err) {
    console.log([err]);
    throw err;
  }

  setTickets(ticketsPromise.data.allTickets);
  setLoading(false);
};
