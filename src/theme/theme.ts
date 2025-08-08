// src/theme/theme.ts: Customize Chakra UI colors, fonts, etc
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light"
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif"
  },
  colors: {
    primary: {
      100: "#e3f2fd",
      500: "#1976d2",
      700: "#1565c0",
    },
    accent: {
      500: "#ff9100"
    }
  }
});

export default theme;
