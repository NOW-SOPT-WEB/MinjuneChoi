
import PropTypes from 'prop-types';
import { Modal as StyledModal, ModalContent } from '../styles/styledComponents';

function Modal({ onReset }) {
  return (
    <StyledModal>
      <ModalContent>
        <h2>추카추카 게임 Clear!</h2>
        <button onClick={onReset}>다시 시작</button>
      </ModalContent>
    </StyledModal>
  );
}

Modal.propTypes = {
  onReset: PropTypes.func.isRequired
};

export default Modal;

