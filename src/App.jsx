import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./assets/style/theme.js";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Main />
        {/* <HomeBar /> */}
        {/* <Contents /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
  // <Login />;
}

export default App;
