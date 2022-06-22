import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme/theme";
import { Layout } from './pages/Layout';
import store from "./store/store";
import { Provider } from "react-redux";
import { OfflineMessage } from "./components/OfflineMessage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <OfflineMessage />
          <Layout />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
