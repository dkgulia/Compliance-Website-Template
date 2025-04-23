import theme from '../../../../theme';

const gdprBookNowStyle = {
    container: {
        backgroundColor: theme.palette.background.default,
        padding: '5px',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: '2rem', md: '3rem' },
        borderRadius: '8px',
        padding: { xs: '1.5rem', sm: '2.5rem' },
    },
    imageBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        height: 'auto',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover' as const,
        borderRadius: '8px',
    },
    textBox: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    tagline: {
        display: 'inline-block',
        padding: '0.4rem 0.8rem',
        borderRadius: '1rem',
        fontSize: '0.9rem',
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.text.primary,
        fontWeight: 600,
        width: 'fit-content',
    },
    title: {
        fontWeight: 700,
        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.2rem' },
        color: theme.palette.text.primary,
        lineHeight: 1.2,
    },
    points: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    point: {
        backgroundColor: theme.palette.background.darkTransparent,
        padding: '0.75rem 1rem',
        borderRadius: '6px',
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.customShadows?.card,
    },
    icon: {
        color: '#fffff',
        fontSize: '1.3rem',
    },
    pointText: {
        color: '#6B7280',
        fontSize: '0.95rem',
        lineHeight: 1.5,
    },
    buttonContainer: {
        marginTop: '0.5rem',
    },
    button: {
        marginTop: '1.5rem',
		color: '#f9fafb',
		fontWeight: 800,
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.7rem 1rem',
		},
		borderRadius: '0.5rem',
		backgroundColor: '#1f2937',
		border: '1px solid #4b5563',
		textTransform: 'none',
		fontSize: '0.9rem',
		whiteSpace: 'nowrap',
		transition: 'background-color 150ms ease',
		'&:hover': {
			backgroundColor: '#374151',
			borderColor: '#4b5563',
		},
		'&.Mui-disabled': {
			color: '#f9fafb',
			opacity: 0.5,
			backgroundColor: '#1f2937',
			border: '1px solid #374151',
		},
    },
};

export default gdprBookNowStyle;