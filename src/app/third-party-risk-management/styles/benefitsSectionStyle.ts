import theme from '../../../theme';

const benefitsSectionStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    px: { xs: '1rem', md: '10rem', '2xl': '18rem' },
    marginTop: { xs: '0rem', md: '6rem' },
    gap: '2rem',
    alignItems: 'center',
    background: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  subtitle: {
    color: '#6b7280',
    textAlign: 'center',
    fontSize: { xs: '1rem', sm: '1.1rem' },
    lineHeight: 1.6,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: { xs: '1.5rem', sm: '2rem',md:'1.5rem' },
    borderRadius: '0.5rem',
    backgroundColor: '#171717',
    border: '1px solid #374151',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    height: '100%',
    minHeight: { xs: '200px', sm: '220px', md: '240px' },
    '&:hover': {
      transform: 'translateY(-5px)',
      borderColor: '#0d9488',
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    backgroundColor: '#115e59',
    color: 'white',
    width: '50px',
    height: '50px',
    flexShrink: 0,
  },
  icon: {
    fontSize: '30px',
    color: 'white',
  },
  cardTitle: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  cardDescription: {
    fontSize: '0.875rem',
    color: '#6b7280',
    lineHeight: 1.7,
    flex: 1,
  },
};

export default benefitsSectionStyle;