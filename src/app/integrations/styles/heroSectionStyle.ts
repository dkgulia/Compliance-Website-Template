import theme from '../../../theme';

const heroSectionStyle = {
  section: {
    paddingTop: { sm: '6rem', xs: '4rem' },
    paddingBottom: { sm: '6rem', xs: '4rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',

  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
    position: 'relative',
    zIndex: 2,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  subtitle: {
    color: theme.palette.secondary.main,
    marginBottom: '1rem',
    fontSize: { xs: '1rem', sm: '1.1rem' },
    fontWeight: 500,
  },
  title: {
    fontSize: { xs: '2rem', sm: '3.5rem', md: '4rem' },
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    marginTop:{xs:'5rem'}
  },
  highlight: {
    color:'#115e59',
  },
  description: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    color: theme.palette.text.secondary,
    marginBottom: '2rem',
    maxWidth: '700px',
    margin: '0 auto 2rem',
    lineHeight: 1.6,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  button: {
    marginTop: '0.5rem',
    color: '#f9fafb',
    fontWeight: 800,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 2rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: '#1f2937',
    border: '1px solid #4b5563',
    textTransform: 'none',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    transition: 'background-color 150ms ease',
    '&:hover': {
      backgroundColor: '#374151',
      borderColor: '#4b5563',
    },
    '&.Mui-disabled': {
      color: '#f9fafb',
      opacity: 0.5,
      backgroundColor: '#1f2937',
      border: '1px solid #374151',
    },
  },
};

export default heroSectionStyle;