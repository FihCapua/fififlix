import { ThemeProvider } from "styled-components";

import GlobalStyles from "../assets/styles/global.ts";
import defaultTheme from "../assets/styles/themes/default.ts";

import { Container } from "./styles.ts";
import { Header } from "./components/Header/index.tsx";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>

        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
