'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import cookieBannerStyle from './styles/cookieBannerStyle';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showPreferences, setShowPreferences] = useState<boolean>(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made cookie choices
    const cookieChoices = localStorage.getItem('cookieChoices');

    if (!cookieChoices) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    // Save preferences to localStorage
    localStorage.setItem('cookieChoices', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));

    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowPreferences(!showPreferences);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
  
    localStorage.setItem('cookieChoices', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));

    setIsVisible(false);
  };

  const handlePreferenceChange = (name: keyof typeof preferences) => {
    setPreferences({
      ...preferences,
      [name]: !preferences[name],
    });
  };

  if (!isVisible) return null;

  return (
    <Box sx={cookieBannerStyle.bannerContainer}>
      <Button sx={cookieBannerStyle.closeButton} onClick={handleClose}>
        <CloseIcon/>
      </Button>

      <Typography variant="h5" sx={cookieBannerStyle.titleText}>
        We value your privacy
      </Typography>

      <Typography variant="body2" sx={cookieBannerStyle.descriptionText}>
        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
        By clicking "Accept All", you consent to our use of cookies.
      </Typography>

      <Box sx={{
        ...cookieBannerStyle.prefContainer,
        ...(showPreferences ? cookieBannerStyle.active : {})
      }}>
        <Box sx={cookieBannerStyle.prefOption}>
          <Typography sx={cookieBannerStyle.prefText}>
            Necessary Cookies (Required)
          </Typography>
          <Box sx={cookieBannerStyle.prefSwitch}>
            <input
              type="checkbox"
              checked={preferences.necessary}
              disabled
              style={cookieBannerStyle.prefInput as React.CSSProperties}
            />
            <Box component="span" sx={cookieBannerStyle.prefSlider}></Box>
          </Box>
        </Box>

        <Box sx={cookieBannerStyle.prefOption}>
          <Typography sx={cookieBannerStyle.prefText}>
            Functional Cookies
          </Typography>
          <Box sx={cookieBannerStyle.prefSwitch}>
            <input
              type="checkbox"
              checked={preferences.functional}
              onChange={() => handlePreferenceChange('functional')}
              style={cookieBannerStyle.prefInput as React.CSSProperties}
            />
            <Box component="span" sx={cookieBannerStyle.prefSlider}></Box>
          </Box>
        </Box>

        <Box sx={cookieBannerStyle.prefOption}>
          <Typography sx={cookieBannerStyle.prefText}>
            Analytics Cookies
          </Typography>
          <Box sx={cookieBannerStyle.prefSwitch}>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={() => handlePreferenceChange('analytics')}
              style={cookieBannerStyle.prefInput as React.CSSProperties}
            />
            <Box component="span" sx={cookieBannerStyle.prefSlider}></Box>
          </Box>
        </Box>

        <Box sx={cookieBannerStyle.prefOption}>
          <Typography sx={cookieBannerStyle.prefText}>
            Marketing Cookies
          </Typography>
          <Box sx={cookieBannerStyle.prefSwitch}>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={() => handlePreferenceChange('marketing')}
              style={cookieBannerStyle.prefInput as React.CSSProperties}
            />
            <Box component="span" sx={cookieBannerStyle.prefSlider}></Box>
          </Box>
        </Box>
      </Box>

      <Box sx={cookieBannerStyle.buttonContainer}>
        <Button
          sx={cookieBannerStyle.customizeButton}
          onClick={handleCustomize}
        >
          {showPreferences ? 'Hide Preferences' : 'Customize'}
        </Button>

        <Button
          sx={cookieBannerStyle.acceptButton}
          onClick={showPreferences ? handleSavePreferences : handleAcceptAll}
        >
          {showPreferences ? 'Save Preferences' : 'Accept All'}
        </Button>
      </Box>
    </Box>
  );
};

export default CookieBanner;