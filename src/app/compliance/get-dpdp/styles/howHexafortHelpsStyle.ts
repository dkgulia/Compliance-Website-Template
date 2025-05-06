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
    textAlign: 'center' as any,
    marginBottom: { xs: '2.5rem', md: '3.5rem' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.5,
  },
  stepCard: {
    background: '#17171799',
    borderRadius: '1rem',
    padding: '1rem',
    height: '100%',
    minHeight: '11rem',
    display: 'flex',
    flexDirection: 'column' as any,
    alignItems: 'flex-start',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
    },
  },
  iconContainer: {
    width: '40px',
    height: '40px',
    backgroundColor: '#115e59',
    borderRadius: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
    marginTop:'1rem'
  },
  stepIcon: {
    fontSize: '1.5rem',
    color: '#fffff',
  },
  stepText: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    fontWeight: 500,
    lineHeight: 1.5,
    textAlign: 'left' as any,
  },
});

export default createHowHexafortHelpsStyle;