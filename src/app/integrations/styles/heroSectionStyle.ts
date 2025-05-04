import { Theme } from '@mui/material/styles';

const heroSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '6rem', xs: '4rem' },
    paddingBottom: { sm: '6rem', xs: '4rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `radial-gradient(circle at 15% 50%, ${theme.palette.primary.light}15, transparent 45%)`,
      pointerEvents: 'none',
    },
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
    position: 'relative',
    zIndex: 2,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  subtitle: {
    color: theme.palette.secondary.main,
    marginBottom: '1rem',
    fontSize: { xs: '1rem', sm: '1.1rem' },
    fontWeight: 500,
  },
  title: {
    fontSize: { xs: '2rem', sm: '3.5rem', md: '4rem' },
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: theme.palette.text.primary,
    lineHeight: 1.2,
  },
  highlight: {
    color: theme.palette.secondary.dark,
  },
  description: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    maxWidth: '700px',
    margin: '0 auto 2rem',
    lineHeight: 1.6,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  button: {
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
    '&:hover': {
      backgroundColor: theme.palette.ui.buttonHover,
      borderColor: theme.palette.ui.buttonBorder,
      transform: 'translateY(-2px)',
    },
  },
});

export default heroSectionStyle;
