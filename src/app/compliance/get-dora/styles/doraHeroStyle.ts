/* <ai_context>
   Updated hero section style for DORA,
   using only #003399, #FFCC00, #00D4FD, #0062A7, black, white
</ai_context> */

import colors from '../constants/doraData';

const DoraHeroStyle = {
	container: {
		paddingTop: { sm: '4rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		background: colors.primary.gradient,
	},
	containerBox: {
		display: 'flex',
		flexDirection: { xs: 'column-reverse', md: 'row' },
		justifyContent: 'space-between',
		alignItems: 'center',
		maxWidth: '75rem',
		width: '100%',
		margin: '0 auto',
		gap: { xs: '1.5rem', sm: '2rem' },
		padding: { xs: '2rem 1rem', sm: '3rem 2rem' },
	},
	contentBox: {
		flex: 1,
		textAlign: { xs: 'center', md: 'left' },
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		alignItems: { xs: 'center', md: 'flex-start' },
	},
	tagline: {
		display: 'inline-block',
		padding: '0.4rem 1rem',
		borderRadius: '1.3rem',
		fontSize: '0.9rem',
		marginBottom: '1rem',
		background: colors.primary.main,
		color: colors.secondary.main,
		fontWeight: 'bold',
		width: { xs: 'auto', sm: '45%' },
		textAlign: 'center',
		whiteSpace: 'nowrap',
	},
	title: {
		fontSize: { xs: '1.8rem', sm: '2rem', md: '2.4rem' },
		fontWeight: 'bold',
		color: colors.primary.contrastText,
		lineHeight: 1.3,
	},
	subtitle: {
		fontSize: { xs: '1rem', md: '1.1rem' },
		color: colors.secondary.main,
		lineHeight: 1.6,
	},
	listContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5rem',
		marginTop: '1rem',
	},
	listItem: {
		fontSize: '1rem',
		lineHeight: 1.6,
		color: colors.primary.contrastText,
	},
	ctaButton: {
		marginTop: '1rem',
		alignSelf: { xs: 'center', md: 'flex-start' },
		textTransform: 'none',
		fontWeight: 'bold',
		fontSize: '1rem',
		padding: '0.8rem 1.6rem',
		borderRadius: '2rem',
		background: colors.primary.buttonGradient,
		color: colors.secondary.contrastText,
		'&:hover': {
			background: colors.primary.buttonHoverGradient,
		},
	},
	imageBox: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: { xs: '1rem', sm: '2rem' },
		marginTop: { xs: '2rem', sm: '2rem' },

		img: {
			width: { xs: '80%', sm: '100%' },
			maxWidth: '400px',
			height: 'auto',
		},
	},
	image: {
		width: '100%',
		maxWidth: '28rem',
		borderRadius: '1rem',
		boxShadow: '0rem 0.25rem 0.625rem rgba(0,0,0,0.4)',
	},
};

export default DoraHeroStyle;
