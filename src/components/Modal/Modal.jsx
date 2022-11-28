// import PropTypes from 'prop-types';
import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyle } from './Modal.styled';
const modalRoot = document.getElementById('root');
console.log('modalRoot :>> ', modalRoot);
export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.handleKeyDown);
  }
  // Метот очистки за собой
  componentWillMount() {
    window.removeEventListener('keydown', this.props.handleKeyDown);
  }

  render() {
    console.log('this.props.handleKeyDown :>> ', this.props.handleKeyDown);
    const { hendleBackdropClick, largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={hendleBackdropClick}>
        <ModalStyle>
          <img src={largeImageURL} alt={tags} />
        </ModalStyle>
      </Overlay>,
      modalRoot
    );
  }
}
