import { Theme } from '@mui/material/styles';

const createFaqSectionStyle = (theme: Theme) => ({
    section: {
        paddingTop: { sm: '3rem', xs: '2rem', md: '1rem' },
        paddingBottom: { sm: '6rem', xs: '4rem' },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: '300px',
            height: '300px',
            background: `radial-gradient(ellipse at center, ${theme.palette.secondary.main}10, transparent 70%)`,
            borderRadius: '50%',
            opacity: 0.5,
            zIndex: 0,
        },
    },
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: { xs: '0 1rem', sm: '0 2rem' },
        position: 'relative',
        zIndex: 1,
    },
    header: {
        marginBottom: '3rem',
        textAlign: 'center',
    },
    title: {
        fontSize: { xs: '1.8rem', sm: '32px' },
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: '0.75rem',
        color: theme.palette.text.primary,
        position: 'relative',
        paddingBottom: '1rem',
        display: 'inline-block',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4rem',
            height: '4px',
            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
            borderRadius: '2px',
        },
    },
    subtitle: {
        fontSize: { xs: '1rem', sm: '1.1rem' },
        textAlign: 'center',
        marginBottom: '2.5rem',
        color: theme.palette.text.secondary,
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    faqContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: theme.customShadows?.card,
        maxWidth: '800px',
        margin: '0 auto',
    },
    accordionContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: theme.customShadows?.card,
    },
    accordion: {
        backgroundColor: 'rgba(23, 23, 23, 0.6)',
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
        marginBottom: 0,
        borderRadius: 0,
    },
    accordionRoot: {
        backgroundColor: 'rgba(23, 23, 23, 0.6)',
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
        marginBottom: 0,
        borderRadius: 0,
    },
    accordionSummary: {
        padding: '1.25rem 1.5rem',
        backgroundColor: 'rgba(23, 23, 23, 0.6)',
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
        backgroundColor: 'rgba(23, 23, 23, 1)',
        color: theme.palette.text.secondary,
        borderTop: `1px solid ${theme.palette.divider}`,
    },
    question: {
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.palette.text.primary,
    },
    questionText: {
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.palette.text.primary,
    },
    answer: {
        fontSize: '1rem',
        color: theme.palette.text.secondary,
        lineHeight: 1.7,
        textAlign: 'left',
    },
    answerText: {
        fontSize: '1rem',
        color: theme.palette.text.secondary,
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
});

export default createFaqSectionStyle;
