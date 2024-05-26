import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

export default function MenuComponent() {
  const ENUM_PAGES = {
    HOME: "/",
    GUIDE: "/guide",
    DASHBOARD: "/dashboard",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={ENUM_PAGES.HOME}>
            <Button color="inherit" className="white_text">
              Home
            </Button>
          </Link>

          <div className="spacer"></div>

          <Link to={ENUM_PAGES.GUIDE}>
            <Button color="inherit" className="white_text">
              Guide
            </Button>
          </Link>

          <Link to={ENUM_PAGES.DASHBOARD}>
            <Button color="inherit" className="white_text">
              Dashboard
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
