import theme from '../../../theme';

const offerBannerStyle = {
  box: {
    paddingX: { xs: '1rem', sm: '2rem' },
    paddingY: { xs: '2rem', sm: '1.5rem' },
    marginTop: '3rem',
    marginBottom: '3rem',

    borderRadius: '1rem',
    borderColor: theme.palette.divider,
    borderWidth: '1px',
    borderStyle: 'solid',
    maxWidth: '75rem',
    margin: '2rem auto',
    position: 'relative',
    overflow: 'hidden',
  },
  innerBox: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', sm: 'flex-start' },
    textAlign: { xs: 'center', sm: 'left' },
  },
  title: {
    fontSize: { xs: '1.3rem', sm: '1.5rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: { xs: '0.9rem', sm: '1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '600px',
  },
  iconBox: {
    display: { xs: 'none', sm: 'flex' },
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    padding: '1rem',
    marginLeft: { xs: 0, sm: '2rem' },
    marginTop: { xs: '1rem', sm: 0 },
  },
  icon: {
    fontSize: '3rem',
    color: theme.palette.secondary.main,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: `linear-gradient(135deg, ${theme.palette.background.darkPaper} 0%, ${theme.palette.secondary.dark} 100%)`,
    opacity: 0.1,
    zIndex: 0,
  },
};

export default offerBannerStyle;
