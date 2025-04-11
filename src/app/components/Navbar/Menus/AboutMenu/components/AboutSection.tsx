import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import pageStyles from '../styles/pageStyles';
import aboutItemStyles from '../styles/aboutItemStyles';
import { aboutItems, featuredContent } from '../../../constants/aboutData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DemoImage from '../../../Images/-create-a-professional--sleek-image-showing-a-cust.png';

interface AboutSectionProps {
  onClose?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onClose }) => {
  const router = useRouter();

  const handleNavigate = (href: string) => {
    router.push(href);
    if (onClose) onClose();
  };

  return (
    <>
      <Grid container spacing={3}>
       <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography sx={pageStyles.title}>About Igni PC</Typography>
          <Typography sx={pageStyles.description}>
            Empowering Your Workflow with High-Performance Computing
            At IgniPC, we specialize in building top-tier workstations tailored to your needs. Whether you're a business, a creator, or a professional, we ensure you get the best computing solution with expert guidance and exceptional support.
          </Typography>
          <Box sx={pageStyles.linksContainer}>
            {aboutItems.map((item, index) => (
              <Box
                key={`link-${index}`}
                sx={aboutItemStyles.aboutItem}
                onClick={() => handleNavigate(item.href)}
              >
                <Box sx={aboutItemStyles.itemIcon}>
                  {item.icon}
                </Box>
                <Typography sx={aboutItemStyles.itemText}>
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

       <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={pageStyles.featuredBox}>
            <Box sx={pageStyles.imageContainer}>
              <Image
                src={DemoImage}
                alt="Book a Demo"
                style={{
                  width: '100%',
                  height: '160px',
                  borderRadius: '0.5rem',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Typography sx={pageStyles.featuredTitle}>
              {featuredContent.title}
            </Typography>
            <Typography sx={pageStyles.featuredDescription}>
              {featuredContent.description}
            </Typography>

            <Button
              endIcon={<ArrowForwardIcon />}
              sx={aboutItemStyles.knowMoreButton}
              onClick={() => handleNavigate(featuredContent.href)}
            >
              {featuredContent.buttonText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutSection;