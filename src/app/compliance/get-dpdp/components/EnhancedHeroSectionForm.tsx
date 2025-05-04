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
}) => {
  const theme = useTheme();
  const styles = createHeroSectionStyle(theme);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

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

      <Typography variant="h6" sx={styles.formTitle}>
        Get Your DPDP Assessment
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }} sx={styles.gridItem}>
            <FormControl fullWidth error={touched.fullName && Boolean(errors.fullName)}>
              <Typography sx={styles.formLabel}>Full Name</Typography>
              <OutlinedInput
                id="fullName"
                name="fullName"
                placeholder="Aditi Verma"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                sx={styles.inputField}
              />
              <FormHelperText>{touched.fullName && errors.fullName}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }} sx={styles.gridItem}>
            <FormControl fullWidth error={touched.email && Boolean(errors.email)}>
              <Typography sx={styles.formLabel}>Work Email</Typography>
              <OutlinedInput
                id="email"
                name="email"
                placeholder="aditi@company.in"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                sx={styles.inputField}
              />
              <FormHelperText>{touched.email && errors.email}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormControlLabel
              control={
                <Checkbox
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={values.agreeToTerms}
                  onChange={handleChange}
                  sx={styles.checkbox}
                />
              }
              label={
                <Typography variant="body2" sx={styles.secondaryText}>
                  I agree to receive communications from Hexafort
                </Typography>
              }
            />
            {touched.agreeToTerms && errors.agreeToTerms && (
              <FormHelperText error>{errors.agreeToTerms}</FormHelperText>
            )}
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={styles.submitButton}
              disabled={isSubmitting}
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
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(false);
    if (props.onSubmitCallback) {
      props.onSubmitCallback(values);
    }
    console.log('Submitted Values:', values);
  },
})(DpdpHeroSectionForm);

export default EnhancedHeroSectionForm;