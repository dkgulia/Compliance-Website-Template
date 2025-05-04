import { Theme } from '@mui/material/styles';

const categoriesStyle = (theme: Theme) => ({
  section: {
    paddingTop: { sm: '4rem', xs: '2rem' },
    paddingBottom: { sm: '4rem', xs: '2rem' },
    backgroundColor:
      theme.palette.background.darkPaper || theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: { xs: '0 1rem', sm: '0 2rem' },
  },
  title: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: 600,
    marginBottom: '1.5rem',
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  categoriesGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: '1.5rem',
    width: '100%',
  },
  categoryCard: {
    padding: '1.5rem',
    borderRadius: '1rem',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',

    border: `1px solid ${theme.palette.divider}`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.customShadows?.cardHover || theme.customShadows?.card,
    },
  },
  iconContainer: {
    backgroundColor: '#115e59', // teal color from theme
    color: theme.palette.common.white,
    borderRadius: '0.5rem',
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  categoryIcon: {
    fontSize: '1.25rem',
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: theme.palette.text.primary,
  },
  categoryDescription: {
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.5,
  },
});

export default categoriesStyle;
