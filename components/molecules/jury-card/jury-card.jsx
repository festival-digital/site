import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@resystem/design-system';
import LinkButton from 'components/atoms/link-button/link-button'
import {
  Card, CardVideo, CardVideoIframe,  CardInfoWrapper,
  CardTitle, CardDescription, RateIcon, Rate,
  VotedWrapper,
} from './jury-card.style';

const renderRateIcons = ({
  title, url, ratePoint, onVote
}) => [
  `${url}-1`,
  `${url}-2`,
  `${url}-3`,
  `${url}-4`,
  `${url}-5`,
].map((key, index) => (
  <li>
    <RateIcon
      src={(index + 1) > ratePoint ? '/static/icons/gray-rate.svg' : '/static/icons/yellow-rate.svg'}
      alt={`Clique pra votar ${index + 1}, de 1 à 5, no video clipre ${title}`}
      onClick={() => ratePoint > 0 ? null : onVote(index + 1)}
    />
  </li>
));

const JuryCard = ({
  title, url, ratePoint, onVote,
}) => (
  <Card>
    <CardVideo>
      <CardVideoIframe
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </CardVideo>
    <CardInfoWrapper>
      <div>
        <CardTitle>{title}</CardTitle>
        {
          ratePoint > 0 ? (
            <VotedWrapper>
              <Text fontSize="16px" variant="success" small>Voto computado!</Text>
            </VotedWrapper>
            
          ) : (
            <CardDescription>Qual nota você dá pra esse vídeo?</CardDescription>
          )
        }
      </div>
      <Rate>
        { renderRateIcons({ title, ratePoint, url, onVote }) }
      </Rate>
    </CardInfoWrapper>
  </Card>
);

JuryCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  ratePoint: PropTypes.number.isRequired,
  onVote: PropTypes.func.isRequired,
};

export default JuryCard;
