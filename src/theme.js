import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ 
  config,
  breakpoints,
  components: {
    Container: {
      baseStyle: {
        maxW: { base: "100%", lg: "1200px" },
        px: { base: "4", md: "6", lg: "8" }
      }
    },
    Modal: {
      baseStyle: {
        dialog: {
          maxW: { base: "95%", md: "500px" }
        }
      }
    }
  }
});

export default theme;
