import theme from '../../../../theme';

const heroSectionStyle = {
  container: {
    padding: '5rem 1rem',
    background: theme.palette.background.default,
  },
  containerBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '2rem',
  },
  leftContentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    padding: { xs: '1rem', md: '2rem' },
  },
  formBox: {
    marginTop: { xs: '2rem', md: '4' },
    flex: 1,
    background: theme.palette.background.paper,
    borderRadius: '1.5rem',
    boxShadow: theme.customShadows?.card,
    maxWidth: '600px',
    width: '100%',
    padding: '2rem',
    border: `1px solid ${theme.palette.divider}`,
  },
  tag: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    background: theme.palette.primary.main,
    marginBottom: '1rem',
  },
  tagText: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
  mainTitle: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  highlightText: {
    color: theme.palette.primary.light,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    lineHeight: '1.5',
    marginBottom: '1.5rem',
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: { xs: 'space-between', md: 'space-between' },
    alignItems: 'flex-start',
    gap: { xs: '1rem', md: '1rem' },
    marginTop: '2rem',
    width: '100%',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '2.5rem',
  },
  featureIcon: {
    fontSize: { xs: '1.8rem', md: '2.5rem' },
    color: theme.palette.primary.main,
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
    fontSize: { xs: '0.9rem', md: '1.2rem' },
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  featureSubtitle: {
    fontSize: { xs: '0.8rem', md: '0.9rem' },
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: '1.5rem',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '0.5rem',
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.dark,
      boxShadow: theme.customShadows?.button,
    },
  },
  // New styles for form elements
  formLabel: {
    color: theme.palette.text.primary,
    marginBottom: '8px',
    display: 'block',
  },
  formInput: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.divider,
    },
  },
  checkbox: {
    color: theme.palette.primary.main,
  },
  formHelperText: {
    marginTop: '4px',
  },
  secondaryText: {
    color: theme.palette.text.secondary,
  },
  gridItem: {
    marginBottom: '16px',
  }
};

export default heroSectionStyle;