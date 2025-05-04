import { Theme } from '@mui/material';

const createBenefitsSectionStyle = (theme: Theme) => ({
  box: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
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
  containerBox: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  heading: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '700',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  gridItem: {
    padding: '1rem',
  },
  card: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '1rem',
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: theme.shadows[4],
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem',
    height: '100%',
  },
  iconContainer: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.darkTransparent, // Replaced hardcoded alpha
    marginBottom: '1.5rem',
  },
  icon: {
    fontSize: '2rem',
    color: theme.palette.secondary.main,
  },
  typography: {
    container: {
      textAlign: 'left',
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: theme.palette.text.primary,
      marginBottom: '0.75rem',
    },
    body: {
      fontSize: '1rem',
      color: theme.palette.text.secondary,
      lineHeight: '1.7',
    },
  },
});

export default createBenefitsSectionStyle;