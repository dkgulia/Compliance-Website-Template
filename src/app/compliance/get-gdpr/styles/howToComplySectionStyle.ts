import theme from '../../../../theme';

const howToComplySectionStyle = {
  container: {
    backgroundColor: theme.palette.background.default,
    padding: '5px',
  },
  headerContainer: {
    textAlign: 'center',
    marginBottom: { xs: '2.5rem', md: '2.5rem' },
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3rem',
  },
  sectionTitle: {
    color: theme.palette.text.primary,
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    lineHeight: 1.2,
    marginBottom: '0.75rem',
    textAlign: 'center',
  },
  sectionSubtitle: {
    color: '#6B7280',
    fontSize: { xs: '1.1rem', md: '1.1rem' },
    lineHeight: 1.5,
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0.5rem auto 0',
  },
  phaseCard: {
    padding: { xs: '1.25rem', md: '1.75rem' },
    backgroundColor: theme.palette.background.darkTransparent,
    borderRadius: '8px',
    border: `1px solid ${theme.palette.divider}`,

    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#115e59',
      transform: 'translateY(-3px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      '& .MuiSvgIcon-root': {
        color: '#14b8a6',
      },
    },
  },
  phaseNumberContainer: {
    width: { xs: '40px', md: '44px' },
    height: { xs: '40px', md: '44px' },
    borderRadius: '50%',
    backgroundColor: '#115e59',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  phaseNumberIcon: {
    color: 'white',
    fontSize: { xs: '1.6rem', md: '1.8rem' },
    fontWeight: 'bold',
  },
  phaseTextContainer: {
    padding: { xs: '0 0.5rem', md: '0 1rem' },
  },
  phaseTitle: {
    color: theme.palette.text.primary,
    fontSize: { xs: '1.1rem', md: '1.25rem' },
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  checkIconGridItem: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  phaseIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
  },
  phaseIcon: {
    color: '#fffff',
    fontSize: { xs: '1.8rem', md: '2rem' },
    transition: 'color 0.2s ease',
  },
  phaseText: {
    color: '#6B7280',
    fontSize: { xs: '0.95rem', md: '1rem' },
    lineHeight: 1.6,
    fontWeight: 400,
  },
  callToAction: {
    marginTop: { xs: '3rem', md: '3rem' },
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    padding: { xs: '2rem 1.5rem', md: '2.5rem 2rem' },
    borderRadius: '8px',
    border: `1px solid ${theme.palette.divider}`,
  },
  ctaText: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: { xs: '1.15rem', md: '1.3rem' },
  },
  ctaButton: {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    fontSize: '1rem',
    fontWeight: 500,
    padding: '0.8rem 2.5rem',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.secondary.main}`,
    cursor: 'pointer',
    boxShadow: 'none',
    transition: 'all 0.2s ease',
  },
};

export default howToComplySectionStyle;
