
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const packageOverviewStyle: Record<string, SxProps<Theme>> = {
  container: {
    position: 'relative',
    padding: { xs: '4rem 1rem', md: '4rem 2rem' },
    background: (theme) => theme.palette.background.default,
    overflow: 'hidden',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1440px',
    mx: 'auto',
    px: { xs: 2, sm: 4, md: 6 },
  },
  sectionHeader: {
    textAlign: 'center',
    mb: { xs: 5, md: 6 },
  },
  title: {
    fontSize: { xs: '2rem', md: '2.5rem' },
    fontWeight: 700,
    mb: 2,
    color: (theme) => theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    maxWidth: '800px',
    mx: 'auto',
    color: '#6b7280',
  },
  highlightsContainer: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
    gap: { xs: 3, md: 4 },
    mb: { xs: 4, md: 6 },
  },
  highlightCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#17171799',
    border: (theme) => `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: (theme) => theme.customShadows?.card,
    },
  },
  cardContent: {
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    background: '#115e59',
    mb: 2.5,
  },
  icon: {
    color: 'white',
    fontSize: '2rem',
  },
  cardTitle: {
    fontSize: { xs: '1.25rem', md: '1.5rem' },
    fontWeight: 600,
    mb: 2,
    color: (theme) => theme.palette.text.primary,
  },
  cardDescription: {
    color: '#6b7280',
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  descriptionContainer: {
    borderRadius: '12px',
    border: (theme) => `1px solid ${theme.palette.divider}`,
    background: (theme) => 'rgba(20, 20, 20, 0.4)',
    padding: { xs: 3, md: 4 },
    mt: 5,
  },
  description: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    color: '#6b7280',
    lineHeight: 1.7,
  },
  accentText: {
    color: (theme) => theme.palette.secondary.main,
    fontWeight: 600,
  },
  gridPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(rgba(94, 234, 212, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(94, 234, 212, 0.025) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    zIndex: 1,
    opacity: 0.5,
  },
};

export default packageOverviewStyle;