import theme from '../../../../theme';

const benefitsSectionStyle = {
    container: {
        backgroundColor: '#000000',
        padding: { xs: '3rem 1rem', md: '5rem 2rem' },
    },
    title: {
        color: '#FFFFFF',
        fontSize: { xs: '1.875rem', md: '2.25rem' },
        fontWeight: '700',
        marginBottom: '3rem',
        textAlign: 'center' as const,
    },
    featuresGrid: {
        marginTop: '1.5rem',
    },
    featureCard: {
        height: '100%',
        backgroundColor: 'rgba(17, 24, 39, 0.6)',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid rgba(75, 85, 99, 0.2)',
        overflow: 'hidden',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'rgba(31, 41, 55, 0.8)',
        },
    },
    cardContent: {
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        textAlign: 'center' as const,
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        marginBottom: '1.5rem',
    },
    featureIcon: {
        color: '#10B981',
        fontSize: '1.75rem',
    },
    featureTitle: {
        color: '#FFFFFF',
        fontWeight: '600',
        marginBottom: '0.75rem',
        fontSize: '1.125rem',
    },
    featureDescription: {
        color: '#9CA3AF',
        fontSize: '0.875rem',
        lineHeight: 1.6,
    },
};

export default benefitsSectionStyle;