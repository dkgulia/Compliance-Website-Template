import theme from '../../../../theme';

const iso22301ImplementationStyle = {
	container: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		marginTop: '0rem',
		backgroundColor: theme.palette.background.default,
		px: { xs: 2, sm: 4 },
		color: theme.palette.text.primary,
	},
	innerContainer: {
		maxWidth: '1200px',
		margin: '0 auto',
	},
	title: {
		fontSize: { xs: '1.6rem', sm: '2rem',md:'2rem' },
		fontWeight: 600,
		textAlign: 'center',
		marginBottom: '0.5rem',
	},
	subtitle: {
		fontSize: '1.1rem',
		color: theme.palette.text.secondary,
		textAlign: 'center',
		marginBottom: '4rem',
	},
	stepContainer: {
		marginBottom: '5rem',
	},
	textContent: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	stepNumber: {
		color: theme.palette.primary.main,
		fontWeight: 600,
		marginBottom: '1rem',
		fontSize: '1.5rem',
	},
	stepTitle: {
		fontWeight: 600,
		marginBottom: '1rem',
		fontSize: '1.75rem',
	},
	stepDescription: {
		color: theme.palette.text.secondary,
		fontSize: '1.1rem',
		lineHeight: 1.6,
	},
	imageContainer: {
		width: '70%',
		height: { xs: '250px', md: '220px' },
		position: 'relative',
		borderRadius: '8px',
		overflow: 'contain',

	},
};

export default iso22301ImplementationStyle;