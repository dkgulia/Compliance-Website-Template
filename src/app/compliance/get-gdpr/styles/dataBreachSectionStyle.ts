import theme from '../../../../theme';

const dataBreachSectionStyle = {
    container: {
        padding: '5px',
        backgroundColor: theme.palette.background.default,
        marginX: { xs: '1rem', sm: '0rem' },
        borderRadius: '1rem',
    },
    innerBox: {
        maxWidth: '75rem',
        marginX: 'auto',
        padding: { xs: '1rem', sm: '2rem' },
        textAlign: 'center' as const,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
        backgroundColor: theme.palette.background.darkTransparent,
        borderRadius: '1rem',
        boxShadow: theme.customShadows?.card,
        border: `1px solid ${theme.palette.divider}`,
    },
    heading: {
        fontWeight: 700,
        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.2rem' },
        color: theme.palette.text.primary,
    },
    subHeading: {
        color: '#6B7280',
        fontSize: '1rem',
        lineHeight: 1.6,
    },
    ctaButton: {
        marginTop: '1rem',
        alignSelf: 'center',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        padding: '0.8rem 1.6rem',
        borderRadius: '2rem',
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.secondary.main}`,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.background.default,
        },
    },
};

export default dataBreachSectionStyle;