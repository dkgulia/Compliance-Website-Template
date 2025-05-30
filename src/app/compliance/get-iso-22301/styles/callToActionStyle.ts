import theme from '../../../../theme';

const callToActionStyle = {
	box: {
		paddingTop: { xs: '0.5rem', sm: '1.5rem' },
		paddingBottom: { xs: '1rem', sm: '2rem' },
		marginBottom: '1rem',
		marginX: 'auto',
		maxWidth: '75rem',
		px: { xs: 1, sm: 4 },
	},
	container: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: { xs: 2, md: 6 },
		padding: { xs: '1rem', sm: '2.5rem' },
		borderRadius: { xs: '0.75rem', sm: '1rem' },
	},
	textBox: {
		width: { xs: '100%', md: '50%' },
		textAlign: 'left',
	},
	taglineContainer: {
		marginBottom: { xs: '1rem', sm: '1.5rem' },
	},
	tagline: {
		background: '#115e59',
		color: 'white',
		fontWeight: 'bold',
		borderRadius: '1rem',
		padding: { xs: '0.4rem 0.8rem', sm: '0.5rem 1rem' },
		fontSize: { xs: '0.8rem', sm: '0.9rem' },
		width: 'fit-content',
		display: 'inline-block',
	},
	title: {
		fontWeight: '600',
		fontSize: { xs: '1.4rem', sm: '2rem' },
		color: theme.palette.text.primary,
		marginBottom: { xs: '1rem', sm: '1.5rem' },
		lineHeight: 1.2,
	},
	points: {
		display: 'flex',
		flexDirection: 'column',
		gap: { xs: 1.5, sm: 2 },
		marginBottom: { xs: '1.5rem', sm: '2rem' },
	},
	point: {
		display: 'flex',
		alignItems: 'center',
		color: theme.palette.text.secondary,
		padding: { xs: '0.25rem 0', sm: '0.5rem 0' },
		fontSize: { xs: '0.85rem', sm: '1rem' },
		gap: { xs: '0.6rem', sm: '0.8rem' },
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
		fontSize: { xs: '0.9rem', sm: '1rem' },
		whiteSpace: 'nowrap',
		border: '1px solid #0d9488',
		transition: 'all 150ms ease',
		'&:hover': {
			backgroundColor: '#0f766e',
		},
	},
	imageBox: {
		width: { xs: '100%', md: '50%' },
		display: { xs: 'none', md: 'flex' },
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: '100%',
		maxWidth: '450px',
		position: 'relative',
		borderRadius: { xs: '0.75rem', sm: '1rem' },
		overflow: 'hidden',
	},
	icon: {
		color: theme.palette.primary.main,
		fontSize: { xs: '1.2rem', sm: '1.5rem' },
	},
};

export default callToActionStyle;