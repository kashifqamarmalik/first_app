import React, { useContext } from 'react';
import List from './components/List';
import {MediaContext, MediaProvider} from './contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider>
      <List />
    </MediaProvider>
  );
};

export default App;