import theme from '../../../../theme';

const bannerStyle = {
  box: {
    paddingTop: { xs: '0.5rem', sm: '1.5rem' },
    paddingBottom: { xs: '1rem', sm: '2rem' },
    marginTop: '0rem',
    backgroundColor: theme.palette.background.default,
    px: { xs: 1, sm: 4 },
  },
  bannerContainer: {
    background: '#17171799',
    borderRadius: { xs: '0.75rem', sm: '12px' },
    width: '100%',
    maxWidth: '75rem',
    marginX: 'auto',
    padding: { xs: '1rem', sm: '3rem' },
    paddingLeft: { xs: '1rem', sm: '3rem' },
    paddingRight: { xs: '1rem', sm: '3rem' },
    boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
  },
  imageContainer: {
    display: { xs: 'none', md: 'flex' },
    justifyContent: { xs: 'center', md: 'flex-start' },
    alignItems: 'center',
    marginTop: { xs: '1rem', md: '0' },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  titleSection: {
    width: '100%',
    marginTop: { xs: '0.25rem', sm: '1rem' },
  },
  descriptionSection: {
    width: '100%',
  },
  buttonSection: {
    width: '100%',
  },
  heading: {
    fontWeight: '600',
    color: theme.palette.text.primary,
    fontSize: { xs: '1.4rem', sm: '2rem' },
    marginBottom: { xs: '0.5rem', md: '0' },
    lineHeight: 1.3,
  },
  description: {
    color: '#6b7280',
    fontSize: { xs: '0.85rem', md: '1rem' },
    lineHeight: '1.5',
    width: '100%',
    marginBottom: { xs: '0.75rem', md: '0' },
  },
  button: {
    marginTop: { xs: '0.75rem', sm: '1.5rem' },
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
    fontSize: { xs: '0.85rem', sm: '0.9rem' },
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
  iconWrapper: {
    width: { xs: '120px', sm: '200px', md: '450px' },
    height: { xs: '120px', sm: '200px', md: '200px' },
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'brightness(0.9) contrast(1.1)',
  },
  icon: {
    fontSize: '2.5rem',
    color: theme.palette.text.primary,
    width: '100%',
    height: '100%',
  },
};

export default bannerStyle;