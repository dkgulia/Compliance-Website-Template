import { Theme } from '@mui/material/styles';

const benefitsSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor:
      theme.palette.background.darkPaper || theme.palette.background.default,
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
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: '2rem',
    width: '100%',
  },
  benefitCard: {
    padding: '1.5rem',
    borderRadius: '1rem',
    backgroundColor:
      theme.palette.background.darkTransparent || 'rgba(23, 23, 23, 0.6)',
    minHeight: '220px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',

    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: theme.customShadows?.cardHover || theme.customShadows?.card,
      backgroundColor: theme.palette.background.paper,
    },
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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
  benefitIcon: {
    color: theme.palette.common.white,
    objectFit: 'contain',
    width: '2.5rem',
    height: '2.5rem',
    filter: 'brightness(0) invert(1)',
  },
  benefitTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textAlign: 'left',
    fontSize: '18px',
    marginBottom: '0.5rem',
  },
  emojiPrefix: {
    marginRight: '0.5rem',
    fontSize: '20px',
  },
  benefitDescription: {
    color: theme.palette.text.secondary,
    textAlign: 'left',
    lineHeight: 1.6,
    fontSize: '14px',
  },
});

export default benefitsSectionStyle;
