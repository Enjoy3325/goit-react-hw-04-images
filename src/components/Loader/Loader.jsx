// import PropTypes from 'prop-types';
import { DivLoader, LoaderBody } from './Loader.styled';
import React from 'react';
export const Loader = () => {
  return (
    <DivLoader className="loader loader-6">
      <LoaderBody className="loader-inner"></LoaderBody>
    </DivLoader>
  );
};
