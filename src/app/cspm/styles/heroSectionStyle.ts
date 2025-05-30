import theme from '../../../theme';

const heroSectionStyle = {
	heroContainer: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		alignItems: 'center',
		gap: { xs: '2rem', md: '4rem' },
		px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
		paddingTop: { xs: '8rem', sm: '8rem', md: '8rem' },
		paddingBottom: { xs: '2.5rem', sm: '2rem', md: '6rem' },
		background: theme.palette.background.default,
		position: 'relative',
		overflow: 'hidden',
	},
	contentBox: {
		flex: 1,
		textAlign: { xs: 'center', md: 'left' },
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		order: { xs: 1, md: 1 },
	},
	tagline: {
		fontFamily: 'monospace',
		fontSize: '0.875rem',
		color: '#0d9488',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		marginBottom: '0.5rem',
	},
	title: {
		fontSize: { xs: '1.5rem', md: '1.875rem' },
		fontWeight: 600,
		color: theme.palette.text.primary,
		lineHeight: 1.3,
		marginBottom: '1rem',
	},
	subtitle: {
		fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
		color: '#0d9488',
		lineHeight: 1.6,
		marginBottom: '1rem',
	},
	description: {
		color: '#6b7280',
		fontSize: '1rem',
		lineHeight: 1.6,
		marginBottom: '1.5rem',
		maxWidth: '600px',
	},
	button: {
		display: 'inline-flex',
		color: 'white',
		borderRadius: '0.5rem',
		transition: 'all 0.3s ease',
		alignSelf: { xs: 'center', md: 'flex-start' },
		minWidth: 'auto',
		width: 'fit-content',
		whiteSpace: 'nowrap',
	},
	imageBox: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		order: { xs: 2, md: 2 },
		width: '100%',
		minHeight: { xs: '250px', sm: '300px', md: 'auto' },
	},
	imageWrapper: {
		width: '100%',
		maxWidth: { xs: '280px', sm: '350px', md: '500px' },
		height: { xs: '300px', sm: '300px', md: '450px' },
		position: 'relative',
		borderRadius: '1rem',
		overflow: 'hidden',
	},
	heroImage: {
		objectFit: 'cover' as const,
	},
};

export default heroSectionStyle;
