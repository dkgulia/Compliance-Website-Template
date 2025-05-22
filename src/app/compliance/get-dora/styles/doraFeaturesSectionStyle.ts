/* <ai_context>
   Styles for the DORA features section, with updated colors
</ai_context> */

import colors from '../constants/doraData'; 

const DoraFeaturesSectionStyle = {
	container: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginTop: '0rem',
		backgroundColor: colors.primary.dark,
	},
	innerBox: {
		maxWidth: '75rem',
		marginX: 'auto',
		textAlign: { xs: 'center', sm: 'center' },
		padding: { xs: '1rem', sm: '2rem' },
	},
	heading: {
		fontWeight: '700',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
		color: colors.primary.contrastText,
		marginBottom: '1rem',
	},
	gridContainer: {
		marginTop: '1rem',
	},
	card: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		textAlign:'center',
		justifyContent: 'space-between',
		backgroundColor: colors.background.dark,
		borderRadius: '1rem',
		boxShadow: '0rem 0.25rem 0.875rem rgba(0,0,0,0.4)',
		padding: '1rem',
		height: '100%',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.03)',
			boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
		},
	},
	iconWrapper: {
		width: '3rem',
		height: '3rem',
		backgroundColor: colors.primary.main,
		borderRadius: '50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.4)',
		marginBottom: '1rem',
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},
	cardTitle: {
		fontWeight: 'bold',
		color: colors.primary.contrastText,
		marginBottom: '0.5rem',
		fontSize: '1.1rem',
		textAlign:'center'
	},
	cardDescription: {
		color: colors.secondary.medium,
		fontSize: '0.95rem',
		lineHeight: 1.6,
	},
};

export default DoraFeaturesSectionStyle;