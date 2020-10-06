import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { SearchContextProvider } from '../context/Search';
import { SortContextProvider } from '../context/Sort';

const history = createBrowserHistory();

const ProviderMock = ({ children }) => (
  <Router history={history}>
    <SearchContextProvider>
      <SortContextProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </SortContextProvider>
    </SearchContextProvider>
  </Router>
);

export default ProviderMock;
