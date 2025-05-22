import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const complianceFrameworksStyle: Record<string, SxProps<Theme>> = {
  /* --- layout --- */
  container: {
    position: 'relative',
    padding: { xs: '2rem 1rem', md: '3rem 2rem' },
    background: (theme) => theme.palette.background.default,
    overflow: 'hidden',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1440px',
    mx: 'auto',
    px: { xs: 2, sm: 4, md: 6 },
  },

  /* --- section header --- */
  sectionHeader: {
    textAlign: 'center',
    mb: { xs: 5, md: 6 },
  },
  title: {
    fontSize: { xs: '1.8rem', md: '2.5rem' },
    fontWeight: 600,
    mb: 2,
    color: (theme) => theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    maxWidth: '800px',
    mx: 'auto',
    color: '#6b7280',
    mb: 3,
  },
  highlightedText: {
    color: '#115e59',
  },

  /* --- tab bar / select --- */
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    mb: 4,
    borderBottom: 1,
    borderColor: 'divider',
  },
  tab: {
    fontWeight: 600,
    fontSize: '1rem',
    textTransform: 'none',
    px: 3,
    py: 2,
    color: 'white',
    '&.Mui-selected': {
      color: (theme) => theme.palette.secondary.main,
    },
  },
  mobileSelectContainer: { mb: 0, width: '100%' },
  mobileSelect: {
    color: 'white',
    backgroundColor: 'rgba(23, 23, 23, 0.6)',
    borderRadius: '8px',
    '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.2)' },
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.3)' },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#115e59' },
    '.MuiSvgIcon-root': { color: 'white' },
    '.MuiSelect-select': {
      fontWeight: 600,
      fontSize: '1rem',
      padding: '12px 16px',
    },
  },

  /* --- framework panel --- */
  frameworkContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 6 },
    alignItems: 'flex-start',
    mb: { xs: 4, md: 6 },
  },
  frameworkInfo: { flex: '1 1 60%' },
  frameworkTitle: {
    fontSize: { xs: '1.5rem', md: '1.75rem' },
    fontWeight: 700,
    mb: 2,
    color: 'white',
  },
  frameworkDescription: {
    fontSize: '1rem',
    color: '#6b7280',
    mb: 3,
    lineHeight: 1.6,
  },

  /* --- stages / criteria list --- */
  stagesContainer: { display: 'flex', flexDirection: 'column', gap: 2, mt: 3 },
  stageItem: { display: 'flex', alignItems: 'flex-start', gap: 2 },
  stageIcon: { color: 'white', fontSize: '1.5rem', mt: 0.5 },
  stageContent: { display: 'flex', flexDirection: 'column' },
  stageName: { fontSize: '1.1rem', fontWeight: 600, color: 'white' },
  stageDescription: { fontSize: '0.9rem', color: '#6b7280' },

  /* --- pricing card --- */
  pricingCard: {
    flex: '1 1 30%',
    borderRadius: '12px',
    p: 3,
    border: (theme) => `1px solid ${theme.palette.divider}`,
    background: '#17171799',
    width: { xs: '100%', md: 'auto' },
  },
  pricingHeader: {
    borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
    pb: 2,
    mb: 2,
  },
  pricingTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: (theme) => theme.palette.text.primary,
    mb: 1,
  },
  price: {
    fontSize: '2rem',
    fontWeight: 700,
    color: (theme) => theme.palette.secondary.main,
    mb: 1,
  },
  featuresList: { listStyle: 'none', p: 0, m: 0, mb: 3 },
  featureItem: { display: 'flex', alignItems: 'center', gap: 2, mb: 2 },
  featureIcon: { color: 'white', fontSize: '1.25rem' },
  featureText: { fontSize: '0.9rem', color: (theme) => theme.palette.text.secondary },

  viewMoreButton: {
    marginTop: '2rem',
    textTransform: 'none',
    fontWeight: 700,
    color: '#115e59',
    display: 'inline-flex',
    alignItems: 'center',
    '&:hover': {
      background: 'transparent',
      color: '#14806b',
    },
  },
  viewMoreText: { display: 'flex', alignItems: 'center', gap: 0.5,fontSize: '1.2rem' },
  viewMoreIcon: { fontSize: '1.5rem', ml: 0.25 },

  tabPanel: { pt: 4 },
};

export default complianceFrameworksStyle;
