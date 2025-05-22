/* <ai_context>
   Styles for the 3-Step Roadmap for DORA
   Recolored for the limited palette
</ai_context> */

import colors from '../constants/doraData';

const DoraRoadmapStyle = {
	container: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginTop: '0rem',
		backgroundColor: colors.primary.dark,
	},
	innerBox: {
		maxWidth: '75rem',
		marginX: 'auto',
		marginTop: '1rem',
		textAlign: { xs: 'center', sm: 'center' },
		background: colors.secondary.gradient,
		borderRadius: { xs: '0rem', md: '2rem' },
		boxShadow: '0rem 0.25rem 0.625rem rgba(0,0,0,0.4)',
		padding: { xs: '1rem', sm: '2rem' },
	},
	heading: {
		fontWeight: '700',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
		marginBottom: '1.5rem',
		color: colors.secondary.contrastText,
	},
	gridContainer: {
		marginTop: '1rem',
	},
	card: {
		backgroundColor: colors.background.dark,
		borderRadius: '1rem',
		boxShadow: '0rem 0.25rem 0.875rem rgba(0,0,0,0.4)',
		padding: '1rem',
		height: '100%',
		transition: 'transform 0.3s ease, box-shadow 0.3s ease',
		'&:hover': {
			transform: 'translateY(-0.25rem)',
			boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
		},
	},
	cardTitle: {
		fontWeight: 'bold',
		color: colors.secondary.main,
		marginBottom: '0.5rem',
		fontSize: '1.1rem',
	},
	cardDescription: {
		color: colors.secondary.medium,
		fontSize: '0.95rem',
		lineHeight: 1.6,
	},
};

export default DoraRoadmapStyle;
