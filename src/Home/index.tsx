import React from 'react';

import { Container, Greeting } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Greeting>Hello World</Greeting>
    </Container>
  );
};

export default Home;
