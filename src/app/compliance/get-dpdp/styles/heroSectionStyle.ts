import { Theme } from '@mui/material';

const createHeroSectionStyle = (theme: Theme) => ({
  container: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '2rem', xs: '1rem' },
    background: theme.palette.background.default,
  },
  containerBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '75rem',
    width: '100%',
    margin: '0 auto',
    gap: { xs: '1.5rem', sm: '2rem' },
    padding: { xs: '2rem 1rem', sm: '3rem 2rem' },
  },
  leftContentBox: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: { xs: 'center', md: 'flex-start' },
  },
  formBox: {
    flex: 1,
    maxWidth: '500px',
    width: '100%',
    background: theme.palette.background.darkTransparent,
    borderRadius: '1rem',
    padding: '2rem',
    border: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
  },
  tag: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    borderRadius: '1.3rem',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    background: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    width: { xs: 'auto', sm: 'fit-content' },
    textAlign: 'center',
    whiteSpace: 'nowrap',
    marginTop: '3rem',
  },
  tagText: {
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
  mainTitle: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    lineHeight: 1.3,
  },
  highlightText: {
    color: theme.palette.secondary.main,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  featuresContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: { xs: 'space-between', md: 'space-between' },
    alignItems: 'flex-start',
    gap: { xs: '1rem', md: '5.5rem' },
    marginTop: '0.5rem',
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
    minHeight: '2.5rem', // Consider using responsive sizing in future
  },
  featureIcon: {
    fontSize: { xs: '1.8rem', md: '2.5rem' },
    color: theme.palette.secondary.main,
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
    fontSize: { xs: '1rem', md: '1.2rem' },
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  featureSubtitle: {
    fontSize: { xs: '0.8rem', md: '0.9rem' },
    color: theme.palette.text.secondary,
  },
  formTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  inputField: {
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.background.darkTransparent,
      color: theme.palette.text.primary,
      '& fieldset': {
        borderColor: theme.palette.divider,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
  submitButton: {
    width: '100%',
    padding: { xs: '0.25rem 0.5rem', sm: '0.375rem 0.75rem', md: '0.7rem 1rem' },
    fontWeight: 800,
    fontSize: '0.9rem',
    marginTop: '1.5rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: '0.5rem',
    textTransform: 'none',
    transition: 'background-color 150ms ease',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  formLabel: {
    color: theme.palette.text.primary,
    marginBottom: '0.5rem',
    display: 'block',
  },
  formHelperText: {
    marginTop: '0.25rem',
    color: theme.palette.error.main,
  },
  secondaryText: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    marginTop: '0.5rem',
  },
  gridItem: {
    marginBottom: '1rem',
  },
  checkbox: {
    color: theme.palette.secondary.main,
  },
});

export default createHeroSectionStyle;