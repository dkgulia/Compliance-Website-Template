
import theme from '../../../../theme';

const controlSectionStyle = {
	box: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		backgroundColor: theme.palette.background.default,
	},
	container: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		marginX: 'auto',
		maxWidth: '75rem',
		px: { xs: '0.5rem', sm: '2rem' },
	},
	containerBox: {
		textAlign: 'center' as const,
		width: '100%',
		maxWidth: '60rem',
		marginX: 'auto',
		marginBottom: { xs: '0.5rem', sm: '1rem' },
	},
	heading: {
		fontWeight: { xs: 600, sm: '600' },
		fontSize: { xs: '1.4rem', sm: '2rem' },
		color: 'white',
		paddingBottom: { sm: '1rem', xs: '0.25rem' },
	},
	subheading: {
		color: '#6B7280',
		fontSize: { xs: '0.85rem', sm: '1rem' },
		marginBottom: { xs: '1rem', sm: '2rem' },
		lineHeight: '1.6',
		maxWidth: '40rem',
		marginX: 'auto',
	},
	card: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: { xs: 'flex-start', sm: 'center' },
		backgroundColor: theme.palette.background.darkTransparent || '#17171799',
		borderRadius: { xs: '0.75rem', sm: '1rem' },
		border: `1px solid ${theme.palette.divider}`,
		height: { xs: '160px', sm: '16rem', md: '15rem' },
		transition: { xs: 'none', sm: 'transform 0.3s ease, box-shadow 0.3s ease' },
		justifyContent: 'flex-start',
		padding: { xs: '0.75rem', sm: '1rem' },
		'&:hover': {
			transform: { xs: 'none', sm: 'scale(1.05)' },
			boxShadow: { xs: 'none', sm: '0rem 0.5rem 1.25rem rgba(94, 234, 212, 0.15)' },
			backgroundColor: { xs: theme.palette.background.darkTransparent || '#17171799', sm: '#262626' },
		},
		marginBottom: { xs: '0.5rem', sm: '1rem' },
	},
	iconContainer: {
		width: { xs: '2.5rem', sm: '3rem' },
		height: { xs: '2.5rem', sm: '3rem' },
		borderRadius: { xs: '0.5rem', sm: '50%' },
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.palette.secondary.light,
		marginBottom: { xs: '0.75rem', sm: '1rem' },
		alignSelf: { xs: 'flex-start', sm: 'center' },
		// Add these properties to ensure consistent icon sizing
		minWidth: { xs: '2.5rem', sm: '3rem' },
		minHeight: { xs: '2.5rem', sm: '3rem' },
		'& > svg': {
			width: { xs: '1.25rem', sm: '1.5rem' },
			height: { xs: '1.25rem', sm: '1.5rem' },
			color: "#FFFFFF"
		}
	},
	typography: {
		container: {
			display: 'flex',
			flexDirection: 'column' as const,
			alignItems: { xs: 'flex-start', sm: 'center' },
			width: '100%',
		},
		title: {
			fontWeight: 'bold' as const,
			color: 'white',
			textAlign: { xs: 'left', sm: 'center' } as const,
			fontSize: { xs: '14px', sm: '1.1rem' },
			marginBottom: { xs: '0.5rem', sm: '0.5rem' },
			width: '100%',
		},
		body: {
			color: '#6B7280',
			textAlign: { xs: 'left', sm: 'center' } as const,
			lineHeight: 1.6,
			fontSize: { xs: '12px', sm: '0.9rem' },
			width: '100%',
		},
	},
};

export default controlSectionStyle;