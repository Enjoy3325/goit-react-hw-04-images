// import PropTypes from 'prop-types';
import { ListGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = ({ images }) => {
  return (
    <ListGalleryUl>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            className="gallery-item"
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          ></ImageGalleryItem>
        );
      })}
    </ListGalleryUl>
  );
};
