import theme from '../../../../theme';

const scopeSectionStyle = {
    container: {
        backgroundColor: theme.palette.background.default,
        padding: '5px',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '3rem'
    },
    sectionTitle: {
        color: theme.palette.text.primary,
        fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
        lineHeight: 1.2,
        marginBottom: '0.5rem',
    },
    sectionSubtitle: {
        color: '#6B7280',
        fontSize: { xs: '1rem', md: '1.1rem' },
        fontWeight: 500,
        marginBottom: '0.5rem',
    },
    contentHeading: {
		color: '#115e59',
        fontSize: { xs: '1.4rem', md: '1.6rem' },
        fontWeight: 600,
        marginBottom: '0.75rem',
    },
    contentDescription: {
        color: '#6B7280',
        fontSize: '1rem',
        lineHeight: 1.7,
        maxWidth: '95%',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginTop:'1rem'
    },
    imageWrapper: {
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '0rem',
        overflow: 'hidden',
        position: 'relative',
    },
    imageStyle: {
        objectFit: 'cover' as const,
        borderRadius: '50%',
        filter: 'brightness(0) invert(1)',
    },
    iconCaption: {
        color: '#6B7280',
        fontSize: '0.9rem',
        fontWeight: 500,
    },
    applicabilityContainer: {
        marginTop: { xs: '2.5rem', md: '3.5rem' },
    },
    applicabilityCard: {
        backgroundColor: theme.palette.background.darkTransparent,
        height: '90%',
        borderRadius: '6px',
        transition: 'all 0.3s ease',
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.customShadows?.card,
        '&:hover': {
            borderColor: theme.palette.secondary.main,
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            '& .MuiBox-root': {
                backgroundColor: '#115e59',
            }
        }
    },
    cardContent: {
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    iconContainer: {
        width: '38px',
        height: '38px',
        borderRadius: '8px',
        backgroundColor: '#134e4a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
        transition: 'background-color 0.3s ease',
    },
    cardIcon: {
        fontSize: '20px',
        color: 'white',
    },
    applicabilityTitle: {
        color: theme.palette.text.primary,
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '0.75rem',
        textAlign: 'left',
    },
    applicabilityText: {
        color: '#6B7280',
        fontSize: '0.95rem',
        lineHeight: 1.6,
        textAlign: 'left',
    },
};

export default scopeSectionStyle;