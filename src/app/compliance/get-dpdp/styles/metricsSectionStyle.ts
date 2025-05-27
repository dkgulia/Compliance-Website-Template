import { Theme } from '@mui/material';

const createMetricsSectionStyle = (theme: Theme) => ({
 box: {
   paddingTop: { xs: '1rem', sm: '2rem' },
   paddingBottom: { xs: '1rem', sm: '2rem' },
   background: theme.palette.background.default,
 },
 header: {
   textAlign: 'center' as const,
   marginBottom: { xs: '1.5rem', sm: '3rem' },
 },
 title: {
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: 600,
   marginBottom: '0.5rem',
   color: theme.palette.text.primary,
 },
 subtitle: {
   fontSize: { xs: '0.85rem', md: '1.1rem' },
   color: theme.palette.text.secondary,
   maxWidth: '800px',
   margin: '0 auto',
   lineHeight: 1.4,
 },
 metricCard: {
   backgroundColor: '#17171799',
   borderRadius: { xs: '0.75rem', sm: '1rem' },
   padding: { xs: '1.5rem', sm: '2rem' },
   height: '100%',
   display: 'flex',
   flexDirection: 'column' as const,
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center' as const,
   minHeight: { xs: '9rem', sm: '12rem' },
   border: `1px solid ${theme.palette.divider}`,
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   '&:hover': {
     transform: 'scale(1.02)',
     boxShadow: '0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.6)',
   },
 },
 metricValue: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: { xs: '2rem', md: '3.5rem' },
   marginBottom: '0.5rem',
 },
 metricLabel: {
   color: theme.palette.text.secondary,
   fontWeight: 'medium',
   fontSize: { xs: '0.85rem', md: '1.25rem' },
 },
});

export default createMetricsSectionStyle;