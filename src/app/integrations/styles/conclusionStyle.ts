import { Theme } from '@mui/material/styles';

const conclusionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '6rem', xs: '4rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    marginBottom: '1.5rem',
    color: theme.palette.text.primary,
    position: 'relative',
    paddingBottom: '1rem',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '3px',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  description: {
    fontSize: '1.1rem',
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  highlightText: {
    fontWeight: 700,
    color: theme.palette.secondary.dark,
  },
  ctaButton: {
    color: theme.palette.ui.buttonText,
    fontWeight: 800,
    padding: {
      xs: '0.5rem 1.5rem',
      sm: '0.7rem 2rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.ui.buttonPrimary,
    border: `1px solid ${theme.palette.ui.buttonBorder}`,
    textTransform: 'none',
    fontSize: '1rem',
    marginTop: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.ui.buttonHover,
      transform: 'translateY(-2px)',
    },
  },
});

export default conclusionStyle;
