import { Theme } from '@mui/material/styles';

export const heroSectionStyle = (theme: Theme) => ({
    section: {
        paddingTop: { sm: '4rem', xs: '2rem' },
        paddingBottom: { sm: '2rem', xs: '1rem' },
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        position: 'relative',
        zIndex: 1,
    },
    contentBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: { xs: '1.6rem', sm: '2rem' },
        fontWeight: '600',
        marginBottom: '1rem',
        color: theme.palette.text.primary,
    },
    subtitle: {
        fontSize: { xs: '1.2rem', sm: '1.4rem' },
        fontWeight: '500',
        marginBottom: '1.5rem',
        color: theme.palette.secondary.main,
    },
    description: {
        fontSize: '1rem',
        color: theme.palette.text.secondary,
        marginBottom: '2rem',
        maxWidth: '800px',
        textAlign: 'center',
        lineHeight: 1.6,
    },
    ctaButton: {
        marginTop: '1rem',
        color: theme.palette.common.white,
        fontWeight: 800,
        padding: {
            xs: '0.25rem 0.5rem',
            sm: '0.375rem 0.75rem',
            md: '0.7rem 1rem',
        },
        borderRadius: '0.5rem',
        backgroundColor: theme.palette.grey[900],
        border: `1px solid ${theme.palette.grey[600]}`,
        textTransform: 'none',
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
        transition: 'background-color 150ms ease',
        '&:hover': {
            backgroundColor: theme.palette.grey[800],
            borderColor: theme.palette.grey[600],
        },
        '&.Mui-disabled': {
            color: theme.palette.common.white,
            opacity: 0.5,
            backgroundColor: theme.palette.grey[900],
            border: `1px solid ${theme.palette.grey[700]}`,
        },
    },
    decorationLeft: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '150px',
        height: '150px',
        opacity: 0.1,
        zIndex: 0,
    },
    decorationRight: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '150px',
        height: '150px',
        opacity: 0.1,
        zIndex: 0,
    },
});

export default heroSectionStyle;