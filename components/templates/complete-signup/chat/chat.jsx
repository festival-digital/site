import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import {
  ChatWrapper, Messages, FormWrapper, UserMessage,
  NomadeMessage, NomadeMessageWrapper, UserMessageWrapper, MontainsIllustration,
  StarsIllustration, AvatarIllustration, ChatLoadingWrapper, SumWrapper,
  SumIllustration, MessagesWrapper, FormContent, ButtonWrapper,
} from './chat.style';
import Loading from 'components/atoms/loading/loading';
import UseTerms from 'components/modals/use-terms/use-terms';
import EventForm from './forms/event-form/event-form';
import TicketForm from './forms/ticket-form/ticket-form';
import MeetYouBetterForm from './forms/meet-you-better-form/meet-you-better-form';
import OldForm from './forms/old-form/old-form';
import GenderForm from './forms/gender-form/gender-form';
import OtherGenderForm from './forms/other-gender-form/other-gender-form';
import StateForm from './forms/state-form/state-form';
import CityForm from './forms/city-form/city-form';
import ColorForm from './forms/color-form/color-form';
import OtherColorForm from './forms/other-color-form/other-color-form';
import HasDisabilityForm from './forms/has-disability-form/has-disability-form';
import DisabilityForm from './forms/disability-form/disability-form';
import TermsForm from './forms/terms-form/terms-form';
import JumpForm from './forms/jump-form/jump-form';
import DisplayNameForm from './forms/display-name-form/display-name-form';
import { types, questions } from './chat.model';
import skinColorOptions from 'collections/skin-colors';
import genderOptions from 'collections/genders';
import stateOptions from 'collections/states';
import disabilityOptions from 'collections/disabilities';
import Store from 'components/store/Store';
import { getEvents, addTicket, completeRegister } from '../complete-signup.controller';

// define form list
const forms = {};
forms[types.CAN_I_CALL_YOU_THAT] = paramters => <DisplayNameForm {...paramters} />;
forms[types.WHERE_ARE_YOU_GOING] = paramters => <EventForm {...paramters} />;
forms[types.TICKET] = paramters => <TicketForm {...paramters} />;
forms[types.MEET_YOU_BETTER] = paramters => <MeetYouBetterForm {...paramters} />;
forms[types.OLD] = paramters => <OldForm {...paramters} />;
forms[types.GENDER] = paramters => <GenderForm {...paramters} />;
forms[types.OTHER_GENDER] = paramters => <OtherGenderForm {...paramters} />;
forms[types.STATE] = paramters => <StateForm {...paramters} />;
forms[types.CITY] = paramters => <CityForm {...paramters} />;
forms[types.COLOR] = paramters => <ColorForm {...paramters} />;
forms[types.OTHER_COLOR] = paramters => <OtherColorForm {...paramters} />;
forms[types.HAS_DISABILITY] = paramters => <HasDisabilityForm {...paramters} />;
forms[types.DISABILITY] = paramters => <DisabilityForm {...paramters} />;
forms[types.TERMS] = paramters => <TermsForm {...paramters} />;
forms[types.JUMP] = paramters => <JumpForm {...paramters} />;

const STARS_TRANSLATE_VARIATION = 30;
const MONTAINS_TRANSLATE_VARIATION = 60;

/**
 * this render messages
 * @returns {React.Component}
 */
const renderMessages = ({ nomadeMessages, userMessages }) => nomadeMessages
  .concat(userMessages)
  .sort((a, b) => {
    if (a === b) return 0;
    return a.time > b.time ? 1 : -1
  })
  .slice(-3)
  .map(({ message, user, time }) => user ? (
    <UserMessageWrapper key={`${time}+${message}`}>
      <UserMessage>
        {message}
      </UserMessage>
    </UserMessageWrapper>
  ) : (
    <NomadeMessageWrapper key={`${time}+${message}`} duration="100ms">
      <NomadeMessage>
        {message}
      </NomadeMessage>
    </NomadeMessageWrapper>
  ));

/**
 * this render form by questionID
 * @returns {React.Component}
 */
