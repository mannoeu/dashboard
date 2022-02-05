import Routes from "routes";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Modal from "components/Modal";

import { GlobalStyle } from "styles/reset";

import store from "store";
import theme from "styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
        <Modal />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
