import theme from '../../../../theme';

const certificationSectionStyle = {
  container: {
    padding: '5px',
    backgroundColor: theme.palette.background.default,
    marginX: { xs: '1rem', sm: '0rem' },
  },
  innerBox: {
    maxWidth: '75rem',
    marginX: 'auto',
    padding: { xs: '1rem', sm: '2rem' },
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.darkTransparent,

    border: `1px solid ${theme.palette.divider}`,
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  heading: {
    fontWeight: 700,
    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.2rem' },
    color: theme.palette.text.primary,
  },
  subHeading: {
    color: theme.palette.secondary.main,
    fontSize: '1rem',
  },
  description: {
    color: '#6B7280',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    marginTop: '0.5rem',
  },
};

export default certificationSectionStyle;
