'use client'
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import bookADemoStyles from '../styles/bookADemoStyle';
import demoImage from '../images/complianceDemo.png';

const BookADemo = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Box sx={bookADemoStyles.box}>
			<Container sx={bookADemoStyles.container}>
				<Box sx={bookADemoStyles.textBox}>
					<Grid>
						<Typography sx={bookADemoStyles.tagline}>HexaFort Advantage</Typography>
					</Grid>
					<Typography variant="h4" sx={bookADemoStyles.title}>
						Automate Compliance, Unlock Business
					</Typography>
					<Box sx={bookADemoStyles.points}>
						<Box sx={bookADemoStyles.point}>
							<CheckCircleIcon sx={bookADemoStyles.icon} />
							<Typography component="span">Automate compliance and save Time, Dollars, Effort</Typography>
						</Box>
						<Box sx={bookADemoStyles.point}>
							<CheckCircleIcon sx={bookADemoStyles.icon} />
							<Typography component="span">Handle complex problems and solve for custom requirements</Typography>
						</Box>
						<Box sx={bookADemoStyles.point}>
							<CheckCircleIcon sx={bookADemoStyles.icon} />
							<Typography component="span">Achieve continuous compliance and unlock new business</Typography>
						</Box>
					</Box>
					<Button
						variant="contained"
						type="button"
						sx={bookADemoStyles.button}
						onClick={handleScrollToTop}
					>
						Book Your Demo
					</Button>
				</Box>
				<Box sx={bookADemoStyles.imageBox}>
					<Image
						src={demoImage}
						alt="Book a Demo"
						width={550}
						height={320}
						style={{
							maxWidth: '100%',
							height: 'auto',
							borderRadius: '16px',
						}}
						priority
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default BookADemo;