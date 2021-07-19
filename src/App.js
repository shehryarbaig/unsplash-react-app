import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Routes from './routes';

const App = props => {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
};



export default App;