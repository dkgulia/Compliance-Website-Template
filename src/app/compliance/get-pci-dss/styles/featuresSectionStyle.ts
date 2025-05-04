import theme from '../../../../theme';

const featuresSectionStyle = {
  box: {
    paddingBottom: { sm: '2rem', xs: '1.5rem' },
    marginTop: '0rem',
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
    marginBottom: '3rem',
  },
  heading: {
    fontWeight: 600,
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#17171799',
    borderRadius: '1rem',

    height: { sm: 'auto', xs: 'auto' },
    minHeight: '210px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    padding: '1rem',
  },
  iconContainer: {
    width: '4rem',
    height: '4rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115e59',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    padding: '0.5rem',
    alignSelf: 'flex-start',
  },
  iconImage: {
    objectFit: 'contain' as const,
    width: '3.5rem',
    height: '3.5rem',
    filter: 'brightness(0) invert(1)',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    width: '100%',
  },
  typography: {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'flex-start',
      textAlign: 'left' as const,
      width: '100%',
    },
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
  gridItem: {
    marginBottom: '1.5rem',
  },
};

export default featuresSectionStyle;
