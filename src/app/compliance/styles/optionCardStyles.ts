import theme from '../../../theme';

const optionCardStyles = {
	box: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginTop: '1rem',
		maxWidth: '75rem',
		margin: '0 auto',
	},
	cardHorizontal: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		background: 'rgba(18, 18, 18, 0.6)',
		borderRadius: '1rem',
		boxShadow: theme.customShadows?.card || '0rem 0.375rem 1.25rem rgba(0, 0, 0, 0.4)',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.02)',
			boxShadow: '0rem 0.5rem 1.5625rem rgba(0, 0, 0, 0.6)',
			background: 'rgba(24, 24, 27, 0.6)',
		},
		width: { xs: '100%', sm: '90%', md: '31.25rem' },
		height: '100%',
		backdropFilter: 'blur(10px)',
		border: '1px solid rgba(38, 38, 38, 0.6)',
	},
	cardContent: {
		padding: { xs: '0.75rem', sm: '1rem' },
		position: 'relative',
	},
	iconContainerBottomRight: {
		display: 'block',
		position: 'absolute',
		bottom: '0.625rem',
		right: '0.625rem',
		width: '3rem',
		height: '3rem',
	},
	imageBottomRight: {
		width: '100%',
		height: '100%',
	},
	cta: {
		marginTop: '1rem',
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		fontSize: { xs: '1rem', sm: '1.2rem' },
		textDecoration: 'none',
		textAlign: { xs: 'center', md: 'left' },
		'&:hover': {
			textDecoration: 'underline',
		},
		marginBottom: '1rem',
	},
	textContainerHorizontal: {
		display: 'flex',
		flexDirection: 'column',
		marginRight: { xs: 0, md: '1.25rem' },
		marginBottom: { xs: '0.5rem', md: '0.75rem' },
	},
	titleHorizontal: {
		fontWeight: 'bold',
		fontSize: { xs: '1rem', sm: '1.2rem' },
		color: theme.palette.text.primary,
		textShadow: '0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.4)',
	},
	descriptionHorizontal: {
		color: theme.palette.text.secondary,
		fontSize: { xs: '0.85rem', sm: '0.95rem' },
	},
};

export default optionCardStyles;