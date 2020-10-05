import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SearchContextProvider } from '../context/Search';
import Router from '../router';
import Layout from './Layout';

import '../styles/components/App.styl';

const App = () => (
  <SearchContextProvider>
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </SearchContextProvider>
);

export default App;
