import theme from '../../../../theme';

const comparingSectionStyle = {
  container: {
    backgroundColor: theme.palette.background.default,
    padding: '5px',
    position: 'relative',
  },
  headerContainer: {
    marginTop: '3rem',
    textAlign: 'center',
    marginBottom: { xs: '2.5rem', md: '3.5rem' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionIcon: {
    color: theme.palette.secondary.main,
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  sectionTitle: {
    color: theme.palette.text.primary,
    fontSize: { xs: '1.6rem', sm: '2rem' },
    fontWeight: '600',
    lineHeight: 1.2,
    position: 'relative',
    paddingBottom: '0.5rem',
  },
  sectionSubtitle: {
    color: '#6B7280',
    fontSize: { xs: '1.1rem', md: '1.1rem' },
    lineHeight: 1.5,
    maxWidth: '700px',
    margin: '0.5rem auto 0',
  },
  comparisonContainer: {
    backgroundColor: theme.palette.background.darkTransparent,
    borderRadius: '12px',
    border: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden',

    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.3)',
      borderColor: theme.palette.secondary.main,
    },
  },
  list: {
    padding: { xs: '1.75rem', md: '2.25rem' },
  },
  listItem: {
    padding: '1rem 0',
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(100, 255, 218, 0.03)',
      '& $arrowIcon': {
        transform: 'translateX(4px)',
        color: theme.palette.secondary.main,
      },
    },
    '&:focus': {
      backgroundColor: 'rgba(100, 255, 218, 0.05)',
      outline: 'none',
      '& $arrowIcon': {
        color: theme.palette.secondary.main,
      },
    },
  },
  listItemIcon: {
    minWidth: '36px',
  },
  arrowIcon: {
    color: '#fffff',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
  },
  listItemText: {
    color: '#6B7280',
    fontSize: '1rem',
    lineHeight: 1.6,
    fontWeight: 400,
  },
  additionalInfo: {
    backgroundColor: theme.palette.background.paper,
    padding: { xs: '1.75rem', md: '2.25rem' },
  },
  infoHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  infoIcon: {
    color: '#white',
    fontSize: '1.5rem',
    marginRight: '0.75rem',
  },
  additionalInfoTitle: {
    color: theme.palette.text.primary,
    fontSize: '1.3rem',
    fontWeight: 600,
  },
  additionalInfoText: {
    color: '#6B7280',
    fontSize: '1rem',
    lineHeight: 1.7,
  },
};

export default comparingSectionStyle;
