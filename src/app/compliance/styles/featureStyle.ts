import theme from '../../../theme';

const featuresStyles = {
	box: {
		py: { xs: 2, sm: 2 },
		background: theme.customGradients?.heroBackground || 'linear-gradient(180deg, #000000 0%, #050505 100%)',
	},
	container: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: { xs: 3, sm: 6 },
	},
	containerBox: {
		width: { xs: '100%', sm: '80%', md: '60%' },
		textAlign: 'center',
	},
	heading: {
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		fontSize: { xs: '1.5rem', sm: '2rem' },
	},
	cardContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		background: 'rgba(18, 18, 18, 0.6)',
		backdropFilter: 'blur(10px)',
		borderRadius: '12px',
		boxShadow: theme.customShadows?.card || '0px 6px 15px rgba(0, 0, 0, 0.4)',
		padding: '2rem',
		height: '100%',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.05)',
			boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.6)',
			backgroundColor: theme.palette.background.paper,
		},
	},
	iconContainer: {
		width: '3rem',
		height: '3rem',
		backgroundColor: theme.palette.primary.main,
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: `0 4px 8px rgba(20, 184, 166, 0.4)`,
		marginBottom: '1rem',
	},
	typography: {
		title: {
			fontWeight: 'bold',
			color: theme.palette.text.primary,
			marginBottom: '0.75rem',
		},
		body: {
			color: theme.palette.text.secondary,
		},
	},
};

export default featuresStyles;