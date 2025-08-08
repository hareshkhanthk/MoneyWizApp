// src/theme/index.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5faff',
      500: '#3182ce',
      900: '#1a365d',
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
});

export default theme;
