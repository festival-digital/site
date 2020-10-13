import React, { useState, useEffect } from 'react';
import {
  ChatWrapper, Messages, FormWrapper, UserMessage,
  NomadeMessage, NomadeMessageWrapper, UserMessageWrapper,
} from './chat.style';
import EventForm from './forms/event-form/event-form';
import TicketForm from './forms/ticket-form/ticket-form';
import { types, questions } from './chat.model';

const EVENTS_DUMMY = [
  { title: 'Feira da música 2020', id: 'feira' },
  { title: 'Afets', id: 'afets' },
];

// define form list
const forms = {};
forms[types.WHERE_ARE_YOU_GOING] = paramters => <EventForm {...paramters} />;
forms[types.TICKET] = paramters => <TicketForm {...paramters} />;
forms[types.MEET_YOU_BETTER] = paramters => <div>test</div>;

/**
 * this render messages
 * @returns {React.Component}
 */
const renderMessages = ({ nomadeMessages, userMessages }) => nomadeMessages
  .concat(userMessages)
  .sort((a, b) => a.time > b.time ? 1 : -1)
  .map(({ message, user, time }) => user ? (
    <UserMessageWrapper>
      <UserMessage key={`${time}+${message}`}>
        {message}
      </UserMessage>
    </UserMessageWrapper>
  ) : (
    <NomadeMessageWrapper>
      <NomadeMessage key={`${time}+${message}`}>
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
  const [nomadeMessages, setNomadeMessages] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [event, setEvent] = useState('');
  const [ticket, setTicket] = useState('');
  const [events] = useState(EVENTS_DUMMY);
  const [questionID, setQuestionID] = useState(types.WHERE_ARE_YOU_GOING);
  
  /**
   * effect to execute after render
   */
  useEffect(() => {
    setQuestionID(types.WHERE_ARE_YOU_GOING);
  }, []);

  /**
   * define effect to setting a new message always that new questionID was setted
   * on state
   */
  useEffect(() => {
    const messages = [...nomadeMessages];
    const mappedMessages = questions[questionID].map((message) => ({
      time: Date.now(),
      message,
    }));

    setTimeout(() => {
      setNomadeMessages(messages.concat(mappedMessages));
    }, 1000);
  }, [questionID]);

  const formParamters = {};

  // define event form paramters
  formParamters[types.WHERE_ARE_YOU_GOING] = {
    setEvent,
    event,
    eventOptions: events.map(({ id, title }) => ({ id, label: title })),
    onSubmit: () => {
      const messages = [...userMessages];
      messages.push({
        time: Date.now(),
        message: event,
        user: true,
      });

      setUserMessages(messages);
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
      setQuestionID(types.MEET_YOU_BETTER);
    },
  };

  return (
    <ChatWrapper>
      <Messages>
        { renderMessages({ nomadeMessages, userMessages }) }
      </Messages>
      <FormWrapper>
        { renderForm({ questionID, paramters: formParamters[questionID] }) }
      </FormWrapper>
    </ChatWrapper>
  );
};

export default Chat;
