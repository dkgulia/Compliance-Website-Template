import theme from '../../../../theme';

const DoraScopeStyle = {
  container: {
    paddingTop: { sm: '1rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    background: theme.palette.background.default,
  },
  innerBox: {
    maxWidth: '72rem',
    margin: '0 auto',
    textAlign: { xs: 'center', sm: 'left' },
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: { xs: '1rem', sm: '2rem' },
    background: '#17171799',
    borderRadius: { xs: '0rem', md: '2rem' },
    border: `1px solid ${theme.palette.divider}`,
  },
  heading: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
		fontWeight: '600',
    color: theme.palette.text.primary,
    textAlign: 'center',
    lineHeight: { xs: '1.3', sm: '1.4' },
  },
  description: {
    color: '#6B7280',
    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.2rem' },
    lineHeight: { xs: '1.5', sm: '1.6', md: '1.8' },
  },
};

export default DoraScopeStyle;
