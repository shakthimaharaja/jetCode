import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    ochre: {
        light: blue[300],
        main: blue[500],
        dark: blue[700],
        darker: blue[900],
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default theme;
