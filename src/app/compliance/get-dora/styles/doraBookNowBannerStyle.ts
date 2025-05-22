/* <ai_context>
   Style for the Book Now banner on DORA page
   Unified with the limited color palette
</ai_context> */

import colors from '../constants/doraData';

const doraBookNowBannerStyle = {
	container: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginTop: '0rem',
		backgroundColor: colors.primary.dark,
	},
	bannerContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		background: colors.secondary.gradient,
		borderRadius: { xs: '0rem', md: '2rem' },
		width: '100%',
		maxWidth: '75rem',
		marginX: 'auto',
		paddingX: { xs: '1rem', sm: '2rem' },
		paddingY: '2rem',
		position: 'relative',
		flexDirection: { xs: 'column', sm: 'row' },
		textAlign: { xs: 'center', sm: 'center' },
		gap: '1rem',
	},
	textContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: { xs: 'center', sm: 'center' },
		width: '100%',
	},
	heading: {
		fontWeight: '700',
		color: colors.secondary.contrastText,
		marginBottom: '1rem',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
	},
	description: {
		color: colors.secondary.contrastText,
		marginBottom: '1.5rem',
		fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
		lineHeight: '1.6',
		width: { xs: '100%', sm: '90%' },
	},
	button: {
		color: colors.primary.contrastText,
		fontWeight: '600',
		fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
		paddingX: '2rem',
		paddingY: '0.8rem',
		borderRadius: '2rem',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		background: colors.primary.gradient,
		transition: 'all 0.3s ease',
		'&:hover': {
			background: 'linear-gradient(135deg, #004A99, #003776)', // Custom gradient not in colors object
			boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
		},
	},
};

export default doraBookNowBannerStyle;