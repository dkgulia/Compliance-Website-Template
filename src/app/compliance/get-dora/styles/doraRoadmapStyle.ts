import theme from '../../../../theme';

const DoraRoadmapStyle = {
  container: {
    paddingTop: { sm: '1rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    marginTop: '0rem',
    background: theme.palette.background.default,
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    marginTop: '1rem',
    textAlign: { xs: 'center', sm: 'center' },
    background: '#17171799',
    borderRadius: { xs: '0rem', md: '2rem' },
    padding: { xs: '1rem', sm: '2rem' },
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
  card: {
    background: '#17171799',
    borderRadius: '1rem',
    padding: '1rem',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-0.25rem)',
      boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
    },
  },
  cardTitle: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
  },
  cardDescription: {
    color: theme.palette.text.muted,
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
};

export default DoraRoadmapStyle;