import "@/styles/globals.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  const theme = extendTheme({
    fonts: {
      heading: "Space Grotesk",
      body: "Open Sans",
    },
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
