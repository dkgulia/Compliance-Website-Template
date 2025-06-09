'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
	AppBar,
	Toolbar,
	Box,
	Button,
	Typography,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter, usePathname } from 'next/navigation';
import AboutMenu from './Menus/AboutMenu/page';
import ComplianceMenu from './Menus/Compliance/components/complianceMenu';
import PlatformMenu from './Menus/PlatformMenu/page';
import Image from 'next/image';
import { WORKSTATION, TALK_TO_AN_EXPERT } from '../../constants/routes';
import styles from './appBarB2BStyles';
import LogoImage from './Images/dual-hex-white.png';
import HexaButton from '../../Button/HexaFortButton';

type MenuType = 'solutions' | 'industries' | 'platform' | 'compliance' | 'about' | null;
type SelectedItemType = 'item1' | 'item2' | 'item3' | 'item4';

const AppBarB2B: React.FC = () => {
	const router = useRouter();
	const pathname = usePathname();
	const theme = useTheme();

	// Add mounted state to prevent hydration errors
	const [mounted, setMounted] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [selectedItem, setSelectedItem] = useState<SelectedItemType>('item1');
	const [activeMenu, setActiveMenu] = useState<MenuType>(null);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [mobileSubMenu, setMobileSubMenu] = useState<MenuType>(null);

	const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const menuRef = useRef<HTMLDivElement | null>(null);

	const isPathInSection = (section: string): boolean => {
		if (!pathname) return false;
		return pathname.startsWith(`/${section}`);
	};

	// Fix hydration issue: only run client-side code after mount
	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return; // Don't run until mounted on client

		const handleResize = () => {
			setIsMobile(window.matchMedia(theme.breakpoints.down('md')).matches);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [theme.breakpoints, mounted]);

	useEffect(() => {
		if (isMobile && activeMenu) {
			setActiveMenu(null);
		}
	}, [isMobile, activeMenu]);

	useEffect(() => {
		if (!mounted) return; // Don't run until mounted

		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node) && activeMenu) {
				setActiveMenu(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [activeMenu, mounted]);

	// Close menus when route changes
	useEffect(() => {
		setActiveMenu(null);
		setDrawerOpen(false);
		resetMobileMenuState();
	}, [pathname]);

	const handleMenuHover = (menu: MenuType) => {
		if (isMobile) return;

		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}
		hoverTimeoutRef.current = setTimeout(() => setActiveMenu(menu), 100);
	};

	const handleMenuLeave = () => {
		if (isMobile) return;

		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}

		hoverTimeoutRef.current = setTimeout(() => setActiveMenu(null), 300);
	};

	const handleMenuClick = (event: React.MouseEvent<HTMLElement>, menu: MenuType) => {
		if (!isMobile) return;

		setActiveMenu(activeMenu === menu ? null : menu);
	};

	const closeAllMenus = () => {
		setActiveMenu(null);
		setDrawerOpen(false);
		resetMobileMenuState();
	};

	const toggleDrawer = (open: boolean) => {
		const handleToggleDrawer = (event?: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event?.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			setDrawerOpen(open);
			if (!open) resetMobileMenuState();
		};

		const handleDrawerClose = (_: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
			setDrawerOpen(false);
			resetMobileMenuState();
		};

		return { handleToggleDrawer, handleDrawerClose };
	};

	const resetMobileMenuState = () => setMobileSubMenu(null);
	const openMobileSubMenu = (menu: MenuType) => setMobileSubMenu(menu);
	const goBackToMainMenu = () => setMobileSubMenu(null);

	const navigateTo = (path: string) => {
		router.push(path);
		closeAllMenus();
	};

	// Create a function to handle mobile menu close
	const handleMobileMenuClose = () => {
		setDrawerOpen(false);
		resetMobileMenuState();
	};

	const { handleToggleDrawer, handleDrawerClose } = toggleDrawer(false);

	// Don't render until mounted to prevent hydration errors
	if (!mounted) {
		return null;
	}

	return (
		<>
			<AppBar position="fixed" sx={styles.appBar}>
				<Toolbar sx={styles.toolbar}>
					<Box sx={styles.navContainer}>
						<Box sx={styles.logoContainer} onClick={() => navigateTo('/')} style={{ cursor: 'pointer' }}>
							<Image src={LogoImage} alt="hexafort Logo" width={32} height={32} style={styles.logoImage} priority />
						</Box>

						<Box sx={styles.navItems}>
							<Box
								onMouseEnter={() => handleMenuHover('platform')}
								onMouseLeave={handleMenuLeave}
								onClick={(e) => handleMenuClick(e, 'platform')}
								sx={styles.navItem}
							>
								<Button
									data-menu-button="platform"
									sx={
										activeMenu === 'platform' || isPathInSection('platform') ? styles.activeNavButton : styles.navButton
									}
									endIcon={
										<KeyboardArrowDownIcon
											sx={activeMenu === 'platform' ? styles.activeDropdownIcon : styles.dropdownIcon}
										/>
									}
								>
									Platform
								</Button>
							</Box>

							<Box
								onMouseEnter={() => handleMenuHover('compliance')}
								onMouseLeave={handleMenuLeave}
								onClick={(e) => handleMenuClick(e, 'compliance')}
								sx={styles.navItem}
							>
								<Button
									data-menu-button="compliance"
									sx={activeMenu === 'compliance' ? styles.activeNavButton : styles.navButton}
									endIcon={
										<KeyboardArrowDownIcon
											sx={activeMenu === 'compliance' ? styles.activeDropdownIcon : styles.dropdownIcon}
										/>
									}
								>
									Compliance
								</Button>
							</Box>

							<Box
								onMouseEnter={() => handleMenuHover('about')}
								onMouseLeave={handleMenuLeave}
								onClick={(e) => handleMenuClick(e, 'about')}
								sx={styles.navItem}
							>
								<Button
									data-menu-button="about"
									sx={activeMenu === 'about' || isPathInSection('about') ? styles.activeNavButton : styles.navButton}
									endIcon={
										<KeyboardArrowDownIcon
											sx={activeMenu === 'about' ? styles.activeDropdownIcon : styles.dropdownIcon}
										/>
									}
								>
									About
								</Button>
							</Box>
						</Box>

						<Box sx={styles.actionButtons}>
							<HexaButton onClick={() => navigateTo('/get-a-demo')} sx={styles.talkButton}>
								Book a Demo
							</HexaButton>
							<HexaButton onClick={() => navigateTo(WORKSTATION)} sx={styles.shopButton}>
								Login
							</HexaButton>
						</Box>

						<Box sx={styles.mobileMenuContainer}>
							<IconButton
								color="inherit"
								aria-label="menu"
								onClick={toggleDrawer(true).handleToggleDrawer}
								sx={styles.menuIcon}
							>
								<MenuIcon />
							</IconButton>
						</Box>
					</Box>
				</Toolbar>

				{activeMenu && !isMobile && (
					<Box
						ref={menuRef}
						data-menu={activeMenu}
						sx={styles.dropdownContainer}
						onMouseEnter={() => hoverTimeoutRef.current && clearTimeout(hoverTimeoutRef.current)}
						onMouseLeave={handleMenuLeave}
					>
						{activeMenu === 'solutions' && (
							<>

							</>
						)}
						{activeMenu === 'industries' && <Box sx={styles.menuBox}>Industry content</Box>}
						{activeMenu === 'platform' && <PlatformMenu />}
						{activeMenu === 'compliance' && <ComplianceMenu />}
						{activeMenu === 'about' && <AboutMenu />}
					</Box>
				)}
			</AppBar>

			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={handleDrawerClose}
				sx={{
					'& .MuiDrawer-paper': {
						width: '100%',
						height: '100%',
						backgroundColor: '#0a0a0a',
						overflowY: 'auto',
						'&::-webkit-scrollbar': { display: 'none' },
					},
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: 'auto',
						minHeight: '100%',
						backgroundColor: '#0a0a0a',
						overflowY: 'auto',
						'&::-webkit-scrollbar': { display: 'none' },
					}}
				>
					{mobileSubMenu ? (
						<>
							<Box sx={styles.mobileMenuHeader}>
								<IconButton onClick={goBackToMainMenu} sx={styles.backButton}>
									<ArrowBackIcon />
								</IconButton>
								<Box sx={styles.headerSpacer} />
								<IconButton onClick={handleMobileMenuClose} sx={styles.closeButton}>
									<CloseIcon />
								</IconButton>
							</Box>

							{mobileSubMenu === 'industries' && <Box sx={styles.menuBox}>Industry content</Box>}
							{mobileSubMenu === 'platform' && <PlatformMenu />}
							{mobileSubMenu === 'compliance' && <ComplianceMenu />}
							{mobileSubMenu === 'about' && <AboutMenu />}
						</>
					) : (
						<>
							<Box sx={styles.mobileMenuHeader}>
								<Box sx={styles.mobileLogoContainer}>
									<Typography sx={styles.mobileLogo}>
										<Image
											src={LogoImage}
											alt="hexafort Logo"
											width={60}
											height={30}
											style={styles.mobileLogoImage}
											priority
										/>
									</Typography>
								</Box>
								<Box sx={styles.mobileHeaderActions}>
									<IconButton onClick={handleMobileMenuClose} sx={styles.closeButton}>
										<CloseIcon />
									</IconButton>
								</Box>
							</Box>

							<List sx={styles.mobileMenuList}>
								<ListItem
									sx={{
										...styles.mobileMenuItem,
										...(isPathInSection('platform') ? styles.activeMobileMenuItem : {}),
									}}
									onClick={() => openMobileSubMenu('platform')}
								>
									<ListItemText primary="Platform" />
									<Box sx={styles.arrowContainer}>
										<ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
									</Box>
								</ListItem>
								<ListItem
									sx={{
										...styles.mobileMenuItem,
										...(isPathInSection('compliance') ? styles.activeMobileMenuItem : {}),
									}}
									onClick={() => openMobileSubMenu('compliance')}
								>
									<ListItemText primary="Compliance" />
									<Box sx={styles.arrowContainer}>
										<ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
									</Box>
								</ListItem>
								<ListItem
									sx={{
										...styles.mobileMenuItem,
										...(isPathInSection('about') ? styles.activeMobileMenuItem : {}),
									}}
									onClick={() => openMobileSubMenu('about')}
								>
									<ListItemText primary="About" />
									<Box sx={styles.arrowContainer}>
										<ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
									</Box>
								</ListItem>
							</List>

							<Box sx={styles.mobileLoginButtonContainer}>
								<HexaButton onClick={() => navigateTo(WORKSTATION)} sx={styles.shopButton}>
									Login
								</HexaButton>
							</Box>
						</>
					)}
				</Box>
			</Drawer>
		</>
	);
};

export default AppBarB2B;