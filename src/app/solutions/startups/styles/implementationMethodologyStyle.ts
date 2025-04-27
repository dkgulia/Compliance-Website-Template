
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import theme from '../../../../theme';
const implementationMethodologyStyle: Record<string, SxProps<Theme>> = {
  container: {
    position: 'relative',
    padding: { xs: '4rem 1rem', md: '3rem 2rem' },
		background: theme.palette.background.default,
    overflow: 'hidden',

  },
  contentContainer: {
    width: '100%',
    maxWidth: '1440px',
    mx: 'auto',
    px: { xs: 2, sm: 4, md: 6 },
  },
  header: {
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
    color: (theme) => theme.palette.text.secondary,
    mb: 6,
  },
  highlightedText: {
    color: (theme) => theme.palette.secondary.main,
  },
  methodologiesContainer: {
    position: 'relative',
    zIndex: 2,
  },
  methodologiesGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
    gap: 4,
    mb: 6,
  },
  methodologyCard: {
    borderRadius: '16px',
    p: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: (theme) => `1px solid ${theme.palette.divider}`,
    background: '#17171799',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: (theme) => theme.customShadows?.card,
    },
  },
  methodologyIcon: {
    fontSize: '2.5rem',
    color: (theme) => theme.palette.secondary.main,
    mb: 2,
  },
  methodologyTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    mb: 2,
    color: (theme) => theme.palette.text.primary,
  },
  methodologyDescription: {
    fontSize: '0.9rem',
    color: (theme) => theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    mt: 4,
  },
  description: {
    fontSize: '1.125rem',
    color: (theme) => theme.palette.text.secondary,
    lineHeight: 1.7,
    maxWidth: '900px',
    mx: 'auto',
    mb: 4,
  },
  ctaButton: {
    marginTop: '1rem',
		color: '#f9fafb',
		fontWeight: 800,
		padding: {
			xs: '0.25rem 0.5rem',
			sm: '0.375rem 0.75rem',
			md: '0.7rem 1rem',
		},
		borderRadius: '0.5rem',
		backgroundColor: '#1f2937',
		border: '1px solid #4b5563',
		textTransform: 'none',
		fontSize: '0.9rem',
		whiteSpace: 'nowrap',
		transition: 'background-color 150ms ease',
		'&:hover': {
			backgroundColor: '#374151',
			borderColor: '#4b5563',
		},
		'&.Mui-disabled': {
			color: '#f9fafb',
			opacity: 0.5,
			backgroundColor: '#1f2937',
			border: '1px solid #374151',
		},
  },
  backgroundElements: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none',
  },
  gridPattern: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(94, 234, 212, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(94, 234, 212, 0.025) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    zIndex: 1,
    opacity: 0.5,
  },
  glowEffect: {
    position: 'absolute',
    width: '30%',
    height: '30%',
    borderRadius: '50%',
    background: (theme) => `radial-gradient(circle, ${theme.palette.secondary.main}15 0%, ${theme.palette.secondary.main}00 70%)`,
    zIndex: 0,
  },
  glowEffect1: {
    top: '20%',
    right: '10%',
  },
  glowEffect2: {
    bottom: '10%',
    left: '10%',
  },
};

export default implementationMethodologyStyle;