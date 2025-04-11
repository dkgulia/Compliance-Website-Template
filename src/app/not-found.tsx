'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
  Grid,
  Fade,
  Grow,
  Slide,
  useMediaQuery
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import theme from '../theme';
import ConstructionIcon from '@mui/icons-material/Construction';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HomeIcon from '@mui/icons-material/Home';

export default function CreativeComingSoon() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >

      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        opacity: 0.4,
        zIndex: 0,
      }}>
        {[...Array(6)].map((_, i) => (
          <Grow
            key={i}
            in={loaded}
            timeout={1000 + (i * 300)}
            style={{
              transformOrigin: Math.random() > 0.5 ? 'top left' : 'bottom right'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: { xs: '120px', md: '200px' },
                height: { xs: '120px', md: '200px' },
                borderRadius: '24px',
                background: `${theme.palette.primary.main}22`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: 'translate(-50%, -50%) rotate(45deg)',
                filter: 'blur(40px)',
                animation: `float ${5 + i}s ease-in-out infinite alternate`,
                '@keyframes float': {
                  '0%': {
                    transform: 'translate(-50%, -50%) rotate(45deg) translateY(0px)',
                  },
                  '100%': {
                    transform: 'translate(-50%, -50%) rotate(45deg) translateY(20px)',
                  },
                },
              }}
            />
          </Grow>
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
        >
          <Grid size={{xs:12,md:6}} >
            <Slide direction="up" in={loaded} timeout={700}>
              <Box>
                <Fade in={loaded} timeout={1500}>
                  <Typography
                    variant="overline"
                    component="div"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 'bold',
                      letterSpacing: 2,
                      mb: 2,
                      textAlign: { xs: 'center', md: 'left' }
                    }}
                  >
                    WORK IN PROGRESS
                  </Typography>
                </Fade>

                <Fade in={loaded} timeout={1800}>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      color: theme.palette.text.primary,
                      textAlign: { xs: 'center', md: 'left' },
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -8,
                        left: 0,
                        width: '60px',
                        height: '4px',
                        backgroundColor: theme.palette.primary.main,
                        display: { xs: 'none', md: 'block' }
                      }
                    }}
                  >
                    Coming Soon
                  </Typography>
                </Fade>

                <Fade in={loaded} timeout={2100}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      color: theme.palette.text.secondary,
                      fontWeight: 400,
                      lineHeight: 1.5,
                      textAlign: { xs: 'center', md: 'left' }
                    }}
                  >
                    We're crafting something awesome for you. Our team is working diligently to bring you the best experience possible.
                  </Typography>
                </Fade>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    justifyContent: { xs: 'center', md: 'flex-start' }
                  }}
                >
                  <Fade in={loaded} timeout={2400}>
                    <Button
                      component={Link}
                      href="/"
                      variant="contained"
                      size="large"
                      startIcon={<HomeIcon />}
                      sx={{
                        fontWeight: 'bold',
                        px: 3,
                        py: 1.5,
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '12px',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.dark,
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
                        }
                      }}
                    >
                      Return to Home
                    </Button>
                  </Fade>
                </Box>
              </Box>
            </Slide>
          </Grid>

          <Grid size={{xs:12,md:6}} >
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}>
              <Grow in={loaded} timeout={1000}>
                <Paper
                  elevation={6}
                  sx={{
                    width: { xs: '280px', sm: '360px', md: '400px' },
                    height: { xs: '280px', sm: '360px', md: '400px' },
                    borderRadius: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.2)`,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      width: '150%',
                      height: '150%',
                      background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)`,
                      transform: 'rotate(45deg)',
                      top: '-25%',
                      left: '-25%',
                      animation: 'shine 4s infinite linear',
                    },
                    '@keyframes shine': {
                      '0%': { left: '-25%' },
                      '100%': { left: '125%' }
                    }
                  }}
                >
                  <RocketLaunchIcon
                    sx={{
                      fontSize: { xs: 100, md: 140 },
                      color: 'white',
                      animation: 'pulse 2s infinite ease-in-out alternate',
                      '@keyframes pulse': {
                        '0%': { transform: 'scale(1) rotate(0deg)' },
                        '100%': { transform: 'scale(1.1) rotate(5deg)' }
                      }
                    }}
                  />
                </Paper>
              </Grow>

              <Fade in={loaded} timeout={2000}>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    right: isMobile ? null : -20,
                    left: isMobile ? '50%' : null,
                    transform: isMobile ? 'translateX(-50%)' : 'none',
                    zIndex: 10,
                  }}
                >
                  <Paper
                    elevation={12}
                    sx={{
                      padding: '16px 24px',
                      borderRadius: '16px',
                      backgroundColor: theme.palette.background.paper,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    <ConstructionIcon sx={{ color: theme.palette.warning.main, fontSize: 32 }} />
                    <Typography variant="subtitle1" fontWeight="bold">
                      Under Construction
                    </Typography>
                  </Paper>
                </Box>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}