import theme from '../../../theme';

const benefitsSectionStyle = {
  box: {
    paddingTop: { sm: '3rem', xs: '2rem', md: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1.5rem', md: '2rem' },
    marginTop: '0rem',
    backgroundColor: theme.palette.background.paper,
  },
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
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '2rem',
  },
  gridContainer: {
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gap: '1.5rem',
    width: '100%',
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
    padding: '1.5rem',
    height: { sm: '16rem', xs: 'auto', md: '19rem' },
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
    },
  },
  iconWrapper: {
    width: '3.5rem',
    height: '3.5rem',
    backgroundColor: '#115e59',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.75rem',
    fontSize: '1.1rem',
    textAlign: 'center',
  },
  cardDescription: {
    color: theme.palette.text.secondary,
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
};

export default benefitsSectionStyle;