import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows?: {
      card: string;
      button: string;
      navbar: string;
    };
    customGradients?: {
      primary: string;
      secondary: string;
      main: string;
      button: string;
      buttonHover: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      card: string;
      button: string;
      navbar: string;
    };
    customGradients?: {
      primary: string;
      secondary: string;
      main: string;
      button: string;
      buttonHover: string;
    };
  }
}

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#14b8a6',
        light: '#5eead4',
        dark: '#0f766e',
      },
      secondary: {
        main: '#0d9488',
        light: '#2dd4bf',
        dark: '#0f766e',
      },
      error: {
        main: '#f43f5e',
      },
      warning: {
        main: '#f59e0b',
      },
      info: {
        main: '#3b82f6',
      },
      success: {
        main: '#10b981',
      },
      background: {
        default: '#111111',
        paper: '#18181b',
      },
      text: {
        primary: '#f9fafb',
        secondary: '#9ca3af',
      },
      divider: '#262626',
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.57,
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.57,
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 600,
        lineHeight: 1.75,
        textTransform: 'none',
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.66,
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.5px',
        lineHeight: 2.66,
        textTransform: 'uppercase',
      },
    },
    shape: {
      borderRadius: 8,
    },
    customShadows: {
      card: '0 10px 30px rgba(0, 0, 0, 0.3)',
      button: '0 4px 10px rgba(0, 0, 0, 0.25)',
      navbar: '0 1px 2px rgba(0, 0, 0, 0.3)',
    },
    customGradients: {
      primary: 'linear-gradient(to right, #14b8a6, #5eead4)',
      secondary: 'linear-gradient(to right, #0d9488, #2dd4bf)',
      main: 'linear-gradient(to right, #111111, #18181b)',
      button: 'linear-gradient(to right, #14b8a6, #2dd4bf)',
      buttonHover: 'linear-gradient(to right, #0f766e, #14b8a6)',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            padding: '6px 16px',
            backgroundColor: '#0d9488',
            '&:hover': {
              backgroundColor: '#0f766e',
            },
            border: '1px solid #14b8a6',
          },
          sizeSmall: {
            padding: '4px 10px',
            fontSize: '0.8125rem',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            border: '1px solid rgba(38, 38, 38, 0.6)',
            borderRadius: 8,
            padding: 16,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 4,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
  })
);

export const monoTextStyle = {
  fontFamily: '"Roboto Mono", monospace',
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: 1.66,
  letterSpacing: '0.05em',
};

export default theme;
