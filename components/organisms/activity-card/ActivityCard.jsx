import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { enhancedCodeGenerator } from 'utils/codeGenerator';
import { useRouter } from 'next/router';

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
  background-position: center;
  transition: all 0.7s ease-in-out;
  overflow: hidden;
  z-index: -1;
`;

const LinearBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px 16px 16px 16px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;

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

const RightContent = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: flex-end;
  justify-content: flex-end;
  justify-items: right;
  width: 100%;
`;

const LeftContent = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  align-items: end;
  justify-content: flex-end;
  justify-items: left;
  width: 100%;
  position: relative;
`;

const ActivityDate = styled.div`
  align-self: start;
  color: ${({ theme }) => theme.neutralColor[1]};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const ActivityName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.neutralColor[1]};
`;

const Tag = styled.div`
  padding: ${({ theme }) => `1px ${theme.spacingInset.nano}`};
  color: #ea5ebf;
  border-width: 1px;
  border-style: solid;
  border-color: #ea5ebf;
  flex-grow: 0;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  text-transform: lowercase;
`;

const TagGreen = styled.div`
  position: absolute;
  align-self: start;
  padding: ${({ theme }) => `1px ${theme.spacingInset.nano}`};
  color: ${({ theme }) => theme.neutralColor[8]};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.alarmColor.success.medium};
  background: ${({ theme }) => theme.alarmColor.success.medium};
  flex-grow: 0;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  @media only screen and (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSize.xxxs};
  }
`;

const TagGray = styled.div`
  position: absolute;
  align-self: start;
  padding: ${({ theme }) => `1px ${theme.spacingInset.nano}`};
  color: ${({ theme }) => theme.neutralColor[8]};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.neutralColor[4]};
  background: ${({ theme }) => theme.neutralColor[4]};
  flex-grow: 0;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  @media only screen and (max-width: 320px) {
    font-size: ${({ theme }) => theme.fontSize.xxxs};
  }
`;

const ReadMoreLink = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.neutralColor[1]};
  text-transform: uppercase;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.neutralColor[1]};
  background-color: ${({ theme }) => theme.neutralColor[7]};
  border-radius: ${({ theme }) => `${theme.borderRadius.sm}`};
  padding: ${({ theme }) => `${theme.spacingSquish.nano}`};
  cursor: pointer;
`;

const GenerateTags = ({ tags }) => {
  return tags.map((item) => <Tag key={enhancedCodeGenerator()}>{item}</Tag>);
};

const SelectTag = ({ isFree, subscription }) => {
  if (subscription) {
    if (subscription === 'done') return <TagGreen>Inscrição feita</TagGreen>;
    if (subscription === 'closed')
      return <TagGray>Inscrições encerradas</TagGray>;
  }

  if (isFree) return <TagGreen>Atividade gratuita</TagGreen>;
  // return <TagGray>Atividade não gratuita</TagGray>;

  return <></>;
};

/**
 * This is the activity card component
 * @returns {React.Component}
 */

const ActivityCard = ({
  activityDate,
  activityName,
  backgroundUrl,
  isFree,
  subscription,
  activity,
  ...props
}) => {
  console.log('activity', activity);
  const router = useRouter();
  return (
    <Container>
      <Figure backgroundUrl={activity.cover_url || backgroundUrl} />
      <LinearBackground>
        <LeftContent>
          <ActivityDate>{activity.date}</ActivityDate>
          <ActivityName>{activity.title}</ActivityName>
          <GenerateTags tags={activity.tags} />
          {/* <ReadMoreLink
            href="/"
            alt={`Link para saber mais sobre ${activityName}`}
          >
            + Saiba mais
          </ReadMoreLink> */}
        </LeftContent>
        <RightContent>
          {/* <SelectTag subscription={subscription} isFree={isFree}  /> */}
          <Button onClick={() => router.push(`/embed-stream/${activity.id}`)}>
            Entrar
          </Button>
        </RightContent>
      </LinearBackground>
    </Container>
  );
};

ActivityCard.defaultProps = {
  activityDate: null,
  activityName: null,
  backgroundUrl: '',
  isFree: false,
  subscription: null,
  tags: [],
};

ActivityCard.propTypes = {
  activityDate: PropTypes.string,
  activityName: PropTypes.string,
  backgroundUrl: PropTypes.string,
  isFree: PropTypes.bool,
  subscription: PropTypes.oneOf(['closed', 'done', 'open', null]),
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ActivityCard;
