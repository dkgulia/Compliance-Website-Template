import theme from '../../../theme';

const workflowSectionStyle = {
  container: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    backgroundColor: theme.palette.background.default,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '75rem',
    padding: { xs: '1rem', sm: '2rem' },
  },
  titleContainer: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '60rem',
    marginX: 'auto',
    marginBottom: '2rem',
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.8rem', sm: '2.5rem',md:'2rem'},
    color: theme.palette.text.primary,
    paddingBottom: { sm: '1rem', xs: '0.5rem',md:'0.5rem' },
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: '1.125rem',
    marginBottom: '1rem',
    lineHeight: '1.6',
    maxWidth: '40rem',
    marginX: 'auto',
  },
  stepsContainer: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gap: '1.5rem',
    width: '100%',
  },
  stepCard: {
    position: 'relative',
    backgroundColor: theme.palette.background.darkTransparent,
    borderRadius: '1rem',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: { sm: '16rem', xs: 'auto', md: '14rem' },
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    justifyContent: 'flex-start',
    '&:hover': {
      transform: 'scale(1.05)',

      backgroundColor: theme.palette.background.paper,
    },
    marginBottom: '1rem',
  },
  stepNumber: {
    position: 'absolute',
    top: '-1rem',
    left: '-1rem',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  iconContainer: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,

    marginBottom: '1rem',
  },
  icon: {
    color: theme.palette.common.white,
    fontSize: '1.5rem',
  },
  stepTitle: {
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    textAlign: 'center',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  stepDescription: {
    color: theme.palette.text.secondary,
    textAlign: 'center',
    lineHeight: 1.6,
    fontSize: '0.9rem',
  },
};

export default workflowSectionStyle;
