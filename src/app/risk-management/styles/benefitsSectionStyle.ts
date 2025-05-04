import theme from '../../../theme';

const benefitsSectionStyle = {
  container: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1rem' },
    marginTop: '1rem',
    background: theme.palette.background.paper,
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    textAlign: { xs: 'center', sm: 'center' },
    padding: { xs: '1rem', sm: '2rem' },
  },
  heading: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: '#6B7280',
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  gridContainer: {
    marginTop: '1rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    background: '#17171799',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '1rem',
    padding: '1rem',
    height: { sm: '16rem', xs: 'auto', md: '19rem' },
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
    },
  },
  iconWrapper: {
    width: '3rem',
    height: '3rem',
    backgroundColor: '#115e59',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    textAlign: 'center',
  },
  cardDescription: {
    color: '#6B7280',
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
};

export default benefitsSectionStyle;
