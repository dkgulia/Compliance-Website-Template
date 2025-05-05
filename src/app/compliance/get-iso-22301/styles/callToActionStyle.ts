import theme from '../../../../theme';

const callToActionStyle = {
	box: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		marginBottom: '1rem',
		marginX: 'auto',
		maxWidth: '75rem',
		px: { xs: 2, sm: 4 },
	},
	container: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: { xs: 4, md: 6 },
		padding: { xs: '1.5rem', sm: '2.5rem' },
		borderRadius: '1rem',

	},
	textBox: {
		width: { xs: '100%', md: '50%' },
		textAlign: 'left',
	},
	taglineContainer: {
		marginBottom: '1.5rem',
	},
	tagline: {
		background: '#115e59',
		color: 'white',
		fontWeight: 'bold',
		borderRadius: '1rem',
		padding: '0.5rem 1rem',
		fontSize: '0.9rem',
		width: 'fit-content',
		display: 'inline-block',
	},
	title: {
		fontWeight: '600',
		fontSize: { xs: '1.2rem', sm: '2rem' },
		color: theme.palette.text.primary,
		marginBottom: '1.5rem',
		lineHeight: 1.2,
	},
	points: {
		display: 'flex',
		flexDirection: 'column',
		gap: 2,
		marginBottom: '2rem',
	},
	point: {
		display: 'flex',
		alignItems: 'center',
		color: theme.palette.text.secondary,
		padding: '0.5rem 0',
		fontSize: '1rem',
		gap: '0.8rem',
	},
	button: {
		backgroundColor: '#115e59',
		color: '#f9fafb',
		borderRadius: '0.5rem',
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.25rem 0.5rem',
		},
		textTransform: 'none',
		fontSize: '1rem',
		whiteSpace: 'nowrap',
		border: '1px solid #0d9488',
		transition: 'all 150ms ease',
		'&:hover': {
			backgroundColor: '#0f766e',
		},
	},
	imageBox: {
		width: { xs: '100%', md: '50%' },
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: '100%',
		maxWidth: '450px',
		position: 'relative',
		borderRadius: '1rem',
		overflow: 'hidden',
	},
	icon: {
		color: theme.palette.primary.main,
		fontSize: '1.5rem',
	},
};

export default callToActionStyle;