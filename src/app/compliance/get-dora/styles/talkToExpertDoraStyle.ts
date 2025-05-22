/* <ai_context>
   Styles for the final CTA or "Talk to an Expert" for DORA
   Recolored with limited palette
</ai_context> */

import colors from '../constants/doraData';

const talkToExpertDoraStyle = {
	container: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		marginTop: '0rem',
        padding:'2rem',
		backgroundColor: colors.primary.dark,
	},
	innerBox: {
		maxWidth: '75rem',
		marginX: 'auto',
		textAlign: { xs: 'center', sm: 'left' },
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		padding: { xs: '1rem', sm: '2rem' },
		background: colors.secondary.gradient,
		borderRadius: { xs: '0rem', md: '2rem' },
	},
	title: {
		fontWeight: '700',
		color: colors.secondary.contrastText,
		marginBottom: '1rem',
		fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
		textAlign:'center'
	},
	subtitle: {
		color: colors.secondary.contrastText,
		fontSize: { xs: '0.95rem', sm: '1rem' },
		lineHeight: 1.6,
		marginBottom: '1.5rem',
	},
	gridContainer: {
		marginTop: '0.5rem',
	},
	card: {
		backgroundColor: colors.background.dark,
		borderRadius: '1rem',
		boxShadow: '0rem 0.25rem 0.875rem rgba(0,0,0,0.4)',
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
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
		fontSize: '1.2rem',
		marginBottom: '0.5rem',
	},
	divider: {
		opacity: 0.2,
		borderColor: '#333333',
		marginY: '0.75rem',
	},
	cardDescription: {
		color: colors.secondary.medium,
		fontSize: '0.95rem',
		lineHeight: 1.6,
	},
	button: {
		textTransform: 'none',
		fontWeight: 'bold',
		background: colors.secondary.main,
		color: colors.secondary.contrastText,
		borderRadius: '2rem',
		border: `1px solid ${colors.secondary.main} !important`,
		'&:hover': {
			background: colors.background.dark,
			borderColor: colors.secondary.main,
			color: colors.primary.contrastText,
		},
	},
	buttonOutlined: {
		textTransform: 'none',
		fontWeight: 'bold',
		color: colors.secondary.main,
		borderColor: colors.secondary.main,
		borderRadius: '2rem',
		'&:hover': {
			backgroundColor: 'rgba(255, 204, 0, 0.15)',
			borderColor: colors.secondary.main,
		},
	},
};

export default talkToExpertDoraStyle;