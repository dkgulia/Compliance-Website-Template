import React, { useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Iso27701HeroSectionForm from './Iso27701HeroSectionForm';
import { complianceOptionsArray } from '../../../constants/complianceData';

export interface FormValues {
  fullName: string;
  email: string;
}

interface FormProps {
  selectedOptions: string[];
  onOptionsChange: (options: string[]) => void;
  onSubmitCallback?: (values: FormValues) => void;
  fullName?: string;
  email?: string;
}

const EnhancedIso27701HeroSectionForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: (props) => ({
    fullName: props.fullName || '',
    email: props.email || '',
  }),
  validationSchema: Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Work Email is required'),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(false);
    if (props.onSubmitCallback) {
      props.onSubmitCallback(values);
    }
    console.log('Submitted Values:', values);
  },
})((props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    complianceOptionsArray.slice(0, 3)
  );

  const handleOptionsChange = (options: string[]) => setSelectedOptions(options);

  return (
    <Iso27701HeroSectionForm
      {...props}
      selectedOptions={selectedOptions}
      onOptionsChange={handleOptionsChange}
    />
  );
});

export default EnhancedIso27701HeroSectionForm;