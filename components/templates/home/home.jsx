import React from 'react';
import { Content, CallAction, FirstRowCover,FirstColumn, SecondColumn, FirstRow, FirstColumnCover, SecondColumnCover,ImageOasi,SecondRow, BoxOasis, FirstBoxContent } from './home.style';
import { IDARegisterButton, IDALoginButton, Title, Text, Subtitle, Subtitlesmall} from '@resystem/design-system';
import styled from 'styled-components';
  

 

 

 

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => (
  <Content>

<FirstBoxContent>
<FirstColumnCover>
<FirstRowCover>
  
 </FirstRowCover>
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