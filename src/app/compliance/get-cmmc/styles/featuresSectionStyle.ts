import theme from '../../../../theme';

const featuresSectionStyle = {
  box: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  
    background: theme.palette.background.default,

  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  containerBox: {
    textAlign: 'center' as const,
    marginBottom: '3rem',
    width: { xs: '100%', md: '80%' },
    margin: '0 auto',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom:'2rem'
  },
  subheading: {
    fontSize: '1.1rem',
    color: '#6B7280',
    marginBottom: '1rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    background: '#17171799',
    borderRadius: '1rem',
    padding: '1rem',
    height: '100%',
    minHeight: '15rem',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
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
    marginTop: '0.5rem',
    marginBottom: '1.5rem',
    '& svg': {
      fontSize: '25px',
      color: 'white',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    textAlign: 'left' as const,
    width: '100%',
  },
  typography: {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
    },
    title: {
      fontWeight: 'bold' as const,
      color: '#ffffff',
      marginBottom: '0.75rem',
      fontSize: '1.25rem',
      width: '100%',
      textAlign: 'left' as const,
    },
    body: {
      color: '#6B7280',
      textAlign: 'left' as const,
      fontSize: '1rem',
      lineHeight: 1.6,
      width: '100%',
    },
  },
};

export default featuresSectionStyle;