import theme from '../../../../theme';


const bannerStyle = {
	box: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		marginTop: '0rem',
		// marginX: { xs: '1rem', sm: '0rem' },
		backgroundColor: theme.palette.background.default,
	},
	bannerContainer: {
		background: theme.palette.background.paper,
		borderRadius: '2rem',
		width: '100%',
		maxWidth: '72rem',
		marginX: 'auto',
		padding: { xs: '2rem', sm: '3rem' },
		boxShadow: theme.customShadows?.card,
		overflow: 'hidden',
	},
	imageContainer: {
		display: 'flex',
		justifyContent: { xs: 'center', md: 'flex-start' },
		alignItems: 'center',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	titleSection: {
		width: '100%',
		marginTop:'1rem'
	},
	descriptionSection: {
		width: '100%',
	},
	buttonSection: {
		width: '100%',
	},
	heading: {
		fontWeight: '600',
		color: theme.palette.text.primary,
		fontSize: { xs: '1.6rem', sm: '2rem' },
		marginBottom: { xs: '1rem', md: '0' },
		lineHeight: 1.3,
	},
	description: {

		color: theme.palette.text.secondary,
		fontSize: { xs: '1rem', md: '1rem' },
		lineHeight: '1.6',
		width: '100%',
		marginBottom: { xs: '1.5rem', md: '0' },
	},
	button: {
		fontWeight: 'bold',
		padding: '0.8rem 1.5rem',
		borderRadius: '0.5rem',
		color: '#ffffff',
		background: theme.palette.primary.main,
		boxShadow: theme.customShadows?.button,
		'&:hover': {
			background: theme.palette.primary.dark,
			boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
			transform: 'translateY(-0.125rem)',
		},
		width: { xs: '100%', sm: 'auto' },
	},
	iconWrapper: {
		width: { xs: '180px', md: '450px' },
		height: { xs: '180px', md: '200px' },
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		fontSize: '2.5rem',
		color: theme.palette.text.primary,
		width: '100%',
		height: '100%',
	},
};

export default bannerStyle;