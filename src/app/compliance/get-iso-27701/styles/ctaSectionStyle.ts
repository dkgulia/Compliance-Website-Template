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
		fontWeight: '600',
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
		backgroundColor: '#115e59',
		color: '#f9fafb',
		borderRadius: '0.5rem',
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.25rem 1rem',
		},
		textTransform: 'none',
		fontSize: '1.2rem',
		whiteSpace: 'nowrap',
		border: '1px solid #0d9488',
		transition: 'all 150ms ease',
		'&:hover': {
			backgroundColor: '#0f766e',
		},
	},
	imageContainer: {
		display: 'flex',
		justifyContent: { xs: 'center', md: 'flex-end' },
		alignItems: 'center',
		height: '100%',
	}
};

export default ctaSectionStyle;