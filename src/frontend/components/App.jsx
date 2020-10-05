import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SearchContextProvider } from '../context/Search';
import { SortContextProvider } from '../context/Sort';
import Router from '../router';
import Layout from './Layout';

import '../styles/components/App.styl';

const App = () => (
  <SearchContextProvider>
    <SortContextProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </SortContextProvider>
  </SearchContextProvider>
);

export default App;
