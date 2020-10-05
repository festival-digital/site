import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 177px;
  display: flex;
  background-color: ${({ theme }) => theme.brandColor.primary.darkest};
  padding: 16px 16px;
`;

const AvatarImage = styled.img`
  width: 75px;
  height: 130px;
`;

const TextContent = styled.div`
  padding-left: 16px;
  color: ${({ theme }) => theme.neutralColor[1]};

  & p {
    margin-bottom: 10px;
  }

  & p:nth-child(1) {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
  }

  & p:nth-child(2) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
  }
  & p:nth-child(3) {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
  }
`;

const ActivityIncentiveCard = () => (
  <Container>
    <AvatarImage
      src="./static/images/avatar-default.png"
      alt="imagem que representa um avatar de um jogador"
    />
    <TextContent>
      <p>Oasi é uma nova forma de se econtrar e conectar com pessoas</p>
      <p>Acesse pelo seu computador para ter a experiência completa!</p>
      <p>SAIBA MAIS</p>
    </TextContent>
  </Container>
);
export default ActivityIncentiveCard;
