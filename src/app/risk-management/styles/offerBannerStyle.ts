import theme from '../../../theme';

const offerBannerStyle = {
    container: {
        paddingBottom: { sm: '3rem', xs: '2rem' },
        backgroundColor: theme.palette.background.default,
    },
    innerBox: {
        maxWidth: '75rem',
        marginX: 'auto',
        textAlign: 'center',
        padding: { xs: '1rem', sm: '2rem' },
    },
    heading: {
        fontSize: { xs: '1.6rem', sm: '2rem' },
        fontWeight: '600',
        color: theme.palette.text.primary,
        marginBottom: '0.5rem',
    },
    subtitle: {
        fontSize: { xs: '1rem', md: '1.1rem' },
        color: theme.palette.text.primary,
        opacity: 0.9,
    },
    highlightText: {
        fontWeight: 'bold',
        position: 'relative',
        display: 'inline-block',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-3px',
            left: '0',
            width: '100%',
            height: '2px',
            backgroundColor: theme.palette.text.primary,
        },
    },
    icon: {
        fontSize: '2.5rem',
        color: theme.palette.text.primary,
        marginBottom: '1rem',
    },
};

export default offerBannerStyle;