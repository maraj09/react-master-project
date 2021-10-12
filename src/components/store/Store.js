import { Button, Card, CardContent, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import React, { useContext, useState, useReducer } from "react";
import MasterContext from "../../MasterContext";
import { reducer } from "../../reducer";
import List from "./List";

const Store = () => {
  const contextData = useContext(MasterContext);
  const below_md = contextData.below_md;
  const [product, setProduct] = useState({ productName: "", productPrice: "" });
  const [formError, setFormError] = useState({});

  const initialState = {
    productList: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProduct({ ...product, [name]: value });
    setFormError({ ...formError, [name]: "" });
  };
  console.log(state.productList);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.productName && product.productPrice) {
      dispatch({ type: "ADD_PRODUCT", payload: product });
      setProduct({ productName: "", productPrice: "" });
    } else if (!product.productName) {
      setFormError({ ...formError, productName: "Please Enter Product Name!" });
    } else if (!product.productPrice) {
      setFormError({ ...formError, productPrice: "Please Give A Amount!" });
    }
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
                label="Amount"
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
      <List />
    </>
  );
};

export default Store;
