import { Theme } from '@mui/material/styles';

export const infoSectionStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '2rem', xs: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1rem' },
  },
  container: {
    position: 'relative',
    zIndex: 1,
  },
  contentBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: '3rem',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: { xs: '1.4rem', sm: '1.8rem' },
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: theme.palette.text.primary,
  },
  description: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  placeholderBox: {
    width: '100%',
    aspectRatio: '16/9',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    border: `1px dashed ${theme.palette.secondary.main}`,
    padding: '1rem',
  },
  placeholderText: {
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default infoSectionStyle;
