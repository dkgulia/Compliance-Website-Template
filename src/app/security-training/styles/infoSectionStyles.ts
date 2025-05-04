import theme from '../../../theme';

const infoSectionStyles = {
  root: {
    paddingTop: { sm: '4rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '1rem' },
    background: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '75rem',
    width: '100%',
    margin: '0 auto',
    gap: { xs: '2rem', sm: '3rem' },
    padding: { xs: '1rem', sm: '2rem' },
  },
  contentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: { xs: 'center', md: 'flex-start' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    lineHeight: 1.3,
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '0.5rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: { xs: '1rem', sm: 0 },
    position: 'relative',
    width: '100%',
    height: { xs: '300px', md: '400px' },
  },
  infoImage: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '1rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
    objectFit: 'cover',
  },
};

export default infoSectionStyles;