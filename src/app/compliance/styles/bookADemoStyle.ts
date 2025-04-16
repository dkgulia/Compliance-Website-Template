import theme from '../../../theme';

const bookADemoStyles = {
	box: {
		py: { xs: 2, sm: 2 },
		overflow: 'hidden',
		paddingTop: '1rem',
		paddingBottom: '1rem',
		background: theme.customGradients?.heroBackground || 'linear-gradient(180deg, #000000 0%, #050505 100%)',
	},
	container: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 4,
		opacity: 0.95,
	},
	textBox: {
		maxWidth: { md: '50%' },
		textAlign: 'left',
		padding: { xs: 2, sm: 4 },
	},
	title: {
		fontWeight: 'bold' as const,
		color: theme.palette.text.primary,
		fontSize: { xs: '1.5rem', sm: '2rem' },
		marginTop: '0.5rem',
	},
	points: {
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
		marginBottom: 4,
		marginTop: '1rem',

		'& div': {
			background: theme.palette.background.paper,
			color: theme.palette.text.primary,
			padding: '0.8rem',
			borderRadius: '2rem',
			fontSize: '1rem',
			fontWeight: 500,
			boxShadow: theme.customShadows?.card || '0px 6px 20px rgba(0, 0, 0, 0.4)',
		},
	},
	button: {
		marginTop: '1.5rem',
		color: theme.palette.text.primary,
		fontWeight: 'bold',
		border: 'none',
		padding: '0.8rem 1.5rem',
		borderRadius: '2rem',
		background: theme.customGradients?.button || 'linear-gradient(to right, #14b8a6, #2dd4bf)',
		'&:hover': {
			background: theme.customGradients?.buttonHover || 'linear-gradient(to right, #0f766e, #14b8a6)',
			boxShadow: theme.customShadows?.button || '0px 4px 10px rgba(0, 0, 0, 0.25)',
		},
		fontSize: '1rem',
	},
	imageBox: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	image: {
		width: '100%',
		maxWidth: '500px',
		height: 'auto',
		borderRadius: '16px',
		boxShadow: theme.customShadows?.card || '0px 6px 20px rgba(0, 0, 0, 0.4)',
	},
	tagline: {
		display: 'inline-block',
		padding: '0.4rem 0.8rem',
		borderRadius: '1rem',
		fontSize: '0.9rem',
		background:
			theme.customGradients?.primary ||
			`linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
		color: theme.palette.text.primary,
		fontWeight: 'bold',
		boxShadow: '0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.1)',
		width: 'fit-content',
	},
	point: {
		display: 'flex',
		alignItems: 'center',
		marginBottom: '0.5rem',
	},
	icon: {
		color: theme.palette.primary.light,
		marginRight: '0.5rem',
		fontSize: '1.2rem',
	},
};

export default bookADemoStyles;