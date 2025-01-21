import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AppStoreProvider from './redux/provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStoreProvider>
      <CssBaseline />
      <ThemeProvider theme={{}}>
        <App />
      </ThemeProvider>
    </AppStoreProvider>
  </React.StrictMode>,
)
