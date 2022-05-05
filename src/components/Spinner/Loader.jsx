import React from 'react';
import { SpinnerDotted } from 'spinners-react';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBox className="sweet-loading">
      <SpinnerDotted size={150} color={'#ef0d0d'} />
    </LoaderBox>
  );
};
export default Loader;
