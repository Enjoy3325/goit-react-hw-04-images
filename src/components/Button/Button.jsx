import { ButtonStyle } from './Button.styled';
// import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ onClick }) => {
  return <ButtonStyle onClick={onClick}>Load more</ButtonStyle>;
};
