import theme from '../../../../theme';

const pitfallsSectionStyle = {
   container: {
       backgroundColor: theme.palette.background.default,
       padding: { xs: '0.5rem 0.5rem', md: '4rem 1rem' },
       position: 'relative',
   },
   headerContainer: {
       textAlign: 'center',
       marginBottom: { xs: '1.5rem', md: '4rem' },
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
   },
   sectionTitle: {
       fontSize: { xs: '1.4rem', sm: '2rem' },
       fontWeight: { xs: 600, sm: '600' },
       lineHeight: 1,
       marginBottom: { xs: '0.5rem', sm: '1rem' },
   },
   sectionSubtitle: {
       color: '#6B7280',
       fontSize: { xs: '0.85rem', md: '1.2rem' },
       lineHeight: 1,
       maxWidth: '700px',
       margin: '0 auto',
   },
   pitfallsContainer: {
       display: 'flex',
       flexDirection: 'column',
       gap: { xs: '1.5rem', sm: '2.5rem' },
       maxWidth: '950px',
       margin: '0 auto',
   },
   pitfallItem: {
       background: '#17171799',
       borderRadius: { xs: '0.75rem', sm: '16px' },
       padding: { xs: '0.75rem', md: '2.5rem' },
       border: `1px solid ${theme.palette.divider}`,
       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
       transition: 'all 0.3s ease',
       '&:hover': {
           transform: 'translateY(-5px)',
           boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
           borderColor: theme.palette.secondary.main,
       },
   },
   pitfallHeader: {
       display: 'flex',
       alignItems: 'flex-start',
       marginBottom: { xs: '0.75rem', sm: '1.5rem' },
       gap: { xs: '0.75rem', sm: '1.5rem' },
   },
   warningIconContainer: {
       width: { xs: '58px', sm: '80px' },
       height: { xs: '58px', sm: '80px' },
       borderRadius: { xs: '8px', sm: '12px' },
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       flexShrink: 0,
       backgroundColor: '#115e59',
   },
   warningIcon: {
       width: { xs: '20px', sm: '48px' },
       height: { xs: '20px', sm: '48px' },
      
   },
   pitfallContent: {
       flex: 1,
   },
   pitfallTitle: {
       color: theme.palette.text.primary,
       fontSize: { xs: '14px', md: '1.5rem' },
       fontWeight: 600,
       marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   },
   pitfallText: {
       color: '#6B7280',
       fontSize: { xs: '12px', sm: '1.1rem' },
       lineHeight: 1,
   },
   mitigationContainer: {
       padding: { xs: '0.75rem', sm: '1.5rem' },
       borderRadius: { xs: '0.75rem', sm: '12px' },
       border: `1px solid ${theme.palette.divider}`,
       marginTop: { xs: '0.75rem', sm: '1.5rem' },
   },
   checkIcon: {
       width: { xs: '16px', sm: '24px' },
       height: { xs: '16px', sm: '24px' },
       objectFit: 'contain' as const,
   },
   mitigationTitle: {
       color: theme.palette.text.primary,
       fontSize: { xs: '14px', sm: '1.2rem' },
       fontWeight: 600,
       marginBottom: { xs: '0.5rem', sm: '0.75rem' },
   },
   mitigationText: {
       color: '#4b5563',
       fontSize: { xs: '12px', sm: '1.1rem' },
       lineHeight: 1.7,
   },
};

export default pitfallsSectionStyle;