import theme from '../../../theme';

const infoSectionStyle = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    px: { xs: '1.5rem', md: '12rem', '2xl': '18rem' },
    marginTop: { xs: '3.5rem', md: '6rem' },
    gap: '2rem',
    alignItems: 'center',
    background: theme.palette.background.default,
    position: 'relative',
    overflow: 'hidden',
  },
  infoContainer: {
    background: '#171717',
    borderRadius: '1rem',
    width: '100%',
    maxWidth: '1200px',
    marginX: 'auto',
    padding: { xs: '2rem', md: '3rem' },
    overflow: 'hidden',
    border: '1px solid #374151',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: { xs: 'center', md: 'left' },
  },
  tagline: {
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    color: '#0d9488',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: { xs: '1.5rem', md: '1.875rem' },
    fontWeight: 600,
    color: theme.palette.text.primary,
    marginBottom: '1rem',
    lineHeight: 1.3,
  },
  description: {
    color: '#6b7280',
    fontSize: { xs: '1rem', md: '1.1rem' },
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  imageContainer: {
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderBox: {
    width: '100%',
    aspectRatio: '1/1',
    backgroundColor: 'rgba(17, 94, 89, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dashed #0d9488',
    padding: '1rem',
  },
  placeholderText: {
    color: '#6b7280',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '0.875rem',
  },
};

export default infoSectionStyle;