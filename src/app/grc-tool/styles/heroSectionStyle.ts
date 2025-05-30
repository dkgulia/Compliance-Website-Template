import theme from '../../../theme';

const heroSectionStyle = {
	section: {
		paddingTop: { xs: '8rem', sm: '8rem', md: '12rem' },
		paddingX: { xs: '1rem', sm: '1.5rem', md: '6rem' },
		paddingBottom: { xs: '2.5rem', sm: '2rem', md: '12rem' },
		background: theme.palette.background.default,
		position: 'relative',
		overflow: 'hidden',
		inset: 0,
		height: 'full',
		width: 'full',
		backgroundImage: {
			xs: 'linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)',
			sm: 'linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)',
			md: 'linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)'
		},
		backgroundSize: {
			xs: '24px 24px',
			sm: '36px 36px',
			md: '48px 48px'
		},
		WebkitMask: 'radial-gradient(ellipse 55% 55% at 50% 50%, #000 80%, transparent 100%)',
		mask: 'radial-gradient(ellipse 55% 55% at 50% 50%, #000 80%, transparent 100%)',
	},
	container: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		gap: { xs: '0.5rem', md: '0.5rem' },
	},
	leftContent: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		textAlign: { xs: 'center', md: 'center' },
		alignItems: { xs: 'center', md: 'center' },
	},
	titleSection: {
		marginBottom: { xs: '1rem', md: '2.5rem' },
	},
	tag: {
		display: 'inline-flex',
		alignItems: 'center',
		fontFamily: 'monospace',
		fontSize: { xs: '0.75rem', sm: '0.875rem' },
		color: '#0d9488',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		borderRadius: '0.5rem',
		paddingX: '0.5rem',
		gap: '0.5rem',
		marginBottom: { xs: '0.25rem', md: '1rem' },
	},
	titlePrimary: {
		fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
		color: 'white',
		marginBottom: { xs: '0.25rem', md: '1rem' },
		fontWeight: '400',
	},
	titleSecondary: {
		fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2.5rem' },
		color: 'white',
		marginBottom: { xs: '0.25rem', md: '1rem' },
		fontWeight: '400',
	},
	gradientTitle: {
		fontSize: { xs: '2.25rem', sm: '2.25rem', md: '3.75rem' },
		fontWeight: '400',
		background: 'linear-gradient(to right, #14b8a6, #0d9488, #14b8a6)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		display: 'inline-block',
		marginTop: { xs: '0rem', md: '0rem' },
	},
	descriptionContainer: {
		marginTop: { xs: '1.5rem', sm: '2rem', md: '1rem' },
		width: 'fit-content',
		justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5rem',
	},
	descriptionPrimary: {
		color: '#D1D5DB',
		fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
		textAlign: { xs: 'center', md: 'center' },
	},
	descriptionSecondary: {
		color: '#D1D5DB',
		fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem' },
		textAlign: { xs: 'center', md: 'center' },
	},
	descriptionTertiary: {
		color: '#D1D5DB',
		fontSize: { xs: '0.75rem', sm: '1rem', md: '1.125rem' },
		textAlign: { xs: 'center', md: 'center' },
	},
	buttonContainer: {
		marginTop: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
		display: 'flex',
		alignItems: 'center',
		justifyContent: { xs: 'center', md: 'center' },
	},
	getStartedButton: {
		display: 'inline-flex',
		px: { xs: '0.75rem', sm: '1rem', md: '1.5rem' },
		py: { xs: '0.375rem', sm: '0.5rem', md: '0.5rem' },
		backgroundColor: '#115e59',
		'&:hover': {
			backgroundColor: '#0f766e',
		},
		color: 'white',
		fontSize: '0.875rem',
		borderRadius: '0.5rem',
		transition: 'background-color 150ms ease',
		border: '1px solid #0d9488',
		textTransform: 'none',
	},
};

export default heroSectionStyle;