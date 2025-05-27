import theme from '../../../../theme';

const iso22301ImplementationStyle = {
	container: {
		paddingTop: { xs: '0.5rem', sm: '1.5rem' },
		paddingBottom: { xs: '1rem', sm: '2rem' },
		marginTop: '0rem',
		backgroundColor: theme.palette.background.default,
		px: { xs: 2, sm: 4 },
		color: theme.palette.text.primary,
	},
	innerContainer: {
		maxWidth: '1200px',
		margin: '0 auto',
		px: { xs: '1rem', sm: '0' },
	},
	title: {
		fontSize: { xs: '1.4rem', sm: '2rem', md: '2rem' },
		fontWeight: 600,
		textAlign: 'center',
		marginBottom: '0.5rem',
	},
	subtitle: {
		fontSize: { xs: '0.85rem', sm: '1.1rem' },
		color: theme.palette.text.secondary,
		textAlign: 'center',
		marginBottom: { xs: '2rem', sm: '4rem' },
	},
	stepContainer: {
		marginBottom: { xs: '3rem', sm: '5rem' },
		px: { xs: '1rem', sm: '0' },
	},
	textContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		px: { xs: '1rem', sm: '0' },
	},
	stepNumber: {
		color: theme.palette.primary.main,
		fontWeight: 600,
		marginBottom: { xs: '0.5rem', sm: '1rem' },
		fontSize: { xs: '1.2rem', sm: '1.5rem' },
	},
	stepTitle: {
		fontWeight: 600,
		marginBottom: { xs: '0.5rem', sm: '1rem' },
		fontSize: { xs: '1.3rem', sm: '1.75rem' },
	},
	stepDescription: {
		color: theme.palette.text.secondary,
		fontSize: { xs: '0.85rem', sm: '1.1rem' },
		lineHeight: 1.6,
	},
	imageContainer: {
		width: { xs: '80%', sm: '70%' },
		height: { xs: '180px', md: '220px' },
		position: 'relative',
		borderRadius: { xs: '0.75rem', sm: '8px' },
		overflow: 'hidden',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

export default iso22301ImplementationStyle;