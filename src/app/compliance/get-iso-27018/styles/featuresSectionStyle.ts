import theme from '../../../../theme';

const featuresSectionStyle = {
  box: {
    paddingBottom: { sm: '2rem', xs: '1.5rem' },
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
    marginBottom: '2rem',
  },
  heading: {
    fontWeight: 600,
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#17171799',
    borderRadius: '1rem',
    boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
    height: { sm: 'auto', xs: 'auto' },
    minHeight: '180px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    },
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: '1.5rem',
  },
  iconContainer: {
    width: '38px',
    height: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115e59',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    padding: '0.5rem',
    alignSelf: 'flex-start',
  },
  typography: {
    title: {
      fontWeight: 'bold' as const,
      color: theme.palette.text.primary,
      textAlign: 'left' as const,
      fontSize: '18px',
      marginBottom: '0.5rem',
    },
    body: {
      color: '#6B7280',
      textAlign: 'left' as const,
      lineHeight: 1.6,
      fontSize: '14px',
    },
  },
};

export default featuresSectionStyle;