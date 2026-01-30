'use client';

import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';
import NextLink from 'next/link';
import { complianceItems } from '../constants/complianceData';
import { platformFeatures } from './Navbar/constants/platformData';
import { usePathname } from 'next/navigation';
import footerStyles from '../components/styles/footerStyles';

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
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src="/images/compliancehub-logo.svg" alt="ComplianceHub Logo" width={180} height={50} />
								</Box>

								<Typography variant="body2" sx={footerStyles.companyDescription}>
									ComplianceHub is a global leader in AI-powered compliance automation and enterprise security management.
								</Typography>
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

							</Box>
						</Box>

						<Box sx={footerStyles.footerBottom}>
							<Typography variant="body2" sx={footerStyles.copyright}>
								© 2025 ComplianceHub. All rights reserved.
							</Typography>

							<Box sx={footerStyles.emailContainer}>
								<Link href="mailto:hello@compliancehub.io" sx={footerStyles.emailLink}>
									hello@compliancehub.io
								</Link>
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
}
