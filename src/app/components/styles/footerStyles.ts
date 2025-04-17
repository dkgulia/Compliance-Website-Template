const footerStyles = {
	mainContainer: {
		backgroundColor: '#ffffff',
		color: '#333333',
		pt: 6,
		pb: 3,
	},
	logoSection: {
		mb: { xs: 3, md: 0 },
		pr: { md: 8 },
	},
	logoContainer: {
		mb: 4,
	},
	logo: {
		height: 'auto',
		filter: 'invert(1)',
	},
	addressContainer: {
		display: 'flex',
		mb: 3,
	},
	icon: {
		mr: 1,
		mt: 0.5,
		flexShrink: 0,
		color: '#333333',
	},
	companyName: {
		fontWeight: 500,
		mb: 1,
		color: '#333333',
	},
	addressLine: {
		mb: 0.5,
		color: '#333333',
	},
	contactItem: {
		display: 'flex',
		alignItems: 'center',
		mb: 2,
	},
	contactLink: {
		textDecoration: 'none',
		color: '#333333',
		'&:hover': {},
	},
	emailIcon: {
		mr: 1,
		flexShrink: 0,
		color: '#333333',
	},
	emailLink: {
		textDecoration: 'none',
		'&:hover': {
			opacity: 0.8,
		},
	},
	socialContainer: {
		display: 'flex',
		gap: 2,
		mb: 3,
	},
	socialLink: {
		color: '#5eead4',
		'&:hover': {
			opacity: 0.8,
		},
	},
	columnTitle: {
		fontWeight: 600,
		color: '#333333',
	},
	linkItem: {
		mb: 1.5,
	},
	navLink: {
		textDecoration: 'none',
		color: '#333333',
		opacity: 0.7,
		'&:hover': {
			opacity: 1,
			color: '#000000',
		},
	},
	footerBottom: {
		borderTop: '1px solid rgba(0, 0, 0, 0.1)',
		mt: 5,
		pt: 3,
		display: 'flex',
		flexDirection: 'column',
	},
	footerLinks: {
		display: 'flex',
		gap: 2,
		mb: 1,
	},
	bottomLink: {
		textDecoration: 'none',
		color: '#333333',
		'&:hover': {
			opacity: 0.8,
		},
	},
	divider: {
		opacity: 0.5,
	},
	copyright: {
		opacity: 0.7,
		color: '#333333',
	},
	blueText: {},
};

export default footerStyles;
