import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import Button from 'components/atoms/button/button';
import TextUseTerms from 'components/atoms/text-terms/tex-terms';
import {
  ModalWrapper,
  Modal,
  Header,
  ExitButton,
  TermsWrapper,
} from './use-terms.style';

const UseTerms = ({ open, onGoBack, onAccept }) =>
  open ? (
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
          <TextUseTerms />
        </TermsWrapper>
        <Button onClick={onAccept}>Eu aceito</Button>
      </Modal>
    </ModalWrapper>
  ) : null;

UseTerms.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default UseTerms;
