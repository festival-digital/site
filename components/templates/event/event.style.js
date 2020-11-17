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

export const LoadingWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const EventCover = styled.div`
  width: 100%;
  height: 330px;
  position: relative;
  top: -80px;
  margin-bottom: -80px;
  background-image: ${(props) => `url(${props.cover})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LinearBackground = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: calc(100% + 1px);
  top: 0;
  left: 0;

  background: linear-gradient(
    0deg,
    #1d1d1d 0%,
    rgba(29, 29, 29, 0.766355) 30.5%,
    rgba(29, 29, 29, 0) 100%
  );
  padding: ${({ theme: { spacingInset } }) =>
    `${spacingInset.xs} ${spacingInset.xs}`};

  @media only screen and (max-width: 320px) {
    background: linear-gradient(
      0deg,
      #1d1d1d 0%,
      rgba(29, 29, 29, 0.766355) 35.5%,
      rgba(29, 29, 29, 0) 100%
    );
  }
`;

export const EventLogo = styled.img`
  width: 70px;
  height: 70px;
  position: relative;
  bottom: -5px;
`;

export const EventDate = styled.div`
  color: ${({ theme }) => theme.neutralColor[1]};
  position: relative;
  width: 70px;
  font-weight: 700;

  & span {
    display: block;
    position: relative;
    text-align: right;
  }
`;

export const LinkBadge = styled.a`
  width: 235px;
  height: 48px;
  vertical-align: middle;
  font-size: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
  padding: ${({ theme: { spacingInset } }) => `${spacingInset.xs} 0`};
  width: 235px;
  font-size: 12px;
  font-weight: 700;
  margin-top: 8px;
  text-transform: uppercase;
  
  @media (min-width: 1024px) {
    margin-bottom: 24px;
  }
`;

export const TicketAdded = styled.label`
  text-align: center;
  margin-top: 16px;
  vertical-align: middle;
  color: ${({ theme }) => theme.neutralColor[1]};
  padding: ${({ theme: { spacingInset } }) => `${spacingInset.xs} 0`};
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;


  @media (min-width: 1024px) {
    margin-top: 0px;
    margin-left: 24px;
  }
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

export const EventDateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const InfoWrapper = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const List = styled.ul`
  list-style: none;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const RightWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;

  }
`; 
