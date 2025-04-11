import theme from '../../../../theme';

const ctaSectionStyle = {
	box: {
		paddingTop: { sm: '2rem', xs: '1.5rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		marginTop: '0',
		marginBottom: '0',
		width: '100%',
		background: theme.palette.background.default,
	},
	container: {
		maxWidth: '75rem',
		marginX: 'auto',
		padding: { xs: '1.5rem', md: '2rem' },
		borderRadius: '2rem',

	},
	title: {
		fontWeight: '700',
		fontSize: { xs: '1.8rem', sm: '2.2rem' },
		color: theme.palette.text.primary,
		marginBottom: '1rem',
	},
	text: {
		fontSize: { xs: '0.95rem', sm: '1.1rem' },
		color: theme.palette.text.secondary,
		lineHeight: 1.6,
		marginBottom: '1.5rem',
		maxWidth: '600px',
	},
	button: {
		color: theme.palette.text.primary,
		fontSize:'1.2rem',
		background: theme.palette.primary.main,
		fontWeight: 'bold',
		padding: '0.8rem 2rem',
		borderRadius: '0.5rem',
		boxShadow: theme.customShadows?.button || '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)',
		'&:hover': {
			background: theme.palette.primary.dark,
		},
		transition: 'all 0.3s ease',
	},
	imageContainer: {
		display: 'flex',
		justifyContent: { xs: 'center', md: 'flex-end' },
		alignItems: 'center',
		height: '100%',
	}
};

export default ctaSectionStyle;