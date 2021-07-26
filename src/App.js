import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

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