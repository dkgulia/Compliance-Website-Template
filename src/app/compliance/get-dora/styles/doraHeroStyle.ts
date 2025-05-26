import theme from '../../../../theme';

const DoraHeroStyle = {
  container: {
    paddingTop: { sm: '4rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    background: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `radial-gradient(circle at 70% 30%, ${theme.palette.primary.light}15, transparent 45%)`,
      pointerEvents: 'none',
    },
  },
  containerBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    gap: { xs: '1.5rem', sm: '2rem' },
    padding: { xs: '2rem 1rem', sm: '3rem 2rem' },
    position: 'relative',
    zIndex: 2,
  },
  contentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: { xs: 'center', md: 'flex-start' },
  },
  tagline: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    borderRadius: '1.3rem',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    background: '#115e59',
    color: 'white',
    fontWeight: 'bold',
    width: { xs: 'auto', sm: '45%' },
    textAlign: 'center',
    whiteSpace: 'nowrap',
    marginTop:{xs:'4rem'}
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    color: theme.palette.text.primary,
    lineHeight: 1.3,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: '#115e59',
    lineHeight: 1.6,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  listItem: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: theme.palette.text.primary,
  },
  ctaButton: {
    marginTop: '1.5rem',
    color: '#f9fafb',
    fontWeight: 800,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 1rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: '#115e59',
    border: '1px solid #0d9488',
    textTransform: 'none',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    transition: 'all 150ms ease',
    '&:hover': {
      backgroundColor: '#0f766e',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    '&:active': {
      backgroundColor: '#0d9488',
      transform: 'translateY(1px)',
    },
    '&.Mui-disabled': {
      color: '#f9fafb',
      opacity: 0.5,
      backgroundColor: '#115e59',
      border: '1px solid #0d9488',
    },
  },

  formBox: {
    flex: 1,
    borderRadius: { xs: '1rem', md: '1.5rem' },
    maxWidth: { xs: '100%', md: '600px' },
    padding: { xs: '0.3rem', md: '2rem' },
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    width: { xs: '100%', md: 'auto' },
  },
  formContainer: {
    padding: { xs: '1.5rem', md: '2rem' },
    borderRadius: { xs: '1rem', md: '1.5rem' },
    background: theme.palette.background.paper,
    width: '100%',
    maxWidth: { xs: '100%', md: '600px' },
    marginTop: { xs: '1rem', sm: '1.5rem' },
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  formHeading: {
    fontSize: { xs: '20px', md: '1.8rem' },
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    textAlign: { xs: 'center', md: 'left' },
  },
  formLabel: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: theme.palette.text.primary,
    fontSize: { xs: '0.9rem', md: '1rem' },
  },
  compliancesLabel: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: theme.palette.text.primary,
    fontSize: { xs: '0.9rem', md: '1rem' },
  },
  gridItem: {
    marginBottom: { xs: '12px', md: '16px' },
  },
  formInput: {
    backgroundColor: 'rgba(38, 38, 38, 0.1)',
    color: theme.palette.text.primary,
    '& .MuiOutlinedInput-root': {
      fontSize: { xs: '0.9rem', md: '1rem' },
    },
    '& .MuiInputLabel-root': {
      fontSize: { xs: '0.9rem', md: '1rem' },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.divider,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0d9488',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#115e59',
    },
  },
  formHelperText: {
    marginTop: '4px',
    color: theme.palette.error.main,
    fontSize: { xs: '0.75rem', md: '0.875rem' },
  },
  checkbox: {
    color: '#115e59',
    padding: { xs: '6px', md: '9px' },
    '&.Mui-checked': {
      color: '#115e59',
    },
  },
  checkboxLabel: {
    '& .MuiFormControlLabel-label': {
      color: theme.palette.text.primary,
      fontSize: { xs: '0.8rem', md: '0.9rem' },
    },
    '& .MuiCheckbox-root': {
      color: '#115e59',
    },
    margin: { xs: '2px 0', md: '4px 0' },
  },
  secondaryText: {
    color: theme.palette.text.secondary,
    fontSize: { xs: '0.75rem', md: '0.875rem' },
    marginTop: '8px',
    marginBottom: '16px',
    textAlign: { xs: 'center', md: 'left' },
    '& a': {
      color: '#115e59',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  button: {
    backgroundColor: '#115e59',
    color: '#f9fafb',
    borderRadius: '0.5rem',
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.5rem 1rem',
    },
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 'medium',
    whiteSpace: 'nowrap',
    border: '1px solid #0d9488',
    transition: 'all 150ms ease',
    '&:hover': {
      backgroundColor: '#0f766e',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    '&:active': {
      backgroundColor: '#0d9488',
      transform: 'translateY(1px)',
    },
    '&.Mui-disabled': {
      color: '#f9fafb',
      opacity: 0.5,
      backgroundColor: '#115e59',
      border: '1px solid #0d9488',
    },
  },
};

export default DoraHeroStyle;