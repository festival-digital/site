import React, { useContext } from 'react';
import styled from 'styled-components';
import PrivateContext from 'components/private-context/private-context';
import BaseHead from 'components/base-head/BaseHead';
import Store from 'components/store/Store';

const GameIFrame = styled.iframe`
  width: 100%;
  height: 100vh;
`;

const Game = () => {
  const { state } = useContext(Store);
  const token = state.auth ? state.auth.token : null;
  
  return (
    <>
      <PrivateContext>
        <BaseHead
          title="Oasi - Sinta Novamente!"
          description="Aqui, você pode votar nos vídeos exibidos na Mostra de Videoclipes. Quando terminar de votar, pode clicar em “Voltar Para a Galeria” ;)"
        />
        <GameIFrame src={`http://game.oasi.vc/?t=${token}`} />
      </PrivateContext>
    </>
  );
};

export default Game;
