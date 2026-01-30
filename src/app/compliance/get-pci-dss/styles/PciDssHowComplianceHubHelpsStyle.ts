import theme from '../../../../theme';
import { monoTextStyle } from '../../../../theme';

const PciDssHowComplianceHubHelpsStyle = {
  box: {
    paddingTop: { sm: '1.5rem', xs: '1rem' },
    paddingBottom: { sm: '2rem', xs: '1.5rem',md:'3rem' },
    backgroundColor: theme.palette.background.default,
  },
  container: {
    maxWidth: '75rem',
    marginX: 'auto',
    textAlign: 'center' as const,
    px: { xs: 2, sm: 4 },
  },
  title: {
    fontWeight: '600',
    fontSize: { xs: '1.6rem', sm: '2rem' },
    marginTop: '1rem',
    marginBottom: '1rem',
    letterSpacing: '-0.5px',
    color: theme.palette.text.primary,
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '1rem',
    marginBottom: '2rem',
    lineHeight: '1.6rem',
    maxWidth: '40rem',
    marginX: 'auto',
  },
  grid: {
    marginTop: '2rem',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    background: '#17171799',
    borderRadius: '12px',
    border: `1px solid ${theme.palette.divider}`,

    transition:
      'transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
    marginBottom: '1rem',
    padding: '1rem',
  },
  cardContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left' as const,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#115e59',
    borderRadius: '6px',
    width: '38px',
    height: '38px',
    minWidth: '38px',
    marginRight: '1rem',
  },
  icon: {
    fontSize: '20px',
    color: '#ffffff',
  },
  cardText: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: '1.4rem',
    color: '#6b7280',
  },
};

export default PciDssHowComplianceHubHelpsStyle;
