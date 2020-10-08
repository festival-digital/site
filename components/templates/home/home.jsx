import React from 'react';
import { Content, CallAction, FirstRowCover,FirstColumn, SecondColumn, FirstRow, FirstColumnCover, SecondColumnCover,ImageOasi,SecondRow, BoxOasis, FirstBoxContent, Mosaico, MosaicoTextBox, MosaicoImage, MosaicoImage2, MosaicoImage3,FirstBoxContentMobile,FirstRowCoverMobile, MosaicoTextBoxMobile} from './home.style';
import { IDARegisterButton, IDALoginButton, Title, Text, Subtitle, Subtitlesmall} from '@resystem/design-system';
import styled from 'styled-components';
  

 

 

 

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => (
  <Content>
<FirstBoxContentMobile></FirstBoxContentMobile>



<FirstRowCoverMobile>

<Title>Encontros que transformam</Title>
  <Text>Loren ipsom lorem ipson lorem ipson lorem ipson </Text>
  <Text>Loren ipsom lorem ipson lorem ipson lorem ipson </Text>
  <Text>Loren ipsom lorem ipson lorem ipson lorem ipson </Text>
  <Text>Loren ipsom lorem ipson lorem ipson lorem ipson </Text>
</FirstRowCoverMobile>
<FirstBoxContent>
<FirstColumnCover>
<FirstRowCover></FirstRowCover>
 <Title>Encontros que transformam</Title>
  <Text>Loren ipsom lorem ipson lorem ipson lorem ipson </Text>
  <Text>Loren ipsom lorem ipson lorem ipson lorem ipson </Text>
  <Text>Loren ipsom lorem ipson lorem ipson lorem ipson </Text>
  <Text>Loren ipsom lorem ipson lorem ipson lorem ipson </Text>
</FirstColumnCover>

<SecondColumnCover>

  
</SecondColumnCover>

</FirstBoxContent>



<CallAction>
   <FirstColumn>
     <FirstRow>
   <Subtitle>Gostou? bora essa experiência mágica com a gente?</Subtitle></FirstRow>
   <SecondRow><Text>Você já conhece a Ida? 
     ' um serviço de autenticação ápido e seguro!'
   </Text></SecondRow>
   </FirstColumn>

   <SecondColumn>
   <FirstRow><IDARegisterButton
        onClick={(() => {})}
        dark
        small
        text="Entrar com IDA"
      /> </FirstRow>
      <FirstRow><Text>SAIBA MAIS SOBRE A Ida!</Text></FirstRow>
   </SecondColumn>
    
   
    
   </CallAction>




 
<Mosaico>
  <MosaicoTextBox>
    <Subtitle>Título Exemplo</Subtitle>
<Text>Navegações diferentes pra você assistir o seu artista favorito! Fazer aquela reunião interativa e multimídia, ou expor seus produtos? Conheça a plataforma! Conheça oasi.</Text>  
</MosaicoTextBox>

<MosaicoTextBoxMobile>
    <Subtitle>Título Exemplo</Subtitle>
<Text>Navegações diferentes pra você assistir o seu artista favorito! Fazer aquela reunião interativa e multimídia, ou expor seus produtos? Conheça a plataforma! Conheça oasi.</Text>  
</MosaicoTextBoxMobile>
 <MosaicoImage></MosaicoImage>
 <MosaicoTextBoxMobile>
    <Subtitle>Título Exemplo</Subtitle>
<Text>Navegações diferentes pra você assistir o seu artista favorito! Fazer aquela reunião interativa e multimídia, ou expor seus produtos? Conheça a plataforma! Conheça oasi.</Text>  
</MosaicoTextBoxMobile>
 
 </Mosaico>

 <Mosaico><MosaicoImage2></MosaicoImage2>
 <MosaicoTextBoxMobile>
    <Subtitle>Título Exemplo</Subtitle>
<Text>Navegações diferentes pra você assistir o seu artista favorito! Fazer aquela reunião interativa e multimídia, ou expor seus produtos? Conheça a plataforma! Conheça oasi.</Text>  
</MosaicoTextBoxMobile>
 <MosaicoTextBox>


    <Subtitle>Título Exemplo</Subtitle>
<Text>Navegações diferentes pra você assistir o seu artista favorito! Fazer aquela reunião interativa e multimídia, ou expor seus produtos? Conheça a plataforma! Conheça oasi.</Text>  
</MosaicoTextBox></Mosaico>

<Mosaico>
  <MosaicoTextBox>
    <Subtitle>Título Exemplo</Subtitle>
<Text>Navegações diferentes pra você assistir o seu artista favorito! Fazer aquela reunião interativa e multimídia, ou expor seus produtos? Conheça a plataforma! Conheça oasi.</Text>  
</MosaicoTextBox>
 <MosaicoImage3></MosaicoImage3>
 <MosaicoTextBoxMobile>
    <Subtitle>Título Exemplo</Subtitle>
<Text>Navegações diferentes pra você assistir o seu artista favorito! Fazer aquela reunião interativa e multimídia, ou expor seus produtos? Conheça a plataforma! Conheça oasi.</Text>  
</MosaicoTextBoxMobile>
 
 </Mosaico>

    <BoxOasis>
 <FirstColumn>
    
     <FirstRow><Subtitle>OA...Oasi! Mas o que é isso? </Subtitle></FirstRow>
     <SecondRow><Text>Ei você! Oasi é uma plataforma que absorve vários formatos, shows, festas, mostras, conferências, oficinas e encontros. </Text></SecondRow>
     <SecondRow><Text>  Enfim uma nova forma de construir eventos e experiências coletivas. 
       Fica o convite para fazer e  realizar esse mundo com a gente....Explorar.  </Text></SecondRow>
     <SecondColumn></SecondColumn>

</FirstColumn>

<SecondColumn>
<FirstRow>
<ImageOasi onClick={(() => {})}
src="/static/images/oasiImage.png" /> 
</FirstRow>
</SecondColumn>

 </BoxOasis>
    <CallAction>
   <FirstColumn>
     <FirstRow>
   <Subtitle>Bora viver essa experiência mágica com a gente?</Subtitle></FirstRow>
   <SecondRow><Text>Você já conhece a Ida? 
     ' um serviço de autenticação ápido e seguro!'
   </Text></SecondRow>
   </FirstColumn>

   <SecondColumn>
   <FirstRow><IDARegisterButton
        onClick={(() => {})}
        dark
        small
        text="Entrar com IDA"
      /> </FirstRow>
      <FirstRow><Text>SAIBA MAIS SOBRE A Ida!</Text></FirstRow>
   </SecondColumn>
    
   
    
   </CallAction>
  
  
 
 

   
   
 </Content>


);
 

 

   









 

export default Home;