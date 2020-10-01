import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Modal } from './modal-wrapper.style';

/**
 * This is the default modal wrapper component, contains all default modal style
 * and actions
 * @param {React.Node} children children component to be render
 * @param {boolean} opened flag to control render state on modal, opened or hidden
 * @returns {React.Component}
 */
const ModalWrapper = ({ opened, children }) => (
  <Wrapper opened={opened}>
    <Modal>
      {children}
    </Modal>
  </Wrapper>
);

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  opened: PropTypes.bool.isRequired,
};

export default ModalWrapper;
