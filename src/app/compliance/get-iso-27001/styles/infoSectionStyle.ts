import theme from '../../../../theme';

const infoSectionStyle = {
 box: {
   paddingTop: { sm: '2rem', xs: '0.5rem' },
   paddingBottom: { sm: '2rem', xs: '0.5rem' },
   backgroundColor: theme.palette.background.default,
 },
 container: {
   maxWidth: '75rem',
   marginX: 'auto',
   paddingLeft: { xs: '0.5rem', sm: '2rem' },
   paddingRight: { xs: '0.5rem', sm: '2rem' },
 },
 gridContainer: {
   display: 'grid',
   gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
   gap: { xs: '1rem', sm: '2rem' },
   alignItems: 'center',
   textAlign: 'center',
 },
 imageContainer: {
   width: '100%',
   maxWidth: '18.75rem',
   height: 'auto',
   margin: '0 auto',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
 },
 imagePlaceholder: {
   width: '100%',
   minHeight: { xs: '8rem', sm: '12.5rem' },
   backgroundColor: theme.palette.secondary.light,
   borderRadius: '0.625rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   color: theme.palette.text.primary,
   padding: { xs: '0.5rem', sm: '1rem' },
 },
 imagePlaceholderText: {
   color: theme.palette.text.secondary,
   fontSize: { xs: '0.8rem', sm: '1rem' },
 },
 textContainer: {
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '0.5rem', sm: '1rem' },
 },
 title: {
   fontWeight: { xs: 600, sm: 'bold' },
   color: 'white',
   fontSize: { xs: '1.4rem', sm: '1.8rem' },
   lineHeight: 1.4,
 },
 subtitle: {
   fontSize: { xs: '0.85rem', sm: '1.2rem' },
   color: theme.palette.text.primary,
   lineHeight: 1.5,
 },
 subheading: {
   color: theme.palette.text.secondary,
   fontSize: { xs: '0.85rem', sm: '1rem' },
   lineHeight: 1.6,
 },
};

export default infoSectionStyle;