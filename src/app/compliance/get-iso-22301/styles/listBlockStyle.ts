import theme from '../../../../theme';

const listBlockStyle = {
	box: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem',md:'2rem' },
		marginX: { xs: '1rem', sm: '0rem' },
	},
	container: {
		maxWidth: '75rem',
		marginX: 'auto',
		px: { xs: '1rem', sm: '2rem' },
	},
	heading: {
		textAlign: 'center',
		color: theme.palette.text.primary,
		fontWeight: '600',
		marginBottom: '0.5rem',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2rem' },
	},
	subtitle: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginBottom: '2rem',
		fontSize: '1.2rem',
	},
	grid: {
		marginTop: '2rem',
	},
	outerItemBox: {
		display: 'flex',
		alignItems: 'flex-start',
		marginBottom: '1.2rem',
		transition: 'transform 0.2s ease',
		'&:hover': {
			transform: 'translateX(5px)',
		},
	},
	iconForList: {
		fontSize: '1.8rem',
		color: '#115e59'
	},
	iconContainerForList: {
		minWidth: '2rem',
		marginRight: '1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textForList: {
		color: '#6B7280',
		lineHeight: 1.6,
		fontSize: '1rem',
	},
	rightGridItem: {
		display: 'flex',
		justifyContent: 'center',
	},
	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '90%',
	},
	imageStyle: {
		maxWidth: '80%',
		height: 'auto',
		borderRadius: '12px',
		objectFit: 'contain' as const,
		transition: 'transform 0.3s ease',
		'&:hover': {
			transform: 'scale(1.02)',
		},
	},
	'@media (max-width: 900px)': {
		imageStyle: {
			maxWidth: '80%',
			margin: '20px auto',
		},
	},
};

export default listBlockStyle;