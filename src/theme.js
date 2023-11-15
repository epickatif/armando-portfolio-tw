import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    bright1: {
      main: '#EDD990',
      contrastText: '#000000',
    },
    bright2: {
      main: '#000000',
      contrastText: '#EDD990',
    },
    light1: {
      main: '#E6E6D9',
      contrastText: '#000000',
    },
    lightest1: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
    dark1: {
      main: '#322C35',
      contrastText: '#FFFFFF',
    },
    dark2: {
      main: '#322C35',
      contrastText: '#EDD990',
    },
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '4.5rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3.2rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.2rem',
      lineHeight: 1.2,
      letterSpacing: '0.01em',
    },
    body1: {
      fontWeight: 500,
      fontSize: '1.2rem',
      lineHeight: 1.6,
    },
    body2: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          fontWeight: 500,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          backgroundColor: 'black',
          color: '#EDD990',
          '&:hover': {
            backgroundColor: 'black',
          },
        },
        sizeLarge: {
          borderRadius: '4px', // Default border radius for navigation buttons
          backgroundColor: 'transparent', // Default background for navigation buttons
          color: 'inherit', // Inherits color from parent element
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        contained: {
          fontSize: '1rem',
        },
        outlined: {
          fontSize: '1.1rem',
        },
        text: {
          fontSize: '0.9rem',
        },
      },
    },
  },
});

export default theme;
