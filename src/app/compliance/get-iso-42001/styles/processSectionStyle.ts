import theme from '../../../../theme';

const processSectionStyle = {
  container: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    backgroundColor: theme.palette.background.default,
  },
  titleContainer: {
    textAlign: 'center' as const,
    marginBottom: '3rem',
    width: { xs: '100%', md: '80%' },
    margin: '0 auto',
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#6B7280',
    marginBottom: '1rem',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  stepCard: {
    background: '#17171799',
    borderRadius: '1rem',
    padding: '1.5rem',
    height: '100%',
    minHeight: '16rem',
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
  stepNumberContainer: {
    width: '50px',
    height: '50px',
    backgroundColor: '#115e59',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  stepNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column' as any,
    alignItems: 'flex-start',
    textAlign: 'left' as const,
    width: '100%',
  },
  stepHeading: {
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '0.75rem',
    fontSize: '1.25rem',
    width: '100%',
    textAlign: 'left' as const,
  },
  stepDescription: {
    color: '#6B7280',
    textAlign: 'left' as const,
    fontSize: '1rem',
    lineHeight: 1.6,
    width: '100%',
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    backgroundColor: '#115e59',
    borderRadius: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.5rem',
    '& svg': {
      fontSize: '28px',
      color: 'white',
    },
  },
  icon: {
    fontSize: '28px',
    color: 'white',
  },
};

export default processSectionStyle;