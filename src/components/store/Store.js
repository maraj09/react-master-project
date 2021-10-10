import { Button, Card, CardContent, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import React, {useContext} from "react";
import MasterContext from "../../MasterContext";

const Store = () => {
  const contextData = useContext(MasterContext);
  const below_md = contextData.below_md;
  return (
    <>
      <Card raised={true} sx={{ my: 10, maxWidth: `600px`, mx: `auto` }}>
        <CardContent sx={{ p: 5 }}>
          <Typography variant="h5" sx={{ textAlign: `center`, fontWeight: `bold`, letterSpacing: `3px` }}>
            Everything Store
          </Typography>
          <form>
            <Box sx={{ display: `flex`, flexWrap: `wrap` }}>
              <TextField variant="outlined" label="Product Name" color="warning" sx={{ flexBasis: `100%`, my: 3 }} />
              <TextField
                variant="outlined"
                type="number"
                label="Amount"
                color="warning"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                sx={{ flexBasis: below_md ? `100%` : `50%`, my: 2 }}
              />
              <Box sx={{flexBasis: `50%`, display: `flex`, alignItems: `center`, justifyContent: below_md ? `start` : `end`}}>
                <Button type="submit" size="large" color="warning" variant="contained">Submit</Button>
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Store;
