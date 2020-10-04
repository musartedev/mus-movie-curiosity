import React from 'react';
import Layout from './Layout'

import '../styles/components/App.styl';

const App = () => (
  <Layout>
    <h1>
      <span aria-label="Movie clacker" role="img">
        🎬
      </span>
      Movie Curiosity!
    </h1>
  </Layout>
);

export default App;
