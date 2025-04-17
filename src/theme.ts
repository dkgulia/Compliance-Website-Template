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
}

const theme = responsiveFontSizes(
	createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#000000',
				light: '#424242',
				dark: '#000000',
			},
			secondary: {
				main: '#424242',
				light: '#757575',
				dark: '#212121',
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
				main: '#212121',
			},
			background: {
				default: '#ffffff',
				paper: '#f5f5f5',
			},
			text: {
				primary: '#000000',
				secondary: '#424242',
			},
			divider: '#e0e0e0',
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
			card: '0 4px 12px rgba(0, 0, 0, 0.1)',
			button: '0 2px 8px rgba(0, 0, 0, 0.15)',
			navbar: '0 1px 3px rgba(0, 0, 0, 0.1)',
		},
		customGradients: {
			primary: 'linear-gradient(to right, #000000, #424242)',
			secondary: 'linear-gradient(to right, #212121, #424242)',
			main: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)',
			button: 'linear-gradient(to right, #000000, #212121)',
			buttonHover: 'linear-gradient(to right, #212121, #000000)',
			heroBackground: 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)',
			cardGradient: 'linear-gradient(145deg, rgba(250, 250, 250, 0.8), rgba(245, 245, 245, 0.8))',
			formBackground: 'linear-gradient(145deg, rgba(250, 250, 250, 0.7), rgba(240, 240, 240, 0.7))',
			lightToWhite: 'linear-gradient(to bottom, #f5f5f5, #ffffff)',
			whiteToLight: 'linear-gradient(to top, #f5f5f5, #ffffff)',
		},
		components: {
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundColor: '#f5f5f5',
						border: '1px solid rgba(224, 224, 224, 0.8)',
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
						color: '#ffffff',
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