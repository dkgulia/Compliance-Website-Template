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
		minHeight: 160,
		backgroundColor: theme.palette.background.paper,
		backdropFilter: 'blur(10px)',
		borderRadius: '15px',
		boxShadow: theme.customShadows?.card,
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.05)',
			boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
		},
	},
	logoImageWrapper: {
		position: 'relative',
		width: '4rem',
		height: '4rem',
		marginBottom: '1rem',
		img: {
			objectFit: 'contain',
		},
	},
	typography: {
		title: {
			fontWeight: 'bold',
			fontSize: '1.2rem',
			color: theme.palette.text.primary,
		},
		body: {
			color: theme.palette.text.secondary,
			fontSize: '0.95rem',
		},
	},
};

export default complianceStyles;