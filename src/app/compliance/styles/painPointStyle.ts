import theme from '../../../theme';

const painPointStyle = {
	container: {
		paddingTop: '1rem',
		paddingBottom: '1rem',
		py: { xs: 2, sm: 2 },
		px: { xs: 2, sm: 2 },
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0',
		background: theme.customGradients?.heroBackground || 'linear-gradient(180deg, #000000 0%, #050505 100%)',
	},
	contentBox: {
		maxWidth: '50rem',
		color: theme.palette.text.primary,
		textAlign: 'center',
		margin: { xs: '2rem 0', sm: '1rem 0' },
		padding: { xs: '0 1rem', sm: '0' },
	},
	headline: {
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
		fontSize: { xs: '1.5rem', sm: '2rem' },
		marginBottom: '1.5rem',
	},
	bulletList: {
		paddingLeft: 0,
		listStyle: 'none',
		marginBottom: '2rem',
	},
	bulletItem: {
		display: 'flex',
		flexDirection: { xs: 'column', sm: 'row' },
		alignItems: { xs: 'flex-start', sm: 'center' },
		background: theme.palette.background.paper,
		padding: '1rem',
		borderRadius: '0.5rem',
		boxShadow: theme.customShadows?.card || '0px 2px 6px rgba(0, 0, 0, 0.2)',
		textAlign: 'left',
		gap: '0.8rem',
		marginBottom: '1rem',
	},
	checkIcon: {
		color: theme.palette.primary.light,
		fontSize: { xs: '1.2rem', sm: '1.5rem' },
	},
	solutionStatement: {
		fontWeight: 'bold',
		fontSize: { xs: '1rem', sm: '1.25rem' },
		color: theme.palette.text.primary,
		lineHeight: '1.5',
		margin: '1rem 0',
	},
};

export default painPointStyle;