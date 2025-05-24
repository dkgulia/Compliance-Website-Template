import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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
      heroBackground: string;
      cardGradient: string;
      formBackground: string;
      lightToWhite: string;
      whiteToLight: string;
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
      heroBackground: string;
      cardGradient: string;
      formBackground: string;
      lightToWhite: string;
      whiteToLight: string;
    };
  }
  interface TypeBackground {
    darkPaper?: string;
    darkTransparent?: string;
  }
  interface TypeText {
    muted?: string;
  }
  interface Palette {
    ui?: {
      buttonText: string;
      buttonPrimary: string;
      buttonHover: string;
      buttonBorder: string;
      border: string;
    };
  }
  interface PaletteOptions {
    ui?: {
      buttonText: string;
      buttonPrimary: string;
      buttonHover: string;
      buttonBorder: string;
      border: string;
    };
  }
}

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffffff',
        light: '#e0e0e0',
        dark: '#cccccc',
      },
      secondary: {
        main: '#115e59',
        light: '#115e59',
        dark: '#115e59',
      },
      error: {
        main: '#f44336',
      },
      warning: {
        main: '#f59e0b',
      },
      info: {
        main: '#2196f3',
      },
      success: {
        main: '#14b8a6',
      },
      background: {
        default: '#101010',
        paper: '#262626',
        darkPaper: '#171717',
        darkTransparent: '#17171799',
      },
      text: {
        primary: '#ffffff',
        secondary: '#6b7280',
        muted: '#6B7280',
      },
      divider: '#404040',
      // UI specific colors
      ui: {
        buttonText: '#f9fafb',
        buttonPrimary: '#1f2937',
        buttonHover: '#374151',
        buttonBorder: '#4b5563',
        border: '#333333',
      },
    },
    typography: {
      fontFamily: '"Figtree", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2.5rem',
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
      card: '0 4px 12px rgba(0, 0, 0, 0.4)',
      button: '0 2px 8px rgba(0, 0, 0, 0.5)',
      navbar: '0 1px 3px rgba(0, 0, 0, 0.3)',
    },
    customGradients: {
      primary: 'linear-gradient(to right, #ffffff, #e0e0e0)',
      secondary: 'linear-gradient(to right, #a3a3a3, #737373)',
      main: 'linear-gradient(180deg, #171717 0%, #1c1c1c 100%)',
      button: 'linear-gradient(to right, #ffffff, #e0e0e0)',
      buttonHover: 'linear-gradient(to right, #e0e0e0, #ffffff)',
      heroBackground: 'linear-gradient(180deg, #171717 0%, #1f1f1f 100%)',
      cardGradient:
        'linear-gradient(145deg, rgba(38, 38, 38, 0.8), rgba(30, 30, 30, 0.8))',
      formBackground:
        'linear-gradient(145deg, rgba(38, 38, 38, 0.7), rgba(30, 30, 30, 0.7))',
      lightToWhite: 'linear-gradient(to bottom, #333333, #262626)',
      whiteToLight: 'linear-gradient(to top, #333333, #262626)',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#262626',
            border: '1px solid rgba(64, 64, 64, 0.8)',
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
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#171717',
          },
        },
      },
    },
  })
);

export const monoTextStyle = {
  fontFamily: '"Atkinson Hyperlegible Mono", monospace',
  fontSize: '0.75rem',
  fontWeight: 400,
  lineHeight: 1.66,
  letterSpacing: '0.05em',
};

export default theme;
