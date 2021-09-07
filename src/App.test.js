import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./store";
import Routes from "./routes"
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

test("renders home page without crashing", () => {
  const div = document.createElement("div");
  act(() => {
    ReactDOM.render(
        <Provider store={store}>
        <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
        </Provider>,
      div
    );
  });
  const unsplash = div.querySelector("p.MuiTypography-root.makeStyles-UnsplashTitle-22.MuiTypography-body1").innerHTML;
  expect(unsplash).toBe("Unsplash");
});
