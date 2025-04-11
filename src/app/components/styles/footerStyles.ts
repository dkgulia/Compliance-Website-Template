const blueColor = '#7CB9E8';

const footerStyles = {
  mainContainer: {
    color: '#fff',
    pt: 6,
    pb: 3
  },
  logoSection: {
    mb: { xs: 3, md: 0 },
    pr: { md: 8 }
  },
  logoContainer: {
    mb: 4
  },
  logo: {
    height: 'auto'
  },
  addressContainer: {
    display: 'flex',
    mb: 3
  },
  icon: {
    mr: 1,
    mt: 0.5,
    flexShrink: 0
  },
  companyName: {
    fontWeight: 500,
    mb: 1,
    color: '#fff'
  },
  addressLine: {
    mb: 0.5,
    color: '#fff'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    mb: 2
  },
  contactLink: {
    textDecoration: 'none',
    color: '#fff',
    '&:hover': {
      color: blueColor
    }
  },
  emailIcon: {
    mr: 1,
    flexShrink: 0,
    color: 'white'
  },
  emailLink: {
    color: blueColor,
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.8
    }
  },
  socialContainer: {
    display: 'flex',
    gap: 2,
    mb: 3
  },
  socialLink: {
    color: '#5eead4',
    '&:hover': {
      opacity: 0.8
    }
  },
  columnTitle: {
    fontWeight: 600,
    color: '#fff'
  },


  linkItem: {
    mb: 1.5
  },
  navLink: {
    textDecoration: 'none',
    color: '#fffff',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
      color: '#fff'
    }
  },
  footerBottom: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    mt: 5,
    pt: 3,
    display: 'flex',
    flexDirection: 'column'
  },
  footerLinks: {
    display: 'flex',
    gap: 2,
    mb: 1
  },
  bottomLink: {
    textDecoration: 'none',
    color: '#fff',
    '&:hover': {
      opacity: 0.8
    }
  },
  divider: {
    opacity: 0.5
  },
  copyright: {
    opacity: 0.7,
    color: '#fff'
  },
  blueText: {
    color: blueColor
  }
};

export default footerStyles;