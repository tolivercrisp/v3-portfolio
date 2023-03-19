// React
import * as React from 'react';

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
          <Button color="inherit" sx={{ textTransform: 'none' }}>About</Button>
          <Button color="inherit" sx={{ textTransform: 'none' }}>Projects</Button>
          <Button color="inherit" sx={{ textTransform: 'none' }}>Resume</Button>
          <Button color="inherit" sx={{ textTransform: 'none' }}>Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
</div>    
  );
}