import React from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('#modal-root');

export class Modal extends Component {
  componentDidMount() {}
  // Метот очистки за собой
  componentWillMount() {}
  // Закрытие по ESC
  handleKeydown = e => {};
  // Закрытие по бэкдропу
  hendleBackdropClick = e => {
    console.log('Кликнули в бэкдроп', e.currentTarget);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div class="overlay">
        <div class="modal">
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
