import theme from '../../../../theme'; 

const faqSectionStyle = {
	box: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		marginX: { xs: '1rem', sm: '0rem' },
		background: theme.palette.background.default,
	},
	section: {
		padding: '1rem',
		borderRadius: '8px',
		maxWidth: '75rem',
		margin: '0 auto',
	},
	title: {
		fontSize: { xs: '1.8rem', sm: '2.2rem' },
		fontWeight: '700' as const,
		textAlign: 'center' as const,
		marginBottom: '0.5rem',
		color: theme.palette.text.primary,
	},
	subtitle: {
		fontWeight: '500',
		fontSize: { xs: '1.1rem', sm: '1.2rem' },
		color: theme.palette.primary.main,
		textAlign: 'center' as const,
		marginBottom: '1.5rem',
	},
	accordionContainer: {
		display: 'flex',
		flexDirection: 'column' as const,
		gap: '1rem',
		maxWidth: '900px',
		margin: '0 auto',
	},
	accordion: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: '1rem !important',
		overflow: 'hidden',
		border: `1px solid ${theme.palette.divider}`,
		boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.15)',
		'&:before': {
			display: 'none',
		},
		'&.Mui-expanded': {
			margin: '0',
			marginBottom: '1rem',
		},
	},
	accordionSummary: {
		padding: { xs: '0.4rem 1rem', sm: '0.5rem 1.5rem' },
		'&.Mui-expanded': {
			borderBottom: `1px solid ${theme.palette.divider}`,
			backgroundColor: theme.palette.background.paper,
		},
	},
	questionText: {
		fontWeight: '600',
		color: theme.palette.primary.light,
		fontSize: { xs: '0.95rem', sm: '1.05rem' },
	},
	expandIcon: {
		color: theme.palette.primary.main,
	},
	accordionDetails: {
		padding: '1rem 1.5rem',
		backgroundColor: theme.palette.background.paper,
	},
	answerText: {
		fontSize: { xs: '0.9rem', sm: '1rem' },
		lineHeight: '1.6',
		color: theme.palette.text.secondary,
	},
};

export default faqSectionStyle;