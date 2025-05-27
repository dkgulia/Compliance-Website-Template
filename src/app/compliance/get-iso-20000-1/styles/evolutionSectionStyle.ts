import theme from '../../../../theme';

const evolutionSectionStyle = {
   box: {
       paddingTop: { xs: '0.5rem', sm: '2rem' },
       paddingBottom: { xs: '0.5rem', sm: '2rem' },
       marginTop: '0rem',
       marginX: { xs: '0.5rem', sm: '0rem' },
       backgroundColor: theme.palette.background.default,
   },
   innerBox: {
       maxWidth: '75rem',
       margin: '0 auto',
       textAlign: 'center' as const,
       padding: { xs: '1rem', sm: '2rem' },
   },
   title: {
       fontWeight: 600,
       fontSize: { xs: '1.4rem', sm: '2.2rem' },
       color: theme.palette.primary.main,
       marginBottom: { xs: '0.75rem', sm: '1rem' },
   },
   subtitle: {
       fontSize: { xs: '0.85rem', md: '1.2rem' },
       color: theme.palette.text.secondary,
       marginBottom: { xs: '0.75rem', sm: '1rem' },
   },
   subheading: {
       fontSize: { xs: '0.85rem', sm: '1rem' },
       color: theme.palette.text.primary,
       marginBottom: { xs: '1rem', sm: '1.5rem' },
       lineHeight: 1.6,
   },
   imageNote: {
       color: theme.palette.text.muted,
       fontStyle: 'italic',
       marginTop: { xs: '0.75rem', sm: '1rem' },
       fontSize: { xs: '0.75rem', sm: '0.875rem' },
   },
};

export default evolutionSectionStyle;