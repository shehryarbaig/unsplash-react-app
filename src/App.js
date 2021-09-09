import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

const App = props => {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
