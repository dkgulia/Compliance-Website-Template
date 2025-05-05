import theme from '../../../../theme';

const featuresSectionStyle = {
	box: {
		paddingBottom: { sm: '3rem', xs: '2rem' },
		backgroundColor: theme.palette.background.default,
		px: { xs: 2, sm: 4 },
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
		marginBottom: '3rem',
	},
	title: {
		fontWeight: '600',
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
	},
	subtitle: {
		fontSize: '1.1rem',
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
	},
	card: {
		backgroundColor: "#17171799",
		borderRadius: '0.75rem',
		boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
		height: '100%',
		transition: 'transform 0.2s ease, box-shadow 0.2s ease',
		border: `1px solid rgba(255, 255, 255, 0.1)`,
		'&:hover': {
			transform: 'translateY(-3px)',
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		},
	},
	cardContent: {
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'flex-start',
		height: '100%',
		'&:last-child': {
			paddingBottom: '1.5rem',
		},
	},
	iconContainer: {
		width: '48px',
		height: '48px',
		borderRadius: '4px',
		backgroundColor: '#115e59',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '1rem',
	},
	titleText: {
		fontWeight: 'bold',
		fontSize: '1.125rem',
		color: theme.palette.text.primary,
		textAlign: 'left' as const,
		marginBottom: '0.75rem',
	},
	descText: {
		fontSize: '0.95rem',
		color: '#6B7280', // gray-500
		textAlign: 'left' as const,
		lineHeight: 1.6,
	},
	icon: {
		color: 'white',
		fontSize: '24px',
	},
};

export default featuresSectionStyle;