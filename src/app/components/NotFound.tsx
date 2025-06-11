
'use client';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import notFoundStyle from '../components/styles/notFoundStyle';

const NotFound = () => {
   return (
   	<Box sx={notFoundStyle.section}>
   		<Box sx={notFoundStyle.backgroundGradient} />

   		<Container sx={notFoundStyle.container}>
   			<Box sx={notFoundStyle.contentBox}>
   				<Typography sx={notFoundStyle.errorCode}>404</Typography>

   				<Typography variant="h2" sx={notFoundStyle.title}>
   					Page Not Found
   				</Typography>

   				<Typography variant="body1" sx={notFoundStyle.description}>
   					The page you're looking for doesn't exist or has been moved. Let's get you back on track to secure your
   					organization.
   				</Typography>

   				<Box sx={notFoundStyle.linkContainer}>
   					<Box component="ul" sx={notFoundStyle.resourceList}>
   						<Box component="li" sx={notFoundStyle.listItem}>
   							<Link href="/get-a-product-demo" style={notFoundStyle.linkStyle}>
   								Learn about our platform features
   							</Link>
   						</Box>
   						<Box component="li" sx={notFoundStyle.listItem}>
   							<Link href="/compliance" style={notFoundStyle.linkStyle}>
   								Choosing the right compliance standard for your business
   							</Link>
   						</Box>
   						<Box component="li" sx={notFoundStyle.listItem}>
   							<Link href="/get-a-product-demo" style={notFoundStyle.linkStyle}>
   								Your guide to security best practices
   							</Link>
   						</Box>
   					</Box>
   				</Box>

   				<Box sx={notFoundStyle.buttonContainer}>
   					<Link href="/" passHref style={{ textDecoration: 'none' }}>
   						<Button sx={notFoundStyle.primaryButton}>Go Home</Button>
   					</Link>

   					<Link href="/contact" passHref style={{ textDecoration: 'none' }}>
   						<Button sx={notFoundStyle.secondaryButton}>Contact Support</Button>
   					</Link>
   				</Box>
   			</Box>
   		</Container>

   		<Box sx={notFoundStyle.decorationContainer}>
   			<Box sx={notFoundStyle.circle1} />
   			<Box sx={notFoundStyle.circle2} />
   			<Box sx={notFoundStyle.glowDot1} />
   			<Box sx={notFoundStyle.glowDot2} />
   			<Box sx={notFoundStyle.glowLine1} />
   			<Box sx={notFoundStyle.glowLine2} />
   		</Box>
   	</Box>
   );
};

export default NotFound;
