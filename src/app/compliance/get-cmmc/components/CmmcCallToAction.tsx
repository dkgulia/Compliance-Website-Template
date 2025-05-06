'use client';
import React, { useState } from 'react';
import {
	Box,
	Typography,
	Button,
	Grid,
	FormControl,
	OutlinedInput,
	FormHelperText,
	Snackbar,
	Alert,
	FormControlLabel,
	Checkbox,
} from '@mui/material';
import callToActionStyle from '../styles/callToActionStyle';
import { cmmcData } from '../constants/cmmcData';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const CmmcCallToAction: React.FC = () => {
	const ctaContent = cmmcData.sections.find((section) => section.Sno === '5' && section.blockType === 'Call to Action');

	if (!ctaContent) return null;

	const [alert, setAlert] = useState<{
		type: 'success' | 'error';
		message: string;
	} | null>(null);
	const [loading, setLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		email: Yup.string().email('Invalid email format').required('Work Email is required'),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
		},
		validationSchema,
		onSubmit: (values) => {
			if (!isChecked) {
				setAlert({
					type: 'error',
					message: 'You must agree to the terms before submitting.',
				});
				return;
			}

			setLoading(true);
			console.log('Form submitted:', values);

			setTimeout(() => {
				setAlert({
					type: 'success',
					message: 'Your demo has been scheduled! We will contact you shortly.',
				});
				formik.resetForm();
				setIsChecked(false);
				setLoading(false);
			}, 1000);
		},
	});

	const handleSnackbarClose = () => {
		setAlert(null);
	};

	return (
		<Box sx={callToActionStyle.container}>
			<Snackbar
				open={!!alert}
				autoHideDuration={6000}
				onClose={handleSnackbarClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			>
				<Alert onClose={handleSnackbarClose} severity={alert?.type || 'info'}>
					{alert?.message}
				</Alert>
			</Snackbar>

			<Box sx={callToActionStyle.innerBox}>
				{/* Content Section */}
				<Box sx={callToActionStyle.contentBox}>
					<Typography variant="h2" sx={callToActionStyle.heading}>
						{ctaContent.content.title}
					</Typography>

					<Typography sx={callToActionStyle.subtitle}>{ctaContent.content.subtitle}</Typography>

					<Typography sx={callToActionStyle.description}>{ctaContent.content.description}</Typography>
				</Box>

				{/* Form Section */}
				<Box sx={callToActionStyle.formBox}>
					<Typography sx={callToActionStyle.formTitle}>Schedule Your Demo</Typography>

					<form onSubmit={formik.handleSubmit}>
						<Grid container spacing={2}>
							<Grid size ={{xs:12}}>
								<FormControl fullWidth error={formik.touched.name && Boolean(formik.errors.name)}>
									<Typography sx={callToActionStyle.formLabel}>Name</Typography>
									<OutlinedInput
										id="name"
										name="name"
										placeholder="Alex"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.name}
									/>
									<FormHelperText>{formik.touched.name && formik.errors.name}</FormHelperText>
								</FormControl>
							</Grid>

							<Grid size ={{xs:12}}>
								<FormControl fullWidth error={formik.touched.email && Boolean(formik.errors.email)}>
									<Typography sx={callToActionStyle.formLabel}>Work Email</Typography>
									<OutlinedInput
										id="email"
										name="email"
										placeholder="alex@company.com"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.email}
									/>
									<FormHelperText>{formik.touched.email && formik.errors.email}</FormHelperText>
								</FormControl>
							</Grid>

							<Grid size ={{xs:12}}>
								<FormControlLabel
									control={
										<Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} color="primary" />
									}
									label="I agree to the terms and conditions."
								/>
							</Grid>

							<Grid size ={{xs:12}}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={callToActionStyle.formButton}
									disabled={loading || !isChecked}
								>
									{loading ? 'Scheduling...' : 'Schedule Demo'}
								</Button>
							</Grid>
						</Grid>
					</form>
				</Box>
			</Box>
		</Box>
	);
};

export default CmmcCallToAction;
