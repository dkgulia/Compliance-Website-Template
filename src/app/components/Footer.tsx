'use client';

import * as React from 'react';
import { Box, Container, Link, Typography, Grid } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from 'next/image';
import NextLink from 'next/link';
import { LinkedIn, Twitter, Facebook, Instagram, YouTube } from '@mui/icons-material';
import {
	ABOUT_US,
	CONTACT_US,
	PRIVACY_POLICY,
	REFUND_POLICY,
	TERMS_AND_CONDITIONS,
} from '../constants/routes';
import { complianceItems } from '../constants/complianceData';
import { usePathname } from 'next/navigation';
import footerStyles from '../components/styles/footerStyles';
import { industryData } from '../../app/components/Navbar/constants/industrialists';
import solutionData from '../../app/components/Navbar/constants/solutionsMob';
import logo from '../components/Navbar/Images/dual-hex-white.png'
export default function Footer() {
	const pathname = usePathname();
	const isAdminRoute = pathname.startsWith('/admin');

	return (
		<>
			{!isAdminRoute && (
				<Box sx={footerStyles.mainContainer}>
					<Container maxWidth="lg">
						<Grid container spacing={0}>
							<Grid size={{ xs: 12, md: 4 }} sx={footerStyles.logoSection}>
								<Box sx={footerStyles.logoContainer}>
									<Image
										src={logo}
										alt="logo of Hexafort"
										width={80}
										height={80}
										style={footerStyles.logo}
									/>
								</Box>
								<Box sx={footerStyles.addressContainer}>
									<MapIcon sx={footerStyles.icon} />
									<Box>
										<Typography variant="body2" sx={footerStyles.companyName}>
										Hexafort, Inc.
										</Typography>
										<Typography variant="body2" sx={footerStyles.addressLine}>
										Newark, Delaware, US, 19713
										</Typography>

									</Box>
								</Box>

								{/* <Box sx={footerStyles.contactItem}>
									<PhoneIcon sx={footerStyles.icon} />
									<Link
										component={NextLink}
										href={`tel:${PHONE_NUMBER}`}
										color="inherit"
										sx={footerStyles.contactLink}
									>
										<Typography variant="body2">+91-{PHONE_NUMBER}</Typography>
									</Link>
								</Box>

								<Box sx={footerStyles.contactItem}>
									<EmailIcon sx={footerStyles.emailIcon} />
									<Link
										component={NextLink}
										href={`mailto:${SALES_MAIL}`}
										sx={footerStyles.emailLink}
									>
										<Typography variant="body2">{SALES_MAIL}</Typography>
									</Link>
								</Box> */}

								<Box sx={footerStyles.socialContainer}>
									<Link
										href="https://www.linkedin.com/company/hexafort/"
										target="_blank"
										aria-label="LinkedIn"
										sx={footerStyles.socialLink}
									>
										<LinkedIn />
									</Link>

									<Link
										href="https://www.instagram.com/hexafort.io/"
										target="_blank"
										aria-label="Instagram"
										sx={footerStyles.socialLink}
									>
										<Instagram />
									</Link>
									<Link href="https://x.com/hexafortsecure" target="_blank" aria-label="Twitter" sx={footerStyles.socialLink}>
										<Twitter />
									</Link>

								</Box>
							</Grid>

							<Grid size={{ xs: 12, md: 8 }}>
								<Grid container spacing={5}>
									<Grid size={{ xs: 12, sm: 6, md: 3 }}>
										<Typography variant="subtitle1" sx={footerStyles.columnTitle} gutterBottom>
											Compliance
										</Typography>
										{complianceItems.map((item) => (
											<Box key={item.title} sx={footerStyles.linkItem}>
												<Link
													color="inherit"
													href={`/compliance${item.url}`}
													component={NextLink}
													sx={footerStyles.navLink}
												>
													<Typography variant="body2">{item.title}</Typography>
												</Link>
											</Box>
										))}
									</Grid>


									{/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
										<Typography variant="subtitle1" sx={footerStyles.columnTitle} gutterBottom>
											Solutions
										</Typography>


										{solutionData.map((solution) => (
											<Box key={solution.id} sx={footerStyles.linkItem}>
												<Link
													color="inherit"
													href={`/solutions/${solution.id}`}
													component={NextLink}
													sx={footerStyles.navLink}
												>
													<Typography variant="body2">{solution.title}</Typography>
												</Link>
											</Box>
										))}
									</Grid>

									<Grid size={{ xs: 12, sm: 6, md: 3 }}>
										<Typography variant="subtitle1" sx={footerStyles.columnTitle} gutterBottom>
											Industries
										</Typography>

										{industryData.left.map((industry) => (
											<Box key={industry.text} sx={footerStyles.linkItem}>
												<Link
													color="inherit"
													component={NextLink}
													href={industry.href}
													sx={footerStyles.navLink}
												>
													<Typography variant="body2">{industry.text}</Typography>
												</Link>
											</Box>
										))}

										{industryData.right.map((industry) => (
											<Box key={industry.text} sx={footerStyles.linkItem}>
												<Link
													color="inherit"
													component={NextLink}
													href={industry.href}
													sx={footerStyles.navLink}
												>
													<Typography variant="body2">{industry.text}</Typography>
												</Link>
											</Box>
										))}
									</Grid> */}

									<Grid size={{ xs: 12, sm: 6, md: 3 }}>
										<Typography variant="subtitle1" sx={footerStyles.columnTitle} gutterBottom>
											About Us
										</Typography>
										<Box sx={footerStyles.linkItem}>
											<Link
												color="inherit"
												component={NextLink}
												href={ABOUT_US}
												sx={footerStyles.navLink}
											>
												<Typography variant="body2">About us</Typography>
											</Link>
										</Box>
										<Box sx={footerStyles.linkItem}>
											<Link
												color="inherit"
												component={NextLink}
												href={CONTACT_US}
												sx={footerStyles.navLink}
											>
												<Typography variant="body2">Contact Us</Typography>
											</Link>
										</Box>
										<Box sx={footerStyles.linkItem}>
											<Link
												color="inherit"
												component={NextLink}
												href={TERMS_AND_CONDITIONS}
												sx={footerStyles.navLink}
											>
												<Typography variant="body2">Terms & Conditions</Typography>
											</Link>
										</Box>
										<Box sx={footerStyles.linkItem}>
											<Link
												color="inherit"
												component={NextLink}
												href={PRIVACY_POLICY}
												sx={footerStyles.navLink}
											>
												<Typography variant="body2">Privacy Policy</Typography>
											</Link>
										</Box>
										<Box sx={footerStyles.linkItem}>
											<Link
												color="inherit"
												component={NextLink}
												href={REFUND_POLICY}
												sx={footerStyles.navLink}
											>
												<Typography variant="body2">Refund Policy</Typography>
											</Link>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>

						<Box sx={footerStyles.footerBottom}>
							<Box sx={footerStyles.footerLinks}>
								<Link
									href={PRIVACY_POLICY}
									component={NextLink}
									sx={footerStyles.bottomLink}
								>
									<Typography variant="body2">Privacy Policy</Typography>
								</Link>
								<Typography variant="body2" sx={footerStyles.divider}>
									•
								</Typography>
								<Link
									href={TERMS_AND_CONDITIONS}
									component={NextLink}
									sx={footerStyles.bottomLink}
								>
									<Typography variant="body2">Terms & Conditions</Typography>
								</Link>
							</Box>
							<Typography variant="body2" sx={footerStyles.copyright}>
								Copyright © <span style={footerStyles.blueText}>Hexafort</span> 2025
							</Typography>
						</Box>
					</Container>
				</Box>
			)}
		</>
	);
}