import theme from '../../../../theme';

const comparisonSectionStyle = {
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
	title: {
		fontWeight: '600',
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
		textAlign: 'center' as const,
		marginBottom: '0.5rem',
	},
	subtitle: {
		fontWeight: '500',
		fontSize: { xs: '1.1rem', sm: '1.1rem' },
		color: '#6B7280',
		textAlign: 'center' as const,
		marginBottom: '1.5rem',
	},
	gridContainer: {
		marginTop: '0.5rem',
	},
	card: {
		borderRadius: '1rem',
		border: `1px solid ${theme.palette.divider}`,
		padding: '1.5rem',
		backgroundColor: '#17171799',
		marginBottom: '0.5rem',
		boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.15)',
		height: '100%',
	},
	cardTitle: {
		fontWeight: '600',
		fontSize: '1.1rem',
		color: theme.palette.primary.light,
		marginBottom: '0.5rem',
	},
	cardDesc: {
		fontSize: '0.9rem',
		color: theme.palette.text.secondary,
		lineHeight: 1.5,
	},
	iconContainer: {
		width: '3rem',
		height: '3rem',
		backgroundColor: theme.palette.secondary.main,
		borderRadius: '0.5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '0.75rem',
	},
	icon: {
		fontSize: '1.8rem',
		color: theme.palette.text.primary,
	},
};

export default comparisonSectionStyle;