import theme from '../../../../theme';

const featuresSectionStyle = {
  box: {
    paddingTop: { sm: '1rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '75rem',
    px: { xs: '1rem', sm: '2rem' },
  },
  containerBox: {
    textAlign: 'center' as const,
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '1rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: 'white',
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
  },
  subheading: {
    color: '#6B7280',
    fontSize: '1rem',
    marginBottom: '2rem',
    lineHeight: '1.6',
    maxWidth: '40rem',
    marginX: 'auto',
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    backgroundColor: theme.palette.background.darkTransparent || '#17171799',
    borderRadius: '1rem',

    height: { sm: '16rem', xs: 'auto', md: '19rem' },
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    justifyContent: 'flex-start',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0rem 0.5rem 1.25rem rgba(94, 234, 212, 0.15)',
      backgroundColor: '#262626',
    },
    marginBottom: '1rem',
  },
  iconContainer: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,

    marginBottom: '1rem',
  },
  typography: {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold' as const,
      color: 'white',
      textAlign: 'center' as const,
      fontSize: '1.1rem',
      marginBottom: '0.5rem',
    },
    body: {
      color: '#6B7280',
      textAlign: 'center' as const,
      lineHeight: 1.6,
      fontSize: '0.9rem',
    },
  },
};

export default featuresSectionStyle;
