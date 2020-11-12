import React from 'react';

import {
  ColorModeProvider,
  ThemeProvider as ChakraThemeProvider,
} from '@chakra-ui/core';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import theme from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider>
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default ThemeContainer;
