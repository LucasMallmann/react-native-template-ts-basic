import React from 'react';

import { Container, Greeting, Description } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Greeting>Welcome to this custom Typescript Template</Greeting>
      <Description>
        Eslint, Styled-Components, Styled ThemeProvider, Root Import Resolver
      </Description>
    </Container>
  );
};

export default Home;
