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

type MenuType = 'solutions' | 'industries' | 'platform' | 'compliance' | 'about' | null;
type SelectedItemType = 'item1' | 'item2' | 'item3' | 'item4';

const AppBarB2B: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>('item1');
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<MenuType>(null);

  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia(theme.breakpoints.down('md')).matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme.breakpoints]);

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);

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

  const toggleDrawer = (open: boolean) => (event?: React.KeyboardEvent | React.MouseEvent) => {
    if (event?.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
    if (!open) resetMobileMenuState();
  };

  const resetMobileMenuState = () => setMobileSubMenu(null);
  const openMobileSubMenu = (menu: MenuType) => setMobileSubMenu(menu);
  const goBackToMainMenu = () => setMobileSubMenu(null);

  const navigateTo = (path: string) => {
    router.push(path);
    setActiveMenu(null);
    setDrawerOpen(false);
    resetMobileMenuState();
  };

  return (
    <>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.navContainer}>
            <Box sx={styles.logoContainer}>
              <Image
                src={LogoImage}
                alt="hexafort Logo"
                width={32}
                height={32}
                style={styles.logoImage}
                priority
              />
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
                <Box sx={styles.sidebarContainer}>
                  <CategorySidebar selectedItem={selectedItem} onSelectCategory={setSelectedItem} />
                </Box>
                <Box sx={styles.contentContainer}>
                  <ServiceList selectedItem={selectedItem} onClose={() => setActiveMenu(null)} />
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
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
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
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          minHeight: '100%',
          backgroundColor: '#0a0a0a',
          overflowY: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
        }}>
          {mobileSubMenu ? (
            <>
              <Box sx={styles.mobileMenuHeader}>
                <IconButton onClick={goBackToMainMenu} sx={styles.backButton}>
                  <ArrowBackIcon />
                </IconButton>
                <Box sx={styles.headerSpacer} />
                <IconButton onClick={() => setDrawerOpen(false)} sx={styles.closeButton}>
                  <CloseIcon />
                </IconButton>
              </Box>

              {mobileSubMenu === 'solutions' && (
                <CategorySidebar
                  selectedItem={selectedItem}
                  onSelectCategory={setSelectedItem}
                  isMobile
                  onClose={() => setDrawerOpen(false)}
                />
              )}
              {mobileSubMenu === 'industries' && <IndustryMenu />}
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
                  <IconButton onClick={() => setDrawerOpen(false)} sx={styles.closeButton}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>

              <List sx={styles.mobileMenuList}>
                <ListItem sx={styles.mobileMenuItem} onClick={() => openMobileSubMenu('platform')}>
                  <ListItemText primary="Platform" />
                  <Box sx={styles.arrowContainer}>
                    <ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
                  </Box>
                </ListItem>
                <ListItem sx={styles.mobileMenuItem} onClick={() => openMobileSubMenu('compliance')}>
                  <ListItemText primary="Compliance" />
                  <Box sx={styles.arrowContainer}>
                    <ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
                  </Box>
                </ListItem>
                <ListItem sx={styles.mobileMenuItem} onClick={() => openMobileSubMenu('about')}>
                  <ListItemText primary="About" />
                  <Box sx={styles.arrowContainer}>
                    <ArrowForwardIosIcon sx={styles.mobileMenuArrow} />
                  </Box>
                </ListItem>
              </List>

              <Box sx={styles.mobileLoginButtonContainer}>
                <Button variant="contained" sx={styles.shopButton} onClick={() => navigateTo(WORKSTATION)}>
                  Login
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default AppBarB2B;