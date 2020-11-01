import styled from 'styled-components';

export const Card = styled.div`
  display: inline-grid;
  grid-template-columns: 284px 1fr;
  grid-gap: 24px;
  grid-template-rows: 128px;
  max-width: 632px;
`;

export const CardVideo = styled.div`
  background-color: #ffffff;
`;

export const CardVideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const CardInfoWrapper = styled.div`
  display: grid;
  align-items: end; 
  height: 100%;
`;

export const CardTitle = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  color: #ffffff;
`;

export const CardDescription = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 120%;
  color: #ffffff;
  margin-top: 8px;
`;

export const Rate = styled.ul`
  padding-top: 8px;
  display: grid;
  grid-template-columns: 32px 32px 32px 32px 32px;
  grid-gap: 4px;
`;

export const RateIcon = styled.img`
  width: 32px;
  cursor: pointer;
`;

export const VotedWrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;
