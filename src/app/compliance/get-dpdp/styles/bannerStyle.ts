import { Theme } from '@mui/material';

const createBannerStyle = (theme: Theme) => ({
  section: {
    padding: { xs: '3rem 1rem', md: '4rem 2rem' },
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
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    textAlign: 'center',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 700,
    marginBottom: '1rem',
    color: theme.palette.common.white,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.2rem' },
    color: theme.palette.common.white,
    opacity: 0.9,
    maxWidth: '800px',
    margin: '0 auto 2rem',
    lineHeight: 1.6,
    whiteSpace: 'pre-line',
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
      boxShadow: theme.shadows[4],
    },
  },
});

export default createBannerStyle;