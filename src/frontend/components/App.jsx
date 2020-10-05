import React from 'react';
import { SearchContextProvider } from '../context/Search';
import Layout from './Layout';

import '../styles/components/App.styl';

const App = () => (
  <SearchContextProvider>
    <Layout>
      <h1>
        <span aria-label="Movie clacker" role="img">
          🎬
        </span>
        Movie Curiosity!
      </h1>
    </Layout>
  </SearchContextProvider>
);

export default App;
