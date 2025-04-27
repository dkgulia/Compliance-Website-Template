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
		color: '#f9fafb',
		fontWeight: 600,
		padding: '0.75rem 1.5rem',
		borderRadius: '0.5rem',
		backgroundColor: '#1f2937',
		border: '1px solid #4b5563',
		textTransform: 'none',
		fontSize: '1rem',
		whiteSpace: 'nowrap',
		transition: 'all 150ms ease',
		'&:hover': {
			backgroundColor: '#374151',
			transform: 'translateY(-2px)',
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