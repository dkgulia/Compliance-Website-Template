import theme from '../../../../theme';

const featuresSectionStyle = {
	box: {
		paddingTop: { xs: '0.5rem', sm: '1rem' },
		paddingBottom: { xs: '1rem', sm: '3rem' },
		backgroundColor: theme.palette.background.default,
		px: { xs: 1, sm: 4 },
	},
	container: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		justifyContent: 'space-between',
		boxSizing: 'border-box',
		maxWidth: '75rem',
		marginX: 'auto',
	},
	headingBox: {
		display: 'flex',
		flexDirection: 'column' as const,
		textAlign: 'center' as const,
		alignItems: 'center',
		width: '100%',
		marginBottom: { xs: '1.5rem', sm: '3rem' },
	},
	title: {
		fontWeight: '600',
		fontSize: { xs: '1.4rem', sm: '2rem' },
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
	},
	subtitle: {
		fontSize: { xs: '0.85rem', sm: '1.1rem' },
		color: theme.palette.text.secondary,
	},
	gridBox: {
		display: 'flex',
		flexDirection: 'column' as const,
		boxSizing: 'border-box',
		width: '100%',
	},
	gridContainer: {
		boxSizing: 'border-box',
		width: '100%',
		gap: { xs: 2, sm: 3 },
	},
	card: {
		backgroundColor: theme.palette.background.darkTransparent || theme.palette.background.paper,
		borderRadius: { xs: '0.75rem', sm: '0.75rem' },
		boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
		height: '100%',
		minHeight: { xs: '140px', sm: 'auto' },
		transition: 'transform 0.2s ease, box-shadow 0.2s ease',
		border: `1px solid ${theme.palette.divider}`,
		'&:hover': {
			transform: 'translateY(-3px)',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		},
	},
	cardContent: {
		padding: { xs: '0.75rem', sm: '1rem' },
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'flex-start',
		height: '100%',
		'&:last-child': {
			paddingBottom: { xs: '0.75rem', sm: '1.5rem' },
		},
	},
	iconContainer: {
		width: { xs: '32px', sm: '48px' },
		height: { xs: '32px', sm: '48px' },
		borderRadius: '4px',
		backgroundColor: theme.palette.secondary.dark,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: { xs: '0.5rem', sm: '1rem' },
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: { xs: '14px', sm: '1.125rem' },
		color: theme.palette.text.primary,
		textAlign: 'left' as const,
		marginBottom: { xs: '0.5rem', sm: '0.75rem' },
	},
	descText: {
		fontSize: { xs: '12px', sm: '0.95rem' },
		color: theme.palette.text.secondary,
		textAlign: 'left' as const,
		lineHeight: 1.6,
	},
	icon: {
		color: theme.palette.common.white,
		fontSize: { xs: '16px', sm: '24px' },
	},
};

export default featuresSectionStyle;
