import theme from '../../../theme';

const infoSectionStyle = {
  section: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.paper,
  },
  alternateBackground: {
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: { xs: '3rem', md: '4rem' },
  },
  contentWrapperReversed: {
    flexDirection: { xs: 'column', md: 'row-reverse' },
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '500px',
    height: '300px',
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.disabled,
    border: `1px solid ${theme.palette.divider}`,

    padding: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.secondary.main,
    marginBottom: '0.5rem',
  },
  highlight: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    fontStyle: 'italic',
    marginTop: '1rem',
  },
};

export default infoSectionStyle;
