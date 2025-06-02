import theme from '../../../theme';

const styles = {
	section: {
	    display: 'flex',
	    flexDirection: 'column',
	    px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
	    marginTop: { xs: '3.5rem', md: '2rem' },
	    marginBottom: { xs: '3.5rem', md: '6rem' },
	    gap: '2rem',
	    alignItems: 'center',
	    background: theme.palette.background.default,
	    position: 'relative',
	    overflow: 'hidden',
	},
	headerContainer: {
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    justifyContent: 'center',
	    gap: '0.5rem',
	    marginBottom: '3rem',
	    textAlign: 'center',
	},
	tagline: {
	    fontFamily: 'monospace',
	    fontSize: '0.875rem',
	    color: '#0d9488',
	    letterSpacing: '0.05em',
	    textTransform: 'uppercase' as const,
	},
	title: {
	    fontSize: { xs: '1.5rem', md: '1.875rem' },
	    fontWeight: 600,
	    color: theme.palette.text.primary,
	    textAlign: 'center',
	},
	subtitle: {
	    color: '#6b7280',
	    fontSize: { xs: '1rem', sm: '1.1rem' },
	    lineHeight: 1.6,
	    textAlign: 'center',
	    maxWidth: '800px',
	},
	accordionContainer: {
	    display: 'flex',
	    flexDirection: 'column',
	    backgroundColor: 'transparent',
	    border: `1px solid #374151`,
	    borderRadius: '12px',
	    overflow: 'hidden',
	    maxWidth: '1000px',
	    width: '100%',
	    zIndex: 1,
	    position: 'relative',
	},
	accordion: {
	    backgroundColor: '#171717',
	    boxShadow: 'none',
	    '&:before': {
		display: 'none',
	    },
	    '&.Mui-expanded': {
		margin: 0,
	    },
	    borderBottom: `1px solid #374151`,
	    '&:last-child': {
		borderBottom: 'none',
	    },
	    marginBottom: 0,
	    borderRadius: 0,
	},
	accordionSummary: {
	    padding: '1.25rem 1.5rem',
	    backgroundColor: '#171717',
	    minHeight: '64px',
	    '& .MuiAccordionSummary-content': {
		margin: '0',
	    },
	    '&.Mui-expanded': {
		minHeight: '64px',
	    },
	},
	accordionDetails: {
	    padding: '1.25rem 1.5rem',
	    backgroundColor: '#121212',
	    color: '#6b7280',
	    borderTop: `1px solid #374151`,
	},
	question: {
	    fontSize: '1rem',
	    fontWeight: 600,
	    color: theme.palette.text.primary,
	},
	answer: {
	    fontSize: '1rem',
	    color: '#6b7280',
	    lineHeight: 1.7,
	    textAlign: 'left',
	},
	expandIcon: {
	    color: theme.palette.text.primary,
	    fontSize: '1.25rem',
	    transform: 'rotate(0deg)',
	    '&.Mui-expanded': {
		transform: 'rotate(45deg)',
	    },
	},
    };
export default styles;
