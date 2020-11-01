import {
  getActivity as getActivityRepository,
  vote as voteRepository,
} from './jury-template.repository';

/**
 * function that get on api, jury data and shows to vote
 * @param {function} setActivity function to controll activty on state
 * @param {function} setLoading function to controll loading state
 * @param {string} urlParam title key to find activity on api
 */
export const getActivity = async ({ setActivity, setLoading, urlParam }) => {
  setLoading(true);

  let activityResponse;

  try {
    activityResponse = await getActivityRepository({  title_key: urlParam });
  } catch (err) {
    console.log([err]);
    throw err;
  }

  setActivity(activityResponse.data.oneActivity);
  setLoading(false);
};

/**
 * function that vote on clip
 */
export const handleVote = async ({
  activity, userId, showId, ratePoint,
  setActivity,
}) => {
  let votePromise;

  try {
    votePromise = await voteRepository({
      user: userId,
      show: showId,
      ratePoint,
    });
  } catch (err) {
    console.log([err]);
    throw err;
  }

  const newActivity = { ...activity };
  const shows = [...newActivity.shows];
  const showIndex = shows.findIndex(({ id }) => id === showId);
  const votes = [...shows[showIndex].votes];

  votes.push({ 
    id: votePromise.data.vote.id,
    user: { id: userId },
    rate_point: ratePoint,
  });

  shows[showIndex] = { ...shows[showIndex], votes };
  newActivity.shows = shows;

  setActivity(newActivity);
};
