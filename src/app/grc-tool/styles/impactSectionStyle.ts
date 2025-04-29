import theme from '../../../theme';

const impactSectionStyle = {
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
		fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2.8rem' },
		fontWeight: '600',
		marginBottom: '3rem',
		textAlign: 'center',
	},
	impactGrid: {
		display: 'grid',
		gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
		gap: '2rem',
		marginBottom: '5rem',
	},
	impactItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '2rem',
		borderRadius: '1rem',
		background: 'rgba(23, 23, 23, 0.4)',
		backdropFilter: 'blur(5px)',
		border: `1px solid ${theme.palette.divider}`,
		transition: 'transform 0.3s ease, border-color 0.3s ease',
		'&:hover': {
			transform: 'translateY(-5px)',
			borderColor: '#115e59',
		},
	},
	iconContainer: {
		width: '4rem',
		height: '4rem',
		borderRadius: '6px',
		background: '#115e59',
		border: '1px solid rgba(94, 234, 212, 0.2)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '1.5rem',
	},
	icon: {
		color: '#ffff',
		fontSize: '2rem',
	},
	impactTitle: {
		color: 'white',
		fontSize: '1.25rem',
		fontWeight: 'bold',
		marginBottom: '0.75rem',
	},
	impactDescription: {
		color: '#6B7280',
		fontSize: '0.95rem',
		lineHeight: 1.6,
	},
	metricsTitle: {
		color: 'white',
		fontSize: { xs: '1.5rem', md: '1.75rem' },
		fontWeight: '600',
		marginBottom: '2.5rem',
		textAlign: 'center',
	},
	metricsRow: {
		display: 'flex',
		justifyContent: 'center',
		gap: { xs: '1.5rem', md: '4rem' },
		flexWrap: 'wrap',
	},
	metricItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
	},
	metricValue: {
		color: '#115e59',
		fontSize: { xs: '2.5rem', md: '3.5rem' },
		fontWeight: 'bold',
		lineHeight: 1,
		marginBottom: '0.5rem',
	},
	metricLabel: {
		color: 'white',
		fontSize: '1.25rem',
		fontWeight: 'bold',
		marginBottom: '0.5rem',
	},
	metricDescription: {
		color: theme.palette.text.secondary,
		fontSize: '0.9rem',
		maxWidth: '200px',
	},
	backgroundGradient: {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		background: 'radial-gradient(circle at 50% 50%, rgba(17, 94, 89, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
		zIndex: 1,
	},
};

export default impactSectionStyle;