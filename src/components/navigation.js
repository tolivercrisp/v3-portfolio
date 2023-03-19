// React
import * as React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Navigation() {
  return (
<div>
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position='sticky'  sx={{
        background: 'transparent',
        boxShadow: 'none',
        }}>
        <Toolbar>

            {/* About */}
          <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{ textTransform: 'none' }}>
            About
          </Button>

          {/* Projects */}
          <Button
          color="inherit"
          component={Link}
          to="/projects"
          sx={{ textTransform: 'none' }}>
            Projects
          </Button>

          {/* Resume */}
          <Button
          color="inherit"
          component={Link}
          to="/resume"
          sx={{ textTransform: 'none' }}>
            Resume
          </Button>

          {/* Contact */}
          <Button
          color="inherit"
          component={Link}
          to="/contact"
          sx={{ textTransform: 'none' }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
</div>    
  );
}