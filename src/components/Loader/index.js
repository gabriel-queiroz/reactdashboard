import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from './styles';

const Loader = () => (
  <Container>
    <ReactLoading type="balls" />
  </Container>
);

export default Loader;
