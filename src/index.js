// React
import React from 'react';
// Router
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// other
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans'
  },
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
});


ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
