import { statesCollection } from "collections";
import { client } from "utils/apollo";
import { UPDATE_USER_MUTATION } from "./profile.mutations";

const makeDateWithString = (date) => {
  const mydate = date.replace(/\D/g, '');
  const day = mydate.slice(0, 2);
  const month = mydate.slice(2, 4);
  const year = mydate.slice(4);
  const newDate = new Date(`${month}/${day}/${year}`);
  return newDate;
}


const mapUser = (user) => ({
  birth_date:  makeDateWithString(user.birth_date),
  id: user.id,
  city: user.city,
  disability: user.disability === 'no' ? '' : user.disability,
  gender: user.gender,
  has_disability: (user.disability !== 'no' || !!user.disability),
  other_gender: user.gender === 'other' ? user.other_gender : '',
  skin_color: user.skin_color,
  other_skin_color: user.skin_color === 'other' ? user.other_skin_color : ''
});

export const sendUser = async (payload, user, dispatch, router, setEdit) => {

  const mappedUser = mapUser({
    id: user.id,
    city: payload.city,
    state: statesCollection.find((s) => s.id === payload.state).uf,
    gender: payload.gender,
    has_disability: payload.has_disability,
    other_gender: payload.other_gender,
    skin_color: payload.skin_color,
    disability: payload.disability,
    birth_date: payload.birth_date,
    other_skin_color: payload.other_skin_color
  })


  const updatedUser = await client().mutate({
    mutation: UPDATE_USER_MUTATION,
    variables: { user: mappedUser },
  });
  
  dispatch({
    type: 'SET_USER',
    user: updatedUser.data.updateUser,
  })
  setEdit(false)
}