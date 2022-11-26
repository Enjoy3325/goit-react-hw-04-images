import { ItemGalleryLi, ImageGalleryImg } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types';
import React from 'react';

export const ImageGalleryItem = ({ tags, webformatURL }) => {
  return (
    <ItemGalleryLi>
      <ImageGalleryImg src={webformatURL} alt={tags} />
    </ItemGalleryLi>
  );
};
