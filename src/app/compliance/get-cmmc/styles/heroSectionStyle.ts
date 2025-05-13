import theme from '../../../../theme';

const heroSectionStyle = {
  container: {
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
    flexDirection: { xs: 'column', md: 'row' } as const,
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
  },
  chip: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    background: '#115e59',
    borderRadius: '2rem',
    marginBottom: '1rem',
  },
  chipTypography: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: 'white',
  },
  mainTitle: {
    fontSize: { xs: '2rem', md: '2.4rem' },
    fontWeight: '600',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
    lineHeight: 1.2,
  },
  highlightText: {
    color: theme.palette.primary.light,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    lineHeight: '1.7',
    marginBottom: '1.5rem',
    maxWidth: '550px',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '2rem',
    marginTop: '2rem',
  },
  featureItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '0.5rem',
  },
  iconWrapper: {
    width: '3rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#115e59',
    borderRadius: '50%',
    marginBottom: '0.5rem',
  },
  featureIcon: {
    color: 'white',
    fontSize: '1.5rem',
  },
  featureTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  featureTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  featureSubtitle: {
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
  },
  formBox: {
    flex: 1,
    background: theme.palette.background.paper,
    borderRadius: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    maxWidth: '600px',
    width: '100%',
    padding: '2rem',
    border: `1px solid ${theme.palette.divider}`,
    marginTop:'5rem'
  },
  formContainer: {
    width: '100%',

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
  formHelperText: {
    marginTop: '4px',
    color: theme.palette.error.main,
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
  button: {
    backgroundColor: '#115e59',
    color: '#f9fafb',
    borderRadius: '0.5rem',
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.5rem 1rem',
    },
    textTransform: 'none' as const,
    fontSize: '1rem',
    fontWeight: 'medium',
    whiteSpace: 'nowrap' as const,
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
  compliancesLabel: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: theme.palette.text.primary,
  },
  gridItem: {
    marginBottom: '16px',
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
  statsContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '1.5rem',
    width: '100%',
    marginBottom: '2rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
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
    textAlign: 'center' as const,
    maxWidth: '90px',
  },
};

export default heroSectionStyle;