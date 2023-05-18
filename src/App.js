import { useSelector } from "react-redux";
import { themeSettings } from "theme";

import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./scenes/layout/index";
import Dashboard from "./scenes/dashboard/index";
import { Navigate } from "react-router-dom";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

//useSelector to get the state value
//if want to call function to change state then useDispatch
function App() {
  const mode = useSelector((state) => state.global.mode);

  //memoized value recomputed when mode changes
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>

          <CssBaseline />
          <Routes>
            {/* layout has navbar and sidebar which will exist on every page */}
            <Route element={<Layout />}>
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
