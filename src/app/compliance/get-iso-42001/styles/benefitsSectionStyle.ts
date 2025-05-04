import theme from '../../../../theme';

const benefitsSectionStyle = {
  container: {
    background: theme.palette.background.default,
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
  },
  innerContainer: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: { xs: '1rem', sm: '2rem' },
  },
  titleContainer: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    textAlign: 'center',
    marginBottom: '2rem',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gap: '1.5rem',
  },
  card: {
    background: theme.palette.background.paper,
    borderRadius: '0.5rem',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: { sm: '16rem', xs: 'auto', md: '19rem' },
    transition: 'transform 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',

    border: `1px solid ${theme.palette.divider}`,
    marginBottom: '1rem',
  },
  icon: {
    color: theme.palette.secondary.dark,
    fontSize: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  cardDescription: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
};

export default benefitsSectionStyle;
