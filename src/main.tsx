import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import History from "./pages/History.tsx";
import HowToUse from "./pages/HowToUse.tsx";
import { TitleTextProvider } from "./contexts/TitleTextContext.tsx";
import Design from "./pages/Design.tsx";

let theme = createTheme({
  palette: {
    mode: "dark",
  },
});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: "#fff959",
    },
    secondary: {
      main: "#00b8b8",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <TitleTextProvider>
        <BrowserRouter>
          <CssBaseline />
          <TopBar />

          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/design" element={<Design />} />
          </Routes>
        </BrowserRouter>
      </TitleTextProvider>
    </ThemeProvider>
  </StrictMode>
);
