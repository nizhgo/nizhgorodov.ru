import type { AppProps } from 'next/app'

import {GlobalStyles} from "@/styles/globalStyles";
import {ThemeProvider} from "styled-components";
import {theme} from "@/styles/themes/main.theme";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
