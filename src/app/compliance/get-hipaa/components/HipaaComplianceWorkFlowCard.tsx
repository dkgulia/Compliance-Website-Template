import { Card, CardContent, Typography, Box } from "@mui/material";
import hipaaComplianceWorkFlowStyles from "../styles/hipaaComplianceWorkFlowStyle";

interface HipaaComplianceWorkFlowCardProps {
	title: string;
	icon: React.ElementType;
}

const HipaaComplianceWorkFlowCard: React.FC<HipaaComplianceWorkFlowCardProps> = ({ title, icon: Icon }) => {
	return (
		<Card sx={hipaaComplianceWorkFlowStyles.card}>
			<CardContent sx={hipaaComplianceWorkFlowStyles.cardContent}>
				<Box sx={hipaaComplianceWorkFlowStyles.iconContainer}>
					<Icon fontSize="large" />
				</Box>
				<Typography variant="body1" sx={hipaaComplianceWorkFlowStyles.cardTitle}>
					{title}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default HipaaComplianceWorkFlowCard;
