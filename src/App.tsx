import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { theme } from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
