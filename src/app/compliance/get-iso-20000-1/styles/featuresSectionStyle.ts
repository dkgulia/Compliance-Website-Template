// hipaaHeroSectionStyles.ts
import theme from '../../../../theme';

const featuresSectionStyle = {
    box: {
        paddingTop: { xs: '1rem', sm: '2rem' },
        paddingBottom: { xs: '1rem', sm: '2rem' },
        marginTop: '0rem',
        backgroundColor: theme.palette.background.default,
    },
    container: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        marginX: 'auto',
        maxWidth: '75rem',
    },
    containerBox: {
        textAlign: 'center' as const,
        width: '100%',
        maxWidth: '60rem',
        marginX: 'auto',
        marginBottom: '2rem',
    },
    heading: {
        fontWeight: 600,
        fontSize: { xs: '1.6rem', sm: '2rem' },
        color: theme.palette.text.primary,
        paddingBottom: { sm: '1rem', xs: '0.5rem' },
    },
    subheading: {
        color: theme.palette.text.muted,
        marginBottom: '1rem',
        fontSize: { xs: '1rem', md: '1.2rem' },
    },
    card: {
        display: 'flex',
        flexDirection: 'column' as const,
        backgroundColor: '#17171799',
        borderRadius: '1rem',
        boxShadow: theme.customShadows?.card,
        height: '100%',
        minHeight: '220px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: `1px solid ${theme.palette.divider}`,
        padding: '0.5rem',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '1.5rem !important',
        width: '100%',
        height: '100%',
    },
    iconContainer: {
        width: '3rem',
        height: '3rem',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    stepContainer: {
        display: 'flex',
        borderRadius: '6px',
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
        padding: '1rem',
        height: '100%',
        border: `1px solid ${theme.palette.divider}`,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
    },
    featureTitle: {
        fontSize: { xs: '1.1rem', md: '1rem' },
        fontWeight: '600',
        color: theme.palette.primary.main,
        textAlign: 'left' as const,
        marginBottom: '0.75rem',
    },
    featureDesc: {
        fontSize: '1rem',
        color: theme.palette.text.secondary,
        textAlign: 'left' as const,
        lineHeight: 1.6,
    },
};

export default featuresSectionStyle;
