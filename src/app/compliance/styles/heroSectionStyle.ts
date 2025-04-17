import theme from '../../../theme';

const heroSectionStyles = {
	container: {
		paddingTop: '1rem',
		paddingBottom: '1rem',
		background: theme.palette.background.default,
		padding: { xs: '5rem 1rem', sm: '1rem 1rem' },
		position: 'relative',
		overflow: 'hidden',
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: `radial-gradient(circle at 70% 30%, ${theme.palette.primary.light}15, transparent 45%)`,
			pointerEvents: 'none',
		},
	},
	containerBox: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		maxWidth: '1200px',
		margin: '0 auto',
		gap: '2rem',
		position: 'relative',
		zIndex: 2,
	},
	contentBox: {
		flex: 1,
		textAlign: { xs: 'center', md: 'left' },
	},
	formBox: {
		flex: 1,
		borderRadius: '1.5rem',
		maxWidth: '600px',
		padding: '2rem',
		marginTop: { xs: '0.5rem', sm: '0.5rem' },
		transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
	},
	formContainer: {
		padding: '2rem',
		borderRadius: '1.5rem',
		background: theme.palette.background.paper,
		boxShadow: theme.customShadows?.card || '0 4px 10px rgba(0, 0, 0, 0.1)',
		width: '100%',
		maxWidth: '600px',
		marginTop: { xs: '2rem', sm: '1.5rem' },
		border: `1px solid ${theme.palette.divider}`,
	},
	formHeading: {
		fontSize: '1.8rem',
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
	},
	compliancesLabel: {
		fontWeight: 'bold',
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
	},
	tagline: {
		color: 'white',
		display: 'inline-block',
		padding: '0.5rem 1.2rem',
		borderRadius: '2rem',
		fontSize: '0.9rem',
		marginBottom: '1rem',
		fontWeight: 'bold',
		background: theme.customGradients?.button || 'linear-gradient(to right, #000000, #212121)',
		transition: 'transform 0.2s ease, box-shadow 0.2s ease',
		'&:hover': {
			transform: 'translateY(-3px)',
			background: theme.customGradients?.buttonHover || 'linear-gradient(to right, #212121, #000000)',
			boxShadow: theme.customShadows?.button || '0px 4px 10px rgba(0, 0, 0, 0.15)',
		},
		'&:active': {
			transform: 'translateY(-1px)',
		},
	},
	title: {
		fontSize: { xs: '2rem', md: '2.8rem' },
		fontWeight: 'bold',
		marginBottom: '1rem',
		color: theme.palette.text.primary,
		lineHeight: 1.2,
	},
	highlight: {
		background: theme.customGradients?.primary || 'linear-gradient(to right, #000000, #424242)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		display: 'inline',
	},
	description: {
		fontSize: { xs: '1rem', md: '1.1rem' },
		color: theme.palette.text.secondary,
		lineHeight: '1.7',
		marginBottom: '1.5rem',
		maxWidth: '550px',
	},
	button: {
		marginTop: '1.5rem',
		color: 'white',
		fontWeight: 700,
		fontSize: '1rem',
		border: 'none',
		padding: '0.9rem 2rem',
		borderRadius: '2.5rem',
		background: theme.customGradients?.button || 'linear-gradient(to right, #000000, #212121)',
		transition: 'transform 0.2s ease, box-shadow 0.2s ease',
		'&:hover': {
			transform: 'translateY(-3px)',
			background: theme.customGradients?.buttonHover || 'linear-gradient(to right, #212121, #000000)',
			boxShadow: theme.customShadows?.button || '0px 4px 10px rgba(0, 0, 0, 0.15)',
		},
		'&:active': {
			transform: 'translateY(-1px)',
		},
	},
	highlightWrapper: {
		display: 'inline-flex',
		alignItems: 'center',
		position: 'relative',
	},
	logoWrapper: {
		display: 'inline-flex',
		alignItems: 'center',
		marginBottom: '0.5rem',
		position: 'relative',
		top: '3px',
		'& img': {
			filter: 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))',
		},
	},
	checkboxLabel: {
		color: '#000000', 
		'& .MuiFormControlLabel-label': {
			color: '#000000',
			fontSize: '0.9rem',
		}
	}
};

export default heroSectionStyles;