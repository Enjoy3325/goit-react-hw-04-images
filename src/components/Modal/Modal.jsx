import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyle } from './Modal.styled';
const modalRoot = document.getElementById('root');
export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.handleKeyDown);
  }
  // Метот очистки за собой
  componentWillMount() {
    window.removeEventListener('keydown', this.props.handleKeyDown);
  }

  render() {
    const { hendleBackdropClick, largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={hendleBackdropClick}>
        <ModalStyle>
          <img src={largeImageURL} alt={tags} width="1100" />
        </ModalStyle>
      </Overlay>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  handleKeyDown: PropTypes.func.isRequired,
  hendleBackdropClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
