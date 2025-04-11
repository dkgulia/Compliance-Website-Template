import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import StorageIcon from '@mui/icons-material/Storage';
import HubIcon from '@mui/icons-material/Hub';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalWifi4BarLockIcon from '@mui/icons-material/SignalWifi4BarLock';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhonelinkTwoToneIcon from '@mui/icons-material/PhonelinkTwoTone';
import ExtensionIcon from '@mui/icons-material/Extension';
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import CableIcon from '@mui/icons-material/Cable';
import AirplayIcon from '@mui/icons-material/Airplay';
import PreviewOutlinedIcon from '@mui/icons-material/PreviewOutlined';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import VideocamIcon from '@mui/icons-material/Videocam';

import { WORKSTATION, HOME } from '../../../constants/routes';

const solutionData = [
	{
		id: 'networking',
		title: 'Networking and Infrastructure Solutions',
		services: [
			{
				title: 'Systems Integration Service',
				description: 'Seamlessly integrate your IT systems to enhance operational efficiency',
				icon: <SettingsSuggestIcon />,
				href: HOME,
			},
			{
				title: 'Structured Cabling Solutions',
				description: 'High-performance structured cabling for reliable communication networks.',
				icon: <CableIcon />,
				href: WORKSTATION,
			},
			{
				title: 'IT Spare Services',
				description: 'Minimize downtime with comprehensive IT spare parts and services',
				icon: <AirplayIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Remote Infra Management (RIM)',
				description: "24/7 remote monitoring and management to ensure your IT infrastructure's continuous operation.",
				icon: <PreviewOutlinedIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Network Design & Implementation',
				description: 'Build robust, scalable networks that support business growth & innovation.',
				icon: <HubIcon />,
				href: HOME,
			},
			{
				title: 'Wireless Network Solutions',
				description: 'Secure, fast, and scalable wireless networks for seamless connectivity.',
				icon: <WifiIcon />,
				href: HOME,
			},
			{
				title: 'Network Security Solutions',
				description: 'Protect your network with comprehensive security measures against evolving threats.',
				icon: <SignalWifi4BarLockIcon />,
				href: WORKSTATION,
			},
		],
	},
	{
		id: 'workplace',
		title: 'Workplace IT Solutions',
		services: [
			{
				title: 'OEM Workstations',
				description: "Optimize your team's productivity with high-performance OEM workstations.",
				icon: <BeenhereIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Assembled Workstation',
				description: 'Maximize efficiency with our custom-assembled workstations.',
				icon: <BuildCircleOutlinedIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Business Laptop Solutions',
				description: 'Engineered for performance, security, & reliability in professional environments.',
				icon: <LaptopMacIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Refurbished Laptops',
				description: 'Budget-friendly, high-quality refurbished laptops.',
				icon: <VerifiedUserOutlinedIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Open Box Laptops',
				description: 'Discover unbeatable value with our open-box laptops.',
				icon: <UnarchiveIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Comprehensive Device Management',
				description: 'End-to-end device lifecycle management for seamless business.',
				icon: <StorageIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Flexible Device Leasing',
				description: 'Adapt to changing business needs with our flexible device leasing.',
				icon: <PhonelinkTwoToneIcon />,
				href: WORKSTATION,
			},
		],
	},
	{
		id: 'Communication',
		title: 'Communication and Collaboration Solution',
		services: [
			{
				title: 'Integrated Communication Solution',
				description: 'Unified platform for communication.',
				icon: <ExtensionIcon />,
				href: WORKSTATION,
			},
			{
				title: 'VoIP Solutions',
				description: 'Reliable, cost-effective VoIP services for seamless business communication.',
				icon: <WifiCalling3Icon />,
				href: WORKSTATION,
			},
			{
				title: 'Video Conferencing Solutions',
				description: 'Connect effortlessly with high-quality, secure video conferencing solutions.',
				icon: <VideoCameraFrontRoundedIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Boardroom & Classroom Tech',
				description: 'Transform meetings and learning environments with advanced audiovisual technology.',
				icon: <LiveTvSharpIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Digital Signage Solutions',
				description: 'Capture attention with dynamic, customizable digital signage for your business.',
				icon: <FingerprintRoundedIcon />,
				href: WORKSTATION,
			},
		],
	},
	{
		id: 'specialised',
		title: 'Software Development Solutions',
		services: [
			{
				title: 'Surveillance and CCTV Solutions',
				description: 'Advanced surveillance solutions to secure your premises.',
				icon: <VideocamIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Access Control Solutions',
				description: 'Manage and monitor access to your facilities.',
				icon: <VpnKeyOffIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Power Management Solutions',
				description: 'Optimize energy usage & reduce costs.',
				icon: <BoltOutlinedIcon />,
				href: WORKSTATION,
			},
			{
				title: 'UPS and Battery Solutions',
				description: 'Uninterrupted power with reliable UPS.',
				icon: <BatteryChargingFullOutlinedIcon />,
				href: WORKSTATION,
			},
			{
				title: 'Printing Process Optimization',
				description: 'Streamline & optimize your printing operations to reduce costs & environmental impact.',
				icon: <PrintOutlinedIcon />,
				href: HOME,
			},
		],
	},
];

export default solutionData;
