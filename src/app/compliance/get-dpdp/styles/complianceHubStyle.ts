import { Theme } from '@mui/material';

const createComplianceHubStyle = (theme: Theme) => ({
  box: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: { xs: 3, sm: 6 },
  },
  containerBox: {
    width: { xs: '100%', sm: '80%', md: '60%' },
    textAlign: 'center' as const,
    marginBottom: '0rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  subHeading: {
    color: '#6B7280',
    fontSize: '1.1rem',
    maxWidth: '700px',
    marginBottom: '0rem',
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: '1.5rem',
    padding: '1.5rem',
    background: '#17171799',
    borderRadius: '1rem',
    boxShadow: '0rem 0.375rem 0.9375rem rgba(0, 0, 0, 0.4)',
    minHeight: '17rem',
    textAlign: 'left' as const,
    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
    },
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    backgroundColor: '#115e59',
    borderRadius: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0',
    '& svg': {
      fontSize: '28px',
      color: 'white',
    },
  },
  icon: {
    fontSize: '28px',
    color: 'white',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    textAlign: 'left' as const,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '0.75rem',
    fontSize: '1.25rem',
    width: '100%',
    textAlign: 'left' as const,
  },
  description: {
    color: '#6B7280',
    textAlign: 'left' as const,
    fontSize: '1rem',
    lineHeight: 1.6,
    width: '100%',
  },
});

export default createComplianceHubStyle;