import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from '~/styles/themes/light';

import Home from '~/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
