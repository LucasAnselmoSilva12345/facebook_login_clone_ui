import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Popins system-ui, sans-serif',
    heading: 'Popins system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },

  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      300: '#0099e6',
      500: '#0066ff',
      600: '#0052cc',
    },
    gray: {
      ...theme.colors.gray,
      300: '#333333',
    },
    green: {
      ...theme.colors.green,
      300: '#47d147',
      500: '#009933',
    },
    blackAlpha: {
      ...theme.colors.blackAlpha,
      700: '#0d0d0d',
    },
  },
};

export default customTheme;
