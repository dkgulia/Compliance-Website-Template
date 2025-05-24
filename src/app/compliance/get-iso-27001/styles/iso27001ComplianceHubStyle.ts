import theme from '../../../../theme';

const iso27001ComplianceHubStyle = {
  box: {
    paddingTop: { xs: '2rem', sm: '3rem' },
    paddingBottom: { xs: '2rem', sm: '3rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
  },
  containerBox: {
    width: { xs: '100%', sm: '80%', md: '60%' },
    textAlign: 'center' as const,
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: 'white',
    marginBottom: '0.5rem',
  },
  subHeading: {
    color: '#6B7280',
    fontSize: '1rem',
    marginBottom: '1rem',
    lineHeight: '1.6',
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '1.5rem',
    backgroundColor: theme.palette.background.darkTransparent || '#17171799',
    borderRadius: '1rem',

    minHeight: '13.75rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    gap: '1rem',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0rem 0.5rem 1.25rem rgba(94, 234, 212, 0.15)',
      backgroundColor: '#262626',
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.secondary.light,
    borderRadius: '0.5rem',
    padding: '0.75rem',
    minWidth: '3.5rem',
    minHeight: '3.5rem',
    alignSelf: 'flex-start',
  },
  icon: {
    fontSize: '2rem',
    color: 'white',
  },
  title: {
    fontWeight: 'bold' as const,
    color: 'white',
    textAlign: 'left' as const,
    width: '100%',
  },
  description: {
    color: '#6B7280',
    lineHeight: '1.5',
    textAlign: 'left' as const,
    width: '100%',
  },
};

export default iso27001ComplianceHubStyle;
