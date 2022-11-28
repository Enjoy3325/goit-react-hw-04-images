import { Modal } from '../Modal/Modal';
import { ItemGalleryLi, ImageGalleryImg } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalHidden: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({
      isModalHidden: !prevState.isModalHidden,
    }));
  };

  // Закрытие по ESC
  handleKeydown = e => {
    console.log('e.key :>> ', e.key);
    if (e.key === 'Escape') {
      this.setState({ isModalHidden: false });
    }
  };
  // Закрытие по бэкдропу
  hendleBackdropClick = e => {
    console.log('Кликнули в бэкдроп', e.currentTarget);
    if (e.currentTarget === e.target) {
      this.toggleModal();
    }
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <ItemGalleryLi>
          <ImageGalleryImg
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
        </ItemGalleryLi>
        {this.state.isModalHidden && (
          <Modal
            isModalHidden={this.toggleModal}
            hendleBackdropClick={this.hendleBackdropClick}
            largeImageURL={largeImageURL}
            tags={tags}
            handleKeyDown={this.handleKeydown}
          />
        )}
      </>
    );
  }
}
