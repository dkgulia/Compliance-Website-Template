import theme from '../../../../theme';

const iso20000CtaBannerStyles = {
	bannerOuterContainer: {
		padding: '2rem',
		width: '100%',
		background: theme.palette.background.default,
		display: 'flex',
		justifyContent: 'center',
	},
	bannerContainer: {
		padding: { xs: '1.5rem 1.5rem', md: '2.5rem 2rem' },
		background: theme.palette.background.darkPaper,
		width: '100%',
		maxWidth: '1200px',
		borderRadius: theme.shape.borderRadius,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: { xs: 'column', md: 'row' },
		gap: { xs: '1.5rem', md: '2rem' },
		border: `1px solid ${theme.palette.divider}`,
	},
	textContainer: {
		flex: '1',
		textAlign: { xs: 'center', md: 'left' },
	},
	bannerTitle: {
		fontSize: { xs: '1.5rem', md: '1.75rem' },
		fontWeight: 'bold',
		color: theme.palette.primary.main,
		marginBottom: '0.5rem',
	},
	bannerSubtitle: {
		fontSize: { xs: '0.95rem', md: '1rem' },
		color: theme.palette.text.secondary,
	},
	bannerButton: {
		background: theme.customGradients?.button,
		color: theme.palette.ui?.buttonText,
		fontWeight: '600',
		padding: '0.8rem 1.5rem',
		borderRadius: theme.shape.borderRadius * 3,
		textTransform: 'none' as const,
		whiteSpace: 'nowrap',
		'&:hover': {
			background: theme.customGradients?.buttonHover,
			boxShadow: theme.customShadows?.button,
		},
		alignSelf: { xs: 'stretch', md: 'center' },
		width: { xs: '100%', md: 'auto' },
	},
};

export default iso20000CtaBannerStyles;