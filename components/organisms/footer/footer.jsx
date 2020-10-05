/**
 * This is the Footer component
 * @returns {React.Component} Footer component global
 */

import React from "react";
import { } from '@resystem/design-system';
import {
  MenuFooterLink,
  IconBox,
  Icon,
  LogoBox,
  Logo,
  FooterTop,
  FooterBottom,
  Content,
  Brand,
 
   
  Footer as FooterComponent,
} from './footer.style';
function Footer() {
  return (
    <FooterComponent>
      <FooterTop>

      <MenuFooterLink>INICIO</MenuFooterLink>
      <MenuFooterLink>TODOS OS EVENTOS</MenuFooterLink>
      <MenuFooterLink>TERMOS DE USO</MenuFooterLink>
      <MenuFooterLink>FALE CONOSCO</MenuFooterLink>
      <MenuFooterLink>POLÍTICA DE PRIVACIDADE</MenuFooterLink>
      <Content>
      <IconBox><Icon onClick={(() => {})}
src="/static/redessociais/facebook.png" />
<Icon onClick={(() => {})}
src="/static/redessociais/insta.png" />
<Icon onClick={(() => {})}
src="/static/redessociais/twitter.png" /> 

 </IconBox>
</Content>

 </FooterTop>
 <FooterBottom>
 <Content>
 <Brand onClick={(() => {})}
src="/static/images/logo.png" />
 </Content>
 <Content>
<LogoBox><Logo onClick={(() => {})}
src="/static/images/ninja.png" />
<Logo onClick={(() => {})}
src="/static/images/propulsao.png" />
<Logo onClick={(() => {})}
src="/static/images/design.png" /> 
 
 </LogoBox>
 </Content>
 </FooterBottom>
      </FooterComponent>
     
  );
 
}

export default Footer;