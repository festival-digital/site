import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;
  grid-template-columns: 48px 1fr;
  color: #ffffff;
  background: #404040;
  border-radius: 10px;
  padding: 16px;
`;

export const LogoWrapper = styled.div``;

export const EventLogo = styled.img`
  width: 100%;
`;

export const InformationWrapper = styled.div``;

export const Title = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
`;

export const Field = styled.div`
  margin-top: 8px;
`;

export const FieldLabel = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 120%;
`;

export const FieldValue = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
`;
