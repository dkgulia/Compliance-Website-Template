import { Theme } from '@mui/material/styles';

const ctaSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  contentBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: '3rem',
  },
  textContent: {
    flex: 1,
    textAlign: { xs: 'center', md: 'left' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    marginBottom: '1.5rem',
    color: theme.palette.common.white,
  },
  description: {
    fontSize: '1.1rem',
    color: theme.palette.common.white,
    marginBottom: '2rem',
    lineHeight: 1.6,
    opacity: 0.9,
  },
  ctaButton: {
    color: theme.palette.common.white,
    fontWeight: 800,
    padding: {
      xs: '0.5rem 1rem',
      sm: '0.7rem 1.5rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.grey[900],
    border: `1px solid ${theme.palette.grey[600]}`,
    textTransform: 'none',
    fontSize: '1rem',
    whiteSpace: 'nowrap',
    transition: 'all 150ms ease',
    '&:hover': {
      backgroundColor: theme.palette.grey[800],
      borderColor: theme.palette.grey[600],
      transform: 'translateY(-2px)',
    },
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '1rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '16/9',
    maxWidth: '500px',
    borderRadius: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    border: '1px dashed rgba(255, 255, 255, 0.5)',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
});

export default ctaSectionStyle;
