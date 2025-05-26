import theme from '../../../theme';

const callToActionStyle = {
	section: {
		paddingTop: { sm: '2rem', xs: '1rem' },
		paddingBottom: { sm: '4rem', xs: '2rem' },
		backgroundColor: theme.palette.background.default,
	},
	container: {
		maxWidth: '1200px',
		margin: '0 auto',
		padding: { xs: '0 1rem', sm: '0 2rem' },
	},
	contentWrapper: {
    backgroundColor: '#17171799',
		borderRadius: '1rem',
    border: `1px solid ${theme.palette.divider}`,
		padding: { xs: '2rem', sm: '3rem' },
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		gap: '3rem',
	},
	textContent: {
		flex: 1,
	},
	title: {
		fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: 600,
		color: theme.palette.text.primary,
		marginBottom: '1rem',
	},
	subtitle: {
		fontSize: { xs: '1rem', md: '1.1rem' },
		color: theme.palette.text.secondary,
		marginBottom: '1.5rem',
	},
	description: {
		fontSize: '1rem',
		color: theme.palette.text.secondary,
		marginBottom: '2rem',
		lineHeight: 1.6,
	},
	imageContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imagePlaceholder: {
		width: '100%',
		maxWidth: '350px',
		height: '200px',
		borderRadius: '1rem',
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.text.disabled,
		border: `1px solid ${theme.palette.divider}`,

		padding: '1rem',
		fontSize: '0.9rem',
		textAlign: 'center',
	},
	ctaButton: {
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
};

export default callToActionStyle;
