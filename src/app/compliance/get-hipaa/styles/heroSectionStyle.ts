import theme from '../../../../theme';

const heroSectionStyles = {
  box: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    background: theme.palette.background.default,
  },
  containerBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: { xs: '2rem 1rem', sm: '3rem 2rem' },
    gap: { xs: '2rem', md: '3rem' },
    borderRadius: '2rem',
  },
  leftContentBox: {
    width: { xs: '100%', md: '55%' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    textAlign: { xs: 'center', md: 'left' },
    marginTop: '2rem',
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
  },
  chipTypography: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  mainTitle: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    marginBottom: '1rem',
  },
  highlightText: {
    color: theme.palette.text.primary,
  },
  description: {
    color: '#6B7280',
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
    color: '#6B7280',
    fontSize: '0.9rem',
    marginTop: '0.25rem',
    textAlign: 'center',
    maxWidth: '90px',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'center', sm: 'flex-start' },
    gap: '1.5rem',
    width: '100%',
    marginBottom: '1.5rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    width: { xs: '100%', sm: 'auto' },
    justifyContent: { xs: 'flex-start', md: 'center' },
    maxWidth: { xs: '250px', sm: 'none' },
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
    color: theme.palette.text.primary,
    fontSize: '1.2rem',
  },
  featureTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: { xs: 'left', md: 'left' },
  },
  featureTitle: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.2',
  },
  featureSubtitle: {
    marginTop: '0.5rem',
    color: '#6B7280',
    fontSize: '0.9rem',
    lineHeight: '1.2',
  },
  formBox: {
    marginTop: { xs: '1rem', md: '3' },
    flex: 1,
    background: '#17171799',
    borderRadius: '1.5rem',

    maxWidth: '600px',
    width: '100%',
    padding: '2rem',
    border: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
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
