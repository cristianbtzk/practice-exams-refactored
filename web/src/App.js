import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import Routes from './Routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
