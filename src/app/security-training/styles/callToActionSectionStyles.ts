import { Subtitles } from '@mui/icons-material';
import theme from '../../../theme';

const callToActionSectionStyles = {
  container: {
    paddingTop: { sm: '1.5rem', xs: '1rem',md:'3rem' },
    paddingBottom: { sm: '3rem', xs: '1.5rem' },
    marginTop: '0',
    background: theme.palette.background.default,
    border: 'none',
    '&::before, &::after': {
      display: 'none',
      content: '"none"',
    },
  },
  bannerContainer: {
    background: '#17171799',
    borderRadius: '0.75rem',
    width: '100%',
    maxWidth: '72rem',
    marginX: 'auto',
    padding: { xs: '1.5rem', sm: '2rem' },
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',
  },
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: { xs: '0.5rem', md: '1rem' },
    textAlign: { xs: 'center', md: 'left' },
  },
  title: {
    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: theme.palette.text.primary,
    lineHeight: 1.2,
  },
  Subtitle: {
    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '1.5rem' },
    fontWeight: '500',
    marginBottom: '0.75rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.2,
  },
  description: {
    fontSize: '1rem',
    marginBottom: '1.25rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
  },
  ctaButton: {
    marginTop:'1rem',
    color: '#f9fafb',
    fontWeight: 600,
    padding: {
      xs: '0.5rem 1rem',
      sm: '0.6rem 1.25rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: '#1f2937',
    border: '1px solid #4b5563',
    textTransform: 'none',
    fontSize: '0.95rem',
    alignSelf: { xs: 'center', md: 'flex-start' },
    whiteSpace: 'nowrap',
    transition: 'all 150ms ease',
    '&:hover': {
      backgroundColor: '#374151',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  },
  imageGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: { xs: '1rem', md: 0 },
  },
};

export default callToActionSectionStyles;