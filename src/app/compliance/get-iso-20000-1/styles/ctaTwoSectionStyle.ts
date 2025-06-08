import theme from '../../../../theme';

const iso20000CtaBannerStyles = {
   bannerOuterContainer: {
   	padding: { xs: '1rem', sm: '2rem' },
   	width: '100%',
   	background: theme.palette.background.default,
   	display: 'flex',
   	justifyContent: 'center',
   },
   bannerContainer: {
   	padding: { xs: '1rem', md: '2.5rem 2rem' },
   	background: theme.palette.background.darkPaper || theme.palette.background.paper,
   	width: '100%',
   	maxWidth: '1200px',
   	borderRadius: { xs: '0.75rem', sm: theme.shape.borderRadius },
   	display: 'flex',
   	justifyContent: 'space-between',
   	alignItems: 'center',
   	flexDirection: { xs: 'column', md: 'row' },
   	gap: { xs: '1rem', md: '2rem' },
   	border: `1px solid ${theme.palette.divider}`,
   },
   textContainer: {
   	flex: '1',
   	textAlign: { xs: 'center', md: 'left' },
   },
   bannerTitle: {
   	fontSize: { xs: '1.4rem', md: '1.75rem' },
   	fontWeight: 600,
   	color: theme.palette.primary.main,
   	marginBottom: '0.5rem',
   },
   bannerSubtitle: {
   	fontSize: { xs: '0.85rem', md: '1rem' },
   	color: theme.palette.text.secondary,
   },
   bannerButton: {
   	background: theme.customGradients?.button || theme.palette.primary.main,
   	color: theme.palette.ui?.buttonText || theme.palette.primary.contrastText,
   	fontWeight: '600',
   	padding: { xs: '0.6rem 1.2rem', sm: '0.8rem 1.5rem' },
   	borderRadius: theme.shape.borderRadius * 3,
   	textTransform: 'none' as const,
   	whiteSpace: 'nowrap',
   	fontSize: { xs: '0.85rem', sm: '1rem' },
   	'&:hover': {
   		background: theme.customGradients?.buttonHover || theme.palette.primary.dark,
   		boxShadow: theme.customShadows?.button || 'none',
   	},
   	alignSelf: { xs: 'stretch', md: 'center' },
   	width: { xs: '100%', md: 'auto' },
   },
};

export default iso20000CtaBannerStyles;