import theme from '../../../../theme';

const offerBannerStyle = {
    container: {
        padding: { xs: '3rem 1rem', md: '4rem 2rem' },
        backgroundColor: theme.palette.success.main,
    },
    content: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        textAlign: 'center' as const,
        maxWidth: '50rem',
        margin: '0 auto',
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: '1.5rem',
    },
    icon: {
        fontSize: '2.5rem',
        color: theme.palette.primary.main,
    },
    heading: {
        color: theme.palette.primary.main,
        fontSize: { xs: '1.875rem', md: '2.25rem' },
        fontWeight: '700',
        marginBottom: '1rem',
    },
    subtitle: {
        color: theme.palette.primary.light,
        fontSize: { xs: '1rem', md: '1.125rem' },
        marginBottom: '2rem',
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.success.main,
        fontWeight: '600',
        padding: '0.75rem 2rem',
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
};

export default offerBannerStyle;