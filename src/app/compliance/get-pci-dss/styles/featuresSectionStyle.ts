import theme from '../../../../theme';

const featuresSectionStyle = {
	box: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		marginTop: '0rem',
		backgroundColor: theme.palette.background.default,
	},
	container: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		marginX: 'auto',
		maxWidth: '75rem',
		px: { xs: '1rem', sm: '2rem' },
	},
	containerBox: {
		textAlign: 'center' as const,
		width: '100%',
		maxWidth: '60rem',
		marginX: 'auto',
		marginBottom: '2rem',
	},
	heading: {
		fontWeight: 600,
		fontSize: { xs: '1.6rem', sm: '2rem' },
		color: theme.palette.text.primary,
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
	},
	card: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		backgroundColor: theme.palette.background.paper,
		borderRadius: '1rem',
		boxShadow: theme.customShadows?.card,
		height: { sm: '16rem', xs: '14rem' },
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		justifyContent: 'space-between',
		border: `1px solid ${theme.palette.divider}`,
		padding: '1.5rem',
		'&:hover': {
			transform: 'scale(1.03)',
			boxShadow: '0rem 0.5rem 1.5625rem rgba(0, 0, 0, 0.6)',
		},
	},
	iconContainer: {
		width: '4rem',
		height: '4rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: '1rem',
	},
	typography: {
		container: {
			display: 'flex',
			flexDirection: 'column' as const,
			alignItems: 'center',
			textAlign: 'center' as const,
		},
		title: {
			fontWeight: 'bold' as const,
			color: theme.palette.primary.light,
			textAlign: 'center' as const,
			fontSize: '1.1rem',
			marginBottom: '0.5rem',
		},
		body: {
			color: theme.palette.text.secondary,
			textAlign: 'center' as const,
			lineHeight: 1.6,
			fontSize: '0.9rem',
		},
	},
};

export default featuresSectionStyle;