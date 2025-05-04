import theme from '../../../../theme';

const journeyStepsStyle = {
  box: {
    paddingTop: { xs: '2rem', sm: '3rem' },
    paddingBottom: { xs: '2rem', sm: '3rem' },
    backgroundColor: theme.palette.background.default,
  },
  workflowContainer: {
    maxWidth: '75rem',
    marginX: 'auto',
    px: { xs: '1rem', sm: '2rem' },
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2rem',
  },
  headerBox: {
    textAlign: 'center' as const,
    maxWidth: '50rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: 'white',
    marginBottom: '1rem',
  },
  subHeading: {
    color: '#6B7280',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  gridContainer: {
    alignItems: 'stretch',
  },
  card: {
    backgroundColor: theme.palette.background.darkTransparent,
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center' as const,

    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '1rem',
    height: '100%',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0rem 0.5rem 1.25rem rgba(94, 234, 212, 0.15)',
      backgroundColor: '#262626',
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '4.5rem',
    height: '4.5rem',
    background: theme.palette.secondary.light,
    borderRadius: '6px',
  },
  cardTitle: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  cardDescription: {
    color: '#6B7280',
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
};

export default journeyStepsStyle;
