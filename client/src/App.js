import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout"
import Dashboard from "scenes/dashboard";

function App() {

  // Get the state from /state/index.js
  const mode = useSelector((state) => state.global.mode);
  // Create the theme based on the mode and use it via ThemeProvider
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            {/* element is to make that everything inside the<Route> has the <Layout> component */}
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />

            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
