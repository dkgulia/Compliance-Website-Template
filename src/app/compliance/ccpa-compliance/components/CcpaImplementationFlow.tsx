'use client';
import React from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import implementationFlowStyle from '../styles/implementationFlowStyle';
import { ccpaTableItems } from '../constants/ccpaData';

const CcpaImplementationFlow: React.FC = () => {
  return (
    <Box sx={implementationFlowStyle.outerBox}>
      <Box sx={implementationFlowStyle.container}>
        <Typography sx={implementationFlowStyle.heading}>
          CCPA Rights & ComplianceHub Approach
        </Typography>
        <Typography sx={implementationFlowStyle.subheading}>
          Understand each right guaranteed by CCPA, and see how ComplianceHub helps you address it seamlessly.
        </Typography>

        <TableContainer component={Paper} sx={implementationFlowStyle.tableContainer}>
          <Table sx={implementationFlowStyle.table}>
            <TableHead>
              <TableRow sx={implementationFlowStyle.tableHeadRow}>
                <TableCell sx={implementationFlowStyle.th}>CCPA Right</TableCell>
                <TableCell sx={implementationFlowStyle.th}>Definition</TableCell>
                <TableCell sx={implementationFlowStyle.th}>ComplianceHub Approach</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ccpaTableItems.map((item, idx) => (
                <TableRow key={idx} sx={implementationFlowStyle.tableBodyRow}>
                  <TableCell sx={implementationFlowStyle.td}>{item.right}</TableCell>
                  <TableCell sx={implementationFlowStyle.td}>{item.definition}</TableCell>
                  <TableCell sx={implementationFlowStyle.td}>{item.approach}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CcpaImplementationFlow;