import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { ListGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { Loader } from 'components/Loader/Loader';

export const ImageGallery = ({ images, onClick, spinner, totalHits }) => {
  return (
    <>
      <ListGalleryUl>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              alt={tags}
            ></ImageGalleryItem>
          );
        })}
      </ListGalleryUl>
      {spinner && <Loader />}
      {images.length < totalHits ? <Button onClick={onClick} /> : null}
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  onClick: PropTypes.func,
  spinner: PropTypes.bool,
  totalHits: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.number,
};
