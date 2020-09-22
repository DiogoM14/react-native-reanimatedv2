import React from 'react';

// import BasicAnimation from './pages/BasicAnimation';
// import Interpolate from './pages/Interpolate';
import ImageAnimation from './pages/ImageAnimation';

import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <ImageAnimation />
    </>
  );
};

export default App;
