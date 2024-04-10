// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../assets/styles/global.ts";
import defaultTheme from "../assets/styles/themes/default.ts";

import { Container } from "./styles.ts";
import { Header } from "./components/Header/index.tsx";

import Routes from "../Routes.tsx";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>

          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
