import { Theme } from '@mui/material/styles';

export const benefitsSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '75rem',
    px: { xs: '1rem', sm: '2rem' },
  },
  headerBox: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
    textAlign: 'center',
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: theme.palette.text.secondary,
    textAlign: 'center',
    maxWidth: '700px',
    marginBottom: '1rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
    },
    gap: '2rem',
    width: '100%',
  },
  featureCard: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#17171799',
    borderRadius: '1rem',

    height: { sm: 'auto', xs: 'auto' },
    minHeight: '210px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    padding: '1rem',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  typographyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    width: '100%',
  },
  iconContainer: {
    width: '4rem',
    height: '4rem',
    borderRadius: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.dark,
    padding: '0.5rem',
    marginBottom: '1rem',
    alignSelf: 'flex-start',
  },
  featureIcon: {
    color: theme.palette.common.white,
    objectFit: 'contain',
    width: '3.5rem',
    height: '3.5rem',
    filter: 'brightness(0) invert(1)',
  },
  featureTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textAlign: 'left',
    fontSize: '18px',
    marginBottom: '0.5rem',
  },
  featureDescription: {
    color: theme.palette.text.secondary,
    textAlign: 'left',
    lineHeight: 1.6,
    fontSize: '14px',
  },
});

export default benefitsSectionStyle;
