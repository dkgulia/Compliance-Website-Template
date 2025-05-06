'use client';
import React, { useState } from 'react';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  FormHelperText,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import createHeroSectionStyle from '../styles/heroSectionStyle';

export interface FormValues {
  fullName: string;
  email: string;
  agreeToTerms: boolean;
}

interface FormProps {
  onSubmitCallback?: (values: FormValues) => void;
  fullName?: string;
  email?: string;
}

const DpdpHeroSectionForm: React.FC<FormikProps<FormValues>> = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  resetForm,
}) => {
  const theme = useTheme();
  const styles = createHeroSectionStyle(theme);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
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
      // Simulate API call
      setTimeout(() => {
        setAlert({
          type: 'success',
          message: 'Thank you for your interest! We\'ll contact you soon to schedule your demo.'
        });
        resetForm();
        setIsChecked(false);
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
          <Alert onClose={handleSnackbarClose} severity={alert.type} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Book Your Free Demo
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{xs:12}}>
            <FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
              <Typography sx={{ color: '#ffffff', mb: 0.5 }}>Full Name*</Typography>
              <OutlinedInput
                id="fullName"
                name="fullName"
                placeholder="Aditi Verma"
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

          <Grid size={{xs:12}}>
            <FormControl fullWidth error={touched.email && Boolean(errors.email)}>
              <Typography sx={{ color: '#ffffff', mb: 0.5 }}>Work Email*</Typography>
              <OutlinedInput
                id="email"
                name="email"
                placeholder="aditi@company.in"
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

          <Grid size={{xs:12}}>
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

          <Grid size={{xs:12}}>
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

          <Grid size={{xs:12}}>
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={handleClick}
              disabled={isSubmitting || !isChecked}
              endIcon={<ArrowForward />}
              sx={{
                marginTop: '1.5rem',
                color: '#f9fafb',
                fontWeight: 800,
                padding: {
                  xs: '0.25rem 0.5rem',
                  sm: '0.375rem 0.75rem',
                  md: '0.7rem 1rem',
                },
                borderRadius: '0.5rem',
                backgroundColor: '#115e59',
                border: '1px solid #0d9488',
                textTransform: 'none',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                transition: 'background-color 150ms ease',
                '&:hover': {
                  backgroundColor: '#0f766e',
                },
                '&.Mui-disabled': {
                  color: '#f9fafb',
                  opacity: 0.5,
                  backgroundColor: '#115e59',
                },
              }}
            >
              Get Demo
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

const EnhancedHeroSectionForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: (props) => ({
    fullName: props.fullName || '',
    email: props.email || '',
    agreeToTerms: false,
  }),
  validationSchema: Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    agreeToTerms: Yup.boolean().oneOf([true], 'You must agree to terms'),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    setSubmitting(false);
    if (props.onSubmitCallback) {
      props.onSubmitCallback(values);
    }
    console.log('Submitted Values:', values);
  },
})(DpdpHeroSectionForm);

export default EnhancedHeroSectionForm;