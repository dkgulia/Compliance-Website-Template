import theme from '../../../../theme'; // Update this path to match your project structure

const realWorldSectionStyle = {
	box: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		marginTop: '0rem',
		marginX: { xs: '1rem', sm: '0rem' },
		background: theme.palette.background.default,
	},
	container: {
		maxWidth: '75rem',
		marginX: 'auto',
	},
	heading: {
		fontWeight: '700',
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
		textAlign: 'center',
		marginBottom: '0.5rem',
	},
	subheading: {
		fontWeight: '500',
		fontSize: { xs: '1.1rem', sm: '1.2rem' },
		color: theme.palette.primary.main,
		textAlign: 'center',
		marginBottom: '1.5rem',
	},
	gridContainer: {
		marginTop: '0.5rem',
	},
	card: {
		borderRadius: '2rem',
		border: `1px solid ${theme.palette.divider}`,
		padding: '1.5rem',
		backgroundColor: theme.palette.background.paper,
		marginBottom: '0.5rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5rem',
		alignItems: 'center',
		textAlign: 'center',
		boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.15)',
		height: '100%',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '1rem !important',
	},
	cardTitle: {
		fontWeight: '600',
		fontSize: '1.1rem',
		color: theme.palette.primary.light,
		marginBottom: '0.25rem',
	},
	cardDesc: {
		fontSize: '0.9rem',
		color: theme.palette.text.secondary,
		lineHeight: 1.5,
	},
	iconContainer: {
		width: '3rem',
		height: '3rem',
		marginBottom: '0.75rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '0.5rem',
		backgroundColor: theme.palette.secondary.main,
	},
};

export default realWorldSectionStyle;