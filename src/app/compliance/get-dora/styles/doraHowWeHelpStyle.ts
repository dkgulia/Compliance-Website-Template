/* <ai_context>
   Style for the "How IgniPC Helps with DORA" section
   Restricted color palette
</ai_context> */

import colors from '../constants/doraData';

const doraHowWeHelpStyle = {
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	container: {
		backgroundColor: colors.primary.dark,
		padding:'2rem'
	},
	innerContainer: {
		maxWidth: '75rem',
		textAlign: { xs: 'center', sm: 'center' },
	},
	title: {
		fontWeight: '700',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
		color: colors.primary.contrastText,
		marginBottom: '1rem',
	},
	subtitle: {
		color: colors.secondary.medium,
		fontSize: '1rem',
		lineHeight: 1.6,
		marginBottom: '2rem',
	},
	grid: {
		marginTop: '1rem',
	},
	card: {
		backgroundColor: colors.background.dark,
		borderRadius: '1rem',
		boxShadow: '0rem 0.25rem 0.875rem rgba(0,0,0,0.4)',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'scale(1.02)',
			boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
		},
	},
	cardTitle: {
		fontWeight: 'bold',
		color: colors.primary.contrastText,
		fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
		width: '100%',
		textAlign: 'left',
	},
	cardDescription: {
		color: colors.secondary.medium,
		fontSize: { xs: '0.8rem', sm: '1.1rem', md: '1rem' },
		lineHeight: 1.6,
		width: '100%',
		textAlign: 'left',
	},
};

export default doraHowWeHelpStyle;