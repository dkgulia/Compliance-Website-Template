import theme from '../../../theme';

const frameworkStyles = {
	container: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
		padding: '2rem 0',
		fontFamily: '"Roboto", sans-serif',
	},
	heroSection: {
		background: theme.customGradients?.primary || 'linear-gradient(to right, #14b8a6, #5eead4)',
		textAlign: 'center',
		padding: '4rem 2rem',
	},
	heroTitle: {
		fontSize: '2.5rem',
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		marginBottom: '1rem',
	},
	heroSubtitle: {
		fontSize: '1.2rem',
		color: theme.palette.text.secondary,
	},
	section: {
		padding: '2rem 0',
	},
	sectionTitle: {
		fontSize: '2rem',
		fontWeight: 'bold',
		textAlign: 'center',
		color: theme.palette.text.primary,
		marginBottom: '1rem',
	},
	sectionDescription: {
		textAlign: 'center',
		fontSize: '1rem',
		color: theme.palette.text.secondary,
	},
	hurdlesSection: {
		padding: '2rem 0',
		backgroundColor: theme.palette.background.paper,
	},
	hurdlesGrid: {
		justifyContent: 'center',
	},
	hurdleCard: {
		backgroundColor: 'rgba(18, 18, 18, 0.6)',
		padding: '1.5rem',
		borderRadius: '8px',
		boxShadow: theme.customShadows?.card || '0 4px 6px rgba(0, 0, 0, 0.3)',
		textAlign: 'center',
		backdropFilter: 'blur(10px)',
		border: '1px solid rgba(38, 38, 38, 0.6)',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.02)',
			boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.4)',
		},
	},
	hurdleTitle: {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
	},
	hurdleDescription: {
		fontSize: '1rem',
		color: theme.palette.text.secondary,
	},
	costSection: {
		padding: '2rem 0',
		backgroundColor: theme.palette.background.default,
	},
	costCard: {
		backgroundColor: 'rgba(18, 18, 18, 0.6)',
		padding: '1.5rem',
		borderRadius: '8px',
		boxShadow: theme.customShadows?.card || '0 4px 6px rgba(0, 0, 0, 0.3)',
		textAlign: 'center',
		backdropFilter: 'blur(10px)',
		border: '1px solid rgba(38, 38, 38, 0.6)',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.02)',
			boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.4)',
		},
	},
	costIcon: {
		fontSize: '3rem',
		color: theme.palette.primary.main,
		marginBottom: '0.5rem',
	},
	costDescription: {
		fontSize: '1rem',
		color: theme.palette.text.secondary,
	},
	relatedSection: {
		padding: '2rem 0',
	},
	relatedCard: {
		backgroundColor: 'rgba(18, 18, 18, 0.6)',
		padding: '1.5rem',
		borderRadius: '8px',
		textAlign: 'center',
		boxShadow: theme.customShadows?.card || '0 4px 6px rgba(0, 0, 0, 0.3)',
		backdropFilter: 'blur(10px)',
		border: '1px solid rgba(38, 38, 38, 0.6)',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.02)',
			boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.4)',
		},
	},
	relatedLogo: {
		width: '100px',
		height: 'auto',
		marginBottom: '1rem',
	},
	relatedTitle: {
		fontSize: '1.2rem',
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		marginBottom: '0.5rem',
	},
	relatedDescription: {
		fontSize: '1rem',
		color: theme.palette.text.secondary,
	},
	learnMoreButton: {
		fontSize: '1rem',
		fontWeight: 'bold',
		borderRadius: '24px',
		textTransform: 'none',
		background: theme.customGradients?.button || 'linear-gradient(to right, #14b8a6, #2dd4bf)',
		color: theme.palette.text.primary,
		'&:hover': {
			background: theme.customGradients?.buttonHover || 'linear-gradient(to right, #0f766e, #14b8a6)',
			boxShadow: theme.customShadows?.button,
		},
	},
};

export default frameworkStyles;