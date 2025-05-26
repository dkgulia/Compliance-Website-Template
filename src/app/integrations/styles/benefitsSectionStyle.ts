import theme from '../../../theme';

const benefitsSectionStyle = {
  section: {

    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  headerBox: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
    marginX: 'auto',
    marginBottom: '3rem',
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem',md:'2rem' },
    fontWeight: 600,
    marginBottom: '1rem',
    color: theme.palette.text.primary,
  },
  description: {
    fontSize: '1.1rem',
    color: theme.palette.text.secondary,
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: '2rem',
    width: '100%',
  },
  benefitCard: {
    padding: '2rem',
    borderRadius: '1rem',
    backgroundColor:
      theme.palette.background.darkTransparent || 'rgba(23, 23, 23, 0.6)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',

    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      transform: 'translateY(-5px)',

      backgroundColor: theme.palette.background.paper,
    },
  },
  iconContainer: {
    width: '3.5rem',
    height: '3.5rem',
    borderRadius: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115e59', // teal color from theme

    marginBottom: '1.5rem',
  },
  benefitIcon: {
    color: theme.palette.common.white,
    fontSize: '1.5rem',
  },
  benefitTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    fontSize: '1.25rem',
    marginBottom: '1rem',
  },
  benefitDescription: {
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    fontSize: '1rem',
  },
};

export default benefitsSectionStyle;