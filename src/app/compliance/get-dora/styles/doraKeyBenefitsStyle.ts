/* <ai_context>
   We are re-styling "Key Benefits" to have a consistent dark background, white text, and a unified check icon color.
</ai_context> */

import colors from '../constants/doraData'; // Update this path to match your actual file structure

const DoraKeyBenefitsStyle = {
	outerContainer: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginTop: '0rem',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primary.dark,
	},
	contentBox: {
		maxWidth: '60rem',
		width: '100%',
		padding: { xs: '1rem', sm: '2rem' },
		margin: '0 auto',
		textAlign: { xs: 'center', sm: 'left' },
	},
	headline: {
		fontWeight: '700',
		color: colors.primary.contrastText,
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
		marginBottom: '1.5rem',
		textAlign:'center'
	},
	bulletList: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	},
	bulletItem: {
		display: 'flex',
		flexDirection: { xs: 'column', sm: 'row' },
		alignItems: { xs: 'flex-start', sm: 'center' },
		background: colors.background.dark,
		padding: '1rem',
		borderRadius: '0.5rem',
		boxShadow: '0rem 0.25rem 0.625rem rgba(0,0,0,0.2)',
		textAlign: 'left',
		gap: '0.8rem',
	},
	checkIcon: {
		color: colors.highlight.main,
		fontSize: { xs: '1.2rem', sm: '1.5rem' },
	},
	bulletText: {
		color: colors.primary.contrastText,
		fontSize: { xs: '0.9rem', sm: '1rem' },
		lineHeight: 1.5,
	},
};

export default DoraKeyBenefitsStyle;