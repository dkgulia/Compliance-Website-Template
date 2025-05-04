'use client';
import React, { useState } from 'react';
import {
  Grid,
  Box,
  FormControl,
  OutlinedInput,
  FormHelperText,
  Button,
  Typography,
  Snackbar,
  Alert,
  FormControlLabel,
  Checkbox,
  Link,
} from '@mui/material';
import NextLink from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import heroSectionStyles from '../styles/heroSectionStyle';
import { FormikProps } from 'formik';
import { FormValues } from './EnhancedHeroSectionForm';

interface HipaaHeroSectionFormProps extends FormikProps<FormValues> {}

const HipaaHeroSectionForm: React.FC<HipaaHeroSectionFormProps> = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  resetForm,
}) => {
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = async () => {
    if (!isChecked) {
      setAlert({ type: 'error', message: 'You must agree to the terms before submitting.' });
      return;
    }

    if (
      values.fullName &&
      !errors.fullName &&
      values.email &&
      !errors.email
    ) {
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        setAlert({
          type: 'success',
          message: 'Thank you for your interest! We\'ll contact you soon to schedule your demo.'
        });
        resetForm();
        setIsChecked(false);
        setLoading(false);
      }, 1500);
    } else {
      setAlert({ type: 'error', message: 'Please fill in all required fields correctly.' });
    }
  };

  const handleSnackbarClose = () => {
    setAlert(null);
  };

  return (
    <Box>
      {alert && (
        <Snackbar
          open={!!alert}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleSnackbarClose} severity={alert.type}>
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Book Your Free Demo
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
              <Typography sx={{ color: '#ffffff', mb: 0.5 }}>Full Name*</Typography>
              <OutlinedInput
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              />
              <FormHelperText sx={{ color: '#ff6b6b' }}>{touched.fullName && errors.fullName}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={touched.email && Boolean(errors.email)}>
              <Typography sx={{ color: '#ffffff', mb: 0.5 }}>Work Email*</Typography>
              <OutlinedInput
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              />
              <FormHelperText sx={{ color: '#ff6b6b' }}>{touched.email && errors.email}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-checked': {
                      color: '#00C6FF',
                    }
                  }}
                />
              }
              label={
                <Typography sx={{ color: '#ffffff', fontSize: '0.9rem' }}>
                  I agree to the terms and conditions.
                </Typography>
              }
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography sx={{ color: '#ffffff', fontSize: '0.8rem', opacity: 0.8 }}>
              By clicking submit below, you consent to allow Hexafort to store and process the Personal Data submitted by
              you above as per our{' '}
              <Link 
                color="primary"
                href="/privacy-policy" 
                component={NextLink}
                sx={{ color: '#00C6FF' }}
              >
                <Typography variant="body2" component="span">Privacy Policy</Typography>
              </Link>
              .
            </Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={heroSectionStyles.button}
              onClick={handleClick}
              disabled={loading || !isChecked}
              endIcon={<ArrowForward />}
            >
              {loading ? 'Submitting...' : 'Book Your Demo'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default HipaaHeroSectionForm;