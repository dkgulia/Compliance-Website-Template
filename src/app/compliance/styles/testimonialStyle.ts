import theme from '../../../theme';

const testimonialsCarouselStyles = {
	box:{
		background: theme.palette.background.default,
		paddingTop: '1.5rem',
		paddingBottom: '3rem',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '1rem',
		color: theme.palette.text.primary,
	},
	sectionTitle: {
		fontWeight: 'bold',
		color: theme.palette.text.primary,
		textAlign: 'center',
		fontSize: { xs: '1.5rem', sm: '2rem' },
		marginBottom: '1.5rem',
	},
	carouselContainer: {
		width: '100%',
		padding: '0 1rem',
		marginTop: '1.5rem',
	},
	cardContainer: {
		display: 'flex',
		justifyContent: 'center',
		padding: '0.5rem',
		marginTop: '0.5rem',
	},
	testimonialCard: {
		width: '100%',
		maxWidth: 320,
		height: 650,
		borderRadius: '16px',
		backgroundColor: theme.palette.background.paper,
		backdropFilter: 'blur(10px)',
		padding: '2rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		textAlign: 'center',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
	},
	quoteIcon: {
		fontSize: '2.5rem',
		color: theme.palette.primary.main,
		marginBottom: '1.5rem',
	},
	quoteText: {
		fontStyle: 'italic',
		color: theme.palette.text.primary,
		textAlign: 'center',
		marginBottom: 'auto',
		lineHeight: '1.6',
		fontSize: '1rem',
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
	},
	authorContainer: {
		marginTop: '1.5rem',
		textAlign: 'center',
		alignSelf: 'flex-end',
		width: '100%',
	},
	authorName: {
		fontWeight: 'bold',
		color: theme.palette.primary.main,
		fontSize: '1rem',
	},
	arrowButtons: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '2rem',
		gap: '1rem',
	},
	arrowButton: {
		backgroundColor: 'transparent',
		color: theme.palette.text.primary,
		transition: 'background-color 0.2s ease',
		'&:hover': {
			backgroundColor: theme.palette.background.paper,
		},
		borderRadius: '50%',
		padding: '0.5rem',
		boxShadow: theme.customShadows?.card,
	},
};

export default testimonialsCarouselStyles;