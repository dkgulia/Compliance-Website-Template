import theme from '../../../../theme';

const compareStyle = {
    box: {
        padding: '0rem',
        backgroundColor: theme.palette.background.default,
    },
    innerBox: {
        maxWidth: '70rem',
        margin: '0 auto',
        textAlign: 'center' as const,
        padding: { xs: '1rem', sm: '2rem' },

    },
    title: {
        fontWeight: '600',
        fontSize: { xs: '1.2rem', sm: '2rem', md: '2rem' },
        color: theme.palette.primary.main,
        marginBottom: '1.5rem',
    },
    stepStack: {
		background: '#17171799',
        borderRadius:'1rem',
        marginBottom: '1rem',
        padding: '1rem',
        alignItems: 'center',
        border: `1px solid ${theme.palette.divider}`,
    },
    icon: {
        color: 'white',
        fontSize: '2rem',
    },
    text: {
        color: theme.palette.text.primary,
        fontSize: '1rem',
        lineHeight: 1.6,
    },
};

export default compareStyle;