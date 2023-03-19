// React
import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Navigation() {

  return (
<div>
    <Box sx={{ flexGrow: 1, marginBottom: 0, }}>
      <AppBar position='static'
        sx={{
        background: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        }}>
        <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-evenly', }}> 
            {/* About */}
          <Button
        fullWidth={true}
          color="inherit"
          component={Link}
          to="/"
          sx={{
            textTransform: 'none',
           }}>
            About
          </Button>

          {/* Projects */}
          <Button
        fullWidth={true}
          variant='text'
          color="inherit"
          component={Link}
          to="/projects"
          sx={{
            textTransform: 'none',
           }}>
            Projects
          </Button>

          {/* Resume */}
          <Button
        fullWidth={true}
          color="inherit"
          component={Link}
          to="/resume"
          sx={{
            textTransform: 'none',
           }}>
            Resume
          </Button>

          {/* Contact */}
          <Button
        fullWidth={true}
          variant='elevated'
          color="inherit"
          component={Link}
          to="/contact"
          sx={{
            textTransform: 'none',
           }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
</div>    
  );
}