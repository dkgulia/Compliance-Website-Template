import theme from '../../../theme';

const bookADemoStyles = {
  box: {
    py: { xs: 2, sm: 2 },
    overflow: 'hidden',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    opacity: 0.95,
  },
  textBox: {
    maxWidth: { md: '50%' },
    textAlign: 'left',
    padding: { xs: 2, sm: 4 },
  },
  title: {
    fontWeight: 'bold' as const,
    color: theme.palette.text.primary,
    fontSize: { xs: '1.5rem', sm: '2rem' },
    marginTop: '0.5rem',
  },
  points: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    marginBottom: 4,
    marginTop: '1rem',

    '& div': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      padding: '0.8rem',
      borderRadius: '2rem',
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  button: {
    marginTop: '1.5rem',
    color: '#f9fafb',
    fontWeight: 800,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 1rem',
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
  imageBox: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '16px',
  },
  tagline: {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    borderRadius: '1rem',
    fontSize: '0.9rem',
    background: '#115e59',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    boxShadow: '0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.1)',
    width: 'fit-content',
  },
  point: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'white',
    marginRight: '0.5rem',
    fontSize: '1.2rem',
  },
};

export default bookADemoStyles;
