import theme from '../../../theme';

const challengesSectionStyle = {
	section: {
		display: 'flex',
		flexDirection: 'column',
		px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
		marginTop: { xs: '2rem', md: '0rem' },
		gap: '2rem',
		alignItems: 'center',
		background: theme.palette.background.default,
		position: 'relative',
		overflow: 'hidden',
	},
	headerContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '0.5rem',
	},
	tagline: {
		fontFamily: 'monospace',
		fontSize: '0.875rem',
		color: '#0d9488',
		letterSpacing: '0.05em',
		textAlign: 'center',
		textTransform: 'uppercase',
	},
	title: {
		fontSize: { xs: '1.5rem', md: '1.875rem' },
		textAlign: 'center',
		color: 'white',
		fontWeight: '600',
	},
	subtitle: {
		color: '#6b7280',
		textAlign: 'center',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
		gap: '1rem',
	},
	challengeItem: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		padding: '1rem',
		borderRadius: '0.5rem',
		backgroundColor: '#171717',
		border: `1px solid ${theme.palette.divider}`,
		backgroundOpacity: 0.6,
	},
	iconContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '1.25rem',
		padding: '0.5rem',
		borderRadius: '0.5rem',
		backgroundColor: '#115e59',
		color: 'white',
		width: '45px',
		height: '45px',
	},

	textContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.25rem',
	},
	challengeTitle: {
		fontSize: '1.125rem',
		color: 'white',
		fontWeight: '600',
	},
	challengeDescription: {
		fontSize: '0.875rem',
		color: '#6b7280',
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