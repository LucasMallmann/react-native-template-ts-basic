import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';

import Home from '~/Home';
import light from '~/styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <StatusBar
        backgroundColor={light.colors.primary}
        barStyle="light-content"
      />
      <Home />
    </ThemeProvider>
  );
};

export default App;
