import theme from '../../../../theme';

const eLearningSectionStyle = {
  container: {
    backgroundColor: theme.palette.background.default,
    padding: '5px',
    position: 'relative',
  },
  innerBox: {
    marginTop: '3rem',
    maxWidth: '900px',
    marginX: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
  },
  heading: {
    color: theme.palette.text.primary,
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    lineHeight: 0.5,
    textAlign: 'center',
  },
  subHeading: {
    color: '#6B7280',
    fontSize: { xs: '1.1rem', md: '1.1rem' },
    lineHeight: 0,
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  cardsWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '700px',
    margin: '0 auto',
  },
  learningCard: {
    backgroundColor: theme.palette.background.darkTransparent,
    borderRadius: '10px',
    padding: { xs: '1rem', md: '1.25rem' },
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    transition: 'all 0.2s ease',
    border: `1px solid ${theme.palette.divider}`,
  },
  iconContainer: {
    width: '38px',
    height: '38px',
    borderRadius: '6px',
    backgroundColor: '#115e59',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  icon: {
    fontSize: '20px',
    color: '#ffffff',
    transition: 'all 0.2s ease',
  },
  contentContainer: {
    flex: 1,
  },
  learningText: {
    color: theme.palette.text.primary,
    fontSize: '1rem',
    lineHeight: 1.5,
    fontWeight: 400,
  },
};

export default eLearningSectionStyle;
