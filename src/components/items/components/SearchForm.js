import { Card, CardContent, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SearchForm = ({ search, setSearch }) => {
  return (
    <>
      <Card raised={true} sx={{ mt: 10, maxWidth: `600px`, mx: `auto` }}>
        <CardContent sx={{ p: 5 }}>
          <Typography variant="h5" sx={{ textAlign: `center`, fontWeight: `bold`, letterSpacing: `3px` }}>
            Our Sample Items
          </Typography>
          <form>
            <Box sx={{ display: `flex`, flexWrap: `wrap` }}>
              <TextField variant="outlined" label="Search Here" color="warning" size="small" sx={{ flexBasis: `100%`, my: 3 }} value={search} onChange={(e) => setSearch(e.target.value)} />
            </Box>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default SearchForm;
