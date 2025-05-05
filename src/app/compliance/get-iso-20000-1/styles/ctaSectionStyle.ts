import theme from '../../../../theme';

const iso20000CtaBannerStyles = {
	bannerOuterContainer: {
		padding: '4rem',
		width: '100%',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: theme.palette.background.default,
	},
	bannerContainer: {
		padding: { xs: '2rem 1rem', md: '3rem 1rem' },
		background: '#17171799',
		width: { xs: '90%', sm: '80%', md: '95%' },
		maxWidth: '72rem',
		borderRadius: '1rem',
		boxShadow: theme.customShadows?.card,
		border: `1px solid ${theme.palette.divider}`,
		overflow: 'hidden',
	},
	bannerContent: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		margin: '0 auto',
		gap: '1.5rem',
	},
	textContainer: {
		textAlign: { xs: 'center', md: 'left' },
		display: 'flex',
		flexDirection: 'column',
		alignItems: { xs: 'center', md: 'flex-start' },
		gap: '1rem',
	},
	bannerTitle: {
		fontSize: { xs: '1.6rem', md: '2rem' },
		fontWeight: '600',
		color: theme.palette.primary.main,

	},
	bannerSubtitle: {
		fontSize: { xs: '0.9rem', md: '1rem' },
		color: theme.palette.text.secondary,
		lineHeight: '1.5',
		maxWidth: { xs: '100%', sm: '30rem' },
	},
	bannerButton: {
		marginTop: '1rem',
		backgroundColor: '#115e59',
		color: '#f9fafb',
		borderRadius: '0.5rem',
		padding: {
		  xs: '0.25rem 0.5rem',
		  sm: '0.375rem 0.75rem',
		  md: '0.25rem 1rem',
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
	imageWrapper: {
		position: 'relative',
		width: { xs: '100%', sm: '250px', md: '300px' },
		height: { xs: '200px', sm: '250px', md: '200px' },
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

export default iso20000CtaBannerStyles;