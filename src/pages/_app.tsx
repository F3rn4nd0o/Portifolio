import { useState } from "react";
import { AppProps } from "next/app";

import { Container } from "../styles/pages/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import '../libs/i18n';

import { light } from "../styles/theme/light";
import { dark } from "../styles/theme/dark";
import { globalStyles } from "../styles/global";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <Container className={theme}>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} theme={theme} />
      <Footer theme={theme}/>
    </Container>
  );
}
