import theme from '../../../../theme';

const pitfallsSectionStyle = {
	box: {
		paddingTop: { sm: '2rem', xs: '1.5rem' },
		paddingBottom: { sm: '2.5rem', xs: '2rem' },
		marginX: { xs: '1rem', sm: '2rem' },
		background: theme.palette.background.default,
	},
	container: {
		maxWidth: '75rem',
		marginX: 'auto',
	},
	heading: {
		fontWeight: '600',
		fontSize: { xs: '1.8rem', sm: '2.2rem' },
		color: theme.palette.text.primary,
		textAlign: 'center',
		marginBottom: '0.75rem',
	},
	subheading: {
		fontWeight: '500',
		fontSize: { xs: '1.1rem', sm: '1.2rem' },
		color: '#6B7280',
		textAlign: 'center',
		marginBottom: '2rem',
	},
	gridContainer: {
		marginTop: '1rem',
	},
	card: {
		borderRadius: '1rem',
		border: `1px solid ${theme.palette.divider}`,
		padding: '1.5rem',
		backgroundColor: '#17171799',
		display: 'flex',
		flexDirection: 'column',
		boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
		height: '100%',
	},
	cardContent: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: '1.5rem',
		padding: '0 !important',
	},
	textContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flex: 1,
	},
	cardTitle: {
		fontWeight: '600',
		fontSize: '1.2rem',
		color: theme.palette.primary.light,
		marginBottom: '0.75rem',
		textAlign: 'left',
	},
	cardDesc: {
		fontSize: '0.95rem',
		color: theme.palette.text.secondary,
		lineHeight: 1.6,
		textAlign: 'left',
	},
	iconContainer: {
		width: '3.5rem',
		height: '3.5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '0.5rem',
		backgroundColor: theme.palette.secondary.main,
		flexShrink: 0,
	},
};

export default pitfallsSectionStyle;