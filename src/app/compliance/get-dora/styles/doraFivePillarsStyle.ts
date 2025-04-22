import theme from '../../../../theme';

const DoraFivePillarsStyle = {
  container: {
    paddingTop: { sm: '1rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    marginTop: '0rem',
    backgroundColor: theme.palette.background.default,
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    textAlign: 'center',
    padding: { xs: '1rem', sm: '2rem' },
    background: '#17171799',
    borderRadius: { xs: '0rem', md: '2rem' },
  },
  heading: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
    marginBottom: '1.5rem',
    color: theme.palette.text.primary,
  },
  gridContainer: {
    marginTop: '1rem',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  pillarCard: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    background: '#17171799',
    borderRadius: '1rem',
    padding: '1rem',
    border: `2px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',

    },
  },
  pillarImage: {
    width: '50px',
    height: '50px',
    marginRight: '1rem',
  },
  pillarContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  },
  cardDescription: {
    color: '#6B7280',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    textAlign: 'left',
  },
};

export default DoraFivePillarsStyle;