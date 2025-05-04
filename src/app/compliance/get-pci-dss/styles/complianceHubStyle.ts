import theme from '../../../../theme';

const complianceHubStyle = {
  box: {
    paddingTop: { sm: '3rem', xs: '2rem', md: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1.5rem', md: '2rem' },
    marginTop: '0rem',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    maxWidth: '75rem',
    marginX: 'auto',
    px: { xs: '1rem', sm: '2rem' },
  },
  containerBox: {
    width: '100%',
    textAlign: 'center' as const,
    marginX: 'auto',
    marginBottom: '3rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subHeading: {
    color: '#6B7280',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    backgroundColor: '#17171799',
    borderRadius: '1rem',

    minHeight: '220px',
    textAlign: 'left' as const,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    padding: '1.5rem',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '38px',
    height: '38px',
    backgroundColor: '#115e59',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    padding: '0.5rem',
    alignSelf: 'flex-start',
  },
  icon: {
    fontSize: '20px',
    color: 'white',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: '0.5rem',
    width: '100%',
    marginTop: '0.2rem',
  },
  title: {
    fontWeight: 'bold' as const,
    color: theme.palette.text.primary,
    fontSize: '1.1rem',
    marginBottom: '0.25rem',
  },
  description: {
    color: '#6B7280',
    fontSize: '0.9rem',
    lineHeight: 1.5,
  },
};

export default complianceHubStyle;
