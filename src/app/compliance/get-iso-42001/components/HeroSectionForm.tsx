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
import { FormikProps } from 'formik';
import heroSectionStyle from '../styles/heroSectionStyle';
import { complianceOptionsArray } from '../../../constants/complianceData';

export interface FormValues {
  fullName: string;
  email: string;
}

interface HeroSectionFormProps extends FormikProps<FormValues> {
  selectedOptions: string[];
  onOptionsChange: (options: string[]) => void;
}

const HeroSectionForm: React.FC<HeroSectionFormProps> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  resetForm,
  selectedOptions,
  onOptionsChange,
}) => {
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleOption = (option: string) => {
    onOptionsChange(
      selectedOptions.includes(option)
        ? selectedOptions.filter((selected) => selected !== option)
        : [...selectedOptions, option]
    );
  };

  const handleSnackbarClose = () => {
    setAlert(null);
  };

  return (
    <Box sx={heroSectionStyle.formContainer}>
      {alert && (
        <Snackbar
          open={!!alert}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleSnackbarClose} severity={alert.type} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h4" sx={heroSectionStyle.formHeading}>
              Book Your Demo Today!
            </Typography>
            <Typography sx={{ marginBottom: '1rem', color: 'white' }}>Get answers to all your questions.</Typography>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
              <Typography sx={heroSectionStyle.compliancesLabel}>Full Name</Typography>
              <OutlinedInput
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                sx={{ color: 'white' }}
              />
              <FormHelperText>{touched.fullName && errors.fullName}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth error={touched.email && Boolean(errors.email)}>
              <Typography sx={heroSectionStyle.compliancesLabel}>Work Email</Typography>
              <OutlinedInput
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                sx={{ color: 'white' }}
              />
              <FormHelperText>{touched.email && errors.email}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography sx={heroSectionStyle.compliancesLabel}>Compliances Interested In*</Typography>
            <Grid container spacing={1}>
              {complianceOptionsArray.map((option, index) => (
                <Grid size={{ xs: 6, sm: 4 }} key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedOptions.includes(option)}
                        onChange={() => toggleOption(option)}
                      />
                    }
                    label={option}
                    sx={heroSectionStyle.checkboxLabel}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={heroSectionStyle.button}
              disabled={loading || selectedOptions.length === 0}
              disableElevation
            >
              {loading ? 'Submitting...' : 'Book Your Demo'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default HeroSectionForm;