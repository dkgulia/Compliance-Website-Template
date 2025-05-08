import theme from '../../../theme';

const infoSectionStyle = {
  box: {
    paddingTop: { sm: '1.5rem', xs: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1.5rem' },
    marginTop: '0rem',
    backgroundColor: theme.palette.background.default,
    px: { xs: 2, sm: 4 },
  },
  infoContainer: {
    background: '#17171799',
    borderRadius: { xs: '0.75rem', sm: '12px',md:'1rem' },
    width: '100%',
    maxWidth: '73rem',
    marginX: 'auto',
    padding: { xs: '1.5rem', sm: '3rem' },
    paddingLeft: { xs: '1rem', sm: '3rem' },
    paddingRight: { xs: '1rem', sm: '3rem' },
    overflow: 'hidden',
    border: `1px solid ${theme.palette.divider}`,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: { xs: 'center', md: 'flex-end' },
    alignItems: 'center',
    marginTop: { xs: '1rem', md: '0' },
  },
  titleSection: {
    width: '100%',
    marginTop: { xs: '0.5rem', sm: '1rem' },
  },
  descriptionSection: {
    width: '100%',
  },
  heading: {
    fontWeight: '600',
    color: theme.palette.text.primary,
    fontSize: { xs: '1.4rem', sm: '2rem' },
    marginBottom: { xs: '0.75rem', md: '0' },
    lineHeight: 1.3,
  },
  description: {
    color: '#6b7280',
    fontSize: { xs: '0.9rem', md: '1rem' },
    lineHeight: '1.5',
    width: '100%',
    marginBottom: { xs: '1rem', md: '1rem' },
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
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dashed #115e59',
    padding: '1rem',
  },
  placeholderText: {
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
  },
};

export default infoSectionStyle;