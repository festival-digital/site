import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  padding: 16px 16px 0 16px;
  display: flex;
  flex-direction: column;

  &::after {
    content: '';
    height: 100%;
    width: 50%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.85) 25%, transparent);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &::before {
    content: '';
    height: 50%;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 15%, transparent);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const IconContainer = styled.div`
  flex: 1;
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
    color: #fff;
    font-size: 14px;
    line-height: 120%;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: bold;
  }
  & small {
    z-index: 4;
    color: #fff;
    line-height: 20px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  background-color: #404040;
  border-radius: 10px;
  cursor: pointer;
`;

/**
 * This is the activity card component
 * @returns {React.Component}
 */

const ActivityCardSimple = ({
  backgroundUrl,
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
          <Button>
            <img
              src="./static/icons/arrow_right.svg"
              alt="ícone de seta para a direita"
            />
          </Button>
        </LegendsContainer>
      </LinearBackground>
    </Container>
  );
};

ActivityCardSimple.defaultProps = {
  backgroundUrl: '',
  iconUrl: '',
  title: '',
  subtitle: '',
};

ActivityCardSimple.propTypes = {
  backgroundUrl: PropTypes.string,
  iconUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ActivityCardSimple;
