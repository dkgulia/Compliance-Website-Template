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
    fontSize: { xs: '1.4rem', sm: '2rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: { xs: '0.75rem', md: '1rem' },
  },
  gridContainer: {
    marginTop: '1rem',
    justifyContent: 'center',
    width: '100%',
  },
  pillarCard: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    background: '#17171799',
    borderRadius: '1rem',
    padding: '1rem',
    border: `2px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      borderColor: '#115e59',
    },
  },
  iconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    backgroundColor: '#115e59',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '1rem',
    padding: '0.5rem',
    flexShrink: 0,
    marginTop: '0',
  },
  pillarContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontWeight: 'bold',
   color: theme.palette.text.primary,
   marginBottom: { xs: '0.375rem', md: '0.5rem' },
   fontSize: { xs: '14px', md: '1.1rem' },
   textAlign: 'left'
  },
  cardDescription: {
    color: theme.palette.text.secondary,
    fontSize: { xs: '12px', md: '0.95rem' },
    lineHeight: 1.6,
     textAlign: 'left'
  },
};

export default DoraFivePillarsStyle;