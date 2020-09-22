import React from 'react';

import BasicAnimation from './pages/BasicAnimation';

import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <BasicAnimation />
    </>
  );
};

export default App;
