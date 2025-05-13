import theme from '../../../theme';

const benefitsSectionStyle = {
	section: {
		paddingTop: { sm: '4rem', xs: '2rem' },
		backgroundColor: theme.palette.background.default,
		position: 'relative',

	},
	container: {
		maxWidth: '1200px',
		margin: '0 auto',
		padding: { xs: '0 1rem', sm: '0 2rem' },
		position: 'relative',
		zIndex: 1,
	},
	header: {
		marginBottom: '3rem',
		textAlign: 'center',
	},
	title: {
		fontSize: { xs: '1.8rem', sm: '2.5rem',md:'2rem' },
		fontWeight: 600,
		color: theme.palette.text.primary,
		textAlign: 'center',
		position: 'relative',
		paddingBottom: '1rem',

	},
	subtitle: {
		fontSize: { xs: '1rem', sm: '1.1rem' },
		color: theme.palette.text.secondary,
		marginBottom: '2rem',
		textAlign: 'center',
		maxWidth: '800px',
		marginLeft: 'auto',
		marginRight: 'auto',
		lineHeight: 1.6,
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
		gap: '1.75rem',
	},
	card: {
		backgroundColor: theme.palette.background.darkTransparent,
		backdropFilter: 'blur(6px)',
		borderRadius: '1rem',
		padding: '1.75rem',
		transition: 'all 0.35s ease',
		height: { sm: '18rem', xs: 'auto', md: '20rem' },
		display: 'flex',
		flexDirection: 'column',
		border: `1px solid ${theme.palette.divider}`,
		boxShadow: theme.customShadows?.card,
		position: 'relative',
		overflow: 'hidden',
		'&::before': {
			content: '""',
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			height: '0',
			background: `linear-gradient(90deg, ${theme.palette.secondary.dark}80, ${theme.palette.secondary.main}80)`,
			borderTopLeftRadius: '1rem',
			borderTopRightRadius: '1rem',
			transition: 'height 0.35s ease',
			zIndex: 0,
		},
		'&:hover': {
			transform: 'translateY(-8px)',
			boxShadow: '0rem 0.75rem 1.5rem rgba(0, 0, 0, 0.15)',
			backgroundColor: theme.palette.background.paper,
			'&::before': {
				height: '4px',
			},
		},
	},
	iconContainer: {
		width: '4rem',
		height: '4rem',
		borderRadius: '0.5rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#115e59',
		marginBottom: '1.25rem',
		position: 'relative',
		transition: 'all 0.3s ease',
		alignSelf: 'flex-start',
		zIndex: 1,
	},
	icon: {
		fontSize: '2rem',
		color: theme.palette.text.primary,
		transition: 'transform 0.3s ease',
		'&:hover': {
			transform: 'scale(1.1)',
		},
	},
	cardTitle: {
		fontSize: { xs: '1.1rem', sm: '1.2rem' },
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		marginBottom: '0.75rem',
		position: 'relative',
		zIndex: 1,
	},
	cardDescription: {
		fontSize: '1rem',
		color: theme.palette.text.secondary,
		lineHeight: 1.7,
		position: 'relative',
		zIndex: 1,
	},
};

export default benefitsSectionStyle;
