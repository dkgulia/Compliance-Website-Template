import theme from '../../../theme';

const createFaqSectionStyle = ({
    section: {
        paddingTop: { sm: '4rem', xs: '2rem' },
        paddingBottom: { sm: '4rem', xs: '2rem' },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginX: 'auto',
        maxWidth: '1200px',
        px: { xs: '1rem', sm: '2rem' },
        position: 'relative',
        zIndex: 1,
    },
    header: {
        textAlign: 'center',
        width: '100%',
        maxWidth: '60rem',
        marginX: 'auto',
        marginBottom: '3rem',
    },
    title: {
        fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem' },
        fontWeight: 600,
        textAlign: 'center',
        color: theme.palette.text.primary,
        position: 'relative',
        paddingBottom: '1rem',
    },
    subtitle: {
        color: theme.palette.text.secondary,
        fontSize: { xs: '1rem', md: '1.1rem' },
        lineHeight: '1.6',
        maxWidth: '40rem',
        marginX: 'auto',
    },
    faqContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#17171799',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '1rem',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '1200px',
    },
    accordionRoot: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:before': {
            display: 'none',
        },
        '&.Mui-expanded': {
            margin: 0,
        },
        borderBottom: `1px solid ${theme.palette.divider}`,
        '&:last-child': {
            borderBottom: 'none',
        },
    },
    accordionSummary: {
        padding: '1.25rem 1.5rem',
        backgroundColor: 'transparent',
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
        backgroundColor: '#171717',
        color: theme.palette.text.secondary,
        borderTop: `1px solid ${theme.palette.divider}`,
    },
    question: {
        fontSize: '1rem',
        fontWeight: 500,
        color: theme.palette.text.primary,
    },
    answer: {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: theme.palette.text.secondary,
    },
    expandIcon: {
        color: theme.palette.text.primary,
        fontSize: '1.25rem',
        transform: 'rotate(0deg)',
        '&.Mui-expanded': {
            transform: 'rotate(45deg)',
        },
    },
});

export default createFaqSectionStyle;