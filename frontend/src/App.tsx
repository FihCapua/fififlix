import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/global.ts";
import defaultTheme from "./assets/styles/themes/default.ts";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Fififlix</h1>
    </ThemeProvider>
  );
}

export default App;
