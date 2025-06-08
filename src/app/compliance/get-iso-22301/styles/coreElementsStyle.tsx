import theme from '../../../../theme';

const coreElementsStyle = {
  box: {
    paddingTop: { xs: '0.5rem', sm: '1rem' },
    paddingBottom: { xs: '0.5rem', sm: '1rem' },
    marginX: { xs: '0.5rem', sm: '0rem' },
  },
  container: {
    maxWidth: '1200px',
    marginX: 'auto',
    px: { xs: '1rem', sm: '2rem' },
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.4rem', sm: '2rem', md: '2.2rem' },
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    textAlign: 'center',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    color: '#6B7280',
    fontSize: { xs: '0.85rem', sm: '1.2rem' },
    marginBottom: { xs: '1rem', sm: '2rem' },
    textAlign: 'center',
    fontWeight: '400',
    maxWidth: '700px',
    marginX: 'auto',
  },
  grid: {
    marginTop: '1rem',
    gap: { xs: 2, sm: 3 },
  },
  card: {
    padding: { xs: '1rem', sm: '1.75rem' },
    backgroundColor: '#17171799',
    backdropFilter: 'blur(8px)',
    borderRadius: { xs: '0.75rem', sm: '1rem' },
    boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
    height: '100%',
    minHeight: { xs: '120px', sm: 'auto' },
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 6px 15px rgba(0,0,0,0.6)',
    },
  },
  cardInner: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  iconBox: {
    marginRight: { xs: '0.75rem', sm: '1rem' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: { xs: '1.5rem', sm: '2rem' },
    color: '#115e59',
  },
  text: {
    color: '#6B7280',
    fontSize: { xs: '12px', sm: '1rem' },
    lineHeight: 1.6,
    fontWeight: '400',
  },
  cardTitle: {
    color: theme.palette.text.primary,
    fontSize: { xs: '14px', sm: '1.125rem' },
    fontWeight: '600',
    marginBottom: { xs: '0.5rem', sm: '0.75rem' },
    lineHeight: 1.3,
  },
  cardContent: {
    flexGrow: 1,
  },
};

export default coreElementsStyle;