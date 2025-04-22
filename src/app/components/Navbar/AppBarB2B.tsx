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
	Grid,
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/navigation';
import CategorySidebar from './Menus/SolutionMenu/components/CategorySidebar';
import ServiceList from './Menus/SolutionMenu/components/ServiceList';
import RightSection from './Menus/SolutionMenu/components/RightSection';
import IndustryMenu from './Menus/IndustryMenu/page';
import AboutMenu from './Menus/AboutMenu/page';
import ComplianceMenu from './Menus/Compliance/page';
import PlatformMenu from './Menus/PlatformMenu/page';
import Image from 'next/image';
import { WORKSTATION, TALK_TO_AN_EXPERT } from '../../constants/routes';

import styles from './appBarB2BStyles';
import LogoImage from './Images/dual-hex-white.png';

const AppBarB2B: React.FC = () => {
	const router = useRouter();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const [selectedItem, setSelectedItem] = useState<'item1' | 'item2' | 'item3' | 'item4' | null>('item1');
	const [activeMenu, setActiveMenu] = useState<string | null>(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
	const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isMobile && activeMenu) {
			setActiveMenu(null);
		}
	}, [isMobile, activeMenu]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node) && activeMenu) {
				setActiveMenu(null);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [activeMenu]);

	const handleMenuHover = (menu: string) => {
		if (isMobile) return;
		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}
		hoverTimeoutRef.current = setTimeout(() => {
			setActiveMenu(menu);
		}, 100);
	};

	const handleMenuLeave = () => {
		if (isMobile) return;
		if (hoverTimeoutRef.current) {
			clearTimeout(hoverTimeoutRef.current);
		}

		hoverTimeoutRef.current = setTimeout(() => {
			setActiveMenu(null);
		}, 300);
	};

	const handleMenuClick = (event: React.MouseEvent<HTMLElement>, menu: string) => {
		if (!isMobile) return;

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
						<Image src={LogoImage} alt="hexafort Logo" width={70} height={40} style={styles.mobileLogoImage} />
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
				<ListItem sx={styles.mobileMenuItem} onClick={() => openMobileSubMenu('platform')}>
					<ListItemText primary="Platform" />
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
					Book a Demo
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

			{mobileSubMenu === 'platform' && (
				<Box>
					<PlatformMenu />
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
					<Box sx={styles.navContainer}>
						<Box sx={styles.logoContainer}>
							<Image src={LogoImage} alt="hexafort Logo" width={32} height={32} style={styles.logoImage} />
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
									sx={activeMenu === 'platform' ? styles.activeNavButton : styles.navButton}
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
									sx={activeMenu === 'about' ? styles.activeNavButton : styles.navButton}
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
							<Button variant="outlined" sx={styles.talkButton} onClick={() => navigateTo(TALK_TO_AN_EXPERT)}>
								Book a Demo
							</Button>
							<Button variant="contained" sx={styles.shopButton} onClick={() => navigateTo(WORKSTATION)}>
								Login
							</Button>
						</Box>

						<Box sx={styles.mobileMenuContainer}>
							<IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={styles.menuIcon}>
								<MenuIcon />
							</IconButton>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>

			{activeMenu && !isMobile && (
				<Box
					ref={menuRef}
					data-menu={activeMenu}
					sx={styles.dropdownContainer}
					onMouseEnter={() => {
						if (hoverTimeoutRef.current) {
							clearTimeout(hoverTimeoutRef.current);
						}
					}}
					onMouseLeave={handleMenuLeave}
				>
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
					{activeMenu === 'platform' && <PlatformMenu />}
					{activeMenu === 'compliance' && <ComplianceMenu />}
					{activeMenu === 'about' && <AboutMenu />}
				</Box>
			)}

			<Drawer
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				sx={{
					'& .MuiDrawer-paper': {
						width: '100%',
						height: '100%',
						overflowY: 'auto',
						'&::-webkit-scrollbar': {
							display: 'none',
						},
						msOverflowStyle: 'none',
						scrollbarWidth: 'none',
					},
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: 'auto',
						minHeight: '100%',
						backgroundColor: '#FFFFFF',
						overflowY: 'auto',
						'&::-webkit-scrollbar': {
							display: 'none',
						},
						msOverflowStyle: 'none',
						scrollbarWidth: 'none',
					}}
				>
					{mobileSubMenu ? renderSolutionsSubMenu() : renderMobileMainMenu()}
				</Box>
			</Drawer>
		</>
	);
};

export default AppBarB2B;