import styled from "styled-components";
import {
  Text as TextReSystem,
  Title as TitleReSystem,
  SmallText as SmallTextReSystem,
} from '@resystem/design-system';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventCover = styled.div`
  width: 100%;
  height: 250px;
  position: relative;

  background-image: ${(props) => `url(${props.cover})`};
  background-size: 100% auto;
  background-repeat: no-repeat;
`;

export const LinearBackground = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: linear-gradient(
    0deg,
    #1d1d1d 20.27%,
    rgba(29, 29, 29, 0.766355) 30.5%,
    rgba(29, 29, 29, 0) 100%
  );
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.xs} ${spacingInset.xs}`};

  @media only screen and (max-width: 320px) {
    background: linear-gradient(
      0deg,
      #1d1d1d 25.27%,
      rgba(29, 29, 29, 0.766355) 35.5%,
      rgba(29, 29, 29, 0) 100%
    );
  }
`;

export const EventLogo = styled.img`
  width: 74px;
  height: 74px;
`;

export const EventDate = styled.div`
  color: ${({ theme }) => theme.neutralColor[1]};
  position: relative;
  width: 70px;

  & span {
    display: block;
    position: relative;
    text-align: right;
  }
`;

export const LinkBadge = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.neutralColor[7]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.nano} ${spacingInset.xs}`};
  color: ${({ theme }) => theme.neutralColor[1]};
  text-transform: uppercase;
`;

export const Grid = styled.section`
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.xs} ${spacingInset.xs}`};
  background-color: ${({ theme }) => theme.neutralColor[8]};
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacingStack.xxxs};
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const Badge = styled.div`
  padding: ${({ theme }) => `1px ${theme.spacingInset.nano}`};
  color: #ea5ebf;
  border-width: 1px;
  border-style: solid;
  border-color: #ea5ebf;
  flex-grow: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  text-transform: lowercase;
`;

export const ButtonAddTicket = styled.button`
  background: ${({ theme }) => theme.neutralColor[7]};
  border-radius: 10px;
  text-align: center;
  color: ${({ theme }) => theme.neutralColor[1]};
  width: 100%;
  padding: ${({ theme: { spacingInset } }) => `${spacingInset.xs} 0`};
  text-transform: uppercase;
`;

export const TicketAdded = styled.label`
  text-align: center;
  color: ${({ theme }) => theme.neutralColor[1]};
  width: 100%;
  padding: ${({ theme: { spacingInset } }) => `${spacingInset.xs} 0`};
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const Title = styled(TitleReSystem)`
  font-family: 'Space Mono';
  color: ${({ theme }) => theme.neutralColor[1]};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
export const SmallText = styled(SmallTextReSystem)`
  color: ${({ theme }) => theme.neutralColor[1]};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin-top: ${({ theme }) => theme.spacingStack.xxxs};
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;

export const Text = styled(TextReSystem)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin-top: ${({ theme }) => theme.spacingStack.xxxs};
  margin-bottom: ${({ theme }) => theme.spacingStack.xxxs};
`;