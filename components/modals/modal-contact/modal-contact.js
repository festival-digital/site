import React from 'react';
import GoBackButton from 'components/atoms/go-back-button/go-back-button';
import FormContact from 'components/organisms/form-contact/form-contact';
import {
  Wrapper,
  ContentButton,
  Content,
  ContainerForm,
} from './modal-contact.style';

const ModalFormContact = ({ open, setOpenModal }) => {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) setOpenModal(null);
  };

  return (
    <Wrapper open={open}>
      <Content>
        <ContentButton>
          <GoBackButton onClick={handleClick} />
        </ContentButton>
        <ContainerForm>
          <FormContact />
        </ContainerForm>
      </Content>
    </Wrapper>
  );
};

export default ModalFormContact;
