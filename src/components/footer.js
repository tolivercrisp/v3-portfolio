// React
import React from "react";
import { Link } from "react-router-dom";
// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          boxShadow: "none",
          display: "flex",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Github */}
          <Button
            component={Link}
            to={"https://github.com/tolivercrisp?tab=repositories"}
            color="primary"
          >
            <GitHubIcon fontSize="medium" />
          </Button>

          {/* LinkedIn */}
          <Button
            component={Link}
            to={"https://www.linkedin.com/in/toliver-crisp-759167134/"}
            color="primary"
          >
            <LinkedInIcon fontSize="medium" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
