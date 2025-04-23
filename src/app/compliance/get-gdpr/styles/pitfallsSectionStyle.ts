import theme from '../../../../theme';

const pitfallsSectionStyle = {
    container: {
        backgroundColor: theme.palette.background.default,
        padding: { xs: '2rem 1rem', md: '4rem 1rem' },
        position: 'relative',
    },
    headerContainer: {
        textAlign: 'center',
        marginBottom: { xs: '3rem', md: '4rem' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: { xs: '1.4rem', sm: '2rem' },
		fontWeight: '600',
        lineHeight: 1,
        marginBottom: '1rem',
    },
    sectionSubtitle: {
        color: '#6B7280',
        fontSize: { xs: '1.1rem', md: '1.2rem' },
        lineHeight: 1,
        maxWidth: '700px',
        margin: '0 auto',
    },
    pitfallsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        maxWidth: '950px',
        margin: '0 auto',
    },
    pitfallItem: {
		background: '#17171799',
        borderRadius: '16px',
        padding: { xs: '1.5rem', md: '2.5rem' },
		border: `1px solid ${theme.palette.divider}`,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            borderColor: theme.palette.secondary.main,
        },
    },
    pitfallHeader: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '1.5rem',
        gap: '1.5rem',
    },
    warningIconContainer: {
        width: '80px',
        height: '80px',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        backgroundColor: '#115e59',
    },
    warningIcon: {
        width: '48px',
        height: '48px',
        objectFit: 'contain' as const,
    },
    pitfallContent: {
        flex: 1,
    },
    pitfallTitle: {
        color: theme.palette.text.primary,
        fontSize: { xs: '1.3rem', md: '1.5rem' },
        fontWeight: 600,
        marginBottom: '0.75rem',
    },
    pitfallText: {
		color: '#6B7280',
        fontSize: '1.1rem',
        lineHeight: 1,
    },
    mitigationContainer: {
        padding: '1.5rem',
        borderRadius: '12px',
        border: `1px solid ${theme.palette.divider}`,

        marginTop: '1.5rem',
    },

    checkIcon: {
        width: '24px',
        height: '24px',
        objectFit: 'contain' as const,
    },
    mitigationTitle: {
        color: theme.palette.text.primary,
        fontSize: '1.2rem',
        fontWeight: 600,
        marginBottom: '0.75rem',
    },
    mitigationText: {
        color: '#4b5563',
        fontSize: '1.1rem',
        lineHeight: 1.7,
    },
};

export default pitfallsSectionStyle;