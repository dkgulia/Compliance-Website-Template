import { Theme } from '@mui/material/styles';

export const termsAndConditionsStyles = (theme: Theme) => ({
  containerStyle: {
    paddingTop: '4rem',
    paddingBottom: '4rem',
    backgroundColor: theme.palette.background.default,
  },

  sectionStyle: {
    marginBottom: '3rem',
  },

  subsectionStyle: {
    marginTop: '2rem',
    marginBottom: '1.5rem',
    paddingLeft: '1rem',
  },

  headingStyle: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },

  subheadingStyle: {
    fontSize: { xs: '1rem', sm: '1.2rem' },
    fontWeight: '600',
    marginTop: '1.5rem',
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },

  subsubheadingStyle: {
    fontSize: { xs: '1.2rem', sm: '1.4rem' },
    fontWeight: '600',
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
    color: theme.palette.text.primary,
  },

  paragraphStyle: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    marginBottom: '1rem',
    lineHeight: 1.6,
  },

  letterHeadingStyle: {
    fontSize: '1.05rem',
    fontWeight: '600',
    color: theme.palette.text.primary,
    marginTop: '1.25rem',
    marginBottom: '0.5rem',
  },

  linkStyle: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  headerBoxStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
    background: `linear-gradient(135deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
    padding: '2rem',
    borderRadius: '8px',
  },

  headerTitleStyle: {
    color: theme.palette.common.white,
    textAlign: 'center',
    marginBottom: '1rem',
  },

  headerDateStyle: {
    fontSize: '1.1rem',
    color: theme.palette.common.white,
    textAlign: 'center',
    maxWidth: '800px',
    marginBottom: '1rem',
  },

  headerDescriptionStyle: {
    fontSize: '1rem',
    color: theme.palette.common.white,
    textAlign: 'center',
    maxWidth: '800px',
  },
});

export default termsAndConditionsStyles;
