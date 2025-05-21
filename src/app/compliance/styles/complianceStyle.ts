import theme from '../../../theme';

const complianceStyles = {
	box: {
		py: { xs: 2, sm: 2 },
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
		paddingTop: '2rem',
		paddingBottom: '2rem',
	},
	container: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: { xs: 3, sm: 6 },
	},
	containerBox: {
		width: { sm: '100%', md: '60%' },
		textAlign: { xs: 'center', sm: 'left', md: 'center' },
	},
	heading: {
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		fontSize: { xs: '1.5rem', sm: '2rem' },
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '1.5rem',
		height: '100%',
		width: '100%',
		minHeight: 280,
		backgroundColor: theme.palette.background.paper,
		backdropFilter: 'blur(10px)',
		borderRadius: '15px',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.05)',
			boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
		},
	},
	cardStack: {
		width: '100%',
		height: '100%',
	},
	logoImageWrapper: {
		position: 'relative',
		width: '4rem',
		height: '4rem',
		marginBottom: '1rem',
		backgroundColor: '#115e59',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '8px',
		padding: '0.5rem',
	},
	logoImage: {
		objectFit: 'contain' as const,
	},
	contentBox: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
	linkBox: {
		marginTop: 'auto',
	},
	typography: {
		title: {
			fontWeight: 'bold',
			fontSize: '1.2rem',
			color: theme.palette.text.primary,
			marginBottom: '0.75rem',
		},
		body: {
			color: theme.palette.text.secondary,
			fontSize: '0.95rem',
			marginBottom: '1rem',
		},
	},
	navLink: {
		textDecoration: 'none',
		fontSize: '0.9rem',
		fontWeight: 500,
		cursor: 'pointer',
		color: theme.palette.primary.main,
		'&:hover': {
			textDecoration: 'none',
			color: theme.palette.secondary.main,
		},
	},
};

export default complianceStyles;