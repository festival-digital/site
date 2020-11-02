import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  height: 160px;
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: all 2s ease-in-out;

  &:hover {
    figure {
      transform: scale(1.3) rotate(5deg);
    }
  }
`;

const Figure = styled.figure`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: ${({ backgroundUrl }) =>
    `url(${
      backgroundUrl || ''
    })`}; /* fullmetal.jpg  './static/images/card1.png'*/
  background-size: cover;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  z-index: -1;
`;

const LinearBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.xs} ${spacingInset.xs} 0 ${spacingInset.xs}`};
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    height: 100%;
    width: 50%;
    background: linear-gradient(
      90deg,
      #1d1d1d 32.38%,
      rgba(29, 29, 29, 0) 95.65%
    );
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &::before {
    content: '';
    height: 50%;
    width: 100%;
    background: linear-gradient(
      360deg,
      #1d1d1d 0%,
      rgba(29, 29, 29, 0.755208) 49.32%,
      rgba(29, 29, 29, 0) 95.65%
    );
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const IconContainer = styled.div`
  flex: 1;
  & img {
    max-width: 50px;
    max-height: 50px;
  }
`;

const LegendsContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Legends = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  & p {
    z-index: 4;
    color: ${({ theme }) => theme.neutralColor[1]};
    font-size: 14px;
    line-height: 120%;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: bold;
  }
  & small {
    z-index: 4;
    color: ${({ theme }) => theme.neutralColor[1]};
    line-height: 20px;
    font-size: 12px;
  }
`;

const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  background-color: ${({ theme }) => theme.neutralColor[7]};
  border-radius: 10px;
  cursor: pointer;
`;

/**
 * This is the activity card component
 * @returns {React.Component}
 */

const EventCard = ({
  backgroundUrl,
  eventId,
  iconUrl,
  title,
  subtitle,
  ...props
}) => {
  return (
    <Container onClick={() => console.log(1123)}>
      <Figure backgroundUrl={backgroundUrl} />
      <LinearBackground>
        <IconContainer>
          <img src={iconUrl} alt="ícone do evento" />
        </IconContainer>
        <LegendsContainer>
          <Legends>
            <p>{title}</p>
            <small>{subtitle}</small>
          </Legends>
          <Link as={`/events/${eventId}`} href="/events/[events]">
            <ButtonLink>
              <img
                src="./static/icons/arrow_right.svg"
                alt="ícone de seta para a direita"
              />
            </ButtonLink>
          </Link>
        </LegendsContainer>
      </LinearBackground>
    </Container>
  );
};

EventCard.defaultProps = {
  backgroundUrl: '',
  eventId: '',
  iconUrl: '',
  title: '',
  subtitle: '',
};

EventCard.propTypes = {
  backgroundUrl: PropTypes.string,
  eventId: PropTypes.string,
  iconUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default EventCard;
