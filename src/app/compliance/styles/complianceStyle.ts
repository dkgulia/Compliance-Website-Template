import theme from '../../../theme';

const complianceStyles = {
	box: {
		py: { xs: 2, sm: 2 },
		background: theme.customGradients?.heroBackground || 'linear-gradient(180deg, #000000 0%, #050505 100%)',
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
		textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
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
		background: 'rgba(18, 18, 18, 0.6)',
		backdropFilter: 'blur(10px)',
		borderRadius: '15px',
		boxShadow: theme.customShadows?.card || '0px 6px 20px rgba(0, 0, 0, 0.4)',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.05)',
			boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
			background: 'rgba(24, 24, 27, 0.6)',
		},
		border: '1px solid rgba(38, 38, 38, 0.6)',
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
			textShadow: '1px 1px 2px rgba(0, 0, 0, 0.4)',
		},
		body: {
			color: theme.palette.text.secondary,
			fontSize: '0.95rem',
		},
	},
};

export default complianceStyles;