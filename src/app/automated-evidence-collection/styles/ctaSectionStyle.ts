import { Theme } from '@mui/material/styles';

export const ctaSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  contentBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: '3rem',
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: { xs: '1.4rem', sm: '1.8rem' },
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: theme.palette.common.white,
  },
  subtitle: {
    fontSize: '1.2rem',
    color: theme.palette.common.white,
    marginBottom: '1rem',
    lineHeight: 1.6,
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.common.white,
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  ctaButton: {
    marginTop: '1rem',
    color: theme.palette.common.white,
    fontWeight: 800,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 1rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: theme.palette.grey[900],
    border: `1px solid ${theme.palette.grey[600]}`,
    textTransform: 'none',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    transition: 'background-color 150ms ease',
    '&:hover': {
      backgroundColor: theme.palette.grey[800],
      borderColor: theme.palette.grey[600],
    },
    '&.Mui-disabled': {
      color: theme.palette.common.white,
      opacity: 0.5,
      backgroundColor: theme.palette.grey[900],
      border: `1px solid ${theme.palette.grey[700]}`,
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
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
  },
  placeholderBox: {
    width: '100%',
    aspectRatio: '16/9',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
    border: '1px dashed rgba(255, 255, 255, 0.5)',
    padding: '1rem',
  },
  placeholderText: {
    color: theme.palette.common.white,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default ctaSectionStyle;
