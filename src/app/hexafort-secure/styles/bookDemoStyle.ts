import { AlignHorizontalCenter } from '@mui/icons-material';
import theme from '../../../theme';

const bookDemoStyle = {
  box: {

    paddingBottom: { xs: '1rem', sm: '2rem' },
    backgroundColor: theme.palette.background.default,
    px: { xs: 2, sm: 4 },
  },
  bannerContainer: {
    background: theme.palette.background.darkTransparent || '#17171799',
    borderRadius: '1rem',
    width: '100%',
    maxWidth: '70rem',
    marginX: 'auto',
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    flexDirection: { xs: 'column', md: 'row' },
    minHeight: { xs: 'auto', sm: '300px' },
  },
  bannerContent: {
    padding: { xs: '2rem', sm: '3rem', md: '3rem' },
    flex: '1 1 60%',
  },
  imageContainer: {
    flex: '1 1 40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '0 2rem 2rem', md: '2rem' },
    maxWidth: { xs: '300px', md: '400px' },
  },
  heading: {
    fontWeight: '600',
    color: theme.palette.text.primary,
    fontSize: { xs: '1.6rem', sm: '2rem',md:'36px' },
    marginBottom: '1rem',
    lineHeight: 1.3,
  },
  points: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '1rem',
    marginBottom: '2rem',
  },
  point: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    fontSize: '18px',
    lineHeight: 1.6,
  },
  icon: {
    color: theme.palette.secondary.main,
    marginRight: '0.75rem',
    fontSize: '1.2rem',
  },
  tagline: {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    borderRadius: '1rem',
    background: theme.palette.secondary.dark,
    marginBottom: '0.75rem',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontSize: '0.9rem',
    width: 'fit-content',
  },
};

export default bookDemoStyle;
