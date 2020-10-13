import styled from 'styled-components';

export const ChatWrapper = styled.section`
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const Messages = styled.div`
  max-height: 320px;
  overflow: auto;
  padding: 20px;
`;

export const UserMessageWrapper = styled.div`
  text-align: right;

  & + div {
    margin-top: 8px;
  }
`;

export const UserMessage = styled.p`
  display: inline-block;
  max-width: 90%;
  background-color: #EA5EBF;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 10px 10px 0px 10px;
`;

export const NomadeMessageWrapper = styled.div`
  text-align: left;

  & + div {
    margin-top: 8px;
  }
`;

export const NomadeMessage = styled.p`
  display: inline-block;
  max-width: 90%;
  background-color: #D9ADFF;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 10px 10px 10px 0px;
`;

export const FormWrapper = styled.div`
  padding: 20px;
  background-color: #f1f1f1;
`;
