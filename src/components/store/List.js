import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CancelIcon from "@mui/icons-material/Cancel";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import React from "react";
import { useMasterContext } from "../../MasterContext";

const List = ({ handleEdit }) => {
  const { productList, dispatch, totalPrice } = useMasterContext();
  return (
    <>
      <Typography variant="h4" align="center" sx={{ letterSpacing: `3px`, mt: 15, mb: 7 }}>
        Product List
      </Typography>
      <TableContainer sx={{ maxWidth: 650, mx: `auto` }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Product Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, index) => {
              return (
                <TableRow key={product.id} hover={true}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{product.productName}</TableCell>
                  <TableCell align="center">{product.productPrice}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => dispatch({ type: "INCREASE_AMOUNT", payload: product.id })}>
                      <ArrowCircleUpIcon color="success" />
                    </IconButton>
                    <Typography variant="subtitle1" sx={{}}>
                      {product.quantity}
                    </Typography>
                    <IconButton onClick={() => dispatch({ type: "DECREASE_AMOUNT", payload: product.id })}>
                      <ArrowCircleDownIcon color="warning" />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleEdit(product.id)}>
                      <ModeEditIcon color="secondary" />
                    </IconButton>
                    <IconButton onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: product.id })}>
                      <CancelIcon color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              {productList.length === 0 ? (
                <TableCell align="center" colSpan={5}>
                  No Data Found !
                </TableCell>
              ) : (
                <TableCell align="center" colSpan={5}>
                  <Typography>Total Amount: ${totalPrice}</Typography>
                </TableCell>
              )}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
