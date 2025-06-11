'use client';

import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import Image from 'next/image';
import NextLink from 'next/link';
import { LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { ABOUT_US, CONTACT_US, PRIVACY_POLICY, TERMS_AND_CONDITIONS } from '../constants/routes';
import { complianceItems } from '../constants/complianceData';
import { platformFeatures } from './Navbar/constants/platformData';
import { usePathname } from 'next/navigation';
import footerStyles from '../components/styles/footerStyles';
import VerifiedIcon from '@mui/icons-material/Verified';
import logo from '../components/Navbar/Images/hexafort-white-cropped.png';
import iso27001Logo from './Images/ISOlogo.webp';
import gdprLogo from './Images/GDPR-hexafort.png';

export default function Footer() {
	const pathname = usePathname();
	const isAdminRoute = pathname.startsWith('/admin');

	return (
		<>
			{!isAdminRoute && (
				<Box sx={footerStyles.mainContainer}>
					<Box sx={footerStyles.container}>
						<Box sx={footerStyles.topSection}>
							<Box sx={footerStyles.leftColumn}>
								<Box sx={footerStyles.logoContainer}>
									<Image src={logo} alt="logo of Hexafort" width={140} />
								</Box>

								<Typography variant="body2" sx={footerStyles.companyDescription}>
									Hexafort, Inc. is a global leader in enterprise security management, with strong presence in the US,
									UK, and India.
								</Typography>

								<Box sx={footerStyles.addressesSection}>
									<Box sx={footerStyles.addressContainer}>
										<MapIcon sx={footerStyles.addressIcon} />
										<Box sx={footerStyles.addressContent}>

											<Typography variant="body2" sx={footerStyles.addressLine}>
												Newark, Delaware, US, 19713
											</Typography>
										</Box>
									</Box>

									<Box sx={footerStyles.addressContainer}>
										<MapIcon sx={footerStyles.addressIcon} />
										<Box sx={footerStyles.addressContent}>

											<Typography variant="body2" sx={footerStyles.addressLine}>
												Old Gloucester Street, London, UK, WC1N 3AX
											</Typography>
										</Box>
									</Box>

									<Box sx={footerStyles.addressContainer}>
										<MapIcon sx={footerStyles.addressIcon} />
										<Box sx={footerStyles.addressContent}>

											<Typography variant="body2" sx={footerStyles.addressLine}>
												Idukki, Kerala, IN, 685505
											</Typography>
										</Box>
									</Box>
								</Box>
							</Box>

							<Box sx={footerStyles.menuColumns}>
								<Box sx={footerStyles.menuColumn}>
									<Typography variant="subtitle1" sx={footerStyles.columnTitle}>
										Compliance
									</Typography>
									{complianceItems.map((item) => (
										<Box key={item.title} sx={footerStyles.linkItem}>
											<Link
												color="inherit"
												href={item.url}
												component={NextLink}
												sx={footerStyles.navLink}
											>
												<Typography variant="body2">{item.title}</Typography>
											</Link>
										</Box>
									))}
								</Box>

								<Box sx={footerStyles.menuColumn}>
									<Typography variant="subtitle1" sx={footerStyles.columnTitle}>
										Platform
									</Typography>
									{platformFeatures.map((item) => (
										<Box key={item.title} sx={footerStyles.linkItem}>
											<Link
												color="inherit"
												href={item.href}
												component={NextLink}
												sx={footerStyles.navLink}
											>
												<Typography variant="body2">{item.title}</Typography>
											</Link>
										</Box>
									))}
								</Box>

								<Box sx={footerStyles.menuColumn}>
									<Typography variant="subtitle1" sx={footerStyles.columnTitle}>
										About Us
									</Typography>
									<Box sx={footerStyles.linkItem}>
										<Link color="inherit" component={NextLink} href={ABOUT_US} sx={footerStyles.navLink}>
											<Typography variant="body2">About us</Typography>
										</Link>
									</Box>
									<Box sx={footerStyles.linkItem}>
										<Link color="inherit" component={NextLink} href={CONTACT_US} sx={footerStyles.navLink}>
											<Typography variant="body2">Contact Us</Typography>
										</Link>
									</Box>
									<Box sx={footerStyles.linkItem}>
										<Link color="inherit" component={NextLink} href={TERMS_AND_CONDITIONS} sx={footerStyles.navLink}>
											<Typography variant="body2">Terms & Conditions</Typography>
										</Link>
									</Box>
									<Box sx={footerStyles.linkItem}>
										<Link color="inherit" component={NextLink} href={PRIVACY_POLICY} sx={footerStyles.navLink}>
											<Typography variant="body2">Privacy Policy</Typography>
										</Link>
									</Box>
								</Box>
							</Box>

							<Box sx={footerStyles.rightColumn}>
								{/* Social Icons */}
								<Box sx={footerStyles.socialContainer}>
									<Link
										href="https://www.linkedin.com/company/hexafort/"
										target="_blank"
										aria-label="LinkedIn"
										sx={footerStyles.socialLink}
									>
										<LinkedIn sx={footerStyles.socialIcon} />
									</Link>
									<Link
										href="https://www.instagram.com/hexafort.io/"
										target="_blank"
										aria-label="Instagram"
										sx={footerStyles.socialLink}
									>
										<Instagram sx={footerStyles.socialIcon} />
									</Link>
									<Link
										href="https://x.com/hexafortsecure"
										target="_blank"
										aria-label="Twitter"
										sx={footerStyles.socialLink}
									>
										<Twitter sx={footerStyles.socialIcon} />
									</Link>
								</Box>

								{/* Certification Section */}
								<Box sx={footerStyles.certificationWrapper}>
									<Box sx={footerStyles.certificationsGrid}>
										{/* ISO 27001:2022 Badge */}
										<Box sx={footerStyles.certificationBadge}>
											<Box sx={footerStyles.badgeIcon}>
												<Image
													src={iso27001Logo}
													alt="ISO 27001"
													width={38}
													height={38}
													style={footerStyles.badgeLogoImage}
												/>
											</Box>
											<Box sx={footerStyles.badgeContent}>
												<Typography sx={footerStyles.badgeTitle}>
													ISO 27001:2022
												</Typography>
												<Box sx={footerStyles.badgeStatus}>
													<VerifiedIcon sx={footerStyles.verifiedIcon} />
													<Typography sx={footerStyles.badgeStatusText}>
														Certified
													</Typography>
												</Box>
											</Box>
										</Box>

										{/* GDPR Badge */}
										<Box sx={footerStyles.certificationBadge}>
											<Box sx={footerStyles.badgeIcon}>
												<Image
													src={gdprLogo}
													alt="GDPR"
													width={38}
													height={38}
													style={footerStyles.badgeLogoImage}
												/>
											</Box>
											<Box sx={footerStyles.badgeContent}>
												<Typography sx={footerStyles.badgeTitle}>
													GDPR
												</Typography>
												<Box sx={footerStyles.badgeStatus}>
													<VerifiedIcon sx={footerStyles.verifiedIcon} />
													<Typography sx={footerStyles.badgeStatusText}>
														Compliant
													</Typography>
												</Box>
											</Box>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>

						<Box sx={footerStyles.footerBottom}>
							<Typography variant="body2" sx={footerStyles.copyright}>
								© 2025 Hexafort, Inc. All rights reserved.
							</Typography>

							<Box sx={footerStyles.emailContainer}>
								<Link href="mailto:hello@hexafort.io" sx={footerStyles.emailLink}>
									hello@hexafort.io
								</Link>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
}