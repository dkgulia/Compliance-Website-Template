import theme from '../../../../theme';

const legalBasisSectionStyle = {
    container: {
        backgroundColor: theme.palette.background.default,
        padding: '5px',
    },
    headerContainer: {
        textAlign: 'center',
        marginBottom: { xs: '2rem', md: '3rem' },
        marginTop: '3rem'
    },
    sectionTitle: {
        fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
        lineHeight: 1.2,
        marginBottom: '0.75rem',
    },
    sectionSubtitle: {
        color: '#6B7280',
        fontSize: { xs: '1rem', md: '1.1rem' },
        lineHeight: 1.5,
        maxWidth: '700px',
        margin: '0 auto',
    },
    featuresGrid: {
        display: 'flex',
        justifyContent: 'center',
    },
    featureCard: {
        height: '100%',
        backgroundColor: theme.palette.background.darkTransparent,
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.customShadows?.card,
        '&:hover': {
            borderColor: theme.palette.secondary.main,
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        },
    },
    cardContent: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
        textAlign: 'left',
    },
    iconContainer: {
        backgroundColor: '#115e59',
        width: '70px',
        height: '70px',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
        padding: '8px',
    },
    iconImage: {
        objectFit: 'contain' as const,
        width: '80%',
        height: '80%',
        filter: 'brightness(0) invert(1)',
    },
    featureTitle: {
        color: theme.palette.text.primary,
        fontSize: '1.1rem',
        fontWeight: 600,
        textAlign: 'left',
        marginBottom: '0.5rem',
        width: '100%',
    },
    featureDescription: {
        color: '#6B7280',
        fontSize: '0.95rem',
        lineHeight: 1.6,
        textAlign: 'left',
        width: '100%',
    },
};

export default legalBasisSectionStyle;