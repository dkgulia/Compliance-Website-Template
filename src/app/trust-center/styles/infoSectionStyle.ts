import theme from '../../../theme';

const infoSectionStyle = {
  container: {
   
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: { xs: '2rem', md: '4rem' },
    padding: { xs: '1rem', sm: '2rem' },
  },
  contentLeft: {
    flex: 1,
    order: { xs: 2, md: 1 },
    textAlign: { xs: 'center', md: 'left' },
  },
  contentRight: {
    flex: 1,
    order: { xs: 2, md: 2 },
    textAlign: { xs: 'center', md: 'left' },
  },
  imageLeft: {
    flex: 1,
    order: { xs: 1, md: 1 },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRight: {
    flex: 1,
    order: { xs: 1, md: 2 },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    marginBottom: '1.5rem',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '450px',
    height: 'auto',
    borderRadius: '1rem',
    overflow: 'hidden',
  },
  highlightText: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  bulletPoint: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  bulletIcon: {
    color: theme.palette.secondary.main,
    marginRight: '0.75rem',
    marginTop: '0.2rem',
    fontSize: '1.2rem',
  },
};

export default infoSectionStyle;
