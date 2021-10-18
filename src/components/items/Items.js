import { Button, Card, CardActions, CardContent, CardMedia, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useMasterContext } from "../../MasterContext";
import useFetch from './useFetch'
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Items = () => {
  const { below_md } = useMasterContext();
  const [search, setSearch] = useState("")
  const {data} = useFetch(`${url}${search}`)
  return (
    <>
      <Container maxWidth="lg">
        <Card raised={true} sx={{ mt: 10, maxWidth: `600px`, mx: `auto` }}>
          <CardContent sx={{ p: 5 }}>
            <Typography variant="h5" sx={{ textAlign: `center`, fontWeight: `bold`, letterSpacing: `3px` }}>
              Our Sample Items
            </Typography>
            <form>
              <Box sx={{ display: `flex`, flexWrap: `wrap` }}>
                <TextField variant="outlined" label="Search Here" color="warning" size="small" sx={{ flexBasis: `100%`, my: 3 }} value={search} onChange={(e)=> setSearch(e.target.value)} />
              </Box>
            </form>
          </CardContent>
        </Card>
        <Box sx={{ display: `flex`, flexWrap: `wrap`, justifyContent: `center`, my: 7 }}>
          {data.map((item) => {
            return (
              <Card sx={{ width: below_md ? `100%` : 345, m: 1 }} key={item.id}>
                <CardMedia component="img" alt="green iguana" height="250" image={item.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {item.glass}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mb: 1 }}>
                  <Button variant="contained" color="success">
                    Details
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Items;
