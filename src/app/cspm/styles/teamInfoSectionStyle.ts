import theme from '../../../theme';

const teamInfoSectionStyle = {
  box: {
    paddingTop: { sm: '1rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginX: 'auto',
    maxWidth: '75rem',
    px: { xs: '1rem', sm: '2rem' },
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    color: theme.palette.text.primary,
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '3rem',
    width: '100%',
  },
  textContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: { xs: 'center', md: 'flex-start' },
    textAlign: { xs: 'center', md: 'left' },
  },
  descriptionCentered: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
    textAlign: 'center',
    maxWidth: '50rem',
    margin: '0 auto 1.5rem auto',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImage: {
    width: '100%',
    maxWidth: '28rem',
    minHeight: '16rem',
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.disabled,
    fontSize: '1rem',
  },
  emoji: {
    fontSize: '1.5rem',
    marginRight: '0.5rem',
  },
};

export default teamInfoSectionStyle;
