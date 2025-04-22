import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import hipaaBannerStyles from '../styles/hipaaBannerStyle';
import healthcareComplianceImg from '../images/dual-hex-white.png';

const HipaaBanner = () => {
  return (
    <Box sx={hipaaBannerStyles.box}>
      <Box sx={hipaaBannerStyles.bannerContainer}>
        <Grid container spacing={0} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} sx={hipaaBannerStyles.contentGridItem}>
            <Box sx={hipaaBannerStyles.content}>
              <Typography variant="h4" sx={hipaaBannerStyles.heading}>
                Streamline Your Healthcare Compliance
              </Typography>
              <Typography variant="body1" sx={hipaaBannerStyles.description}>
                HIPAA is required for modern healthcare plans, providers, insurers, and clearinghouses, as well as
                biotech and pharmaceutical organizations. Ensure protected health information (PHI) stays secure with
                the right safeguards.
              </Typography>
              <Button variant="contained" sx={hipaaBannerStyles.button} href="/compliance">
                Book Your Demo <ArrowForward sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={hipaaBannerStyles.imageGridItem}>
            <Box sx={hipaaBannerStyles.imageBox}>
              <Box sx={hipaaBannerStyles.circularImageContainer}>
                <Image
                  src={healthcareComplianceImg}
                  alt="Healthcare Compliance"
                  fill
                  priority
                  style={
                    {
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderRadius: '50%',
                    } as React.CSSProperties
                  }
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HipaaBanner;