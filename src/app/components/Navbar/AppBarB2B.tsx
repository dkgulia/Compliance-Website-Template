'use client';

import React, { useState, useEffect } from 'react';
import {
	AppBar,
	Toolbar,
	Box,
	Button,
	Typography,
	Drawer,
	IconButton,
	useMediaQuery,
	useTheme,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/navigation';
import CategorySidebar from './Menus/SolutionMenu/components/CategorySidebar';
import ServiceList from './Menus/SolutionMenu/components/ServiceList';
import RightSection from './Menus/SolutionMenu/components/RightSection';
import IndustryMenu from './Menus/IndustryMenu/page';
import AboutMenu from './Menus/AboutMenu/page';
import ComplianceMenu from './Menus/Compliance/page';
import Image from 'next/image';
import { WORKSTATION, TALK_TO_AN_EXPERT } from '../../constants/routes';

import styles from './appBarB2BStyles';
import LogoImage from './Images/igniPC_Logo.png';

const AppBarB2B: React.FC = () => {
	const router = useRouter();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const [selectedItem, setSelectedItem] = useState<'item1' | 'item2' | 'item3' | 'item4' | null>('item1');
	const [activeMenu, setActiveMenu] = useState<string | null>(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);

	useEffect(() => {
		if (isMobile && activeMenu) {
			setActiveMenu(null);
		}
	}, [isMobile, activeMenu]);

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
		if (activeMenu === menu) {
			setActiveMenu(null);
		} else {
			setActiveMenu(menu);
		}
	};

	const handleMenuClose = () => {
		setActiveMenu(null);
	};

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
		) {
			return;
		}
		setDrawerOpen(open);
		if (!open) {
			resetMobileMenuState();
		}
	};

	const resetMobileMenuState = () => {
		setMobileSubMenu(null);
	};

	const openMobileSubMenu = (menu: string) => {
		setMobileSubMenu(menu);
	};

	const goBackToMainMenu = () => {
		setMobileSubMenu(null);
	};

	const navigateTo = (path: string) => {
		router.push(path);
		handleMenuClose();
		setDrawerOpen(false);
		resetMobileMenuState();
	};

	const handleDrawerClose = () => {
		toggleDrawer(false)({} as React.MouseEvent);
	};

	const mapCategoryToSelectedItem = (categoryId: string): 'item1' | 'item2' | 'item3' | 'item4' => {
		switch (categoryId) {
			case 'networking':
				return 'item1';
			case 'workplace':
				return 'item2';
			case 'Communication':
				return 'item3';
			case 'specialised':
				return 'item4';
			default:
				return 'item1';
		}
	};

	const renderMobileMainMenu = () => (
		<>
			<Box sx={styles.mobileMenuHeader}>
				<Box sx={styles.mobileLogoContainer}>
					<Typography sx={styles.mobileLogo}>
						<Image src={LogoImage} alt="igniPC Logo" width={70} height={40} style={styles.mobileLogoImage} />
					</Typography>
				</Box>
				<Box sx={styles.mobileHeaderActions}>
					<IconButton onClick={handleDrawerClose} sx={styles.closeButton}>
						<CloseIcon />
					</IconButton>
				</Box>
			</Box>

			<List sx={styles.mobileMenuList}>
				<ListItem sx={styles.mobileMenuItem} onClick={() => openMobileSubMenu('solutions')}>
					<ListItemText primary="Solutions" />
					<div style={styles.arrowContainer}>
						<ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
					</div>
				</ListItem>
				<ListItem sx={styles.mobileMenuItem} onClick={() => openMobileSubMenu('industries')}>
					<ListItemText primary="Industries" />
					<div style={styles.arrowContainer}>
						<ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
					</div>
				</ListItem>
				<ListItem sx={styles.mobileMenuItem} onClick={() => openMobileSubMenu('compliance')}>
					<ListItemText primary="Compliance" />
					<div style={styles.arrowContainer}>
						<ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
					</div>
				</ListItem>
				<ListItem sx={styles.mobileMenuItem} onClick={() => openMobileSubMenu('about')}>
					<ListItemText primary="About" />
					<div style={styles.arrowContainer}>
						<ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
					</div>
				</ListItem>
			</List>

			<Box sx={styles.mobileTalkButtonContainer}>
				<Button variant="outlined" onClick={() => navigateTo(TALK_TO_AN_EXPERT)}>
					Talk to an Expert
				</Button>
			</Box>
		</>
	);

	const renderSolutionsSubMenu = () => (
		<>
			<Box sx={styles.mobileMenuHeader}>
				<IconButton onClick={goBackToMainMenu} sx={styles.backButton}>
					<ArrowBackIcon />
				</IconButton>

				<Box sx={styles.headerSpacer} />

				<IconButton onClick={handleDrawerClose} sx={styles.closeButton}>
					<CloseIcon />
				</IconButton>
			</Box>

			{mobileSubMenu === 'solutions' && (
				<CategorySidebar
					selectedItem={selectedItem}
					onSelectCategory={setSelectedItem}
					isMobile={true}
					onClose={handleDrawerClose}
				/>
			)}

			{mobileSubMenu === 'industries' && (
				<Box>
					<IndustryMenu />
				</Box>
			)}

			{mobileSubMenu === 'compliance' && (
				<Box>
					<ComplianceMenu />
				</Box>
			)}

			{mobileSubMenu === 'about' && (
				<Box>
					<AboutMenu />
				</Box>
			)}
		</>
	);

	return (
		<>
			<AppBar position="fixed" sx={styles.appBar}>
				<Toolbar sx={styles.toolbar}>
					{/* This is the container that will position everything properly */}
					<Box sx={styles.toolbarInner}>
						{/* Logo on the left */}
						<Box sx={styles.logoContainer}>
							<Image src={LogoImage} alt="igniPC Logo" width={90} height={45} style={styles.logoImage} />
						</Box>

						{/* Navigation in the center (absolutely positioned) */}
						{!isMobile && (
							<Box sx={styles.navItems}>
								<Button
									data-menu-button="solutions"
									sx={activeMenu === 'solutions' ? styles.activeNavButton : styles.navButton}
									onClick={(e) => handleMenuOpen(e, 'solutions')}
								>
									Framework
								</Button>
								<Button
									data-menu-button="industries"
									sx={activeMenu === 'industries' ? styles.activeNavButton : styles.navButton}
									onClick={(e) => handleMenuOpen(e, 'industries')}
								>
									Platform
								</Button>
								<Button
									data-menu-button="compliance"
									sx={activeMenu === 'compliance' ? styles.activeNavButton : styles.navButton}
									onClick={(e) => handleMenuOpen(e, 'compliance')}
								>
									Resources
								</Button>
								<Button
									data-menu-button="about"
									sx={activeMenu === 'about' ? styles.activeNavButton : styles.navButton}
									onClick={(e) => handleMenuOpen(e, 'about')}
								>
									Company
								</Button>
							</Box>
						)}

						{/* Action buttons on the right */}
						<Box sx={styles.actionButtons}>
							{!isMobile && (
								<>
									<Button variant="outlined" sx={styles.talkButton} onClick={() => navigateTo(TALK_TO_AN_EXPERT)}>
										Talk to an expert
									</Button>
									<Button variant="contained" sx={styles.shopButton} onClick={() => navigateTo(WORKSTATION)}>
										Shop Now
									</Button>
								</>
							)}
							{isMobile && (
								<IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={styles.menuIcon}>
									<MenuIcon />
								</IconButton>
							)}
						</Box>
					</Box>
				</Toolbar>
			</AppBar>

			{activeMenu && !isMobile && (
				<Box data-menu={activeMenu} sx={styles.dropdownContainer}>
					{activeMenu === 'solutions' && (
						<>
							<Box sx={styles.sidebarContainer}>
								<CategorySidebar selectedItem={selectedItem} onSelectCategory={setSelectedItem} />
							</Box>
							<Box sx={styles.contentContainer}>
								<ServiceList selectedItem={selectedItem} onClose={handleMenuClose} />
							</Box>
							<Box sx={styles.rightSideContainer}>
								<RightSection />
							</Box>
						</>
					)}
					{activeMenu === 'industries' && <IndustryMenu />}
					{activeMenu === 'compliance' && <ComplianceMenu />}
					{activeMenu === 'about' && <AboutMenu />}
				</Box>
			)}

			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				sx={styles.drawer}
			>
				<Box sx={styles.drawerContent}>
					{mobileSubMenu ? renderSolutionsSubMenu() : renderMobileMainMenu()}
				</Box>
			</Drawer>
		</>
	);
};

export default AppBarB2B;