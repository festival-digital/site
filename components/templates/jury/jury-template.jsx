import React, { useState, useEffect, useContext } from 'react';
import PropTypes from  'prop-types';
import Button from 'components/atoms/button/button';
import Loading from 'components/atoms/loading/loading';
import JuryCard from 'components/molecules/jury-card/jury-card';
import Store from 'components/store/Store';
import { getActivity, handleVote } from './jury-template.controller';
import {
  JuryContainer, JuryHeader, JuryDescription, JuryList,
  OasiLogo, JuryTitle, BackIcon, Wrapper,
  JuryLoadingContainer,
} from './jury.style';

const renderCards = ({
  userId, shows, activity, setActivity, handleVote,
}) => shows.map(({
  title, id, url, votes,
}) => {
  const vote = votes.find(({ user }) => user.id === userId);
  return (
    <li>
      <JuryCard
        title={title}
        key={id}
        url={url}
        ratePoint={vote ? vote.rate_point : 0}
        onVote={(ratePoint) => handleVote({
          activity, setActivity, userId, showId: id,
          ratePoint,
        })}
      />
    </li>
  );
});

/**
 * This is the Jury component
 * @param {object} props proptypes to be pass to the component
 * @returns {React.Component}
 */
const JuryTemplate = ({ id }) => {
  const { state } = useContext(Store);
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    getActivity({ setLoading, setActivity, urlParam: id });
  }, []);

  if (loading || !state.user) {
    return (
      <JuryLoadingContainer>
        <Loading />
      </JuryLoadingContainer>
    )
  }

  return (
    <JuryContainer>
      <Wrapper>
        <JuryHeader>
          <OasiLogo src="/static/icons/oasi.svg" alt="" />
          <JuryTitle>{activity.title}</JuryTitle>
        </JuryHeader>
        <Button
          customStyle={`
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: 32px;
            width: 232px;
          `}
        >
          <BackIcon src="/static/icons/back.svg" alt="" />
          Voltar para a galeria
        </Button>
        <JuryDescription>
          Aqui, você pode classificar os vídeos exibidos na Mostra de Videoclipes. O vídeo mais bem votado vai ser exibido no palco principal durante o encerramento da Feira da Música! Quando terminar de votar, pode clicar em “Voltar Para a Galeria” que vamos te levar de volta ;)
        </JuryDescription>
        <JuryList>
            {
              renderCards({
                shows: activity.shows,
                handleVote,
                activity,
                setActivity,
                userId: state.user.id,
              })
            }
        </JuryList>
      </Wrapper>
    </JuryContainer>
  );
};

JuryTemplate.propTypes = {
  id: PropTypes.string.isRequired,
};

export default JuryTemplate;
