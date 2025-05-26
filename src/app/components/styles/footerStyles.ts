import theme from '../../../theme';

const footerStyles = {
	mainContainer: {
		backgroundColor:'#171717',
		color: theme.palette.text.primary,
		pt: 6,
		pb: 4,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 1200,
		margin: '0 auto',
		px: { xs: 2, md: 3 },
	},
	topSection: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		justifyContent: 'space-between',
		mb: 6,
		gap: { xs: 4, md: 2 },
	},
	leftColumn: {
		flex: 2,
		mb: { xs: 4, md: 0 },
	},
	menuColumns: {
		display: 'flex',
		flex: 2,
		flexDirection: { xs: 'column', sm: 'row' },
		gap: { xs: 4, md: 1 },
		justifyContent: 'space-around',
	},
	menuColumn: {
		flex: 1,
	},
	rightColumn: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		alignItems: { xs: 'flex-start', md: 'flex-end' },
		justifyContent: 'flex-start',
	},
	logoContainer: {
		mb: 3,
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		height: 'auto',
		filter: 'invert(0)',
		width: 40,
		marginRight: 1,
	},
	logoText: {
		fontSize: '1.5rem',
		fontWeight: 500,
		letterSpacing: '-0.01em',
	},
	companyDescription: {
		color: theme.palette.text.secondary,
		mb: 4,
		fontSize: '0.9rem',
		lineHeight: 1.6,
		maxWidth: '400px',
	},
	addressesSection: {
		display: 'flex',
		flexDirection: 'column',
		gap: 2.5,
		mb: 4,
	},
	addressContainer: {
		display: 'flex',
		alignItems: 'flex-start',
		maxWidth: '400px',
	},
	addressIcon: {
		mt: 0.5,
		mr: 1.5,
		fontSize: '1.25rem',
		color: theme.palette.text.secondary,
	},
	addressContent: {
		display: 'flex',
		flexDirection: 'column',
	},
	companyName: {
		fontWeight: 600,
		color: theme.palette.text.primary,
		mb: 0.5,
		fontSize: '0.9rem',
	},
	addressLine: {
		color: theme.palette.text.secondary,
		fontSize: '0.9rem',
	},
	socialContainer: {
		display: 'flex',
		gap: 2,
		mb: { xs: 4, md: 0 },
	},
	socialLink: {
		color: 'white',
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		padding: 1,
		borderRadius: '6px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 40,
		height: 40,
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.2)',
		},
	},
	socialIcon: {
		fontSize: '1.7rem',
	},
	divider: {
		width: '100%',
		height: '1px',
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		my: 3,
	},
	footerBottom: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: { xs: 'flex-start', sm: 'center' },
		flexDirection: { xs: 'column', sm: 'row' },
		borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
		pt: 3,
		gap: 2,
	},
	copyright: {
		color: theme.palette.text.secondary,
		fontSize: '0.875rem',
	},
	emailContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	emailLink: {
		textDecoration: 'none',
		color: theme.palette.text.secondary,
		fontSize: '0.875rem',
		'&:hover': {
			color: 'white',
		},
	},
	columnTitle: {
		fontWeight: 600,
		color: theme.palette.text.primary,
		marginBottom: 2,
		fontSize: '1rem',
	},
	linkItem: {
		mb: 1.5,
	},
	navLink: {
		textDecoration: 'none',
		color: theme.palette.text.secondary,
		opacity: 0.7,
		fontSize: '0.9rem',
		'&:hover': {
			opacity: 1,
			color: theme.palette.secondary.main,
		},
	},
	contactItem: {
		display: 'flex',
		alignItems: 'center',
		mb: 2,
	},
	contactLink: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
		'&:hover': {
			color: theme.palette.secondary.main,
		},
	},
	emailIcon: {
		mr: 1,
		flexShrink: 0,
		color: theme.palette.text.primary,
	},
	footerLinks: {
		display: 'flex',
		gap: 2,
		mb: 1,
	},
	bottomLink: {
		textDecoration: 'none',
		color: theme.palette.text.secondary,
		'&:hover': {
			opacity: 1,
			color: theme.palette.secondary.main,
		},
	},
	blueText: {
		color: theme.palette.secondary.main,
	},
};

export default footerStyles;