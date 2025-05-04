import { Theme } from '@mui/material';

const createProcessSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '3rem' },
    paddingBottom: { sm: '4rem', xs: '3rem' },
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 700,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '1.5rem',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '20%',
      left: '0',
      width: '100%',
      height: '2px',
      backgroundColor: theme.palette.divider, // Removed opacity 80
      zIndex: 0,
      display: { xs: 'none', md: 'block' },
    },
  },
  stepCard: {
    flex: 1,
    backgroundColor: theme.palette.background.default,
    borderRadius: '1rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    zIndex: 1,
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: theme.shadows[4],
    },
  },
  stepNumber: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.palette.common.white,
  },
  stepTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  stepDescription: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
  },
});

export default createProcessSectionStyle;