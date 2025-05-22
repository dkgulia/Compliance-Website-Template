/* <ai_context>
   Styles for DORA scope section, made consistent with dark background and white text.
</ai_context> */

import colors from '../constants/doraData';

const DoraScopeStyle = {
	container: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		backgroundColor: colors.primary.dark,
	},
	innerBox: {
		maxWidth: '72rem',
		margin: '0 auto',
		textAlign: { xs: 'center', sm: 'left' },
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		padding: { xs: '1rem', sm: '2rem' },
		background: colors.secondary.gradient,
		borderRadius: { xs: '0rem', md: '2rem' },
	},
	heading: {
		fontWeight: '700',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
		color: colors.secondary.contrastText,
		textAlign: 'center',
		lineHeight: { xs: '1.3', sm: '1.4' },
	},
	description: {
		color: colors.secondary.contrastText,
		fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
		lineHeight: { xs: '1.5', sm: '1.6', md: '1.8' },
	},
};

export default DoraScopeStyle;