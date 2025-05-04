import { Theme } from '@mui/material/styles';

const introductionStyle = (theme: Theme) => ({
    section: {
        paddingTop: { sm: '4rem', xs: '2rem' },
        paddingBottom: { sm: '4rem', xs: '2rem' },
        backgroundColor: theme.palette.background.darkPaper || theme.palette.background.default,
        overflow: 'hidden', // Prevent any transform animations from causing scrollbars
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: '0 1rem', sm: '0 2rem' },
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
    },
    title: {
        fontSize: { xs: '1.6rem', sm: '2rem' },
        fontWeight: 600,
        marginBottom: '1.5rem',
        color: theme.palette.text.primary,
        position: 'relative',
        paddingBottom: '1rem',
        '&::after': {
            content: 'none', // Removed since we're adding an animated underline
        }
    },
    description: {
        fontSize: '1.1rem',
        color: theme.palette.text.secondary,
        marginBottom: '1.5rem',
        lineHeight: 1.6,
    },
    highlightText: {
        fontWeight: 600,
        color: theme.palette.secondary.dark,
        position: 'relative',
        animation: 'highlight-pulse 3s ease-in-out infinite',
        padding: '0 2px',
        transition: 'all 0.3s ease',
        '&:hover': {
            textShadow: `0 0 10px ${theme.palette.secondary.main}`,
        }
    },
});

export default introductionStyle;