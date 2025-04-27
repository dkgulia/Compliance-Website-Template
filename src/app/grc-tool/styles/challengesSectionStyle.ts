import theme from '../../../theme';

const challengesSectionStyle = {
	section: {
		padding: { xs: '4rem 1rem', md: '6rem 2rem' },
		background: '#101010',
		position: 'relative',
		overflow: 'hidden',
	},
	container: {
		maxWidth: '1200px',
		margin: '0 auto',
		position: 'relative',
		zIndex: 5,
	},
	title: {
		color: 'white',
		fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' },
		fontWeight: '700',
		marginBottom: '3rem',
		textAlign: 'center',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
		gap: '2rem',
	},
	challengeItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '1.5rem',
		borderRadius: '1rem',
		background: 'rgba(23, 23, 23, 0.6)',
		backdropFilter: 'blur(5px)',
		border: `1px solid ${theme.palette.divider}`,
		transition: 'transform 0.3s ease, border-color 0.3s ease',
		'&:hover': {
			transform: 'translateY(-5px)',
			borderColor: '#115e59',
		},
	},
	iconContainer: {
		width: '3rem',
		height: '3rem',
		borderRadius: '50%',
		background: '#115e59',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '1.5rem',
	},
	icon: {
		color: 'white',
		fontSize: '1.5rem',
	},
	challengeTitle: {
		color: 'white',
		fontSize: '1.2rem',
		fontWeight: 'bold',
		marginBottom: '0.75rem',
	},
	challengeDescription: {
		color: theme.palette.text.secondary,
		fontSize: '0.95rem',
		lineHeight: 1.6,
	},
	backgroundGradient: {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		background: 'radial-gradient(circle at 10% 50%, rgba(17, 94, 89, 0.1) 0%, rgba(0, 0, 0, 0) 60%)',
		zIndex: 1,
	},
};

export default challengesSectionStyle;