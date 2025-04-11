import theme from '../../../../theme'; 

const featuresSectionStyle = {
	box: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '1.5rem', xs: '1rem' },
		marginTop: '0',
		marginX: { xs: '1rem', sm: '0' },
		background: theme.palette.background.default,
	},
	container: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		marginX: 'auto',
		maxWidth: '75rem',
	},
	heading: {
		fontWeight: 700,
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
		textAlign: 'center' as const,
		marginBottom: '0.5rem',
	},
	subheading: {
		fontWeight: 500,
		fontSize: { xs: '1.1rem', sm: '1.2rem' },
		color: theme.palette.primary.main,
		textAlign: 'center' as const,
		marginBottom: '1.5rem',
	},
	gridContainer: {
		marginTop: '0.5rem',
		width: '100%',
	},
	card: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: '2rem',
		height: '100%',
		display: 'flex',
		boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
		border: `1px solid ${theme.palette.divider}`,
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		padding: '1.25rem',
		textAlign: 'center' as const,
		width: '100%',
	},
	iconContainer: {
		width: '3.5rem',
		height: '3.5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '1rem',
		backgroundColor: theme.palette.primary.dark,
		borderRadius: '0.5rem',
		padding: '0.75rem',
	},
	featureTitle: {
		fontSize: '1.1rem',
		fontWeight: 600,
		color: theme.palette.primary.light,
		textAlign: 'center' as const,
		marginBottom: '0.75rem',
	},
	featureDesc: {
		fontSize: '0.9rem',
		color: theme.palette.text.secondary,
		textAlign: 'center' as const,
		lineHeight: 1.5,
	},
};

export default featuresSectionStyle;