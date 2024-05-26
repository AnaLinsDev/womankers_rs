import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Link } from "react-router-dom";

export default function MenuComponent() {
  const ENUM_PAGES = {
    HOME: "/",
    GUIDE: "/guide",
    DASHBOARD: "/dashboard",
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="menu">
      <AppBar position="static" className="menu">
        <Toolbar>
          <Link to={ENUM_PAGES.HOME}>
            <p color="inherit" className="white_text new_font">
              InformaClima
            </p>
          </Link>

          <div className="spacer"></div>

          <Link to={ENUM_PAGES.GUIDE}>
            <p color="inherit" className="white_text new_font mx-50">
              Guide
            </p>
          </Link>

          <Link to={ENUM_PAGES.DASHBOARD}>
            <p color="inherit" className="white_text new_font">
              Dashboard
            </p>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
