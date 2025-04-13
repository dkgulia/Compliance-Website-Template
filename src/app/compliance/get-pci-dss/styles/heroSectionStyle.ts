import theme from '../../../../theme';

const heroSectionStyle = {
	container: {
		padding: '5rem 1rem',
		background: theme.palette.background.default,
	},
	containerBox: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		justifyContent: 'space-between',
		alignItems: 'center',
		maxWidth: '1200px',
		margin: '0 auto',
		gap: '2rem',
	},
	leftContentBox: {
		flex: 1,
		textAlign: { xs: 'center', md: 'left' },
		padding: { xs: '1rem', md: '2rem' },
	},
	formBox: {
		marginTop: { xs: '2rem', md: '0' },
		flex: 1,
		background: theme.palette.background.paper,
		borderRadius: '1.5rem',
		boxShadow: theme.customShadows?.card,
		maxWidth: '600px',
		width: '100%',
		padding: '2rem',
		border: `1px solid ${theme.palette.divider}`,
	},
	tag: {
		display: 'inline-block',
		padding: '0.5rem 1rem',
		borderRadius: '1rem',
		background: theme.palette.primary.main,
		marginBottom: '1rem',
	},
	tagText: {
		color: theme.palette.text.primary,
		fontWeight: 'bold',
	},
	mainTitle: {
		fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
		marginBottom: '1rem',
		color: theme.palette.text.primary,
	},
	highlightText: {
		color: theme.palette.primary.light,
	},
	description: {
		fontSize: { xs: '1rem', md: '1.1rem' },
		color: theme.palette.text.secondary,
		lineHeight: '1.5',
		marginBottom: '1.5rem',
	},
	featuresContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: { xs: 'center', md: 'flex-start' },
		alignItems: 'flex-start',
		gap: { xs: '2rem', md: '2.5rem' },
		marginTop: '2rem',
		width: '100%',
		flexWrap: 'wrap',
	},
	featureItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',
		gap: '0.5rem',
		flex: { xs: '1 1 auto', sm: '1 1 30%' },
		maxWidth: { xs: '100%', sm: '30%' },
	},
	iconWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		minHeight: '2.5rem',
	},
	featureIcon: {
		fontSize: { xs: '1.8rem', md: '2rem' },
		color: theme.palette.primary.main,
	},
	featureTextWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		width: '100%',
	},
	featureTitle: {
		fontSize: { xs: '0.9rem', md: '1rem' },
		fontWeight: 'bold',
		color: theme.palette.text.primary,
	},
	featureSubtitle: {
		fontSize: { xs: '0.8rem', md: '0.8rem' },
		color: theme.palette.text.secondary,
	},
	button: {
		marginTop: '1.5rem',
		color: theme.palette.text.primary,
		fontWeight: 'bold',
		border: 'none',
		padding: '0.8rem 1.5rem',
		borderRadius: '0.5rem',
		background: theme.palette.primary.main,
		'&:hover': {
			background: theme.palette.primary.dark,
			boxShadow: theme.customShadows?.button,
		},
	},
};

export default heroSectionStyle;