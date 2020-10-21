import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import Button from 'components/atoms/button/button';
import {
  ModalWrapper, TermsWrapper, Terms, Title,
  Modal, Header, ExitButton,
} from './use-terms.style';

const UseTerms = ({ open, onGoBack, onAccept }) => open ? (
  <ModalWrapper open={open}>
    <Modal>
      <ExitButton type="button" onClick={onGoBack}>
        <Icon>clear</Icon>
        <span>Fechar</span>
      </ExitButton>
      <Header>
        <GoBackButton onClick={onGoBack} />
      </Header>
      <TermsWrapper>
        <Title>Termos de Uso da Oasi</Title>
        <Terms>
          Mussum Ipsum, cacilds vidis litro abertis. Atirei o pau no gatis, per gatis num morreus. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Interagi no mé, cursus quis, vehicula ac nisi. Quem manda na minha terra sou euzis!
          <br />
          <br />
          Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Manduma pindureta quium dia nois paga.
          <br />
          <br />
          Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Detraxit consequat et quo num tendi nada. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Quem num gosta di mé, boa gentis num é.
          <br />
          <br />
          Aenean aliquam molestie leo, vitae iaculis nisl. Quem num gosta di mim que vai caçá sua turmis! A ordem dos tratores não altera o pão duris. Sapien in monti palavris qui num significa nadis i pareci latim.
          <br />
          <br />
          Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.
          <br />
          <br />
          Diuretics paradis num copo é motivis de denguis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Per aumento de cachacis, eu reclamis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!
          <br />
          <br />
          Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Mé faiz elementum girarzis, nisi eros vermeio. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
          <br />
          <br />
          Viva Forevis aptent taciti sociosqu ad litora torquent. Pra lá , depois divoltis porris, paradis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.
          <br />
          <br />
          Si num tem leite então bota uma pinga aí cumpadi! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Casamentiss faiz malandris se pirulitá. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
          <br />
          <br />
          Delegadis gente finis, bibendum egestas augue arcu ut est. Paisis, filhis, espiritis santis. Suco de cevadiss deixa as pessoas mais interessantis. In elementis mé pra quem é amistosis quis leo.
          <br />
          <br />
          Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. A ordem dos tratores não altera o pão duris. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          <br />
          <br />
          Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Interagi no mé, cursus quis, vehicula ac nisi. Viva Forevis aptent taciti sociosqu ad litora torquent. In elementis mé pra quem é amistosis quis leo.
        </Terms>
        <Button onClick={onAccept}>Eu aceito</Button>
      </TermsWrapper>
    </Modal>
  </ModalWrapper>
) : null;

UseTerms.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default UseTerms;
