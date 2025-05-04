'use client';

import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from '@mui/material';
import { FormikProps } from 'formik';
import heroSectionStyle from '../styles/heroSectionStyle';
import theme from '../../../../theme';

export interface FormValues {
  fullName: string;
  email: string;
}

const HeroSectionForm: React.FC<FormikProps<FormValues>> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={heroSectionStyle.formContainer}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: 600, color: theme.palette.text.primary }}
      >
        Request your ISO 42001 demo
      </Typography>

      <Box sx={heroSectionStyle.formField}>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="Name"
          placeholder="Jordan Lee"
          variant="outlined"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.fullName && Boolean(errors.fullName)}
        />
        {touched.fullName && errors.fullName && (
          <FormHelperText error>{errors.fullName}</FormHelperText>
        )}
      </Box>

      <Box sx={heroSectionStyle.formField}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Work Email"
          placeholder="jordan@ai-startup.com"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
        />
        {touched.email && errors.email && (
          <FormHelperText error>{errors.email}</FormHelperText>
        )}
      </Box>

      <Button
        type="submit"
        variant="contained"
        sx={heroSectionStyle.formButton}
        disabled={isSubmitting}
      >
        Get Demo
      </Button>
    </Box>
  );
};

export default HeroSectionForm;
