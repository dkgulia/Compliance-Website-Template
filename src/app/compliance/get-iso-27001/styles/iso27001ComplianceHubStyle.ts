import theme from '../../../../theme';

const iso27001ComplianceHubStyle = {
	box: {
		paddingTop: { xs: '0.5rem', sm: '3rem' },
		paddingBottom: { xs: '0.5rem', sm: '3rem' },
		backgroundColor: theme.palette.background.default,
	},
	container: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		gap: { xs: '1rem', sm: '2rem' },
	},
	containerBox: {
		width: { xs: '100%', sm: '80%', md: '60%' },
		textAlign: 'center' as const,
	},
	heading: {
		fontWeight: { xs: 600, sm: '600' },
		fontSize: { xs: '1.4rem', sm: '2rem' },
		color: 'white',
		marginBottom: { xs: '0.25rem', sm: '0.5rem' },
	},
	subHeading: {
		color: '#6B7280',
		fontSize: { xs: '0.85rem', sm: '1rem' },
		marginBottom: { xs: '0.5rem', sm: '1rem' },
		lineHeight: '1.6',
	},
	stepContainer: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		padding: { xs: '0.75rem', sm: '1.5rem' },
		backgroundColor: theme.palette.background.darkTransparent || '#17171799',
		borderRadius: { xs: '0.75rem', sm: '1rem' },
		border: `1px solid ${theme.palette.divider}`,
		minHeight: { xs: '160px', sm: '13.75rem' },
		transition: { xs: 'none', sm: 'transform 0.3s ease, box-shadow 0.3s ease' },
		gap: { xs: '0.5rem', sm: '1rem' },
		'&:hover': {
			transform: { xs: 'none', sm: 'scale(1.05)' },
			boxShadow: { xs: 'none', sm: '0rem 0.5rem 1.25rem rgba(94, 234, 212, 0.15)' },
			backgroundColor: { xs: theme.palette.background.darkTransparent || '#17171799', sm: '#262626' },
		},
	},
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: theme.palette.secondary.light,
		borderRadius: '0.5rem',
		padding: { xs: '0.5rem', sm: '0.75rem' },
		minWidth: { xs: '2.5rem', sm: '3.5rem' },
		minHeight: { xs: '2.5rem', sm: '3.5rem' },
		alignSelf: 'flex-start',
	},
	icon: {
		fontSize: { xs: '1.5rem', sm: '2rem' },
		color: 'white',
	},
	title: {
		fontWeight: 'bold' as const,
		color: 'white',
		textAlign: 'left' as const,
		width: '100%',
		fontSize: { xs: '14px', sm: '1rem' },
	},
	description: {
		color: '#6B7280',
		lineHeight: '1.5',
		textAlign: 'left' as const,
		width: '100%',
		fontSize: { xs: '12px', sm: '0.9rem' },
	},
};

export default iso27001ComplianceHubStyle;
