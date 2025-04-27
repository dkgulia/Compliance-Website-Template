
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

const benefitsSectionStyle: Record<string, SxProps<Theme>> = {
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
    fontSize: { xs: '1rem', md: '1.1rem' },
    maxWidth: '800px',
    mx: 'auto',
    color: '#6b7280',
    mb: 6,
  },
  highlightedText: {
    color: (theme) => theme.palette.secondary.main,
  },
  benefitsWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: { xs: 4, md: 0 },
  },
  benefitCategory: {
    flex: 1,
    px: { xs: 0, md: 2 },
    position: 'relative',
  },
  benefitDivider: {
    position: 'absolute',
    right: 0,
    top: '10%',
    bottom: '10%',
    width: '1px',
    display: { xs: 'none', md: 'block' },
    background: (theme) => theme.palette.divider,
  },
  iconContainerStyle : {
    backgroundColor: '#115e59',
    color: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2
  },
  categoryIcon: {
    fontSize: '3rem',
    color: 'white',
    mb: 2,
  },
  categoryTitle: {
    fontSize: { xs: '1.5rem', md: '1.75rem' },
    fontWeight: 700,
    mb: 2,
    color: (theme) => theme.palette.text.primary,
  },
  categoryDescription: {
    fontSize: '1rem',
    color: (theme) => theme.palette.text.secondary,
    mb: 3,
    lineHeight: 1.6,
  },
  pointsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  pointItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 2,
    mb: 2,
  },
  pointIcon: {
    color: 'white',
    fontSize: '1.25rem',
    mt: 0.25,
  },
  pointText: {
    fontSize: '1rem',
    color: (theme) => theme.palette.text.primary,
  },
  ctaContainer: {
    textAlign: 'center',
    mt: { xs: 6, md: 8 },
    p: { xs: 3, md: 5 },
    borderRadius: '12px',
    border: (theme) => `1px solid ${theme.palette.divider}`,
    background: '#17171799',
  },
  ctaTitle: {
    fontSize: { xs: '1.5rem', md: '1.75rem' },
    fontWeight: 700,
    mb: 2,
    color: (theme) => theme.palette.text.primary,
  },
  ctaDescription: {
    fontSize: '1rem',
    color: (theme) => theme.palette.text.secondary,
    mb: 3,
    maxWidth: '800px',
    mx: 'auto',
  },
  ctaButton: {
    marginTop: '1.5rem',
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
  testimonialContainer: {
    borderRadius: '12px',
    p: 4,
    mt: 6,
    mb: 4,
    border: (theme) => `1px solid ${theme.palette.divider}`,
    background: (theme) => 'rgba(30, 30, 30, 0.4)',
  },
  testimonialQuote: {
    fontSize: { xs: '1.1rem', md: '1.25rem' },
    fontStyle: 'italic',
    color: (theme) => theme.palette.text.primary,
    mb: 3,
    position: 'relative',
    '&::before': {
      content: '"""',
      fontSize: '3rem',
      color: (theme) => theme.palette.secondary.main,
      opacity: 0.3,
      position: 'absolute',
      top: '-1.5rem',
      left: '-1rem',
    }
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  authorAvatar: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    background: (theme) => theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111',
    fontWeight: 700,
    fontSize: '1.25rem',
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  authorName: {
    fontSize: '1rem',
    fontWeight: 600,
    color: (theme) => theme.palette.text.primary,
  },
  authorTitle: {
    fontSize: '0.875rem',
    color: (theme) => theme.palette.text.secondary,
  },
};

export default benefitsSectionStyle;