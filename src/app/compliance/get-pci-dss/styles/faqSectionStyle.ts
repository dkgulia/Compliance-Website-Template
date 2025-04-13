import theme from '../../../../theme';

const faqSectionStyle = {
	box: {
		paddingTop: { sm: '1.5rem', xs: '1rem' },
		paddingBottom: { sm: '2rem', xs: '1.5rem' },
		backgroundColor: theme.palette.background.default,
	},
	section: {
		borderRadius: '8px',
		maxWidth: '800px',
		margin: '0 auto',
		padding: { xs: '0 1rem', sm: '0 2rem' },
	},
	title: {
		fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: 600,
		textAlign: 'center' as const,
		marginBottom: '1.5rem',
		color: theme.palette.text.primary,
	},
	accordionContainer: {
		display: 'flex',
		flexDirection: 'column' as const,
		gap: '1rem',
	},
	accordionSummary: {
		borderRadius: '0.5rem',
		backgroundColor: theme.palette.background.paper,
		'& .MuiAccordionSummary-content': {
			color: theme.palette.primary.light,
			fontWeight: 500,
		},
		'&.Mui-expanded': {
			borderBottom: `1px solid ${theme.palette.divider}`,
		},
	},
	accordionDetails: {
		padding: '1rem',
		borderRadius: '0 0 0.5rem 0.5rem',
		fontSize: { xs: '0.9rem', sm: '1rem' },
		lineHeight: 1.5,
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
	},
};

export default faqSectionStyle;