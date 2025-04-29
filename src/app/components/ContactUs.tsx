'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Link from 'next/link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';

import contactStyle from '../components/styles/contactUsStyle';

const ContactUsComponent = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		company: '',
		phone: '',
		inquiryType: '',
		message: '',
	});

	const [openSnackbar, setOpenSnackbar] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		setOpenSnackbar(true);

		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			company: '',
			phone: '',
			inquiryType: '',
			message: '',
		});
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	const inquiryTypes = [
		{ value: 'general', label: 'General Inquiry' },
		{ value: 'sales', label: 'Sales Question' },
		{ value: 'support', label: 'Technical Support' },
		{ value: 'demo', label: 'Request a Demo' },
		{ value: 'compliance', label: 'Compliance Consultation' },
	];

	return (
		<Box sx={contactStyle.section}>
			<Box sx={contactStyle.backgroundGradient} />

			<Container sx={contactStyle.container}>
				<Box sx={contactStyle.contentBox}>
					<Typography variant="h1" sx={contactStyle.title}>
						Contact{' '}
						<Box component="span" sx={contactStyle.highlightText}>
							Hexafort
						</Box>
					</Typography>

					<Typography variant="body1" sx={contactStyle.description}>
						Get in touch with our team to discuss your security and compliance needs. We're here to help you protect
						your data and meet regulatory requirements.
					</Typography>

					<Grid container spacing={4} sx={contactStyle.mainContent}>
						<Grid size={{ xs: 12, md: 5 }}>
							<Box sx={contactStyle.contactInfoContainer}>
								<Typography variant="h6" sx={contactStyle.infoTitle}>
									Contact Information
								</Typography>

								<Box sx={contactStyle.contactItem}>
									<MailOutlineIcon sx={contactStyle.contactIcon} />
									<Box>
										<Typography variant="body2" sx={contactStyle.contactLabel}>
											Email Us
										</Typography>
										<Typography sx={contactStyle.contactValue}>hello@hexafort.io</Typography>
									</Box>
								</Box>

								<Box sx={contactStyle.contactItem}>
									<PhoneIcon sx={contactStyle.contactIcon} />
									<Box>
										<Typography variant="body2" sx={contactStyle.contactLabel}>
											Call Us
										</Typography>
										<Typography sx={contactStyle.contactValue}>+1 480 215 9682</Typography>
									</Box>
								</Box>

								<Box sx={contactStyle.contactItem}>
									<LocationOnIcon sx={contactStyle.contactIcon} />
									<Box>
										<Typography variant="body2" sx={contactStyle.contactLabel}>
											Visit Us
										</Typography>
										<Typography sx={contactStyle.contactValue}>
											131 Continental Dr Suite 305, Newark, DE 19713 US <br />
										</Typography>
									</Box>
								</Box>

								<Box sx={contactStyle.reachOutBox}>
									<Typography variant="h6" sx={contactStyle.reachOutTitle}>
										Need immediate assistance?
									</Typography>
									<Typography variant="body2" sx={contactStyle.reachOutText}>
										Our support team is available Monday through Friday, 8am-6pm PT.
									</Typography>
									<Link href="/support" passHref legacyBehavior>
										<Button endIcon={<ArrowForwardIcon />} sx={contactStyle.outlinedButton}>
											Visit Support Center
										</Button>
									</Link>
								</Box>
							</Box>
						</Grid>
						<Grid size={{ xs: 12, md: 7 }}>
							<Box component="form" onSubmit={handleSubmit} sx={contactStyle.formContainer}>
								<Typography variant="h6" sx={contactStyle.formTitle}>
									Send us a message
								</Typography>

								<Grid container spacing={2}>
									{[
										{ name: 'firstName', label: 'First Name', required: true },
										{ name: 'lastName', label: 'Last Name', required: true },
										{ name: 'email', label: 'Email Address', required: true, type: 'email' },
										{ name: 'company', label: 'Company Name' },
										{ name: 'phone', label: 'Phone Number' },
									].map((field) => (
										<Grid size={{ xs: 12, md: 7 }} key={field.name}>
											<TextField
												{...field}
												fullWidth
												variant="outlined"
												value={formData[field.name as keyof typeof formData]}
												onChange={handleChange}
												sx={contactStyle.textField}
											/>
										</Grid>
									))}

									<Grid size={{ xs: 7 }}>
										<TextField
											required
											fullWidth
											name="message"
											label="Your Message"
											multiline
											rows={4}
											variant="outlined"
											value={formData.message}
											onChange={handleChange}
											sx={contactStyle.textField}
										/>
									</Grid>
								</Grid>

								<Button type="submit" variant="contained" sx={contactStyle.primaryButton}>
									Send Message
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>

			<Box sx={contactStyle.decorationContainer}>
				<Box sx={contactStyle.circle1} />
				<Box sx={contactStyle.circle2} />
				<Box sx={contactStyle.glowDot1} />
				<Box sx={contactStyle.glowDot2} />
				<Box sx={contactStyle.glowLine1} />
				<Box sx={contactStyle.glowLine2} />
			</Box>

			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			>
				<Alert onClose={handleCloseSnackbar} severity="success" variant="filled" sx={contactStyle.alertStyle}>
					Your message has been sent successfully! We'll be in touch soon.
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default ContactUsComponent;
