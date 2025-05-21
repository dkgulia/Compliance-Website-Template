import theme from '../../../theme';

const infoSectionStyles = {
  root: {
    background: theme.palette.background.default,
    paddingTop: { xs: '2rem', md: '0rem' },
    paddingBottom: { xs: '2rem', md: '0rem' },
    border: 'none !important',
    borderTop: 'none !important',
    borderBottom: 'none !important',
    boxShadow: 'none !important',
    '&::before, &::after': {
      display: 'none !important',
      content: '"none !important"',
    },
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
    border: 'none',
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
    height: 'auto',
  },
};

export default infoSectionStyles;