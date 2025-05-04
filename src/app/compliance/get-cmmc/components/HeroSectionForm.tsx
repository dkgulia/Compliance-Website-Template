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
} from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { FormikProps } from 'formik';
import { FormValues } from './EnhancedHeroSectionForm';

interface HeroSectionFormProps extends FormikProps<FormValues> {}

const HeroSectionForm: React.FC<HeroSectionFormProps> = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  resetForm,
}) => {
  const [alert, setAlert] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (!isChecked) {
      setAlert({
        type: 'error',
        message: 'You must agree to the terms before submitting.',
      });
      return;
    }

    if (values.name && !errors.name && values.email && !errors.email) {
      setLoading(true);
      // This would typically call an API
      setAlert({
        type: 'success',
        message:
          'Your demo request has been received! Our team will contact you shortly.',
      });
      resetForm();
      setLoading(false);
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

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 8 }}>
            <FormControl fullWidth error={touched.name && Boolean(errors.name)}>
              <Typography sx={heroSectionStyle.formLabel}>Name</Typography>
              <OutlinedInput
                id="name"
                name="name"
                placeholder="Dana Smith"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <FormHelperText>{touched.name && errors.name}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6, md: 8 }}>
            <FormControl
              fullWidth
              error={touched.email && Boolean(errors.email)}
            >
              <Typography sx={heroSectionStyle.formLabel}>
                Work Email
              </Typography>
              <OutlinedInput
                id="email"
                name="email"
                placeholder="dana@contractor.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <FormHelperText>{touched.email && errors.email}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6, md: 8 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  color="primary"
                />
              }
              label="I agree to the terms and conditions."
            />
          </Grid>

          <Grid size={{ xs: 6, md: 8 }}>
            <Typography variant="caption">
              By clicking submit below, you consent to allow Hexafort to store
              and process the Personal Data submitted by you above as per our{' '}
              <a
                href="/privacy-policy"
                target="_blank"
                style={{ color: '#00C6FF' }}
              >
                Privacy Policy
              </a>
              .
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 8 }}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={heroSectionStyle.formButton}
              onClick={handleClick}
              disabled={loading || !isChecked}
            >
              {loading ? 'Submitting...' : 'Get Demo'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default HeroSectionForm;