const renderForm = ({ questionID, paramters }) => forms[questionID](paramters);

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Chat = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const [openTermsModal, setOpenTermsModal] = useState(false);
  const [nomadeLoading, setNomadeLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [eventOptions, setEventOptions] = useState([]);
  const [nomadeMessages, setNomadeMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [displayName, setDisplayName] = useState(state.auth?.username);
  const [event, setEvent] = useState('');
  const [ticket, setTicket] = useState('');
  const [old, setOld] = useState('');
  const [gender, setGender] = useState('');
  const [otherGender, setOtherGender] = useState('');
  const [stateLocation, setStateLocation] = useState('');
  const [cityLocation, setCityLocation] = useState('');
  const [hasDisability, setHasDisability] = useState(false);
  const [disability, setDisability] = useState('');
  const [color, setColor] = useState('');
  const [otherColor, setOtherColor] = useState('');
  const [questionID, setQuestionID] = useState(types.CAN_I_CALL_YOU_THAT);
  const [montainsTranslateX, setMontainsTranslateX] = useState(0);
  const [starsTranslateX, setStarsTranslateX] = useState(0);
  const [sumDiameter, setSumDiameter] = useState(0);
  
  /**
   * effect to execute after render
   */
  useEffect(() => {
    if (!state.auth) router.push('/complete-signup');
    setQuestionID(types.CAN_I_CALL_YOU_THAT);
    getEvents({ setLoading, setEventOptions });
  }, []);

  /**
   * define effect to setting a new message always that new questionID was setted
   * on state
   */
  useEffect(() => {
    const messages = [...nomadeMessages];
    const mappedMessages = questions[questionID].map((message, index) => ({
      time: Date.now() + index,
      message: message.replace(/{{displayName}}/g, displayName)
        .replace(/{{event}}/g, eventOptions.find(({ id }) => id === event)?.label),
    }));

    setTimeout(() => {
      setNomadeMessages(messages.concat(mappedMessages));
    }, 1000);
  }, [questionID]);

  const formParamters = {};

  // define event form paramters
  formParamters[types.CAN_I_CALL_YOU_THAT] = {
    setDisplayName,
    displayName,
    onSubmit: () => {
      const messages = [...userMessages];
      let message = 'Pode me chamar assim';

      if (displayName !== state.auth?.username) {
        message = `${displayName}, pode me chamar assim`;
      }

      messages.push({
        time: Date.now(),
        message,
        user: true,
      });
      
      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      
      setUserMessages(messages);
      setQuestionID(types.WHERE_ARE_YOU_GOING);
    },
  };

  // define event form paramters
  formParamters[types.WHERE_ARE_YOU_GOING] = {
    setEvent,
    event,
    eventOptions,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: eventOptions.find(({ id }) => id === event).label,
        user: true,
      });

      setUserMessages(messages);
      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setQuestionID(types.TICKET);
    },
  };

  // define ticket form paramters
  formParamters[types.TICKET] = {
    setTicket,
    ticket,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: ticket,
        user: true,
      });

      setUserMessages(messages);

      // define callback
      const callback = () => {
        setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
        setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);  
        setQuestionID(types.MEET_YOU_BETTER);
      };

      // define invalid ticket callback
      const invalidTicketCallback = () => {
        const newNomadeMessages = [...nomadeMessages];
        newNomadeMessages.push({
          time: Date.now(),
          message: 'Seu código não é válido. Digite um código de ingresso válido.',
        })

        setNomadeMessages(newNomadeMessages);
      };

      addTicket({
        callback,
        invalidTicketCallback,
        setLoading: setNomadeLoading,
        symplaEventId: eventOptions.find(({ id }) => id === event).sympla_id,
        ticket,
        tickets: state.user?.tickets || [],
        userId: state.user?.id,
      });
    },
  };

  // define meet you better form paramters
  formParamters[types.MEET_YOU_BETTER] = {
    onSubmit: () => {
      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setSumDiameter(sumDiameter + 160);
      setQuestionID(types.OLD);
    },
  };

  // define old form paramters
  formParamters[types.OLD] = {
    old,
    setOld,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: old,
        user: true,
      });

      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setUserMessages(messages);
      setSumDiameter(sumDiameter + 80);
      setQuestionID(types.GENDER);
    },
  };
  
  // define gender form paramters
  formParamters[types.GENDER] = {
    gender,
    setGender,
    genderOptions,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: genderOptions.find(({ id }) => id === gender).label,
        user: true,
      });

      if (gender !== 'other') {
        setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
        setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);  
        setSumDiameter(sumDiameter + 80);
      }

      setUserMessages(messages);
      setQuestionID(gender === 'other' ? types.OTHER_GENDER : types.STATE);
    },
  };

  // define other gender form paramters
  formParamters[types.OTHER_GENDER] = {
    otherGender,
    setOtherGender,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: otherGender,
        user: true,
      });

      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setSumDiameter(sumDiameter + 80);

      setUserMessages(messages);
      setQuestionID(types.STATE);
    },
  };
  
  // define state form paramters
  formParamters[types.STATE] = {
    stateLocation,
    setStateLocation,
    stateLocationOptions: stateOptions.map(({ uf, label }) => ({ id: uf, label })),
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: stateOptions.find(({ uf }) => uf === stateLocation).label,
        user: true,
      });

      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setSumDiameter(sumDiameter + 80);

      setUserMessages(messages);
      setQuestionID(types.CITY);
    },
  };
  
  // define city form paramters
  formParamters[types.CITY] = {
    cityLocation,
    setCityLocation,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: cityLocation,
        user: true,
      });

      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setSumDiameter(sumDiameter + 80);

      setUserMessages(messages);
      setQuestionID(types.COLOR);
    },
  };
  
  // define color form paramters
  formParamters[types.COLOR] = {
    color,
    setColor,
    colorOptions: skinColorOptions,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: skinColorOptions.find(({ id }) => id === color).label,
        user: true,
      });

      if (color !== 'other') {
        setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
        setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
        setSumDiameter(sumDiameter + 80);
      }

      setUserMessages(messages);
      setQuestionID(color === 'other' ? types.OTHER_COLOR : types.HAS_DISABILITY);
    },
  };

  // define color form paramters
  formParamters[types.OTHER_COLOR] = {
    otherColor,
    setOtherColor,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: otherColor,
        user: true,
      });
      
      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setSumDiameter(sumDiameter + 80);

      setUserMessages(messages);
      setQuestionID(types.HAS_DISABILITY);
    },
  };
  
  // define has disability form paramters
  formParamters[types.HAS_DISABILITY] = {
    onSubmit: (hasDisability) => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: hasDisability ? 'Sim' : 'Não',
        user: true,
      });
      
      if (hasDisability) {
        setHasDisability(true);
        setQuestionID(types.DISABILITY);
      } else {
        setHasDisability(false);
        setQuestionID(types.TERMS);
        setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
        setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
        setSumDiameter(sumDiameter + 80);
      }

      setUserMessages(messages);
    },
  };

  // define disability form paramters
  formParamters[types.DISABILITY] = {
    disability,
    setDisability,
    disabilityOptions,
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: disabilityOptions.find(({ id }) => id === disability).label,
        user: true,
      });

      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setSumDiameter(sumDiameter + 80);

      setQuestionID(types.TERMS);
      setUserMessages(messages);
    },
  };
  
  // define terms form paramters
  formParamters[types.TERMS] = {
    onSubmit: () => {
      setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
      setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
      setSumDiameter(sumDiameter + 80);

      setOpenTermsModal(true);
    },
  };
  
  // define jump form paramters
  formParamters[types.JUMP] = {
    onSubmit: () => {
      const newUser = {
        ida: state.auth.ida,
        displayName, event, ticket, old,
        gender, otherGender, stateLocation, cityLocation,
        hasDisability, disability, color, otherColor,
      };

      completeRegister({
        setLoading,
        user: newUser,
        userId: state.user.id,
        router,
      });
    },
  };

  if (loading) {
    return (
      <ChatLoadingWrapper>
        <Loading />
      </ChatLoadingWrapper>
    );
  }

  return (
    <ChatWrapper>
      <SumWrapper diameter={sumDiameter}>
        <SumIllustration src="/static/icons/sum.svg" />
      </SumWrapper>
      <StarsIllustration translateX={starsTranslateX} src="/static/icons/oasi-ilustraonboarding-estrelas.svg" />
      <Messages>
        <MessagesWrapper>
          { renderMessages({ nomadeMessages, userMessages }) }
        </MessagesWrapper>
      </Messages>
      <FormWrapper>
        <AvatarIllustration src="/static/icons/oasi-ilustraonboarding-avatar.svg" />
        <MontainsIllustration translateX={montainsTranslateX} src="/static/icons/oasi-ilustraonboarding-montanhas.svg" />
        <FormContent>
          { renderForm({ questionID, paramters: formParamters[questionID] }) }
        </FormContent>
      </FormWrapper>
      <UseTerms
        open={openTermsModal}
        onGoBack={() => {
          setOpenTermsModal(false)
        }}
        onAccept={() => {
          setStarsTranslateX(starsTranslateX + STARS_TRANSLATE_VARIATION);
          setMontainsTranslateX(montainsTranslateX + MONTAINS_TRANSLATE_VARIATION);
          setSumDiameter(sumDiameter + 500);
          
          const messages = [...userMessages];
          messages.push({
            time: Date.now(),
            message: 'Eu aceito',
            user: true,
          });
          
          setOpenTermsModal(false)
          setQuestionID(types.JUMP);
          setUserMessages(messages);
        }}
      />
    </ChatWrapper>
  );
};

export default Chat;
