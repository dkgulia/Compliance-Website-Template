import { Theme } from '@mui/material';

const createComplianceHubStyle = (theme: Theme) => ({
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
  subHeading: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  stepContainer: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '1rem',
    padding: '2rem 1.5rem',
    minHeight: '16rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: '1rem',
    height: '100%',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: theme.shadows[5],
    },
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
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: '1.6',
  },
});

export default createComplianceHubStyle;