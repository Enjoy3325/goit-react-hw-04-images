import { Modal } from '../Modal/Modal';
import { ItemGalleryLi, ImageGalleryImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ImageGalleryItem = props => {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const toggleModal = () => {
    setIsModalHidden(!isModalHidden);
  };

  // Закрытие по ESC
  const handleKeydown = e => {
    if (e.key === 'Escape' || e.key === 'Enter') {
      toggleModal();
    }
  };

  // Закрытие по бэкдропу
  const hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <>
      <ItemGalleryLi>
        <ImageGalleryImg
          key={props.idx}
          src={props.webformatURL}
          alt={props.ImageGalleryImgtags}
          onClick={toggleModal}
        />
      </ItemGalleryLi>
      {isModalHidden && (
        <Modal
          isModalHidden={toggleModal}
          hendleBackdropClick={hendleBackdropClick}
          largeImageURL={props.largeImageURL}
          tags={props.tags}
          handleKeyDown={handleKeydown}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
};
// export class ImageGalleryItem extends Component {
//   state = {
//     isModalHidden: false,
//   };
// toggleModal = () => {
//   this.setState(prevState => ({
//     isModalHidden: !prevState.isModalHidden,
//   }));
// };

// // Закрытие по ESC
// handleKeydown = e => {
//   console.log('e.key :>> ', e.key);
//   if (e.key === 'Escape') {
//     this.setState({ isModalHidden: false });
//   }
// };
// // Закрытие по бэкдропу
// hendleBackdropClick = e => {
//   console.log('Кликнули в бэкдроп', e.currentTarget);
//   if (e.currentTarget === e.target) {
//     this.toggleModal();
//   }
// };
//   render() {
//     const { webformatURL, largeImageURL, tags } = this.props;
//     return (
// <>
//   <ItemGalleryLi>
//     <ImageGalleryImg
//       src={webformatURL}
//       alt={tags}
//       onClick={this.toggleModal}
//     />
//   </ItemGalleryLi>
//   {this.state.isModalHidden && (
//     <Modal
//       isModalHidden={this.toggleModal}
//       hendleBackdropClick={this.hendleBackdropClick}
//       largeImageURL={largeImageURL}
//       tags={tags}
//       handleKeyDown={this.handleKeydown}
//     />
//   )}
// </>
//     );
//   }
// }
// ImageGalleryItem.propTypes = {
//   tags: PropTypes.string,
//   webformatURL: PropTypes.string,
//   largeImageURL: PropTypes.string,
// };
