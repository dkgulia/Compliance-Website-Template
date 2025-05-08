import theme from '../../../theme';

const keyCapabilitiesStyle = {
  box: {
    paddingTop: { sm: '3rem', xs: '2rem', md: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1.5rem', md: '2rem' },
    marginTop: '0rem',
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',

  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '75rem',
    marginX: 'auto',
    px: { xs: '1rem', sm: '2rem' },
    zIndex: 1,
  },
  containerBox: {
    width: '100%',
    textAlign: 'center',
    marginX: 'auto',
    marginBottom: '3rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '0rem',
    position: 'relative',
    display: 'inline-block',
  },
  subHeading: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    lineHeight: 1.6,
    maxWidth: '800px',
    marginTop: '0.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: theme.palette.background.darkTransparent || '#17171799',
    borderRadius: '1rem',
    minHeight: '220px',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    padding: '1.5rem',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: theme.palette.secondary.main,
    },
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '38px',
    height: '38px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    padding: '0.5rem',
    alignSelf: 'flex-start',
  },
  icon: {
    fontSize: '20px',
    color: theme.palette.text.primary,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem',
    width: '100%',
    marginTop: '0.2rem',
  },
  title: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: '1.1rem',
    marginBottom: '0.25rem',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: 1.5,
  },
};

export default keyCapabilitiesStyle;