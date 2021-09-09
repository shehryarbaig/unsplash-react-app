import { createTheme } from "@material-ui/core"

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: { 
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"San Francisco"',
          '"Helvetica Neue"',
          'Helvetica',
          'Ubuntu',
          'Roboto',
          'Noto',
          '"Segoe UI"',
          'Arial',
          'sans-serif',
        ].join(','),
      },
      palette: {
          primary:{
              main: "#111",
          }
      }
  });

  export default theme;
  