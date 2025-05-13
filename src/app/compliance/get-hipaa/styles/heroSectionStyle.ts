import theme from '../../../../theme';

const heroSectionStyles = {
  box: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: theme.palette.background.default,
    padding: { xs: '5rem 1rem', sm: '1rem 1rem' },
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
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '2rem',
    position: 'relative',
    zIndex: 2,
  },
  leftContentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    marginTop: '2rem',
  },
  formBox: {
    flex: 1,
    borderRadius: '1.5rem',
    maxWidth: '600px',
    padding: '2rem',
    marginTop: { xs: '0.5rem', sm: '0.5rem' },
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  formContainer: {
    padding: '2rem',
    borderRadius: '1.5rem',
    background: theme.palette.background.paper,
    width: '100%',
    maxWidth: '600px',
    marginTop: { xs: '2rem', sm: '1.5rem' },
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  formHeading: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
  },
  formLabel: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: theme.palette.text.primary,
  },
  compliancesLabel: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: theme.palette.text.primary,
  },
  chip: {
    background: '#115e59',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    borderRadius: '1rem',
    padding: '0.5rem 1rem',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    alignSelf: { xs: 'center', md: 'flex-start' },
    display: 'inline-block',
  },
  chipTypography: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: 'white',
  },
  mainTitle: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  highlightText: {
    background: theme.customGradients?.primary || 'linear-gradient(90deg, #10b981 0%, #0ea5e9 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: { xs: '1rem', sm: '1.1rem' },
    marginBottom: '2rem',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '1.5rem',
    width: '100%',
    marginBottom: '2rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '30%',
    minWidth: '80px',
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: '1rem',
    color: theme.palette.text.primary,
    marginTop: '0.5rem',
  },
  statLabel: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    marginTop: '0.25rem',
    textAlign: 'center',
    maxWidth: '90px',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: { xs: 'space-between', md: 'space-between' },
    alignItems: { xs: 'center', sm: 'flex-start' },
    gap: '1.5rem',
    width: '100%',
    marginBottom: '1.5rem',
    flexWrap: 'nowrap',
  },
  featureItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.5rem',
    flex: '1 1 33%',
    maxWidth: '33%',
  },
  iconWrapper: {
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#115e59',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    flexShrink: 0,
  },
  featureIcon: {
    color: 'white',
    fontSize: '1.2rem',
  },
  featureTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  featureTitle: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.2',
  },
  featureSubtitle: {
    marginTop: '0.5rem',
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    lineHeight: '1.2',
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
  formInput: {
    backgroundColor: 'rgba(38, 38, 38, 0.1)',
    color: theme.palette.text.primary,
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
  checkbox: {
    color: '#115e59',
    '&.Mui-checked': {
      color: '#115e59',
    },
  },
  checkboxLabel: {
    '& .MuiFormControlLabel-label': {
      color: theme.palette.text.primary,
      fontSize: '0.9rem',
    },
    '& .MuiCheckbox-root': {
      color: '#115e59',
    },
  },
  formHelperText: {
    marginTop: '4px',
    color: theme.palette.error.main,
  },
  secondaryText: {
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
    marginTop: '8px',
    marginBottom: '16px',
    '& a': {
      color: '#115e59',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  gridItem: {
    marginBottom: '16px',
  },
  textField: {
    marginBottom: '1rem',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .MuiOutlinedInput-input': {
      color: theme.palette.text.primary,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiFormHelperText-root': {
      color: '#FF6B6B',
    },
  },
};

export default heroSectionStyles;