
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const complianceFrameworksStyle: Record<string, SxProps<Theme>> = {
  container: {
    position: 'relative',
    padding: { xs: '4rem 1rem', md: '3rem 2rem' },
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
    fontWeight: 600,
    mb: 2,
    color: (theme) => theme.palette.text.primary,
  },
  subtitle: {
    fontSize: { xs: '1rem', md: '1.125rem' },
    maxWidth: '800px',
    mx: 'auto',
    color: '#6b7280',
    mb: 6,
  },
  highlightedText: {
    color: '#115e59',
  },
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
  frameworkContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 6 },
    alignItems: 'flex-start',
    mb: { xs: 4, md: 6 },
  },
  frameworkInfo: {
    flex: '1 1 60%',
  },
  frameworkTitle: {
    fontSize: { xs: '1.5rem', md: '1.75rem' },
    fontWeight: 700,
    mb: 2,
    color:'white',
  },
  frameworkDescription: {
    fontSize: '1rem',
    color: '#6b7280',
    mb: 3,
    lineHeight: 1.6,
  },
  stagesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    mt: 3,
  },
  stageItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 2,
  },
  stageIcon: {
    color: 'white',
    fontSize: '1.5rem',
    mt: 0.5,
  },
  stageContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  stageName: {
    fontSize: '1.1rem',
    fontWeight: 600,
    color: 'white'
  },
  stageDescription: {
    fontSize: '0.9rem',
    color: '#6b7280',
  },
  pricingCard: {
    flex: '1 1 30%',
    borderRadius: '12px',
    p: 3,
    border: (theme) => `1px solid ${theme.palette.divider}`,
    background: '#17171799',
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
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    mb: 3,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    mb: 2,
  },
  featureIcon: {
    color:'white',
    fontSize: '1.25rem',
  },
  featureText: {
    fontSize: '0.9rem',
    color: (theme) => theme.palette.text.secondary,
  },
  viewMoreButton: {
    textTransform: 'none',
    color: 'white',
    fontWeight: 600,
    mt: 2,
    '&:hover': {
      background: 'transparent',
      color: (theme) => theme.palette.secondary.light,
    },
  },
  tabPanel: {
    pt: 4,
  },
};

export default complianceFrameworksStyle;