import theme from '../../../theme';

const efficiencyEnhancementsSectionStyle = {
  box: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    position: 'relative',
    zIndex: 1,
  },
  containerBox: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '3rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem' },
    color: theme.palette.text.primary,
    paddingBottom: { sm: '1rem', xs: '0.75rem' },
    position: 'relative',
  },
  subheading: {
    color: theme.palette.text.secondary,
    fontSize: { xs: '1rem', md: '1.1rem' },
    lineHeight: '1.6',
    maxWidth: '40rem',
    marginX: 'auto',
  },
  enhancementCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#17171799',
    backdropFilter: 'blur(6px)',
    borderRadius: '1rem',
    padding: '1.75rem',
    height: '100%',
    minHeight: '220px',
    transition: 'all 0.35s ease',
    justifyContent: 'flex-start',
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0rem 0.75rem 1.5rem rgba(0, 0, 0, 0.15)',
      backgroundColor: theme.palette.background.paper,
    },
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115e59',
    marginBottom: '1.25rem',
  },
  icon: {
    fontSize: '24px',
    color: 'white',
    width: '24px',
    height: '24px',
  },
  enhancementTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textAlign: 'center',
    fontSize: { xs: '1.1rem', sm: '1.2rem' },
    marginBottom: '0.75rem',
  },
  enhancementDescription: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
    lineHeight: 1.7,
    fontSize: '1rem',
  },
};

export default efficiencyEnhancementsSectionStyle;