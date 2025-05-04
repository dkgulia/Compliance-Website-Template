import theme from '../../../theme';

const offerBannerStyle = {
    section: {
        paddingTop: { sm: '3rem', xs: '2rem' },
        paddingBottom: { sm: '3rem', xs: '2rem' },
        backgroundColor: '#115e59',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(135deg, #115e5999 0%, #0d474780 50%, #07332f80 100%)`,
            opacity: 0.8,
            zIndex: 0,
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            right: '15%',
            width: '300px',
            height: '300px',
            background: `radial-gradient(ellipse at center, ${theme.palette.secondary.dark}20, transparent 70%)`,
            borderRadius: '50%',
            opacity: 0.6,
            zIndex: 0,
        },
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
        fontSize: { xs: '1.4rem', sm: '1.8rem' },
        fontWeight: 700,
        color: theme.palette.text.primary,
        marginBottom: '0.5rem',
        position: 'relative',
        display: 'inline-block',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '3px',
            background: `linear-gradient(90deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.light})`,
            borderRadius: '3px',
        },
    },
    subtitle: {
        fontSize: { xs: '1rem', sm: '1.1rem' },
        color: theme.palette.text.primary,
        opacity: 0.9,
        marginTop: '1.5rem',
    },
};

export default offerBannerStyle;