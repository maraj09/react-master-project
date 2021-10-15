import { Button, Card, CardContent, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import React, { useState, useReducer, useEffect } from "react";
import {useMasterContext} from "../../MasterContext";
import { reducer } from "../../reducer";
import List from "./List";

const Store = () => {
  const below_md = useMasterContext();
  const [product, setProduct] = useState({ productName: "", productPrice: "", quantity: 1, id: "", totalPrice: "" });
  const [formError, setFormError] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const initialState = {
    productList: [],
    totalPrice: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "TOTAL_PRICE" });
  }, [state.productList]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProduct({ ...product, [name]: value });
    setFormError({ ...formError, [name]: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.productName && product.productPrice && !isEditing) {
      dispatch({ type: "ADD_PRODUCT", payload: { ...product, id: new Date().getTime().toString(), quantity: product.quantity, totalPrice: product.productPrice } });
      setProduct({ productName: "", productPrice: "", quantity: 1 });
    } else if (product.productName && product.productPrice && isEditing) {
      dispatch({ type: "EDIT_PRODUCT", payload: { ...product, totalPrice: (product.productPrice * product.quantity) } });
      setIsEditing(false);
      setProduct({ productName: "", productPrice: "", quantity: 1 });
    } else if (!product.productName) {
      setFormError({ ...formError, productName: "Please Enter Product Name!" });
    } else if (!product.productPrice) {
      setFormError({ ...formError, productPrice: "Please Give A Amount!" });
    }
  };
  const handleEdit = (pId) => {
    let targetItem = state.productList.find((product) => product.id === pId);
    setProduct({ productName: targetItem.productName, productPrice: targetItem.productPrice, quantity: targetItem.quantity, id: pId  });
    setIsEditing(true);
    
  };
  return (
    <>
      <Card raised={true} sx={{ my: 10, maxWidth: `600px`, mx: `auto` }}>
        <CardContent sx={{ p: 5 }}>
          <Typography variant="h5" sx={{ textAlign: `center`, fontWeight: `bold`, letterSpacing: `3px` }}>
            Everything Store
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: `flex`, flexWrap: `wrap` }}>
              <TextField
                error={Boolean(formError.productName)}
                helperText={formError.productName}
                variant="outlined"
                label="Product Name"
                name="productName"
                color="warning"
                size="small"
                sx={{ flexBasis: `100%`, my: 3 }}
                onChange={handleChange}
                value={product.productName}
              />
              <TextField
                error={Boolean(formError.productPrice)}
                helperText={formError.productPrice}
                variant="outlined"
                type="number"
                label="Price"
                color="warning"
                size="small"
                name="productPrice"
                onChange={handleChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  inputProps: { min: 1 },
                }}
                sx={{ flexBasis: below_md ? `100%` : `50%`, my: 2 }}
                value={product.productPrice}
              />
              <Box sx={{ flexBasis: `50%`, display: `flex`, alignItems: `center`, justifyContent: below_md ? `start` : `end` }}>
                <Button type="submit" size="large" color="warning" variant="contained">
                  Submit
                </Button>
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>
      <List {...state} handleEdit={handleEdit} dispatch={dispatch} key={state.productList.id} />
    </>
  );
};

export default Store;
