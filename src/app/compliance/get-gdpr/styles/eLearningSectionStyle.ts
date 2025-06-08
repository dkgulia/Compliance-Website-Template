import theme from '../../../../theme';

const eLearningSectionStyle = {
 container: {
   backgroundColor: theme.palette.background.default,
   padding: { xs: '0.5rem', sm: '5px' },
   position: 'relative',
 },
 innerBox: {
   marginTop: { xs: '1.5rem', sm: '3rem' },
   maxWidth: '900px',
   marginX: 'auto',
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '1rem', sm: '2rem' },
   alignItems: 'center',
 },
 heading: {
   color: theme.palette.text.primary,
   fontSize: { xs: '1.4rem', sm: '2rem' },
   fontWeight: { xs: 600, sm: '600' },
   lineHeight: 0.5,
   textAlign: 'center',
 },
 subHeading: {
   color: '#6B7280',
   fontSize: { xs: '0.85rem', md: '1.1rem' },
   lineHeight: 0,
   textAlign: 'center',
   marginBottom: { xs: '0.75rem', sm: '1.5rem' },
 },
 cardsWrapper: {
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: { xs: '0.5rem', sm: '1rem' },
   maxWidth: '700px',
   margin: '0 auto',
 },
 learningCard: {
   backgroundColor: theme.palette.background.darkTransparent || '#17171799',
   borderRadius: { xs: '0.75rem', sm: '10px' },
   padding: { xs: '0.75rem', md: '1.25rem' },
   display: 'flex',
   alignItems: 'center',
   gap: { xs: '0.75rem', sm: '1.25rem' },
   transition: 'all 0.2s ease',
   border: `1px solid ${theme.palette.divider}`,
 },
 iconContainer: {
   width: { xs: '28px', sm: '38px' },
   height: { xs: '28px', sm: '38px' },
   borderRadius: '6px',
   backgroundColor: '#115e59',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexShrink: 0,
 },
 icon: {
   fontSize: { xs: '16px', sm: '20px' },
   color: '#ffffff',
   transition: 'all 0.2s ease',
 },
 contentContainer: {
   flex: 1,
 },
 learningText: {
   color: theme.palette.text.primary,
   fontSize: { xs: '12px', sm: '1rem' },
   lineHeight: 1.5,
   fontWeight: 400,
 },
};

export default eLearningSectionStyle;