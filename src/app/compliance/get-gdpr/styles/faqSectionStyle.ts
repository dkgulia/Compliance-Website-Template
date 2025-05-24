import theme from '../../../../theme';

const faqSectionStyle = {
    container: {
        padding: '5px',
        backgroundColor: theme.palette.background.default,
        marginX: { xs: '1rem', sm: '0rem' },
    },
    innerBox: {
        maxWidth: '75rem',
        marginX: 'auto',
        padding: { xs: '1rem', sm: '2rem' },
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
        borderRadius: '1rem',
    },
    title: {
        fontSize: { xs: '1.8rem', sm: '32px' },
		fontWeight: 600,
        textAlign: 'center' as const,
        color: theme.palette.text.primary,
    },
    accordionContainer: {
        display: 'flex',
		flexDirection: 'column',
		border: `1px solid #333`,
		borderRadius: '12px',
		overflow: 'hidden',
    },
    accordionSummary: {
        backgroundColor: theme.palette.background.darkTransparent || '#17171799',

        padding: { xs: '0.4rem 0.8rem', sm: '0.5rem 1rem' },
        color: theme.palette.text.primary,
    },
    accordionDetails: {
        backgroundColor: theme.palette.background.darkTransparent || '#17171799',
        padding: '1rem',
        color: '#6B7280',
        fontSize: '0.95rem',
        lineHeight: '1.5',
        borderTop: `1px solid ${theme.palette.divider}`,
    },
};

export default faqSectionStyle;