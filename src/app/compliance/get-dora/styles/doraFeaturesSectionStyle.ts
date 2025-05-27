import theme from '../../../../theme';

const DoraFeaturesSectionStyle = {
 container: {
   paddingTop: { sm: '1rem', xs: '0.5rem' },
   paddingBottom: { sm: '1rem', xs: '0.5rem' },
   marginTop: '0rem',
   background: theme.palette.background.default,
 },
 innerBox: {
   maxWidth: '75rem',
   marginX: 'auto',
   textAlign: { xs: 'center', sm: 'center' },
   padding: { xs: '0.5rem', sm: '2rem' },
 },
 heading: {
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: 600,
   color: theme.palette.text.primary,
   marginBottom: { xs: '0.75rem', md: '1rem' },
 },
 gridContainer: {
   marginTop: { xs: '0.75rem', md: '1rem' },
 },
 card: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   textAlign: 'left',
   justifyContent: 'flex-start',
   background: '#17171799',
   border: `1px solid ${theme.palette.divider}`,
   borderRadius: { xs: '0.75rem', md: '1rem' },
   padding: { xs: '0.75rem', md: '1rem' },
   height: '100%',
   minHeight: { xs: '10rem', md: '15rem' },
   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
   '&:hover': {
     transform: 'scale(1.03)',
     boxShadow: '0rem 0.5rem 1.5625rem rgba(0,0,0,0.6)',
   },
 },
 iconWrapper: {
   width: { xs: '3rem', md: '4rem' },
   height: { xs: '3rem', md: '4rem' },
   backgroundColor: '#115e59',
   borderRadius: '0.6rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: { xs: '0.75rem', md: '1rem' },
   alignSelf: 'flex-start',
   '& svg': {
     fontSize: { xs: '1.5rem', md: '2rem' },
   },
 },
 cardContainer: {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'flex-start',
   width: '100%',
 },
 cardTitle: {
   fontWeight: 'bold',
   color: theme.palette.text.primary,
   marginBottom: { xs: '0.375rem', md: '0.5rem' },
   fontSize: { xs: '14px', md: '1.1rem' },
   textAlign: 'left',
   width: '100%',
 },
 cardDescription: {
   color: theme.palette.text.secondary,
   fontSize: { xs: '12px', md: '0.95rem' },
   lineHeight: 1.6,
   textAlign: 'left',
   width: '100%',
 },
};

export default DoraFeaturesSectionStyle;