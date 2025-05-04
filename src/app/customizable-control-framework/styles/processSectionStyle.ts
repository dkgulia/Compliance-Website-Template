import { Theme } from '@mui/material/styles';

const processSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor:
      theme.palette.background.darkPaper || theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    maxWidth: '700px',
    margin: '0 auto',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  stepWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '2rem',
    alignItems: 'center',
    borderRadius: '1rem',
    padding: '2rem',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
  },
  stepWrapperAlt: {
    flexDirection: { xs: 'column', md: 'row-reverse' },
  },
  stepContent: {
    flex: 1,
  },
  stepNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    marginRight: '1rem',
    lineHeight: 1,
  },
  stepTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  stepDescription: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '0.5rem',
  },
  imagePlaceholder: {
    width: '100%',
    height: '200px',
    maxWidth: '400px',
    borderRadius: '0.5rem',
    backgroundColor:
      theme.palette.background.darkPaper || theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    border: `1px solid ${theme.palette.divider}`,
    padding: '1rem',
    textAlign: 'center',
  },
  connector: {
    width: '2px',
    height: '50px',
    backgroundColor: theme.palette.primary.main,
    margin: '0 auto',
  },
});

export default processSectionStyle;
