import theme from '../../../../theme';

const evolutionSectionStyle = {
    box: {
        paddingTop: { xs: '1rem', sm: '2rem' },
        paddingBottom: { xs: '1rem', sm: '2rem' },
        marginTop: '0rem',
        marginX: { xs: '1rem', sm: '0rem' },
        backgroundColor: theme.palette.background.default,
    },
    innerBox: {
        maxWidth: '75rem',
        margin: '0 auto',
        textAlign: 'center' as const,
        padding: { xs: '1rem', sm: '2rem' },
    },
    title: {
        fontWeight: '700',
        fontSize: { xs: '1.6rem', sm: '2.2rem' },
        color: theme.palette.primary.main,
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: { xs: '1rem', md: '1.2rem' },
        color: theme.palette.text.secondary,
        marginBottom: '1rem',
    },
    subheading: {
        fontSize: '1rem',
        color: theme.palette.text.primary,
        marginBottom: '1.5rem',
        lineHeight: 1.6,
    },
    imageNote: {
        color: theme.palette.text.muted,
        fontStyle: 'italic',
        marginTop: '1rem',
    },
};

export default evolutionSectionStyle;