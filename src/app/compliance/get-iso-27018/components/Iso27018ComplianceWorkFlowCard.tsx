'use client'

import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import iso27018ComplianceWorkFlowStyles from '../styles/iso27018ComplianceWorkFlowStyle'

interface Iso27018ComplianceWorkFlowCardProps {
  title: string
  icon: React.ElementType
}

const Iso27018ComplianceWorkFlowCard: React.FC<Iso27018ComplianceWorkFlowCardProps> = ({ title, icon: Icon }) => {
  return (
    <Card sx={iso27018ComplianceWorkFlowStyles.card}>
      <CardContent sx={iso27018ComplianceWorkFlowStyles.cardContent}>
        <Box sx={iso27018ComplianceWorkFlowStyles.iconContainer}>
          <Icon fontSize="large" />
        </Box>
        <Typography variant="body1" sx={iso27018ComplianceWorkFlowStyles.cardTitle}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Iso27018ComplianceWorkFlowCard