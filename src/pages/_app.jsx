import "@/styles/tailwind.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "focus-visible";

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#2B2D31",
    600: "#2e2e83",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819",
  },
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};


const theme = extendTheme({ colors, config });
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
  ;
}
