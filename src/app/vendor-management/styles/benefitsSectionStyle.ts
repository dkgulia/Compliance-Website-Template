import theme from '../../../theme';

const benefitsSectionStyle = {
  section: {
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  header: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.8rem', sm: '2.5rem',md:'2rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    textAlign: 'center',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
    gap: '1.5rem',
  },
  card: {
    backgroundColor: theme.palette.background.default,
    borderRadius: '1rem',
    padding: '2rem',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  iconContainer: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    padding: '0.8rem',
    borderRadius: '0.8rem',
    marginBottom: '1.5rem',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3rem',
    height: '3rem',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  cardDescription: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
};

export default benefitsSectionStyle;
