import theme from '../../../theme';

const offerBannerStyle = {
    section: {
        paddingTop: { sm: '3rem', xs: '2rem' },
        paddingBottom: { sm: '3rem', xs: '2rem' },
        backgroundColor: theme.palette.primary.main,
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)',
        backgroundSize: '20px 20px',
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
        color: theme.palette.primary.contrastText,
        marginBottom: '0.5rem',
    },
    subtitle: {
        fontSize: { xs: '1rem', sm: '1.1rem' },
        color: theme.palette.primary.contrastText,
        opacity: 0.9,
    },
};

export default offerBannerStyle;