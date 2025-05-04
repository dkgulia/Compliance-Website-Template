import theme from '../../../theme';

const benefitsSectionStyle = {
  container: {
    position: 'relative',
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },

    overflow: 'hidden',
  },
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },
  gridPattern: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(94, 234, 212, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(94, 234, 212, 0.025) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    zIndex: 1,
    opacity: 0.5,
  },
  glowEffect1: {
    position: 'absolute',
    width: '30%',
    height: '30%',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, ${theme.palette.secondary.main}00 70%)`,
    zIndex: 0,
    top: '20%',
    right: '10%',
  },
  glowEffect2: {
    position: 'absolute',
    width: '30%',
    height: '30%',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, ${theme.palette.secondary.main}00 70%)`,
    zIndex: 0,
    bottom: '10%',
    left: '10%',
  },
  innerBox: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '75rem',
    marginX: 'auto',
    textAlign: 'center',
    padding: { xs: '1rem', sm: '2rem' },
  },
  title: {
    fontSize: { xs: '1.8rem', md: '2.5rem' },
    fontWeight: '700',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    color: theme.palette.text.secondary,
    marginBottom: '2.5rem',
    textAlign: 'center',
    maxWidth: '800px',
    marginX: 'auto',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gap: 4,
    width: '100%',
    marginTop: '2rem',
  },
  benefitCard: {
    borderRadius: '16px',
    padding: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'rgba(23, 23, 23, 0.6)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',

      backgroundColor: theme.palette.background.paper,
    },
  },
  iconContainer: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '10px',
    padding: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  icon: {
    color: theme.palette.common.white,
    fontSize: '2.5rem',
  },
  benefitTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
    color: theme.palette.text.primary,
    textAlign: 'left',
  },
  benefitDescription: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: 1.5,
    textAlign: 'left',
  },
};

export default benefitsSectionStyle;
