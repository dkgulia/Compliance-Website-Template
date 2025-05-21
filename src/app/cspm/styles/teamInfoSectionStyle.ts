import theme from '../../../theme';

const teamInfoSectionStyle = {
  box: {
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    position: 'relative',
    zIndex: 1,
  },
  containerBox: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '3rem',
  },
  heading: {
    fontWeight: '600',
    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem' },
    color: theme.palette.text.primary,
    paddingBottom: { sm: '1rem', xs: '0.75rem' },
    position: 'relative',
  },
  contentBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'center', md: 'flex-start' },
    justifyContent: 'space-between',
    gap: '3rem',
    width: '100%',
    backgroundColor: '#17171799',
    backdropFilter: 'blur(6px)',
    borderRadius: '1rem',
    padding: '2.5rem',
    border: `1px solid ${theme.palette.divider}`,
  },
  textContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCard: {
    width: '100%',
    maxWidth: '500px',
    aspectRatio: '16/10',
    position: 'relative', // Required for Next.js Image with fill
    borderRadius: '0.75rem',
    overflow: 'hidden', // Ensure image respects border radius
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  // Style for the Next.js Image
  teamImage: {
    objectFit: 'cover'as const,
  },
  // Keeping the original placeholder styles for reference
  teamIcon: {
    fontSize: '3rem',
    color: '#115e59',
    marginBottom: '1rem',
  },
  imagePlaceholder: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  // Additional utility styles for consistency
  tag: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    background: '#115e59',
    marginBottom: '1rem',
  },
  tagText: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default teamInfoSectionStyle;