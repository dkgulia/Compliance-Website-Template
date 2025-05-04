import { Theme } from '@mui/material';

const createHowHexafortHelpsStyle = (theme: Theme) => ({
  section: {
    padding: { xs: '3rem 1rem', md: '4rem 2rem' },
    background: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: { xs: '2.5rem', md: '3.5rem' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    gap: '1.5rem',
  },
  stepCard: {
    backgroundColor: theme.palette.background.darkTransparent, // Replaced hardcoded alpha
    borderRadius: '1rem',
    padding: '1.75rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: theme.shadows[4],
    },
  },
  stepIcon: {
    fontSize: '2.5rem',
    color: theme.palette.secondary.main,
    marginBottom: '1.25rem',
  },
  stepText: {
    fontSize: '1rem',
    color: theme.palette.text.primary,
    fontWeight: 500,
    lineHeight: 1.5,
  },
});

export default createHowHexafortHelpsStyle;