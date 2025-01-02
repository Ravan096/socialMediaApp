import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import {ThemeProvider,CssBaseline} from '@mui/material';
import store from "./redux/store.ts";
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <CssBaseline/>
    <ThemeProvider theme={{}}>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
