import theme from '../../../../theme';

const heroSectionStyle = {
  container: {
    backgroundColor: theme.palette.background.default,
    padding: '70px 0',
    color: theme.palette.text.primary,
    marginTop: '1rem',
  },
  textContent: {
    paddingRight: { xs: 0, md: '2rem' },
  },
  heroTitle: {
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    marginBottom: '1rem',
    lineHeight: 1.2,
    marginTop: '2rem',
    color: theme.palette.text.primary,
  },
  heroSubtitle: {
    fontSize: { xs: '1.2rem', md: '1.5rem' },
    fontWeight: 500,
    marginBottom: '1.5rem',
    color: '#115e59',
  },
  heroDescription: {
    fontSize: '1rem',
    marginBottom: '2rem',
    lineHeight: 1.6,
    color: '#6B7280',
  },
  ctaButton: {
    marginTop: '1.5rem',
    color: '#f9fafb',
    fontWeight: 800,
    padding: {
      xs: '0.25rem 0.5rem',
      sm: '0.375rem 0.75rem',
      md: '0.7rem 1rem',
    },
    borderRadius: '0.5rem',
    backgroundColor: '#1f2937',
    border: '1px solid #4b5563',
    textTransform: 'none',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    transition: 'background-color 150ms ease',
    '&:hover': {
      backgroundColor: '#374151',
      borderColor: '#4b5563',
    },
    '&.Mui-disabled': {
      color: '#f9fafb',
      opacity: 0.5,
      backgroundColor: '#1f2937',
      border: '1px solid #374151',
    },
  },
  imageContainer: {
    position: 'relative',
    height: '400px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    marginTop: '3rem',
  },
  baseCardStyle: {
    backgroundColor: theme.palette.background.darkTransparent,
    height: '100%',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,

    '&:hover': {
      borderColor: theme.palette.secondary.main,
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    },
  },
  card1: {
    backgroundColor: theme.palette.background.darkTransparent,
    height: '90%',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,

    '&:hover': {
      borderColor: theme.palette.secondary.main,
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      '& .MuiBox-root': {
        backgroundColor: '#115e59',
      },
    },
  },
  card2: {
    backgroundColor: theme.palette.background.darkTransparent,
    height: '90%',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,

    '&:hover': {
      borderColor: theme.palette.secondary.main,
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      '& .MuiBox-root': {
        backgroundColor: '#115e59',
      },
    },
  },
  card3: {
    backgroundColor: theme.palette.background.darkTransparent,
    height: '90%',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    border: `1px solid ${theme.palette.divider}`,

    '&:hover': {
      borderColor: theme.palette.secondary.main,
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      '& .MuiBox-root': {
        backgroundColor: '#115e59',
      },
    },
  },
  cardContent: {
    padding: '0.3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: '38px',
    height: '38px',
    borderRadius: '8px',
    backgroundColor: '#134e4a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    transition: 'background-color 0.3s ease',
  },
  cardIcon: {
    fontSize: '20px',
    color: 'white',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
    color: '#fffff',
    textAlign: 'left',
  },
  cardDescription: {
    fontSize: '0.9rem',
    color: '#6B7280',
    lineHeight: 1.6,
    textAlign: 'left',
  },
};

export default heroSectionStyle;
