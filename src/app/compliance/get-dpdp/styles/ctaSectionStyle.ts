import { Theme } from '@mui/material';

const createCtaSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '3rem' },
    paddingBottom: { sm: '4rem', xs: '3rem' },
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      backgroundSize: '20px 20px',
      opacity: 0.2,
    },
  },
  container: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 700,
    marginBottom: '1rem',
    color: theme.palette.common.white,
  },
  subtitle: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    color: theme.palette.common.white,
    opacity: 0.9, // Consider using theme value in future
  },
  description: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: theme.palette.common.white,
    opacity: 0.8, // Consider using theme value in future
    maxWidth: '700px',
    margin: '0 auto 2rem',
    lineHeight: 1.6,
  },
  button: {
    padding: '0.8rem 2.5rem',
    fontSize: '1rem',
    fontWeight: 600,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.dark,
    borderRadius: '0.5rem',
    textTransform: 'none',
    boxShadow: theme.shadows[2],
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[3],
    },
  },
});

export default createCtaSectionStyle;