import theme from '../../../../theme';

const featuresSectionStyle = {
  outerBox: {
    paddingBottom: { sm: '2rem', xs: '1rem' },
    paddingTop: { xs: '0.5rem', sm: '1rem' },
    marginTop: '0rem',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '75rem',
    px: { xs: '0.75rem', sm: '2rem' },
  },
  containerBox: {
    textAlign: 'center' as const,
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: { xs: '1rem', sm: '3rem' },
  },
  heading: {
    fontWeight: 600,
    fontSize: { xs: '1.4rem', sm: '2rem' },
    color: theme.palette.text.primary,
  },
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#17171799',
    borderRadius: { xs: '0.75rem', sm: '1rem' },
    boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
    height: { sm: 'auto', xs: 'auto' },
    minHeight: { xs: '140px', sm: '200px' },
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',
  },
  cardContent: {
    textAlign: 'center' as const,
  },
  iconBox: {
    width: { xs: '35px', sm: '38px' },
    height: { xs: '35px', sm: '38px' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115e59',
    borderRadius: '0.4rem',
    marginBottom: { xs: '0.5rem', sm: '1rem' },
    padding: { xs: '0.3rem', sm: '0.5rem' },
    alignSelf: 'flex-start',
    marginTop:'1rem'
  },
  icon: {
    fontSize: { xs: '20px', sm: '20px' },
    color: 'white',
  },
  title: {
    fontWeight: 600,
    color: theme.palette.text.primary,
    textAlign: 'left' as const,
    fontSize: { xs: '14px', sm: '18px' },
    marginBottom: { xs: '0.25rem', sm: '0.5rem' },
    lineHeight: 1.3,
  },
  description: {
    color: '#6B7280',
    textAlign: 'left' as const,
    lineHeight: 1.4,
    fontSize: { xs: '12px', sm: '14px' },
    marginBottom: 0,
  },
  gridItem: {
    marginBottom: { xs: '0.75rem', sm: '1.5rem' },
  },
};

export default featuresSectionStyle;