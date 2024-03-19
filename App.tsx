import React from 'react';
import GlobalWrapper from './GlobalWrapper';
import {Provider} from 'react-redux';
import store from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalWrapper />
    </Provider>
  );
};

export default App;
