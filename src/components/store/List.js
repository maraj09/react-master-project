import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CancelIcon from '@mui/icons-material/Cancel';
import React from "react";

const List = () => {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ letterSpacing: `3px`, mt: 15, mb: 7 }}>
        Product List
      </Typography>
      <TableContainer >
        <Table component={Paper}>
          <TableHead >
            <TableRow >
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover={true}>
              <TableCell>Processor</TableCell>
              <TableCell>10,000</TableCell>
              <TableCell>2</TableCell>
              <TableCell>
                <IconButton>
                  <ArrowCircleUpIcon fontSize="large" color="success" />
                </IconButton>
                <IconButton>
                  <ArrowCircleDownIcon fontSize="large" color="warning" />
                </IconButton>
                <IconButton>
                  <CancelIcon fontSize="large" color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
