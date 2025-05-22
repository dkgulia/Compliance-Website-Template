/* <ai_context>
   Styles for DORA FAQ
   Unified color usage
</ai_context> */

import colors from '../constants/doraData';
const textColors = {
    primary: colors.primary.contrastText,
    secondary: colors.secondary.medium,
};

const faqSectionStyle = {
    container: {
		paddingTop: { sm: '1rem', xs: '0.5rem' },
		paddingBottom: { sm: '1rem', xs: '0.5rem' },
		marginTop: '0rem',
		backgroundColor: ' #003776',
	},
	innerBox: {
		maxWidth: '60rem',
		margin: '0 auto',
		textAlign: { xs: 'center', sm: 'center' },
		padding: { xs: '1rem', sm: '2rem' },
	},
    box: {
        paddingTop: { sm: '2rem', xs: '1rem' },
        paddingBottom: { sm: '2rem', xs: '1rem' },
        marginTop: '0rem',
        marginX: { xs: '1rem', sm: '0rem' },
        backgroundColor: colors.background.default,
    },
    section: {
        padding: '1rem',
        borderRadius: '8px',
        maxWidth: '75rem',
        margin: '0 auto',
    },
    title: {
        fontWeight: '700',
        fontSize: { xs: '1.2rem', sm: '2rem', md: '2.2rem' },
        marginBottom: '1.5rem',
        textAlign: 'center' as const,
        color: textColors.primary,
    },
    subtitle: {
        fontSize: '1rem',
        color: textColors.secondary,
        marginBottom: '1rem',
        textAlign: 'center' as const,
        maxWidth: '40rem',
        marginX: 'auto',
        lineHeight: 1.6,
    },
    accordionContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
        marginTop: '1rem',
    },
    accordionSummary: {
        color: textColors.primary,
        borderRadius: '0.5rem',
        padding: '0.5rem 1rem',
    },
    accordionDetails: {
        backgroundColor: colors.background.default,
        color: textColors.primary,
        borderRadius: '0.5rem',
        padding: '1rem',
        marginTop: '0.5rem',
    },
};

export default faqSectionStyle;