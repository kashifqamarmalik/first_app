import React, {useContext} from 'react';
import {MediaContext, MediaProvider} from './contexts/MediaContext';
import Home from './views/Home.js';
import AppContainer from './navigators/Navigator.js';

const App = () => {
  return (
    <MediaProvider>
      <AppContainer />
    </MediaProvider>
  );
};

export default App;
