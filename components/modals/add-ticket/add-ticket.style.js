import styled from 'styled-components';

export const Content = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 28.13px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  line-height: 19.2px;
`;

export const TicketList = styled.ul`
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const AddTicketButton = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: solid 2px #771F5C; 
  background-color: transparent;
  color: #771F5C;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:disabled {
    background-color: #CCC;
    color: #808080;
  }
`;

export const AddIconWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: calc(50% - 12px);
`;

export const SubmitButton = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: #771F5C;
  color: #EA5EBF;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:disabled {
    background-color: #CCC;
    color: #808080;
  }
`;

export const SubmitIconWrapper = styled.div`
  position: absolute;
  right: 8px;
  top: calc(50% - 12px);
`;

export const InformationLink = styled.a`
  display: inline-block;
  margin-bottom: 32px;
  color: #771F5C;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-decoration: underline;
`;
