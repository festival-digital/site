import styled from 'styled-components';

export const TemplateWrapper = styled.div``;

export const LoadingWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 16px;
`;

export const Title = styled.h1`
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  padding: 0px 16px;
`;

export const TicketList = styled.ul`
  display: grid;
  grid-gap: 16px;
  padding: 16px;
`;
