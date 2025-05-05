import theme from '../../../../theme';

const caseStudyBlockStyle = {
    rootBox: {
        paddingTop: { sm: '1.5rem', xs: '1rem' },
        paddingBottom: { sm: '2rem', xs: '1.5rem' },
        marginTop: '0rem',
        backgroundColor: theme.palette.background.default,
        px: { xs: 2, sm: 4 },
    },
    container: {
        maxWidth: 'lg'
    },
    innerBox: {
        marginTop: '1.5rem',
        backgroundColor: "#17171799",
        padding: '1.5rem',
        borderRadius: '1rem',
        boxShadow: theme.customShadows?.card,
        border: `1px solid ${theme.palette.divider}`,
    },
    mainTitle: {
        textAlign: 'center',
        color: theme.palette.text.primary,
        fontWeight: 'bold',
        marginBottom: '0.5rem'
    },
    subTitle: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: '1rem'
    },
    headingText: {
        color: theme.palette.text.primary,
        marginBottom: '0.5rem',
        fontWeight: 'bold'
    },
    bodyText: {
        color: theme.palette.text.secondary,
        marginBottom: '1rem',
        lineHeight: 1.6
    }
};

export default caseStudyBlockStyle;