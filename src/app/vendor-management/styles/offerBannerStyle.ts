import theme from '../../../theme';

const offerBannerStyle = {
    section: {
        paddingTop: { sm: '3rem', xs: '2rem' },
        paddingBottom: { sm: '3rem', xs: '2rem' },
        backgroundColor: theme.palette.background.default,

    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: '0 1rem', sm: '0 2rem' },
        textAlign: 'center',
    },
    title: {
        fontSize: { xs: '1.4rem', sm: '1.8rem' },
        fontWeight: 700,
        color: 'white',
        marginBottom: '0.5rem',
    },
    subtitle: {
        fontSize: { xs: '1rem', sm: '1.1rem' },
        color: 'white',
        opacity: 0.9,
    },
};

export default offerBannerStyle;