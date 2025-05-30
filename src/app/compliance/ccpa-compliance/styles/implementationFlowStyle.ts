import theme from '../../../../theme';

const implementationFlowStyle = {
  outerBox: {
    paddingTop: { sm: '1rem', xs: '0.5rem' },
    paddingBottom: { sm: '1rem', xs: '0.5rem' },
    marginTop: { xs: '1rem', sm: '2rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    px: { xs: '1rem', sm: '2rem' },
  },
  heading: {
    fontSize: { xs: '1.4rem', sm: '2rem' },
    fontWeight: 600,
    textAlign: 'center' as const,
    color: theme.palette.text.primary,
    marginBottom: { xs: '0.5rem', sm: '1rem' },
  },
  subheading: {
    fontSize: { xs: '0.85rem', sm: '1rem' },
    color: '#6B7280',
    marginBottom: { xs: '1rem', sm: '1rem' },
    textAlign: 'center' as const,
    maxWidth: '700px',
    marginX: 'auto',
    lineHeight: '1.6',
  },
  tableContainer: {
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: theme.customShadows?.card || '0 4px 12px rgba(0, 0, 0, 0.4)',
  },
  table: {
    minWidth: 600,
    backgroundColor: '#17171799',
    borderRadius: '0.5rem',
  },
  tableHeadRow: {
    backgroundColor: '#17171799',
  },
  th: {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: { xs: '0.85rem', sm: '1rem' },
    borderBottom: '1px solid #3a3a3a',
  },
  tableBodyRow: {
    '&:hover': {
      backgroundColor: '#262626',
    },
  },
  td: {
    color: '#6B7280',
    fontSize: { xs: '0.8rem', sm: '0.875rem' },
    borderBottom: '1px solid #3a3a3a',
    verticalAlign: 'top' as const,
    paddingTop: { xs: '0.75rem', sm: '1rem' },
    paddingBottom: { xs: '0.75rem', sm: '1rem' },
  },
};

export default implementationFlowStyle;