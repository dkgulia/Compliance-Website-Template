import theme from '../../../theme';

const offerBannerStyle = {
    section: {
        paddingTop: { sm: '3rem', xs: '2rem' },
        paddingBottom: { sm: '3rem', xs: '2rem' },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',

    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: '0 1rem', sm: '0 2rem' },
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
    },
    title: {
        fontSize: { xs: '1.4rem', sm: '1.8rem',md:'2rem' },
        fontWeight: 600,
        color: theme.palette.text.primary,
        marginBottom: '0.5rem',
        position: 'relative',
        display: 'inline-block',

    },
    subtitle: {
        fontSize: { xs: '1rem', sm: '1.1rem' },
        color: theme.palette.text.secondary,
        opacity: 0.9,
        marginTop: '0.5rem',
    },
};

export default offerBannerStyle;