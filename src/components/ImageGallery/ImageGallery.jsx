// import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { ListGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { Loader } from 'components/Loader/Loader';

export const ImageGallery = ({ images, onClick, spinner }) => {
  console.log('images :>> ', images);

  return (
    <>
      {spinner && <Loader />}
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
      {images.length ? <Button onClick={onClick} /> : null}
    </>
  );
};
